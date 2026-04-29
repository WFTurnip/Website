window.addEventListener("DOMContentLoaded", () => {
    const textarea = document.querySelector("textarea");
    const keyboardTable = document.getElementById("keyboard");
    const fontSelector = document.getElementById("font-selector");
    let currentFont = "piswpi";
    const fontClasses = ["piswpi", "sulive", "kodito", "lekuta", "lozegw", "silwki", "xavani", "xesada", "xidili", "makina", "polwgo", "zosokw"];
    let shiftActive = false;

    /**
     * XMLからキーボードを構築する
     * @param {Document} xml
     */
    function buildKeyboardFromXML(xml) {
        keyboardTable.innerHTML = "";
        xml.querySelectorAll("row").forEach(rowXml => {
            const tr = document.createElement("tr");
            rowXml.querySelectorAll("column").forEach(colXml => {
                const td = document.createElement("td");
                const keyXml = colXml.querySelector("key");
                if (!keyXml) {
                    tr.appendChild(td);
                    return;
                }
                const button = document.createElement("button");
                button.classList.add("key", currentFont);
                if (colXml.hasAttribute("colspan")) {
                    const colspanValue = colXml.getAttribute("colspan");
                    if (colspanValue > 1) {
                        td.colSpan = parseInt(colspanValue);
                        button.classList.add("space");
                    }
                }
                const normal = keyXml.getAttribute("data-normal") || "";
                const shift = keyXml.getAttribute("data-shift") || "";
                const type = keyXml.getAttribute("data-key") || "";
                /**
                 * キーのラベルを取得する
                 * @param {Element} keyElement - キー要素
                 * @param {string} defaultText - デフォルトのテキスト
                 * @returns {string} - 取得したラベル
                 */
                const getLabel = (keyElement, defaultText) => {
                    return keyElement?.textContent || defaultText;
                };
                const labelNormal = getLabel(keyXml.querySelector(".no-shifted"), normal);
                const labelShift = getLabel(keyXml.querySelector(".shifted"), shift);
                const spanNormal = document.createElement("span");
                spanNormal.className = "no-shifted";
                spanNormal.textContent = labelNormal;
                const spanShift = document.createElement("span");
                spanShift.className = "shifted";
                spanShift.textContent = labelShift;
                button.appendChild(spanNormal);
                button.appendChild(spanShift);
                button.dataset.normal = normal;
                button.dataset.shift = shift;
                button.dataset.key = type;
                td.appendChild(button);
                tr.appendChild(td);
            });
            keyboardTable.appendChild(tr);
        });
    }

    /**
     * キーボードのクリックイベントリスナー
     */
    keyboardTable.addEventListener("click", (e) => {
        const key = e.target.closest("button.key");
        if (!key) return;
        if (key.dataset.key === "shift") {
            shiftActive = !shiftActive;
            keyboardTable.querySelectorAll(".key").forEach(k => {
                k.classList.toggle("shift-active", shiftActive);
            });
            return;
        }
        const char = shiftActive && key.dataset.shift ? key.dataset.shift : key.dataset.normal;
        textarea.value += char ?? '';
    });
    fontSelector.addEventListener("change", (e) => {
        changeFont(parseInt(e.target.value));
    });

    /**
     * フォントを変更する関数
     * @param {number} number - 変更するフォントの番号
     */
    function changeFont(number) {
        currentFont = fontClasses[number];
        textarea.className = "";
        textarea.classList.add(currentFont);
        loadKeyboard(currentFont);
    }

    loadKeyboard(currentFont);

    /**
     * キーボードをロードする関数
     * @param {string} font - ロードするフォントの名前
     */
    function loadKeyboard(font) {
        fetch("keyboards/" + font + ".xml").then(r => r.text()).then(str => new DOMParser().parseFromString(str, "text/xml")).then(xml => buildKeyboardFromXML(xml));
    }
});