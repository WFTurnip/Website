document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);

    const searchWord = params.get("search") || "";
    const consonants = params.get("consonants") === "ON";
    const roots = params.get("roots") === "ON";
    const words = params.get("words") === "ON";

    document.getElementById("search").value = searchWord;
    document.getElementById("consonants").checked = consonants;
    document.getElementById("roots").checked = roots;
    document.getElementById("words").checked = words;

    const searchWordContainer = document.getElementById("search-word");
    searchWordContainer.innerHTML = "";

    if (!searchWord) {
        const message = document.createElement("p");
        message.textContent = "検索語が入力されていません。";
        message.classList.add("warning");
        searchWordContainer.appendChild(message);
    } else {
        const subtitle = document.createElement("h2");
        subtitle.textContent = searchWord + "の検索結果";
        searchWordContainer.appendChild(subtitle);
    }

    const searchOptionContainer = document.getElementById("option");
    searchOptionContainer.innerHTML = "";
    if (!consonants && !roots && !words) {
        const message = document.createElement("p");
        message.textContent = "オプション選択されていないので、絞り込み検索を行いません。";
        searchOptionContainer.appendChild(message);
    } else {
        const p = document.createElement("p");
        p.classList.add("search-options");

        const createOptionSpan = (label, isOn) => {
            const span = document.createElement("span");
            span.textContent = label;

            const strong = document.createElement("strong");
            strong.textContent = isOn ? "ON" : "OFF";
            strong.classList.add(isOn ? "on" : "off");
            span.appendChild(strong);
            return span;
        }

        p.appendChild(createOptionSpan("見出し検索: ", consonants));
        p.appendChild(createOptionSpan("語根検索: ", roots));
        p.appendChild(createOptionSpan("単語検索: ", words));

        searchOptionContainer.appendChild(p);
    }

    const resultContainer = document.getElementById("result");
    resultContainer.innerHTML = "";
});

function consonantsSearch(searchWord) { }

function rootsSearch(searchWord) { }

function wordsSearch(searchWord) { }
