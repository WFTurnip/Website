document.addEventListener("DOMContentLoaded", async () => {
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
        message.textContent = "検索語が入力されていませんので、検索を行いません。";
        message.classList.add("warning");
        searchWordContainer.appendChild(message);
        resultContainer.innerHTML = "";
    } else {
        const searchResult = document.createElement("h2");
        const searchResultSpan = document.createElement("span");
        searchResultSpan.textContent = searchWord;
        searchResultSpan.className = "piswpi";
        searchResult.appendChild(searchResultSpan);
        searchResult.append("の検索結果");
        searchWordContainer.appendChild(searchResult);
    }

    const searchOptionContainer = document.getElementById("option");
    searchOptionContainer.innerHTML = "";
    if (!consonants && !roots && !words) {
        const message = document.createElement("p");
        message.textContent = "オプションが選択されていないので、絞り込み検索を行いません。";
        message.classList.add("warning");
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

    resultContainer.appendChild(await consonantsSearch(searchWord, consonants, anyOptionOn));
    resultContainer.appendChild(await rootsSearch(searchWord, roots, anyOptionOn));
    resultContainer.appendChild(await wordsSearch(searchWord, words, anyOptionOn));
});

async function consonantsSearch(searchWord, isOn, anyOptionOn) {
    const details = document.createElement("details");
    details.open = isOn || !anyOptionOn;

    const summary = document.createElement("summary");
    summary.textContent = "見出し検索";
    details.appendChild(summary);

    const h2 = document.createElement("h2");
    h2.textContent = searchWord.charAt(0);
    h2.className = "piswpi";
    details.appendChild(h2);
    let filename = "index";
    try {
        const data = await fetchFileForSearch(filename);
        const filtered = filterData(data, searchWord, "consonants");
        filtered.forEach(item => {
            const h2 = document.createElement("p");
            h2.textContent = "子音概念：" + item.consonant_meaning;
            details.appendChild(h2);
            const p2 = document.createElement("p");
            const a = document.createElement("a");
            a.href = "html_index" + "/" + item.consonant_html_href;
            a.textContent = "リンクページへ";
            a.target = "_blank";
            a.rel = "noopener noreferrer";
            p2.appendChild(a);
            details.appendChild(p2);
        });
    } catch (error) {
        console.error(error);
        const p = document.createElement("p");
        p.textContent = "データの取得に失敗しました。";
        p.classList.add("warning");
        details.appendChild(p);
    }
    return details;
}

async function rootsSearch(searchWord, isOn, anyOptionOn) {
    const details = document.createElement("details");
    details.open = isOn || !anyOptionOn;

    const summary = document.createElement("summary");
    summary.textContent = "語根検索";
    details.appendChild(summary);

    let filename = searchWord.charAt(0);
    try {
        const data = await fetchFileForSearch(filename);
        const filtered = filterData(data, searchWord, "roots");
        filtered.forEach(item => {
            const p1 = document.createElement("p");
            const span = document.createElement("span");
            span.textContent = item.root;
            span.classList.add("piswpi");
            p1.textContent = "語根：";
            p1.append(span);
            details.appendChild(p1);
            const p2 = document.createElement("p");
            p2.textContent = "語根概念：" + item.root_meaning;
            details.appendChild(p2);
            const p3 = document.createElement("p");
            const a = document.createElement("a");
            a.href = "html_index" + "/" + item.root_html_href;
            a.textContent = "リンクページへ";
            a.target = "_blank";
            a.rel = "noopener noreferrer";
            p3.appendChild(a);
            details.appendChild(p3);
        });
    } catch (error) {
        console.error(error);
        const p = document.createElement("p");
        p.textContent = "データの取得に失敗しました。";
        p.classList.add("warning");
        details.appendChild(p);
    }
    return details;
}

async function wordsSearch(searchWord, isOn, anyOptionOn) {
    const details = document.createElement("details");
    details.open = isOn || !anyOptionOn;

    const summary = document.createElement("summary");
    summary.textContent = "単語検索";
    details.appendChild(summary);

    let filename = searchWord.charAt(0) + "/" + [0, 2, 4].map(i => searchWord.charAt(i) || "").join("");
    try {
        const data = await fetchFileForSearch(filename);
        const filtered = filterData(data, searchWord, "words");
        filtered.forEach(item => {
            const p1 = document.createElement("p");
            const strong = document.createElement("strong");
            strong.textContent = item.word.toLowerCase();
            strong.className = "piswpi";
            p1.append(strong);
            const span2 = document.createElement("span");
            span2.textContent = item.word_part_of_speech;
            p1.append(span2);
            const span3 = document.createElement("span");
            span3.textContent = "/" + item.word_phonetic + "/";
            span3.classList.add("phonetic");
            p1.append(span3);
            const span4 = document.createElement("span");
            span4.textContent = item.word_cases;
            p1.append(span4);
            details.appendChild(p1);
            const p2 = document.createElement("p");
            p2.textContent = item.word_meaning;
            details.appendChild(p2);
        });
    } catch (error) {
        console.error(error);
        const p = document.createElement("p");
        p.textContent = "データの取得に失敗しました。";
        p.classList.add("warning");
        details.appendChild(p);
    }
    return details;
}

async function fetchFileForSearch(searchWord) {
    const filename = "json_index" + "/" + encodeURIComponent(searchWord) + ".json";
    const res = await fetch(filename);
    if (!res.ok) throw new Error("ファイルが見つかりません");
    return await res.json();
}

function filterData(data, searchWord, type) {
    switch (type) {
        case "consonants":
            return data.consonants.filter(item =>
                item.consonant === searchWord.charAt(0)
            );
        case "roots":
            return data.roots.filter(item =>
                item.root === [0, 2, 4].map(i => searchWord.charAt(i) || "").join("")
            );
        case "words":
            return data.words.filter(item =>
                item.word === searchWord
            );
        default:
            return [];
    }
}
