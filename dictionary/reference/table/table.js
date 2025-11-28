const consonantsArray = ["k", "g", "t", "d", "s", "z", "q", "c", "r", "l", "p", "b", "h", "x", "f", "v", "m", "n"];
const consonantsConceptArray = ["剥離", "癒着", "乖離", "同一", "肉体", "精神", "空白", "物質", "過去", "未来", "鎮静", "高揚", "受動", "能動", "創造", "破壊", "流動", "固定"];
const consonantsPronunciationArray = ["k", "g", "t", "d", "s", "z", "\u{0294}", "\u{0295}", "r", "l", "p", "b", "h", "x", "f", "v", "m", "n"];

const consonantsPronunciationHorizontalArray = ["喉", "舌先", "唇"];
const consonantsPronunciationVerticalArray = ["上", "中", "下"];
const consonantsPronunciationHorizontalClassArray = ["弱", "強"];

const vowelsArray = ["a", "e", "i", "o", "u", "w"];
const vowelsCasesArray = ["否", "与", "属", "対", "主", "流"];
const vowelsPartOfSpeechTypesArray = ["附", "動", "容", "助", "副", "名"];
const vowelsPronunciationArray = ["a", "e", "i", "o", "u", "\u{2205}"];

const vowelsPronunciationHorizontalArray = ["広", "中", "狭"];
const vowelsPronunciationVerticalArray = ["非", ""];
const vowelsPartOfSpeechTypesHorizontalArray = ["限定", "動作", "状態"];
const vowelsPartOfSpeechTypesVerticalArray = ["核", "補助"];

const upperTangueConsonantsArray = ["k", "g", "t", "d", "s", "z"];
const middleTangueConsonantsArray = ["q", "c", "r", "l", "p", "b"];
const lowerTangueConsonantsArray = ["h", "x", "f", "v", "m", "n"];

const upperTangueConsonantsConceptArray = ["剥離", "癒着", "乖離", "同一", "肉体", "精神"];
const middleTangueConsonantsConceptArray = ["空白", "物質", "過去", "未来", "鎮静", "高揚"];
const lowerTangueConsonantsConceptArray = ["受動", "能動", "創造", "破壊", "流動", "固定"];

function generateConsonantsModelTable(captionName) { }

function generateVowelsModelTable(captionName) { }

function generateConjunctModelTable(captionName) { }

function generateConsonantsPronunciationTable() {
    let table = document.createElement("table");
    let caption = document.createElement("caption");
    caption.textContent = "子音表";
    table.appendChild(caption);
    let thead = document.createElement("thead");
    let consonantsPronunciationHorizontalRow = document.createElement("tr");
    let blank = document.createElement("th");
    blank.textContent = "";
    blank.rowSpan = 2;
    consonantsPronunciationHorizontalRow.appendChild(blank);
    for (let i = 0; i < consonantsPronunciationHorizontalArray.length; i++) {
        let consonantsPronunciationHorizontal = document.createElement("th");
        consonantsPronunciationHorizontal.textContent = consonantsPronunciationHorizontalArray[i] + "音";
        consonantsPronunciationHorizontal.colSpan = 2;
        consonantsPronunciationHorizontalRow.appendChild(consonantsPronunciationHorizontal);
    }
    thead.appendChild(consonantsPronunciationHorizontalRow);
    let consonantsPronunciationHorizontalClassRow = document.createElement("tr");
    for (let i = 0; i < consonantsPronunciationHorizontalArray.length; i++) {
        for (let j = 0; j < consonantsPronunciationHorizontalClassArray.length; j++) {
            let consonantsPronunciationHorizontalClass = document.createElement("th");
            consonantsPronunciationHorizontalClass.textContent = consonantsPronunciationHorizontalClassArray[j] + "震音";
            consonantsPronunciationHorizontalClassRow.appendChild(consonantsPronunciationHorizontalClass);
        }
    }
    thead.appendChild(consonantsPronunciationHorizontalClassRow);
    table.appendChild(thead);
    let tbody = document.createElement("tbody");
    for (let i = 0; i < consonantsPronunciationVerticalArray.length; i++) {
        let consonantVerticalRow = document.createElement("tr");
        let consonantsPronunciationVertical = document.createElement("th");
        consonantsPronunciationVertical.textContent = consonantsPronunciationVerticalArray[i] + "舌音";
        consonantVerticalRow.appendChild(consonantsPronunciationVertical);
        for (let j = 0; j < consonantsArray.length / consonantsPronunciationVerticalArray.length; j++) {
            let consonantsCell = document.createElement("td");
            let consonants = document.createElement("div");
            consonants.textContent = consonantsArray[i * consonantsArray.length / consonantsPronunciationVerticalArray.length + j];
            consonants.classList.add("zosokw");
            consonantsCell.appendChild(consonants);
            let consonantsPronunciation = document.createElement("div");
            consonantsPronunciation.textContent = "[" + consonantsPronunciationArray[i * consonantsArray.length / consonantsPronunciationVerticalArray.length + j] + "]";
            consonantsPronunciation.classList.add("pronunciation");
            consonantsCell.appendChild(consonantsPronunciation);
            consonantVerticalRow.appendChild(consonantsCell);
        }
        tbody.appendChild(consonantVerticalRow);
    }
    table.appendChild(tbody);
    document.querySelectorAll(".consonants-table").forEach(function (element) {
        element.appendChild(table.cloneNode(true));
    });
}

