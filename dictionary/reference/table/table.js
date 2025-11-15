const consonantsArray = ["k", "g", "t", "d", "s", "z", "q", "c", "r", "l", "p", "b", "h", "x", "f", "v", "m", "n"];
const consonantsConceptArray = ["剥離", "癒着", "乖離", "同一", "肉体", "精神", "空白", "物質", "過去", "未来", "鎮静", "高揚", "受動", "能動", "創造", "破壊", "流動", "固定"];
const consonantsPronunciationArray = ["k", "g", "t", "d", "s", "z", "\u{0294}", "\u{0295}", "r", "l", "p", "b", "h", "x", "f", "v", "m", "n"];

const consonantsPronunciationHorizontalArray = ["喉音", "舌先音", "唇音"];
const consonantsPronunciationVerticalArray = ["上舌音", "中舌音", "下唇音"];
const consonantsPronunciationHorizontalClassArray = ["弱震音", "強震音"];

const vowels = ["a", "e", "i", "o", "u", "w"];
const vowelsCasesArray = ["否", "与", "属", "対", "主", "流"];
const vowelsPartOfSpeechTypesArray = ["附", "動", "容", "助", "副", "名"];
const vowelsPronunciationArray = ["a", "e", "i", "o", "u", "\u{2205}"];

const vowelsPronunciationHorizontalArray = [""];
const vowelsPronunciationVerticalArray = [""];
const vowelsPartOfSpeechTypesHorizontalArray = ["限定", "動作", "状態"];
const vowelsPartOfSpeechTypesVerticalArray = ["核", "補助"];

function generateConsonantTable() {
    let table = document.createElement("table");
    let caption = document.createElement("caption");
    caption.textContent = "子音表";
    table.appendChild(caption);
    let thead = document.createElement("thead");
    let tr = document.createElement("tr");
    let th = document.createElement("th");
    th.textContent = "";
    th.rowSpan = 2;
    tr.appendChild(th);
    for (let i = 0; i < consonantsPronunciationHorizontalArray.length; i++) {
        let consonantsPronunciationHorizontal = document.createElement("th");
        consonantsPronunciationHorizontal.textContent = consonantsPronunciationHorizontalArray[i];
        consonantsPronunciationHorizontal.colSpan = 2;
        tr.appendChild(consonantsPronunciationHorizontal);
    }
    thead.appendChild(tr);
    let tr2 = document.createElement("tr");
    for (let i = 0; i < consonantsPronunciationHorizontalArray.length; i++) {
        for (let j = 0; j < consonantsPronunciationHorizontalClassArray.length; j++) {
            let th = document.createElement("th");
            th.textContent = consonantsPronunciationHorizontalClassArray[j];
            tr2.appendChild(th);
        }
    }
    thead.appendChild(tr2);
    table.appendChild(thead);
    let tbody = document.createElement("tbody");
    let tr3 = document.createElement("tr");
    let th5 = document.createElement("th");
    th5.textContent = "上舌音";
    tr3.appendChild(th5);
    for (let i = 0; i < 6; i++) {
        let td = document.createElement("td");
        let p = document.createElement("div");
        p.textContent = consonantsArray[i];
        p.classList.add("zosokw");
        td.appendChild(p);
        let p2 = document.createElement("div");
        p2.textContent = "[" + consonantsPronunciationArray[i] + "]";
        p2.classList.add("pronunciation");
        td.appendChild(p2);
        tr3.appendChild(td);
    }
    tbody.appendChild(tr3);
    let tr4 = document.createElement("tr");
    let th6 = document.createElement("th");
    th6.textContent = "中舌音";
    tr4.appendChild(th6);
    for (let i = 6; i < 12; i++) {
        let td = document.createElement("td");
        let p = document.createElement("div");
        p.textContent = consonantsArray[i];
        p.classList.add("zosokw");
        td.appendChild(p);
        let p2 = document.createElement("div");
        p2.textContent = "[" + consonantsPronunciationArray[i] + "]";
        p2.classList.add("pronunciation");
        td.appendChild(p2);
        tr4.appendChild(td);
    }
    tbody.appendChild(tr4);
    let tr5 = document.createElement("tr");
    let th7 = document.createElement("th");
    th7.textContent = "下唇音";
    tr5.appendChild(th7);
    for (let i = 12; i < 18; i++) {
        let td = document.createElement("td");
        let p = document.createElement("div");
        p.textContent = consonantsArray[i];
        p.classList.add("zosokw");
        td.appendChild(p);
        let p2 = document.createElement("div");
        p2.textContent = "[" + consonantsPronunciationArray[i] + "]";
        p2.classList.add("pronunciation");
        td.appendChild(p2);
        tr5.appendChild(td);
    }
    tbody.appendChild(tr5);
    table.appendChild(tbody);
    document.querySelectorAll(".consonant-table").forEach(function (element) {
        element.appendChild(table.cloneNode(true));
    });
}

