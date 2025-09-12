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

    const dl = document.createElement("dl");
    dl.classList.add("search-options");

    const dt1 = document.createElement("dt");
    dt1.textContent = "見出し検索: ";
    dl.appendChild(dt1);
    if (consonants) {
        const dd = document.createElement("dd");
        dd.textContent = "ON";
        dl.appendChild(dd);
    } else {
        const dd = document.createElement("dd");
        dd.textContent = "OFF";
        dl.appendChild(dd);
    }

    const dt2 = document.createElement("dt");
    dt2.textContent = "語根検索: ";
    dl.appendChild(dt2);

    if (roots) {
        const dd = document.createElement("dd");
        dd.textContent = "ON";
        dl.appendChild(dd);
    } else {
        const dd = document.createElement("dd");
        dd.textContent = "OFF";
        dl.appendChild(dd);
    }

    const dt3 = document.createElement("dt");
    dt3.textContent = "単語検索:";
    dl.appendChild(dt3);

    if (words) {
        const dd = document.createElement("dd");
        dd.textContent = "ON";
        dl.appendChild(dd);
    } else {
        const dd = document.createElement("dd");
        dd.textContent = "OFF";
        dl.appendChild(dd);
    }

    searchOptionContainer.appendChild(dl);

    const resultContainer = document.getElementById("result");
    resultContainer.innerHTML = "";

});

function consonantsSearch(searchWord) { }

function rootsSearch(searchWord) { }

function wordsSearch(searchWord) { }