function generateVowelsPronunciationTable() {
    let table = document.createElement("table");
    let caption = document.createElement("caption");
    caption.textContent = "母音表";
    table.appendChild(caption);
    let thead = document.createElement("thead");
    let vowelsPronunciationHorizontalRow = document.createElement("tr");
    let blank = document.createElement("th");
    blank.textContent = "";
    vowelsPronunciationHorizontalRow.appendChild(blank);
    for (let i = 0; i < vowelsPronunciationHorizontalArray.length; i++) {
        let vowelsPronunciationHorizontal = document.createElement("th");
        vowelsPronunciationHorizontal.textContent = vowelsPronunciationHorizontalArray[i] + "母音";
        vowelsPronunciationHorizontalRow.appendChild(vowelsPronunciationHorizontal);
    }
    thead.appendChild(vowelsPronunciationHorizontalRow);
    table.appendChild(thead);
    let tbody = document.createElement("tbody");
    for (let i = 0; i < vowelsPronunciationVerticalArray.length; i++) {
        let vowelsVerticalRow = document.createElement("tr");
        let vowelsPronunciationVertical = document.createElement("th");
        vowelsPronunciationVertical.textContent = vowelsPronunciationVerticalArray[i] + "円唇母音";
        vowelsVerticalRow.appendChild(vowelsPronunciationVertical);
        for (let j = 0; j < vowelsArray.length / vowelsPronunciationVerticalArray.length; j++) {
            let vowelsCell = document.createElement("td");
            let vowels = document.createElement("div");
            vowels.textContent = "\u{25CC}" + vowelsArray[i * vowelsArray.length / vowelsPronunciationVerticalArray.length + j];
            vowels.classList.add("zosokw");
            vowelsCell.appendChild(vowels);
            let vowelsPronunciation = document.createElement("div");
            vowelsPronunciation.textContent = "[" + vowelsPronunciationArray[i * vowelsArray.length / vowelsPronunciationVerticalArray.length + j] + "]";
            vowelsPronunciation.classList.add("pronunciation");
            vowelsCell.appendChild(vowelsPronunciation);
            vowelsVerticalRow.appendChild(vowelsCell);
        }
        tbody.appendChild(vowelsVerticalRow);
    }
    table.appendChild(tbody);
    document.querySelectorAll(".vowels-table").forEach(function (element) {
        element.appendChild(table.cloneNode(true));
    });
}

function generateConsonantsConceptTable() {
    let table = document.createElement("table");
    let caption = document.createElement("caption");
    caption.textContent = "子音概念表";
    table.appendChild(caption);
    let thead = document.createElement("thead");
    let consonantsPronunciationHorizontalRow = document.createElement("tr");
    let blank = document.createElement("th");
    blank.textContent = "";
    blank.rowSpan = 2;
    consonantsPronunciationHorizontalRow.appendChild(blank);
    for (let i = 0; i < consonantsPronunciationHorizontalArray.length; i++) {
        let consonantsPronunciationHorizontal = document.createElement("th");
        consonantsPronunciationHorizontal.textContent = consonantsPronunciationHorizontalArray[i] + "音";
        consonantsPronunciationHorizontal.colSpan = 2;
        consonantsPronunciationHorizontalRow.appendChild(consonantsPronunciationHorizontal);
    }
    thead.appendChild(consonantsPronunciationHorizontalRow);
    let consonantsPronunciationHorizontalClassRow = document.createElement("tr");
    for (let i = 0; i < consonantsPronunciationHorizontalArray.length; i++) {
        for (let j = 0; j < consonantsPronunciationHorizontalClassArray.length; j++) {
            let consonantsPronunciationHorizontalClass = document.createElement("th");
            consonantsPronunciationHorizontalClass.textContent = consonantsPronunciationHorizontalClassArray[j] + "震音";
            consonantsPronunciationHorizontalClassRow.appendChild(consonantsPronunciationHorizontalClass);
        }
    }
    thead.appendChild(consonantsPronunciationHorizontalClassRow);
    table.appendChild(thead);
    let tbody = document.createElement("tbody");
    for (let i = 0; i < consonantsPronunciationVerticalArray.length; i++) {
        let consonantVerticalRow = document.createElement("tr");
        let consonantsPronunciationVertical = document.createElement("th");
        consonantsPronunciationVertical.textContent = consonantsPronunciationVerticalArray[i] + "舌音";
        consonantVerticalRow.appendChild(consonantsPronunciationVertical);
        for (let j = 0; j < consonantsArray.length / consonantsPronunciationVerticalArray.length; j++) {
            let consonantsCell = document.createElement("td");
            let consonants = document.createElement("div");
            consonants.textContent = consonantsArray[i * consonantsArray.length / consonantsPronunciationVerticalArray.length + j];
            consonants.classList.add("zosokw");
            consonantsCell.appendChild(consonants);
            let consonantsConcept = document.createElement("div");
            consonantsConcept.textContent = consonantsConceptArray[i * consonantsArray.length / consonantsPronunciationVerticalArray.length + j];
            consonantsConcept.classList.add("concept");
            consonantsCell.appendChild(consonantsConcept);
            consonantVerticalRow.appendChild(consonantsCell);
        }
        tbody.appendChild(consonantVerticalRow);
    }
    table.appendChild(tbody);
    document.querySelectorAll(".consonant-concept-table").forEach(function (element) {
        element.appendChild(table.cloneNode(true));
    });
}