function generateVowelTable() {
    let table = document.createElement("table");
    let caption = document.createElement("caption");
    caption.textContent = "母音表";
    table.appendChild(caption);
    let thead = document.createElement("thead");
    let tr = document.createElement("tr");
    let th = document.createElement("th");
    th.textContent = "";
    tr.appendChild(th);
    let th2 = document.createElement("th");
    th2.textContent = "広母音";
    tr.appendChild(th2);
    let th3 = document.createElement("th");
    th3.textContent = "中母音";
    tr.appendChild(th3);
    let th4 = document.createElement("th");
    th4.textContent = "狭母音";
    tr.appendChild(th4);
    thead.appendChild(tr);
    table.appendChild(thead);
    let tbody = document.createElement("tbody");
    let tr2 = document.createElement("tr");
    let th5 = document.createElement("th");
    th5.textContent = "非円唇母音";
    tr2.appendChild(th5);
    for (let i = 0; i < 3; i++) {
        let td = document.createElement("td");
        let p = document.createElement("div");
        p.textContent = "\u{25CC}" + vowels[i];
        p.classList.add("zosokw");
        td.appendChild(p);
        let p2 = document.createElement("div");
        p2.textContent = "[" + vowelsPronunciationArray[i] + "]";
        p2.classList.add("pronunciation");
        td.appendChild(p2);
        tr2.appendChild(td);
    }
    tbody.appendChild(tr2);
    let tr3 = document.createElement("tr");
    let th6 = document.createElement("th");
    th6.textContent = "円唇母音";
    tr3.appendChild(th6);
    for (let i = 3; i < 6; i++) {
        let td = document.createElement("td");
        let p = document.createElement("div");
        p.textContent = "\u{25CC}" + vowels[i];
        p.classList.add("zosokw");
        td.appendChild(p);
        let p2 = document.createElement("div");
        p2.textContent = "[" + vowelsPronunciationArray[i] + "]";
        p2.classList.add("pronunciation");
        td.appendChild(p2);
        tr3.appendChild(td);
    }
    tbody.appendChild(tr3);
    table.appendChild(tbody);
    document.querySelectorAll(".vowel-table").forEach(function (element) {
        element.appendChild(table.cloneNode(true));
    });
}

