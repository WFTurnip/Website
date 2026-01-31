const textarea = document.querySelector("textarea");
const keyboardTable = document.getElementById("keyboard");

// 現在のフォントを保持
let currentFont = "kodito";

const fontClasses = [
    "kodito", "lekuta", "lozegw", "makina", "piswpi", "polwgo",
    "silwki", "sulive", "xavani", "xesada", "xidili", "zosokw"
];

let shiftActive = false;

// キーボード生成
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
                    td.colSpan = colspanValue;
                    button.classList.add("space");
                }
            }

            const normal = keyXml.getAttribute("data-normal") || "";
            const shift = keyXml.getAttribute("data-shift") || "";
            const type = keyXml.getAttribute("data-key") || "";

            const labelNormal = keyXml.querySelector(".no-shifted")?.textContent || normal;
            const labelShift = keyXml.querySelector(".shifted")?.textContent || shift;

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

// イベント委譲でクリック処理
keyboardTable.addEventListener("click", (e) => {
    const key = e.target.closest("button.key");
    if (!key) return;

    // Shift キー切替
    if (key.dataset.key === "shift") {
        shiftActive = !shiftActive;

        keyboardTable.querySelectorAll(".key").forEach(k => {
            k.classList.toggle("shift-active", shiftActive);
        });
        return;
    }

    // 入力文字決定
    const char = shiftActive && key.dataset.shift ? key.dataset.shift : key.dataset.normal;
    textarea.value += char ?? '';
});

// キーボード読み込み
function loadKeyboard(font) {
    fetch("keyboards/" + font + ".xml")
        .then(r => r.text())
        .then(str => new DOMParser().parseFromString(str, "text/xml"))
        .then(xml => buildKeyboardFromXML(xml));
}

// フォント切替
function changeFont(number) {
    currentFont = fontClasses[number];

    textarea.className = "";
    textarea.classList.add(currentFont);

    loadKeyboard(currentFont);
}

// 初期ロード
loadKeyboard(currentFont);