function generatePrefixConsonantsTable() {
    let table = document.createElement("table");
    let caption = document.createElement("caption");
    caption.textContent = "接頭辞表";
    table.appendChild(caption);
    document.querySelectorAll(".prefix-consonants-table").forEach(function (element) {
        element.appendChild(table.cloneNode(true));
    });
}

function generateSuffixConsonantsTable() {
    let table = document.createElement("table");
    let caption = document.createElement("caption");
    caption.textContent = "接尾辞表";
    table.appendChild(caption);
    document.querySelectorAll(".suffix-consonants-table").forEach(function (element) {
        element.appendChild(table.cloneNode(true));
    });
}

function generateCircumfixConsonantsTable() {
    let table = document.createElement("table");
    let caption = document.createElement("caption");
    caption.textContent = "接周辞";
    table.appendChild(caption);
    document.querySelectorAll(".circumfix-consonants-table").forEach(function (element) {
        element.appendChild(table.cloneNode(true));
    });
}

function generateFirstCaseTable() {
    let table = document.createElement("table");
    let caption = document.createElement("caption");
    caption.textContent = "前置格表";
    table.appendChild(caption);
    let thead = document.createElement("thead");
    let vowelsPronunciationHorizontalRow = document.createElement("tr");
    let blank = document.createElement("th");
    blank.textContent = "";
    vowelsPronunciationHorizontalRow.appendChild(blank);
    for (let i = 0; i < vowelsPronunciationHorizontalArray.length; i++) {
        let vowelsPronunciationHorizontal = document.createElement("th");
        vowelsPronunciationHorizontal.textContent = vowelsPronunciationHorizontalArray[i] + "母音";
        vowelsPronunciationHorizontalRow.appendChild(vowelsPronunciationHorizontal);
    }
    thead.appendChild(vowelsPronunciationHorizontalRow);
    table.appendChild(thead);
    let tbody = document.createElement("tbody");
    for (let i = 0; i < vowelsPronunciationVerticalArray.length; i++) {
        let vowelsVerticalRow = document.createElement("tr");
        let vowelsPronunciationVertical = document.createElement("th");
        vowelsPronunciationVertical.textContent = vowelsPronunciationVerticalArray[i] + "円唇母音";
        vowelsVerticalRow.appendChild(vowelsPronunciationVertical);
        for (let j = 0; j < vowelsArray.length / vowelsPronunciationVerticalArray.length; j++) {
            let VowelCell = document.createElement("td");
            let vowels = document.createElement("div");
            vowels.textContent = "\u{25CC}" + vowelsArray[i * vowelsArray.length / vowelsPronunciationVerticalArray.length + j] + "\u{25CC}\u{25CC}";
            vowels.classList.add("zosokw");
            VowelCell.appendChild(vowels);
            let vowelsCase = document.createElement("div");
            vowelsCase.textContent = vowelsCasesArray[i * vowelsArray.length / vowelsPronunciationVerticalArray.length + j] + "格";
            vowelsCase.classList.add("cases");
            VowelCell.appendChild(vowelsCase);
            vowelsVerticalRow.appendChild(VowelCell);
        }
        tbody.appendChild(vowelsVerticalRow);
    }
    table.appendChild(tbody);
    document.querySelectorAll(".first-case-table").forEach(function (element) {
        element.appendChild(table.cloneNode(true));
    });
}

function generateSecondCaseTable() {
    let table = document.createElement("table");
    let caption = document.createElement("caption");
    caption.textContent = "後置格表";
    table.appendChild(caption);
    let thead = document.createElement("thead");
    let vowelsPronunciationHorizontalRow = document.createElement("tr");
    let blank = document.createElement("th");
    blank.textContent = "";
    vowelsPronunciationHorizontalRow.appendChild(blank);
    for (let i = 0; i < vowelsPronunciationHorizontalArray.length; i++) {
        let vowelsPronunciationHorizontal = document.createElement("th");
        vowelsPronunciationHorizontal.textContent = vowelsPronunciationHorizontalArray[i] + "母音";
        vowelsPronunciationHorizontalRow.appendChild(vowelsPronunciationHorizontal);
    }
    thead.appendChild(vowelsPronunciationHorizontalRow);
    table.appendChild(thead);
    let tbody = document.createElement("tbody");
    for (let i = 0; i < vowelsPronunciationVerticalArray.length; i++) {
        let vowelsVerticalRow = document.createElement("tr");
        let vowelsPronunciationVertical = document.createElement("th");
        vowelsPronunciationVertical.textContent = vowelsPronunciationVerticalArray[i] + "円唇母音";
        vowelsVerticalRow.appendChild(vowelsPronunciationVertical);
        for (let j = 0; j < vowelsArray.length / vowelsPronunciationVerticalArray.length; j++) {
            let VowelCell = document.createElement("td");
            let vowels = document.createElement("div");
            vowels.textContent = "\u{25CC}\u{25CC}" + vowelsArray[i * vowelsArray.length / vowelsPronunciationVerticalArray.length + j] + "\u{25CC}";
            vowels.classList.add("zosokw");
            VowelCell.appendChild(vowels);
            let vowelsCase = document.createElement("div");
            vowelsCase.textContent = vowelsCasesArray[i * vowelsArray.length / vowelsPronunciationVerticalArray.length + j] + "格";
            vowelsCase.classList.add("cases");
            VowelCell.appendChild(vowelsCase);
            vowelsVerticalRow.appendChild(VowelCell);
        }
        tbody.appendChild(vowelsVerticalRow);
    }
    table.appendChild(tbody);
    document.querySelectorAll(".second-case-table").forEach(function (element) {
        element.appendChild(table.cloneNode(true));
    });
}