function generateConsonantConceptTable() {
    let table = document.createElement("table");
    let caption = document.createElement("caption");
    caption.textContent = "子音概念表";
    table.appendChild(caption);
    let thead = document.createElement("thead");
    let tr = document.createElement("tr");
    let th = document.createElement("th");
    th.textContent = "";
    th.rowSpan = 2;
    tr.appendChild(th);
    let th2 = document.createElement("th");
    th2.textContent = "喉音";
    th2.colSpan = 2;
    tr.appendChild(th2);
    let th3 = document.createElement("th");
    th3.textContent = "舌先音";
    th3.colSpan = 2;
    tr.appendChild(th3);
    let th4 = document.createElement("th");
    th4.textContent = "唇音";
    th4.colSpan = 2;
    tr.appendChild(th4);
    thead.appendChild(tr);
    let tr2 = document.createElement("tr");
    for (let i = 0; i < 3; i++) {
        let th = document.createElement("th");
        th.textContent = "弱震音";
        tr2.appendChild(th);
        let th2 = document.createElement("th");
        th2.textContent = "強震音";
        tr2.appendChild(th2);
    }
    thead.appendChild(tr2);
    table.appendChild(thead);
    let tbody = document.createElement("tbody");
    let tr3 = document.createElement("tr");
    let th5 = document.createElement("th");
    th5.textContent = "上舌音";
    tr3.appendChild(th5);
    for (let i = 0; i < 6; i++) {
        let td = document.createElement("td");
        let p = document.createElement("div");
        p.textContent = consonantsArray[i];
        p.classList.add("zosokw");
        td.appendChild(p);
        let p2 = document.createElement("div");
        p2.textContent = consonantsConceptArray[i];
        p2.classList.add("root");
        td.appendChild(p2);
        tr3.appendChild(td);
    }
    tbody.appendChild(tr3);
    let tr4 = document.createElement("tr");
    let th6 = document.createElement("th");
    th6.textContent = "中舌音";
    tr4.appendChild(th6);
    for (let i = 6; i < 12; i++) {
        let td = document.createElement("td");
        let p = document.createElement("div");
        p.textContent = consonantsArray[i];
        p.classList.add("zosokw");
        td.appendChild(p);
        let p2 = document.createElement("div");
        p2.textContent = consonantsConceptArray[i];
        p2.classList.add("root");
        td.appendChild(p2);
        tr4.appendChild(td);
    }
    tbody.appendChild(tr4);
    let tr5 = document.createElement("tr");
    let th7 = document.createElement("th");
    th7.textContent = "下唇音";
    tr5.appendChild(th7);
    for (let i = 12; i < 18; i++) {
        let td = document.createElement("td");
        let p = document.createElement("div");
        p.textContent = consonantsArray[i];
        p.classList.add("zosokw");
        td.appendChild(p);
        let p2 = document.createElement("div");
        p2.textContent = consonantsConceptArray[i];
        p2.classList.add("root");
        td.appendChild(p2);
        tr5.appendChild(td);
    }
    tbody.appendChild(tr5);
    table.appendChild(tbody);
    document.querySelectorAll(".consonant-concept-table").forEach(function (element) {
        element.appendChild(table.cloneNode(true));
    });
}

