document.addEventListener("DOMContentLoaded", async () => {
    const parameters = new URLSearchParams(window.location.search);

    const searchWord = parameters.get("searchInput") || "";
    const searchWordLower = searchWord.toLowerCase();

    const consonants = parameters.get("consonants") === "ON";
    const roots = parameters.get("roots") === "ON";
    const words = parameters.get("words") === "ON";

    document.getElementById("searchInput").value = searchWord;
    document.getElementById("consonants").checked = consonants;
    document.getElementById("roots").checked = roots;
    document.getElementById("words").checked = words;

    const searchResultContainer = document.getElementById("searchResult");
    const searchOptionContainer = document.getElementById("option");
    const resultContainer = document.getElementById("result");

    searchResultContainer.innerHTML = "";
    searchOptionContainer.innerHTML = "";
    resultContainer.innerHTML = "";

    if (!searchWord) {
        const message = document.createElement("p");
        message.textContent = "検索語が入力されていませんので、検索を行いません。";
        message.classList.add("warning");
        searchResultContainer.appendChild(message);
    } else {
        const searchResult = document.createElement("h2");
        const searchResultSpan = document.createElement("span");
        searchResultSpan.textContent = searchWord;
        searchResultSpan.classList.add("sulive");
        searchResult.appendChild(searchResultSpan);
        searchResult.append("の検索結果");
        searchResultContainer.appendChild(searchResult);
    }

    if (!consonants && !roots && !words) {
        const message = document.createElement("p");
        message.textContent = "オプションが選択されていないので、絞り込み検索を行いません。";
        message.classList.add("warning");
        searchOptionContainer.appendChild(message);
    } else {
        const p = document.createElement("p");
        p.classList.add("options");
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

    const anyOptionOn = consonants || roots || words;
    resultContainer.appendChild(await consonantsSearch(searchWordLower, consonants, anyOptionOn));
    resultContainer.appendChild(await rootsSearch(searchWordLower, roots, anyOptionOn));
    resultContainer.appendChild(await wordsSearch(searchWordLower, words, anyOptionOn));
});

async function consonantsSearch(searchWordLower, isOn, anyOptionOn) {
    const details = document.createElement("details");
    details.open = isOn || !anyOptionOn;

    const summary = document.createElement("summary");
    summary.textContent = "見出し検索";
    details.appendChild(summary);

    try {
        let filename = "index";
        const data = await fetchFileForSearch(filename);
        const filtered = filterData(data, searchWordLower, "consonants");
        filtered.forEach(item => {
            const consonantIndex = document.createElement("p");
            const consonant = document.createElement("span");
            consonant.textContent = searchWordLower.charAt(0);
            consonant.classList.add("sulive");
            consonantIndex.append(consonant);

            const consonantConcept = document.createElement("span");
            consonantConcept.textContent = item.consonantConcept;
            consonantIndex.append(consonantConcept);
            details.appendChild(consonantIndex);

            const p2 = document.createElement("p");
            const a = document.createElement("a");
            const span = document.createElement("span");
            span.classList.add("sulive");
            span.textContent = item.consonant;
            a.href = "html_index" + "/" + item.consonantHtmlHref;
            a.append("子音");
            a.append(span);
            a.append("の詳細ページ");
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

async function rootsSearch(searchWordLower, isOn, anyOptionOn) {
    const details = document.createElement("details");
    details.open = isOn || !anyOptionOn;

    const summary = document.createElement("summary");
    summary.textContent = "語根検索";
    details.appendChild(summary);

    let filename = searchWordLower.charAt(0);
    try {
        const data = await fetchFileForSearch(filename);
        const filtered = filterData(data, searchWordLower, "roots");
        filtered.forEach(item => {
            const rootIndex = document.createElement("p");
            const root = document.createElement("span");
            root.textContent = item.root;
            root.classList.add("sulive");
            rootIndex.append(root);
            const rootConcept = document.createElement("span");
            rootConcept.textContent = item.rootConcept;
            rootIndex.appendChild(rootConcept);
            details.appendChild(rootIndex);

            const rootHref = document.createElement("p");
            const a = document.createElement("a");
            const span = document.createElement("span");
            span.classList.add("sulive");
            span.textContent = item.root;
            a.href = "html_index" + "/" + item.rootHtmlHref;
            a.append("語根");
            a.append(span);
            a.append("の詳細ページ");
            rootHref.appendChild(a);
            details.appendChild(rootHref);
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
            const wordIndex = document.createElement("p");

            const index = document.createElement("strong");
            index.textContent = item.word;
            index.classList.add("index", "sulive");
            wordIndex.append(index);

            const pronunciation = document.createElement("span");
            pronunciation.textContent = "[" + item.wordPronunciation + "]";
            pronunciation.classList.add("pronunciation");
            wordIndex.append(pronunciation);

            const wordCases = document.createElement("span");
            wordCases.textContent = item.wordCases;
            wordCases.classList.add("cases");
            wordIndex.append(wordCases);

            const wordPartOfSpeech = document.createElement("span");
            wordPartOfSpeech.textContent = item.wordPartOfSpeech;
            wordPartOfSpeech.classList.add("part-of-speech");
            wordIndex.append(wordPartOfSpeech);
            details.appendChild(wordIndex);

            const wordMeaning = document.createElement("p");
            wordMeaning.textContent = item.wordMeaning;
            details.appendChild(wordMeaning);

            const wordLink = document.createElement("p");
            const a = document.createElement("a");
            const span = document.createElement("span");
            span.classList.add("sulive");
            span.textContent = item.word;
            a.href = "html_index" + "/" + item.wordHtmlHref;
            a.append("単語")
            a.append(span);
            a.append("の詳細ページ");
            wordLink.appendChild(a);
            details.appendChild(wordLink);
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
    if (!res.ok) {
        throw new Error("ファイルが見つかりません");
    }
    return await res.json();
}

function filterData(data, searchWord, type) {
    const wordLower = searchWord.toLowerCase();
    switch (type) {
        case "consonants":
            return data.consonants.filter(item =>
                item.consonant.toLowerCase() === wordLower.charAt(0)
            );
        case "roots":
            return data.roots.filter(item =>
                item.root.toLowerCase() === [0, 2, 4].map(i => wordLower.charAt(i) || "").join("")
            );
        case "words":
            return data.words.filter(item =>
                item.word.toLowerCase() === wordLower
            );
        default:
            return [];
    }
}