function generateConjunctCaseTable() {
    const createParagraph = (text, className) => {
        let p = document.createElement("div");
        p.textContent = text;
        p.classList.add(className);
        return p;
    };
    let table = document.createElement("table");
    let caption = document.createElement("caption");
    caption.textContent = "複合格表";
    table.appendChild(caption);
    let thead = document.createElement("thead");
    let tr = document.createElement("tr");
    let th = document.createElement("th");
    th.textContent = "";
    th.rowSpan = 2;
    th.colSpan = 2;
    tr.appendChild(th);
    let th2 = document.createElement("th");
    th2.textContent = "第一母音";
    th2.colSpan = vowelsArray.length;
    tr.appendChild(th2);
    thead.appendChild(tr);
    let tr2 = document.createElement("tr");
    vowelsArray.forEach((vowel, i) => {
        let th = document.createElement("th");
        th.appendChild(createParagraph("\u{25CC}" + vowel + "\u{25CC}" + "\u{25CC}", "zosokw"));
        th.appendChild(createParagraph(vowelsCasesArray[i] + "格", "case"));
        tr2.appendChild(th);
    });
    thead.appendChild(tr2);
    table.appendChild(thead);
    let tbody = document.createElement("tbody");
    let tr3 = document.createElement("tr");
    let th3 = document.createElement("th");
    let p = document.createElement("div");
    p.textContent = "第二母音";
    th3.appendChild(p);
    th3.rowSpan = 7;
    tr3.appendChild(th3);
    tbody.appendChild(tr3);
    vowelsArray.forEach((vowel1, i) => {
        let tr = document.createElement("tr");
        let th = document.createElement("th");
        th.appendChild(createParagraph("\u{25CC}" + "\u{25CC}" + vowel1 + "\u{25CC}", "zosokw"));
        th.appendChild(createParagraph(vowelsCasesArray[i] + "格", "case"));
        tr.appendChild(th);
        vowelsArray.forEach((vowel2, j) => {
            let td = document.createElement("td");
            td.appendChild(createParagraph("\u{25CC}" + vowel2 + "\u{25CC}" + vowel1 + "\u{25CC}", "zosokw"));
            td.appendChild(createParagraph(vowelsCasesArray[j] + vowelsCasesArray[i] + "格", "conjunct-case"));
            tr.appendChild(td);
        });
        tbody.appendChild(tr);
    });
    table.appendChild(tbody);
    document.querySelectorAll(".conjunct-case-table").forEach(function (element) {
        element.appendChild(table.cloneNode(true));
    });
}

function generatePreffixCaseTable() {
    let table = document.createElement("table");
    let caption = document.createElement("caption");
    caption.textContent = "接頭辞格表";
    table.appendChild(caption);
    let thead = document.createElement("thead");
    let vowelsPronunciationHorizontalRow = document.createElement("tr");
    let blank = document.createElement("th");
    blank.textContent = "";
    vowelsPronunciationHorizontalRow.appendChild(blank);
    for (let i = 0; i < vowelsPronunciationHorizontalArray.length; i++) {
        let vowelsPronunciationHorizontal = document.createElement("th");
        vowelsPronunciationHorizontal.textContent = vowelsPronunciationHorizontalArray[i] + "母音";
        vowelsPronunciationHorizontalRow.appendChild(vowelsPronunciationHorizontal);
    }
    thead.appendChild(vowelsPronunciationHorizontalRow);
    table.appendChild(thead);
    let tbody = document.createElement("tbody");
    for (let i = 0; i < vowelsPronunciationVerticalArray.length; i++) {
        let vowelsVerticalRow = document.createElement("tr");
        let vowelsPronunciationVertical = document.createElement("th");
        vowelsPronunciationVertical.textContent = vowelsPronunciationVerticalArray[i] + "円唇母音";
        vowelsVerticalRow.appendChild(vowelsPronunciationVertical);
        for (let j = 0; j < vowelsArray.length / vowelsPronunciationVerticalArray.length; j++) {
            let VowelCell = document.createElement("td");
            let vowels = document.createElement("div");
            vowels.textContent = "\u{25CC}" + vowelsArray[i * vowelsArray.length / vowelsPronunciationVerticalArray.length + j] + "\u{25CC}" + "\u{25CC}" + "\u{25CC}";
            vowels.classList.add("zosokw");
            VowelCell.appendChild(vowels);
            let vowelsPartOfSpeech = document.createElement("div");
            vowelsPartOfSpeech.textContent = vowelsCasesArray[i * vowelsArray.length / vowelsPronunciationVerticalArray.length + j] + "格";
            vowelsPartOfSpeech.classList.add("cases");
            VowelCell.appendChild(vowelsPartOfSpeech);
            vowelsVerticalRow.appendChild(VowelCell);
        }
        tbody.appendChild(vowelsVerticalRow);
    }
    table.appendChild(tbody);
    document.querySelectorAll(".prefix-case-table").forEach(function (element) {
        element.appendChild(table.cloneNode(true));
    });
}