function generateFirstCaseTable() {
    let table = document.createElement("table");
    let caption = document.createElement("caption");
    caption.textContent = "前置格表";
    table.appendChild(caption);
    let thead = document.createElement("thead");
    let tr = document.createElement("tr");
    let th = document.createElement("th");
    th.textContent = "";
    tr.appendChild(th);
    let th2 = document.createElement("th");
    th2.textContent = "広母音";
    tr.appendChild(th2);
    let th3 = document.createElement("th");
    th3.textContent = "中母音";
    tr.appendChild(th3);
    let th4 = document.createElement("th");
    th4.textContent = "狭母音";
    tr.appendChild(th4);
    thead.appendChild(tr);
    table.appendChild(thead);
    let tbody = document.createElement("tbody");
    let tr2 = document.createElement("tr");
    let th5 = document.createElement("th");
    th5.textContent = "非円唇母音";
    tr2.appendChild(th5);
    for (let i = 0; i < 3; i++) {
        let td = document.createElement("td");
        let p = document.createElement("div");
        p.textContent = "\u{25CC}" + vowels[i] + "\u{25CC}\u{25CC}";
        p.classList.add("zosokw");
        td.appendChild(p);
        let p2 = document.createElement("div");
        p2.textContent = vowelsCasesArray[i] + "格";
        p2.classList.add("cases");
        td.appendChild(p2);
        tr2.appendChild(td);
    }
    tbody.appendChild(tr2);
    let tr3 = document.createElement("tr");
    let th6 = document.createElement("th");
    th6.textContent = "円唇母音";
    tr3.appendChild(th6);
    for (let i = 3; i < 6; i++) {
        let td = document.createElement("td");
        let p = document.createElement("div");
        p.textContent = "\u{25CC}" + vowels[i] + "\u{25CC}\u{25CC}";
        p.classList.add("zosokw");
        td.appendChild(p);
        let p2 = document.createElement("div");
        p2.textContent = vowelsCasesArray[i] + "格";
        p2.classList.add("cases");
        td.appendChild(p2);
        tr3.appendChild(td);
    }
    tbody.appendChild(tr3);
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
    let tr = document.createElement("tr");
    let th = document.createElement("th");
    th.textContent = "";
    tr.appendChild(th);
    let th2 = document.createElement("th");
    th2.textContent = "広母音";
    tr.appendChild(th2);
    let th3 = document.createElement("th");
    th3.textContent = "中母音";
    tr.appendChild(th3);
    let th4 = document.createElement("th");
    th4.textContent = "狭母音";
    tr.appendChild(th4);
    thead.appendChild(tr);
    table.appendChild(thead);
    let tbody = document.createElement("tbody");
    let tr2 = document.createElement("tr");
    let th5 = document.createElement("th");
    th5.textContent = "非円唇母音";
    tr2.appendChild(th5);
    for (let i = 0; i < 3; i++) {
        let td = document.createElement("td");
        let p = document.createElement("div");
        p.textContent = "\u{25CC}\u{25CC}" + vowels[i] + "\u{25CC}";
        p.classList.add("zosokw");
        td.appendChild(p);
        let p2 = document.createElement("div");
        p2.textContent = vowelsCasesArray[i] + "格";
        p2.classList.add("cases");
        td.appendChild(p2);
        tr2.appendChild(td);
    }
    tbody.appendChild(tr2);
    let tr3 = document.createElement("tr");
    let th6 = document.createElement("th");
    th6.textContent = "円唇母音";
    tr3.appendChild(th6);
    for (let i = 3; i < 6; i++) {
        let td = document.createElement("td");
        let p = document.createElement("div");
        p.textContent = "\u{25CC}\u{25CC}" + vowels[i] + "\u{25CC}";
        p.classList.add("zosokw");
        td.appendChild(p);
        let p2 = document.createElement("div");
        p2.textContent = vowelsCasesArray[i] + "格";
        p2.classList.add("cases");
        td.appendChild(p2);
        tr3.appendChild(td);
    }
    tbody.appendChild(tr3);
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
    th2.colSpan = vowels.length;
    tr.appendChild(th2);

    thead.appendChild(tr);

    let tr2 = document.createElement("tr");
    vowels.forEach((vowel, i) => {
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

    vowels.forEach((vowel1, i) => {
        let tr = document.createElement("tr");
        let th = document.createElement("th");
        th.appendChild(createParagraph("\u{25CC}" + "\u{25CC}" + vowel1 + "\u{25CC}", "zosokw"));
        th.appendChild(createParagraph(vowelsCasesArray[i] + "格", "case"));
        tr.appendChild(th);

        vowels.forEach((vowel2, j) => {
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
    let tr = document.createElement("tr");
    let th = document.createElement("th");
    th.textContent = "";
    tr.appendChild(th);
    let th2 = document.createElement("th");
    th2.textContent = "広母音";
    tr.appendChild(th2);
    let th3 = document.createElement("th");
    th3.textContent = "中母音";
    tr.appendChild(th3);
    let th4 = document.createElement("th");
    th4.textContent = "狭母音";
    tr.appendChild(th4);
    thead.appendChild(tr);
    table.appendChild(thead);
    let tbody = document.createElement("tbody");
    let tr2 = document.createElement("tr");
    let th5 = document.createElement("th");
    th5.textContent = "非円唇母音";
    tr2.appendChild(th5);
    for (let i = 0; i < 3; i++) {
        let td = document.createElement("td");
        let p = document.createElement("div");
        p.textContent = "\u{25CC}" + vowels[i] + "\u{25CC}\u{25CC}\u{25CC}";
        p.classList.add("zosokw");
        td.appendChild(p);
        let p2 = document.createElement("div");
        p2.textContent = vowelsCasesArray[i] + "格";
        p2.classList.add("cases");
        td.appendChild(p2);
        tr2.appendChild(td);
    }
    tbody.appendChild(tr2);
    let tr3 = document.createElement("tr");
    let th6 = document.createElement("th");
    th6.textContent = "円唇母音";
    tr3.appendChild(th6);
    for (let i = 3; i < 6; i++) {
        let td = document.createElement("td");
        let p = document.createElement("div");
        p.textContent = "\u{25CC}" + vowels[i] + "\u{25CC}\u{25CC}\u{25CC}";
        p.classList.add("zosokw");
        td.appendChild(p);
        let p2 = document.createElement("div");
        p2.textContent = vowelsCasesArray[i] + "格";
        p2.classList.add("cases");
        td.appendChild(p2);
        tr3.appendChild(td);
    }
    tbody.appendChild(tr3);
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
    let tr = document.createElement("tr");
    let th = document.createElement("th");
    th.textContent = "";
    tr.appendChild(th);
    let th2 = document.createElement("th");
    th2.textContent = "広母音";
    tr.appendChild(th2);
    let th3 = document.createElement("th");
    th3.textContent = "中母音";
    tr.appendChild(th3);
    let th4 = document.createElement("th");
    th4.textContent = "狭母音";
    tr.appendChild(th4);
    thead.appendChild(tr);
    table.appendChild(thead);
    let tbody = document.createElement("tbody");
    let tr2 = document.createElement("tr");
    let th5 = document.createElement("th");
    th5.textContent = "非円唇母音";
    tr2.appendChild(th5);
    for (let i = 0; i < 3; i++) {
        let td = document.createElement("td");
        let p = document.createElement("div");
        p.textContent = "\u{25CC}\u{25CC}\u{25CC}\u{25CC}" + vowels[i];
        p.classList.add("zosokw");
        td.appendChild(p);
        let p2 = document.createElement("div");
        p2.textContent = vowelsCasesArray[i] + "格";
        p2.classList.add("cases");
        td.appendChild(p2);
        tr2.appendChild(td);
    }
    tbody.appendChild(tr2);
    let tr3 = document.createElement("tr");
    let th6 = document.createElement("th");
    th6.textContent = "円唇母音";
    tr3.appendChild(th6);
    for (let i = 3; i < 6; i++) {
        let td = document.createElement("td");
        let p = document.createElement("div");
        p.textContent = "\u{25CC}\u{25CC}\u{25CC}\u{25CC}" + vowels[i];
        p.classList.add("zosokw");
        td.appendChild(p);
        let p2 = document.createElement("div");
        p2.textContent = vowelsCasesArray[i] + "格";
        p2.classList.add("cases");
        td.appendChild(p2);
        tr3.appendChild(td);
    }
    tbody.appendChild(tr3);
    table.appendChild(tbody);
    document.querySelectorAll(".suffix-case-table").forEach(function (element) {
        element.appendChild(table.cloneNode(true));
    });
}

function generateCaseOfSpeechTable() {
    let table = document.createElement("table");
    let caption = document.createElement("caption");
    caption.textContent = "品詞表";
    table.appendChild(caption);
    let thead = document.createElement("thead");
    let tr = document.createElement("tr");
    let th = document.createElement("th");
    th.textContent = "";
    tr.appendChild(th);
    let th2 = document.createElement("th");
    th2.textContent = "限定符";
    tr.appendChild(th2);
    let th3 = document.createElement("th");
    th3.textContent = "動作符";
    tr.appendChild(th3);
    let th4 = document.createElement("th");
    th4.textContent = "状態符";
    tr.appendChild(th4);
    thead.appendChild(tr);
    table.appendChild(thead);
    let tbody = document.createElement("tbody");
    let tr2 = document.createElement("tr");
    let th5 = document.createElement("th");
    th5.textContent = "文法核";
    tr2.appendChild(th5);
    for (let i = 0; i < 3; i++) {
        let td = document.createElement("td");
        let p = document.createElement("div");
        p.textContent = "\u{25CC}\u{25CC}\u{25CC}" + vowels[i];
        p.classList.add("zosokw");
        td.appendChild(p);
        let p2 = document.createElement("div");
        p2.textContent = vowelsPartOfSpeechTypesArray[i] + "詞";
        p2.classList.add("part-of-speech");
        td.appendChild(p2);
        tr2.appendChild(td);
    }
    tbody.appendChild(tr2);
    let tr3 = document.createElement("tr");
    let th6 = document.createElement("th");
    th6.textContent = "文法補助";
    tr3.appendChild(th6);
    for (let i = 3; i < 6; i++) {
        let td = document.createElement("td");
        let p = document.createElement("div");
        p.textContent = "\u{25CC}\u{25CC}\u{25CC}" + vowels[i];
        p.classList.add("zosokw");
        td.appendChild(p);
        let p2 = document.createElement("div");
        p2.textContent = vowelsPartOfSpeechTypesArray[i] + "詞";
        p2.classList.add("part-of-speech");
        td.appendChild(p2);
        tr3.appendChild(td);
    }
    tbody.appendChild(tr3);
    table.appendChild(tbody);
    document.querySelectorAll(".case-of-speech-table").forEach(function (element) {
        element.appendChild(table.cloneNode(true));
    });
}

function generateArticleConjugationTable() {
    let table = document.createElement("table");
    let caption = document.createElement("caption");
    caption.textContent = "附詞活用表";
    table.appendChild(caption);
    let thead = document.createElement("thead");
    let tr = document.createElement("tr");
    let th = document.createElement("th");
    th.textContent = "";
    tr.appendChild(th);
    thead.appendChild(tr);
    table.appendChild(thead);
    let tbody = document.createElement("tbody");
    let tr2 = document.createElement("tr");
    let td = document.createElement("td");
    let p2 = document.createElement("div");
    p2.classList.add("zosokw");
    let span = document.createElement("span");
    span.classList.add("original-form");
    span.textContent = "\u{25CC}\u{25CC}\u{25CC}a";
    p2.appendChild(span);
    td.appendChild(p2);
    tr2.appendChild(td);
    tbody.appendChild(tr2);
    table.appendChild(tbody);
    document.querySelectorAll(".article-conjugation-table").forEach(function (element) {
        element.appendChild(table.cloneNode(true));
    });
}

const tenseArray = ["空白", "物質", "過去", "未来", "鎮静", "高揚"];
const aspectArray = ["受動", "能動", "創造", "破壊", "流動", "固定"];

const tenseConsonantsArray = ["q", "c", "r", "l", "p", "b"];
const aspectConsonantsArray = ["h", "x", "f", "v", "m", "n"];

function generateVerbConjugationTable() {
    let table = document.createElement("table");
    let caption = document.createElement("caption");
    caption.textContent = "動詞活用表";
    table.appendChild(caption);
    let thead = document.createElement("thead");
    let tr = document.createElement("tr");
    let th = document.createElement("th");
    th.textContent = "";
    tr.appendChild(th);
    for (let i = 0; i < tenseConsonantsArray.length; i++) {
        let th = document.createElement("th");
        let p = document.createElement("div");
        p.textContent = "\u{25CC}\u{25CC}\u{25CC}e" + tenseConsonantsArray[i];
        p.classList.add("zosokw", "verb-tense-consonant");
        th.appendChild(p);
        let p2 = document.createElement("div");
        p2.textContent = tenseArray[i] + "形";
        p2.classList.add("verb-tense");
        th.appendChild(p2);
        tr.appendChild(th);
    }
    thead.appendChild(tr);
    table.appendChild(thead);
    let tbody = document.createElement("tbody");
    for (let i = 0; i < aspectConsonantsArray.length; i++) {
        let tr = document.createElement("tr");
        let th = document.createElement("th");
        let p = document.createElement("div");
        p.textContent = aspectConsonantsArray[i] + "\u{25CC}\u{25CC}\u{25CC}e";
        p.classList.add("zosokw", "verb-aspect-consonant");
        th.appendChild(p);
        let p2 = document.createElement("div");
        p2.textContent = aspectArray[i] + "相";
        p2.classList.add("verb-aspect");
        th.appendChild(p2);
        tr.appendChild(th);
        for (let j = 0; j < tenseConsonantsArray.length; j++) {
            let td = document.createElement("td");
            let p = document.createElement("div");
            p.classList.add("zosokw", "conjugation-form-consonant");
            p.appendChild(document.createTextNode(aspectConsonantsArray[i]));
            let span = document.createElement("span");
            span.classList.add("original-form");
            span.textContent = "\u{25CC}\u{25CC}\u{25CC}e";
            p.appendChild(span);
            p.appendChild(document.createTextNode(tenseConsonantsArray[j]));
            td.appendChild(p);
            let p2 = document.createElement("div");
            p2.textContent = aspectArray[i] + "相" + tenseArray[j] + "形";
            p2.classList.add("conjugation-form");
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
    let tr = document.createElement("tr");
    let th = document.createElement("th");
    th.textContent = "";
    tr.appendChild(th);
    thead.appendChild(tr);
    table.appendChild(thead);
    let tbody = document.createElement("tbody");
    let tr2 = document.createElement("tr");
    let td = document.createElement("td");
    let p2 = document.createElement("div");
    p2.classList.add("zosokw");
    let span = document.createElement("span");
    span.classList.add("original-form");
    span.textContent = "\u{25CC}\u{25CC}\u{25CC}i";
    p2.appendChild(span);
    td.appendChild(p2);
    tr2.appendChild(td);
    tbody.appendChild(tr2);
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
    let tr = document.createElement("tr");
    let th = document.createElement("th");
    th.textContent = "";
    tr.appendChild(th);
    thead.appendChild(tr);
    table.appendChild(thead);
    let tbody = document.createElement("tbody");
    let tr2 = document.createElement("tr");
    let td = document.createElement("td");
    let p2 = document.createElement("div");
    p2.classList.add("zosokw");
    let span = document.createElement("span");
    span.classList.add("original-form");
    span.textContent = "\u{25CC}\u{25CC}\u{25CC}o";
    p2.appendChild(span);
    td.appendChild(p2);
    tr2.appendChild(td);
    tbody.appendChild(tr2);
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
    let tr = document.createElement("tr");
    let th = document.createElement("th");
    th.textContent = "";
    tr.appendChild(th);
    for (let i = 0; i < tenseConsonantsArray.length; i++) {
        let th = document.createElement("th");
        let p = document.createElement("div");
        p.textContent = "\u{25CC}\u{25CC}\u{25CC}u" + tenseConsonantsArray[i];
        p.classList.add("zosokw", "adverb-tense-consonant");
        th.appendChild(p);
        let p2 = document.createElement("div");
        p2.textContent = tenseArray[i] + "形";
        p2.classList.add("adverb-tense");
        th.appendChild(p2);
        tr.appendChild(th);
    }
    thead.appendChild(tr);
    table.appendChild(thead);
    let tbody = document.createElement("tbody");
    for (let i = 0; i < aspectConsonantsArray.length; i++) {
        let tr = document.createElement("tr");
        let th = document.createElement("th");
        let p = document.createElement("div");
        p.textContent = aspectConsonantsArray[i] + "\u{25CC}\u{25CC}\u{25CC}u";
        p.classList.add("zosokw", "adverb-aspect-consonant");
        th.appendChild(p);
        let p2 = document.createElement("div");
        p2.textContent = aspectArray[i] + "相";
        p2.classList.add("adverb-aspect");
        th.appendChild(p2);
        tr.appendChild(th);
        for (let j = 0; j < tenseConsonantsArray.length; j++) {
            let td = document.createElement("td");
            let p = document.createElement("div");
            p.classList.add("zosokw", "adverb-conjugation-form-consonant");
            p.appendChild(document.createTextNode(aspectConsonantsArray[i]));
            let span = document.createElement("span");
            span.classList.add("original-form");
            span.textContent = "\u{25CC}\u{25CC}\u{25CC}u";
            p.appendChild(span);
            p.appendChild(document.createTextNode(tenseConsonantsArray[j]));
            td.appendChild(p);
            let p2 = document.createElement("div");
            p2.textContent = aspectArray[i] + "相" + tenseArray[j] + "形";
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
    let tr = document.createElement("tr");
    let th = document.createElement("th");
    th.textContent = "";
    tr.appendChild(th);
    thead.appendChild(tr);
    table.appendChild(thead);
    let tbody = document.createElement("tbody");
    let tr2 = document.createElement("tr");
    let td = document.createElement("td");
    let p2 = document.createElement("div");
    p2.classList.add("zosokw");
    let span = document.createElement("span");
    span.classList.add("original-form");
    span.textContent = "\u{25CC}\u{25CC}\u{25CC}w";
    p2.appendChild(span);
    td.appendChild(p2);
    tr2.appendChild(td);
    tbody.appendChild(tr2);
    table.appendChild(tbody);
    document.querySelectorAll(".noun-conjugation-table").forEach(function (element) {
        element.appendChild(table.cloneNode(true));
    });
}

window.onload = function () {
    generateConsonantTable();
    generateVowelTable();
    generateConsonantConceptTable();
    generateFirstCaseTable();
    generateSecondCaseTable();
    generateConjunctCaseTable();
    generatePreffixCaseTable();
    generateSuffixCaseTable();
    generateCaseOfSpeechTable();
    generateArticleConjugationTable();
    generateVerbConjugationTable();
    generateAdjectiveConjugationTable();
    generateParticleConjugationTable();
    generateAdverbConjugationTable();
    generateNounConjugationTable();
}

