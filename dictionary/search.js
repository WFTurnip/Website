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

    const resultContainer = document.getElementById("result");
    resultContainer.innerHTML = "";

    if (!searchWord) {
        const message = document.createElement("p");
        message.textContent = "検索語が入力されていません。";
        message.classList.add("warning");
        resultContainer.appendChild(message);
    } else {
        const subtitle = document.createElement("h2");
        subtitle.textContent = searchWord + "の検索結果";
        resultContainer.appendChild(subtitle);

        const list = document.createElement("ul");
        list.classList.add("search-options");

        if (consonants) {
            const li = document.createElement("li");
            li.textContent = "見出し検索: ON";
            list.appendChild(li);
        }
        if (roots) {
            const li = document.createElement("li");
            li.textContent = "語根検索: ON";
            list.appendChild(li);
        }
        if (words) {
            const li = document.createElement("li");
            li.textContent = "単語検索: ON";
            list.appendChild(li);
        }

        if (!consonants && !roots && !words) {
            const li = document.createElement("li");
            li.textContent = "絞り込みオプションは指定されていません。";
            li.classList.add("warning");
            list.appendChild(li);
        }

        resultContainer.appendChild(list);
    }
});

function consonantsSearch(searchWord) { }

function rootsSearch(searchWord) { }

function wordsSearch(searchWord) { }