function generateSuffixCaseTable() {
    let table = document.createElement("table");
    let caption = document.createElement("caption");
    caption.textContent = "接尾辞格表";
    table.appendChild(caption);
    let thead = document.createElement("thead");
    let vowelsPronunciationHorizontalRow = document.createElement("tr");
    let blank = document.createElement("th");
    blank.textContent = "";
    vowelsPronunciationHorizontalRow.appendChild(blank);
    for (let i = 0; i < vowelsPronunciationHorizontalArray.length; i++) {
        let vowelsPronunciationHorizontal = document.createElement("th");
        vowelsPronunciationHorizontal.textContent = vowelsPronunciationHorizontalArray[i] + "母音";
        vowelsPronunciationHorizontalRow.appendChild(vowelsPronunciationHorizontal);
    }
    thead.appendChild(vowelsPronunciationHorizontalRow);
    table.appendChild(thead);
    let tbody = document.createElement("tbody");
    for (let i = 0; i < vowelsPronunciationVerticalArray.length; i++) {
        let vowelsVerticalRow = document.createElement("tr");
        let vowelsPronunciationVertical = document.createElement("th");
        vowelsPronunciationVertical.textContent = vowelsPronunciationVerticalArray[i] + "円唇母音";
        vowelsVerticalRow.appendChild(vowelsPronunciationVertical);
        for (let j = 0; j < vowelsArray.length / vowelsPronunciationVerticalArray.length; j++) {
            let VowelCell = document.createElement("td");
            let vowels = document.createElement("div");
            vowels.textContent = "\u{25CC}" + vowelsArray[i * vowelsArray.length / vowelsPronunciationVerticalArray.length + j] + "\u{25CC}" + "\u{25CC}" + "\u{25CC}";
            vowels.classList.add("zosokw");
            VowelCell.appendChild(vowels);
            let vowelsCase = document.createElement("div");
            vowelsCase.textContent = vowelsCasesArray[i * vowelsArray.length / vowelsPronunciationVerticalArray.length + j] + "格";
            vowelsCase.classList.add("cases");
            VowelCell.appendChild(vowelsCase);
            vowelsVerticalRow.appendChild(VowelCell);
        }
        tbody.appendChild(vowelsVerticalRow);
    }
    table.appendChild(tbody);
    document.querySelectorAll(".suffix-case-table").forEach(function (element) {
        element.appendChild(table.cloneNode(true));
    });
}

function generatePartOfSpeechTable() {
    let table = document.createElement("table");
    let caption = document.createElement("caption");
    caption.textContent = "品詞表";
    table.appendChild(caption);
    let thead = document.createElement("thead");
    let vowelsPartOfSpeechHorizontal = document.createElement("tr");
    let blank = document.createElement("th");
    blank.textContent = "";
    vowelsPartOfSpeechHorizontal.appendChild(blank);
    for (let i = 0; i < vowelsPartOfSpeechTypesHorizontalArray.length; i++) {
        let vowelsPartOfSpeechHorizontalCell = document.createElement("th");
        vowelsPartOfSpeechHorizontalCell.textContent = vowelsPartOfSpeechTypesHorizontalArray[i] + "符";
        vowelsPartOfSpeechHorizontal.appendChild(vowelsPartOfSpeechHorizontalCell);
    }
    thead.appendChild(vowelsPartOfSpeechHorizontal);
    table.appendChild(thead);
    let tbody = document.createElement("tbody");
    for (let i = 0; i < vowelsPartOfSpeechTypesVerticalArray.length; i++) {
        let vowelsVerticalRow = document.createElement("tr");
        let vowelsPronunciationVertical = document.createElement("th");
        vowelsPronunciationVertical.textContent = "文法" + vowelsPartOfSpeechTypesVerticalArray[i];
        vowelsVerticalRow.appendChild(vowelsPronunciationVertical);
        for (let j = 0; j < vowelsArray.length / vowelsPartOfSpeechTypesVerticalArray.length; j++) {
            let vowelsRow = document.createElement("td");
            let vowel = document.createElement("div");
            vowel.textContent = "\u{25CC}\u{25CC}\u{25CC}" + vowelsArray[i * vowelsArray.length / vowelsPronunciationVerticalArray.length + j];
            vowel.classList.add("zosokw");
            vowelsRow.appendChild(vowel);
            let vowelsPartOfSpeech = document.createElement("div");
            vowelsPartOfSpeech.textContent = vowelsPartOfSpeechTypesArray[i * vowelsArray.length / vowelsPronunciationVerticalArray.length + j] + "詞";
            vowelsPartOfSpeech.classList.add("part-of-speech");
            vowelsRow.appendChild(vowelsPartOfSpeech);
            vowelsVerticalRow.appendChild(vowelsRow);
        }
        tbody.appendChild(vowelsVerticalRow);
    }
    table.appendChild(tbody);
    document.querySelectorAll(".part-of-speech-table").forEach(function (element) {
        element.appendChild(table.cloneNode(true));
    });
}

