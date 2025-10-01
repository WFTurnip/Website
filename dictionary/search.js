document.addEventListener("DOMContentLoaded", async () => {
    const parameters = new URLSearchParams(window.location.search);

    const searchWord = parameters.get("search") || "";
    const consonants = parameters.get("consonants") === "ON";
    const roots = parameters.get("roots") === "ON";
    const words = parameters.get("words") === "ON";

    document.getElementById("search").value = searchWord;
    document.getElementById("consonants").checked = consonants;
    document.getElementById("roots").checked = roots;
    document.getElementById("words").checked = words;

    const searchWordContainer = document.getElementById("search");
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
        searchResultSpan.className = "zosokw";
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
    h2.className = "zosokw";
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
            a.textContent = "詳細ページ";
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
            const root_index = document.createElement("p");
            const root = document.createElement("span");
            root.textContent = item.root;
            root.classList.add("zosokw");
            root_index.append(root);
            const root_meaning = document.createElement("span");
            root_meaning.textContent = item.root_meaning;
            root_index.appendChild(root_meaning);
            details.appendChild(root_index);

            const p3 = document.createElement("p");
            const a = document.createElement("a");
            a.href = "html_index" + "/" + item.root_html_href;
            a.textContent = "詳細ページ";
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
            const word_index = document.createElement("p");

            const index = document.createElement("strong");
            index.textContent = item.word.toLowerCase();
            index.classList.add("index", "zosokw");
            word_index.append(index);

            const pronunciation = document.createElement("span");
            pronunciation.textContent = "/" + item.word_pronunciation + "/";
            pronunciation.classList.add("pronunciation");
            word_index.append(pronunciation);

            const word_cases = document.createElement("span");
            word_cases.textContent = item.word_cases;
            word_cases.classList.add("cases");
            word_index.append(word_cases);

            const word_part_of_speech = document.createElement("span");
            word_part_of_speech.textContent = item.word_part_of_speech;
            word_part_of_speech.classList.add("part-of-speech");
            word_index.append(word_part_of_speech);

            details.appendChild(word_index);

            const word_meaning = document.createElement("p");
            word_meaning.textContent = item.word_meaning;

            details.appendChild(word_meaning);

            const word_link = document.createElement("p");

            const a = document.createElement("a");
            const span = document.createElement("span");
            span.classList.add("zosokw");
            span.textContent = item.word.toLowerCase();
            a.href = "html_index" + "/" + filename + ".html" + "#" + item.word.toLowerCase();
            a.target = "_blank";
            a.rel = "noopener noreferrer";
            a.append(span);
            a.append("の詳細");
            word_link.appendChild(a);

            details.appendChild(word_link);
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