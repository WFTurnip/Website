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

    const anyOptionOn = consonants || roots || words;

    resultContainer.appendChild(consonantsSearch(searchWord, consonants, anyOptionOn));
    resultContainer.appendChild(rootsSearch(searchWord, roots, anyOptionOn));
    resultContainer.appendChild(wordsSearch(searchWord, words, anyOptionOn));
});

function consonantsSearch(searchWord, isOn, anyOptionOn) {
    const details = document.createElement("details");
    details.open = isOn || !anyOptionOn;

    const summary = document.createElement("summary");
    summary.textContent = "見出し検索";
    details.appendChild(summary);

    const h2 = document.createElement("h2");
    h2.textContent = searchWord.charAt(0);
    details.appendChild(h2);
    fetchFileForSearch("index").then(data => {
        const filtered = filterData(data, searchWord, "consonants");
        filtered.forEach(item => {
            const p = document.createElement("p");
            p.textContent = item.word + ": " + item.meaning;
            details.appendChild(p);
        });
    });
    return details;
}

function rootsSearch(searchWord, isOn, anyOptionOn) {
    const details = document.createElement("details");
    details.open = isOn || !anyOptionOn;

    const summary = document.createElement("summary");
    summary.textContent = "語根検索";
    details.appendChild(summary);

    const h2 = document.createElement("h2");
    h2.textContent = [0, 2, 4].map(i => searchWord.charAt(i) || "").join("");
    details.appendChild(h2);

    return details;
}

function wordsSearch(searchWord, isOn, anyOptionOn) {
    const details = document.createElement("details");
    details.open = isOn || !anyOptionOn;

    const summary = document.createElement("summary");
    summary.textContent = "単語検索";
    details.appendChild(summary);

    const h2 = document.createElement("h2");
    h2.textContent = searchWord;
    details.appendChild(h2);

    return details;
}

function fetchFileForSearch(searchWord) {
    const filename = "json_index" + encodeURIComponent(searchWord) + ".json";
    return fetch(filename)
        .then(res => {
            if (!res.ok) throw new Error("ファイルが見つかりません");
            return res.json();
        });
}

function filterData(data, searchWord, type) {
    switch (type) {
        case "consonants":
            // 先頭文字が一致するものだけ抽出
            return list.filter(item => item.consonant === searchWord.charAt(0));
        case "roots":
            // 0,2,4文字目が一致するものだけ抽出
            return data.filter(item =>
                [0, 2, 4].map(i => searchWord.charAt(i) || "").join("") ===
                [0, 2, 4].map(i => item.word.charAt(i) || "").join("")
            );
        case "words":
            // 完全一致
            return data.filter(item => item.word === searchWord);
        default:
            return [];
    }
}