function generateArticleConjugationTable() {
    let table = document.createElement("table");
    let caption = document.createElement("caption");
    caption.textContent = "附詞活用表";
    table.appendChild(caption);
    let thead = document.createElement("thead");
    let conjunctHorizontal = document.createElement("tr");
    let blank = document.createElement("th");
    blank.textContent = "";
    conjunctHorizontal.appendChild(blank);
    for (let i = 0; i < middleTangueConsonantsArray.length; i++) {
        let th = document.createElement("th");
        let p = document.createElement("div");
        p.textContent = "\u{25CC}\u{25CC}\u{25CC}a" + middleTangueConsonantsArray[i];
        p.classList.add("zosokw", "article-tense-consonant");
        th.appendChild(p);
        let p2 = document.createElement("div");
        p2.textContent = middleTangueConsonantsConceptArray[i] + "形";
        p2.classList.add("article-tense");
        th.appendChild(p2);
        conjunctHorizontal.appendChild(th);
    }
    thead.appendChild(conjunctHorizontal);
    table.appendChild(thead);
    let tbody = document.createElement("tbody");
    for (let i = 0; i < upperTangueConsonantsArray.length; i++) {
        let tr = document.createElement("tr");
        let th = document.createElement("th");
        let p = document.createElement("div");
        p.textContent = upperTangueConsonantsArray[i] + "\u{25CC}\u{25CC}\u{25CC}a";
        p.classList.add("zosokw", "article-aspect-consonant");
        th.appendChild(p);
        let p2 = document.createElement("div");
        p2.textContent = upperTangueConsonantsConceptArray[i] + "相";
        p2.classList.add("article-aspect");
        th.appendChild(p2);
        tr.appendChild(th);
        for (let j = 0; j < middleTangueConsonantsArray.length; j++) {
            let td = document.createElement("td");
            let p = document.createElement("div");
            p.classList.add("zosokw", "article-conjugation-form-consonant");
            p.append(upperTangueConsonantsArray[i], "\u{25CC}\u{25CC}\u{25CC}a", middleTangueConsonantsArray[j]);
            td.appendChild(p);
            let p2 = document.createElement("div");
            p2.append(upperTangueConsonantsConceptArray[i] + "相", document.createElement("wbr"), middleTangueConsonantsConceptArray[j] + "形");
            p2.classList.add("article-conjugation-form");
            td.appendChild(p2);
            tr.appendChild(td);
        }
        tbody.appendChild(tr);
    }
    table.appendChild(tbody);
    document.querySelectorAll(".article-conjugation-table").forEach(function (element) {
        element.appendChild(table.cloneNode(true));
    });
}

function generateVerbConjugationTable() {
    let table = document.createElement("table");
    let caption = document.createElement("caption");
    caption.textContent = "動詞活用表";
    table.appendChild(caption);
    let thead = document.createElement("thead");
    let conjunctHorizontal = document.createElement("tr");
    let blank = document.createElement("th");
    blank.textContent = "";
    conjunctHorizontal.appendChild(blank);
    for (let i = 0; i < middleTangueConsonantsArray.length; i++) {
        let th = document.createElement("th");
        let p = document.createElement("div");
        p.textContent = "\u{25CC}\u{25CC}\u{25CC}e" + middleTangueConsonantsArray[i];
        p.classList.add("zosokw", "verb-tense-consonant");
        th.appendChild(p);
        let p2 = document.createElement("div");
        p2.textContent = middleTangueConsonantsConceptArray[i] + "形";
        p2.classList.add("verb-tense");
        th.appendChild(p2);
        conjunctHorizontal.appendChild(th);
    }
    thead.appendChild(conjunctHorizontal);
    table.appendChild(thead);
    let tbody = document.createElement("tbody");
    for (let i = 0; i < lowerTangueConsonantsArray.length; i++) {
        let tr = document.createElement("tr");
        let th = document.createElement("th");
        let p = document.createElement("div");
        p.textContent = lowerTangueConsonantsArray[i] + "\u{25CC}\u{25CC}\u{25CC}e";
        p.classList.add("zosokw", "verb-aspect-consonant");
        th.appendChild(p);
        let p2 = document.createElement("div");
        p2.textContent = lowerTangueConsonantsConceptArray[i] + "相";
        p2.classList.add("verb-aspect");
        th.appendChild(p2);
        tr.appendChild(th);
        for (let j = 0; j < middleTangueConsonantsArray.length; j++) {
            let td = document.createElement("td");
            let p = document.createElement("div");
            p.classList.add("zosokw", "verb-conjugation-form-consonant");
            p.append(lowerTangueConsonantsArray[i], "\u{25CC}\u{25CC}\u{25CC}e", middleTangueConsonantsArray[j]);
            td.appendChild(p);
            let p2 = document.createElement("div");
            p2.append(lowerTangueConsonantsConceptArray[i] + "相", document.createElement("wbr"), middleTangueConsonantsConceptArray[j] + "形");
            p2.classList.add("verb-conjugation-form");
            td.appendChild(p2);
            tr.appendChild(td);
        }
        tbody.appendChild(tr);
    }
    table.appendChild(tbody);
    document.querySelectorAll(".verb-conjugation-table").forEach(function (element) {
        element.appendChild(table.cloneNode(true));
    });
}

function generateAdjectiveConjugationTable() {
    let table = document.createElement("table");
    let caption = document.createElement("caption");
    caption.textContent = "容詞活用表";
    table.appendChild(caption);
    let thead = document.createElement("thead");
    let vowelsPronunciationHorizontalRow = document.createElement("tr");
    let blank = document.createElement("th");
    blank.textContent = "";
    vowelsPronunciationHorizontalRow.appendChild(blank);
    for (let i = 0; i < upperTangueConsonantsArray.length; i++) {
        let th = document.createElement("th");
        let p = document.createElement("div");
        p.textContent = "\u{25CC}\u{25CC}\u{25CC}u" + upperTangueConsonantsArray[i];
        p.classList.add("zosokw", "adjective-tense-consonant");
        th.appendChild(p);
        let p2 = document.createElement("div");
        p2.textContent = upperTangueConsonantsConceptArray[i] + "形";
        p2.classList.add("adjective-tense");
        th.appendChild(p2);
        vowelsPronunciationHorizontalRow.appendChild(th);
    }
    thead.appendChild(vowelsPronunciationHorizontalRow);
    table.appendChild(thead);
    let tbody = document.createElement("tbody");
    for (let i = 0; i < lowerTangueConsonantsArray.length; i++) {
        let tr = document.createElement("tr");
        let th = document.createElement("th");
        let p2 = document.createElement("div");
        p2.textContent = lowerTangueConsonantsArray[i] + "\u{25CC}\u{25CC}\u{25CC}u";
        p2.classList.add("zosokw", "adjective-aspect-consonant");
        th.appendChild(p2);
        let p3 = document.createElement("div");
        p3.textContent = lowerTangueConsonantsConceptArray[i] + "相";
        p3.classList.add("adjective-aspect");
        th.appendChild(p3);
        tr.appendChild(th);
        for (let j = 0; j < upperTangueConsonantsArray.length; j++) {
            let td = document.createElement("td");
            let p = document.createElement("div");
            p.classList.add("zosokw", "adjective-conjugation-form-consonant");
            p.append(lowerTangueConsonantsArray[i], "\u{25CC}\u{25CC}\u{25CC}u", upperTangueConsonantsArray[j]);
            td.appendChild(p);
            let p2 = document.createElement("div");
            p2.append(lowerTangueConsonantsConceptArray[i] + "相", document.createElement("wbr"), upperTangueConsonantsConceptArray[j] + "形");
            p2.classList.add("adjective-conjugation-form");
            td.appendChild(p2);
            tr.appendChild(td);
        }
        tbody.appendChild(tr);
    }
    table.appendChild(tbody);
    document.querySelectorAll(".adjective-conjugation-table").forEach(function (element) {
        element.appendChild(table.cloneNode(true));
    });
}

function generateParticleConjugationTable() {
    let table = document.createElement("table");
    let caption = document.createElement("caption");
    caption.textContent = "助詞活用表";
    table.appendChild(caption);
    let thead = document.createElement("thead");
    let conjunctHorizontal = document.createElement("tr");
    let blank = document.createElement("th");
    blank.textContent = "";
    conjunctHorizontal.appendChild(blank);
    for (let i = 0; i < middleTangueConsonantsArray.length; i++) {
        let th = document.createElement("th");
        let p = document.createElement("div");
        p.textContent = "\u{25CC}\u{25CC}\u{25CC}o" + middleTangueConsonantsArray[i];
        p.classList.add("zosokw", "particle-tense-consonant");
        th.appendChild(p);
        let p2 = document.createElement("div");
        p2.textContent = middleTangueConsonantsConceptArray[i] + "形";
        p2.classList.add("particle-tense");
        th.appendChild(p2);
        conjunctHorizontal.appendChild(th);
    }
    thead.appendChild(conjunctHorizontal);
    table.appendChild(thead);
    let tbody = document.createElement("tbody");
    for (let i = 0; i < upperTangueConsonantsArray.length; i++) {
        let tr = document.createElement("tr");
        let th = document.createElement("th");
        let p = document.createElement("div");
        p.textContent = upperTangueConsonantsArray[i] + "\u{25CC}\u{25CC}\u{25CC}o";
        p.classList.add("zosokw", "particle-aspect-consonant");
        th.appendChild(p);
        let p2 = document.createElement("div");
        p2.textContent = upperTangueConsonantsConceptArray[i] + "相";
        p2.classList.add("particle-aspect");
        th.appendChild(p2);
        tr.appendChild(th);
        for (let j = 0; j < middleTangueConsonantsArray.length; j++) {
            let td = document.createElement("td");
            let p = document.createElement("div");
            p.classList.add("zosokw", "particle-conjugation-form-consonant");
            p.append(upperTangueConsonantsArray[i], "\u{25CC}\u{25CC}\u{25CC}o", middleTangueConsonantsArray[j]);
            td.appendChild(p);
            let p2 = document.createElement("div");
            p2.append(upperTangueConsonantsConceptArray[i] + "相", document.createElement("wbr"), middleTangueConsonantsConceptArray[j] + "形");
            p2.classList.add("particle-conjugation-form");
            td.appendChild(p2);
            tr.appendChild(td);
        }
        tbody.appendChild(tr);
    }
    table.appendChild(tbody);
    document.querySelectorAll(".particle-conjugation-table").forEach(function (element) {
        element.appendChild(table.cloneNode(true));
    });
}

function generateAdverbConjugationTable() {
    let table = document.createElement("table");
    let caption = document.createElement("caption");
    caption.textContent = "副詞活用表";
    table.appendChild(caption);
    let thead = document.createElement("thead");
    let conjunctHorizontal = document.createElement("tr");
    let blank = document.createElement("th");
    blank.textContent = "";
    conjunctHorizontal.appendChild(blank);
    for (let i = 0; i < middleTangueConsonantsArray.length; i++) {
        let th = document.createElement("th");
        let p = document.createElement("div");
        p.textContent = "\u{25CC}\u{25CC}\u{25CC}u" + middleTangueConsonantsArray[i];
        p.classList.add("zosokw", "adverb-tense-consonant");
        th.appendChild(p);
        let p2 = document.createElement("div");
        p2.textContent = middleTangueConsonantsConceptArray[i] + "形";
        p2.classList.add("adverb-tense");
        th.appendChild(p2);
        conjunctHorizontal.appendChild(th);
    }
    thead.appendChild(conjunctHorizontal);
    table.appendChild(thead);
    let tbody = document.createElement("tbody");
    for (let i = 0; i < lowerTangueConsonantsArray.length; i++) {
        let tr = document.createElement("tr");
        let th = document.createElement("th");
        let p = document.createElement("div");
        p.textContent = lowerTangueConsonantsArray[i] + "\u{25CC}\u{25CC}\u{25CC}u";
        p.classList.add("zosokw", "adverb-aspect-consonant");
        th.appendChild(p);
        let p2 = document.createElement("div");
        p2.textContent = lowerTangueConsonantsConceptArray[i] + "相";
        p2.classList.add("adverb-aspect");
        th.appendChild(p2);
        tr.appendChild(th);
        for (let j = 0; j < middleTangueConsonantsArray.length; j++) {
            let td = document.createElement("td");
            let p = document.createElement("div");
            p.classList.add("zosokw", "adverb-conjugation-form-consonant");
            p.append(lowerTangueConsonantsArray[i], "\u{25CC}\u{25CC}\u{25CC}u", middleTangueConsonantsArray[j]);
            td.appendChild(p);
            let p2 = document.createElement("div");
            p2.append(lowerTangueConsonantsConceptArray[i] + "相", document.createElement("wbr"), middleTangueConsonantsConceptArray[j] + "形");
            p2.classList.add("adverb-conjugation-form");
            td.appendChild(p2);
            tr.appendChild(td);
        }
        tbody.appendChild(tr);
    }
    table.appendChild(tbody);
    document.querySelectorAll(".adverb-conjugation-table").forEach(function (element) {
        element.appendChild(table.cloneNode(true));
    });
}

function generateNounConjugationTable() {
    let table = document.createElement("table");
    let caption = document.createElement("caption");
    caption.textContent = "名詞活用表";
    table.appendChild(caption);
    let thead = document.createElement("thead");
    let conjunctHorizontal = document.createElement("tr");
    let blank = document.createElement("th");
    blank.textContent = "";
    conjunctHorizontal.appendChild(blank);
    for (let i = 0; i < upperTangueConsonantsArray.length; i++) {
        let th = document.createElement("th");
        let p = document.createElement("div");
        p.textContent = "\u{25CC}\u{25CC}\u{25CC}u" + upperTangueConsonantsArray[i];
        p.classList.add("zosokw", "noun-tense-consonant");
        th.appendChild(p);
        let p2 = document.createElement("div");
        p2.textContent = upperTangueConsonantsConceptArray[i] + "形";
        p2.classList.add("noun-tense");
        th.appendChild(p2);
        conjunctHorizontal.appendChild(th);
    }
    thead.appendChild(conjunctHorizontal);
    table.appendChild(thead);
    let tbody = document.createElement("tbody");
    for (let i = 0; i < lowerTangueConsonantsArray.length; i++) {
        let tr = document.createElement("tr");
        let th = document.createElement("th");
        let p = document.createElement("div");
        p.textContent = lowerTangueConsonantsArray[i] + "\u{25CC}\u{25CC}\u{25CC}u";
        p.classList.add("zosokw", "noun-aspect-consonant");
        th.appendChild(p);
        let p2 = document.createElement("div");
        p2.textContent = lowerTangueConsonantsConceptArray[i] + "相";
        p2.classList.add("noun-aspect");
        th.appendChild(p2);
        tr.appendChild(th);
        for (let j = 0; j < upperTangueConsonantsArray.length; j++) {
            let td = document.createElement("td");
            let p = document.createElement("div");
            p.classList.add("zosokw", "noun-conjugation-form-consonant");
            p.append(lowerTangueConsonantsArray[i], "\u{25CC}\u{25CC}\u{25CC}u", upperTangueConsonantsArray[j]);
            td.appendChild(p);
            let p2 = document.createElement("div");
            p2.append(lowerTangueConsonantsConceptArray[i] + "相", document.createElement("wbr"), upperTangueConsonantsConceptArray[j] + "形");
            p2.classList.add("noun-conjugation-form");
            td.appendChild(p2);
            tr.appendChild(td);
        }
        tbody.appendChild(tr);
    }
    table.appendChild(tbody);
    document.querySelectorAll(".noun-conjugation-table").forEach(function (element) {
        element.appendChild(table.cloneNode(true));
    });
}

window.onload = function () {
    generateConsonantsPronunciationTable();
    generateVowelsPronunciationTable();
    generateConsonantsConceptTable();
    generatePrefixConsonantsTable();
    generateSuffixConsonantsTable();
    generateCircumfixConsonantsTable();
    generateFirstCaseTable();
    generateSecondCaseTable();
    generateConjunctCaseTable();
    generatePreffixCaseTable();
    generateSuffixCaseTable();
    generatePartOfSpeechTable();
    generateArticleConjugationTable();
    generateVerbConjugationTable();
    generateAdjectiveConjugationTable();
    generateParticleConjugationTable();
    generateAdverbConjugationTable();
    generateNounConjugationTable();
}
