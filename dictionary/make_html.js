const fs = require("fs").promises;
const path = require("path");
const { JSDOM } = require("jsdom");
const beautify = require("js-beautify").html;

const consonants = ["k", "g", "t", "d", "s", "z", "q", "c", "r", "l", "p", "b", "h", "x", "f", "v", "m", "n"];
const consonants_means = ["剥離", "癒着", "乖離", "同一", "肉体", "精神", "空白", "物質", "過去", "未来", "鎮静", "高揚", "受動", "能動", "創造", "破壊", "流動", "固定"];
const consonants_phonetics = ["k", "g", "t", "d", "s", "z", "ʔ", "ʕ", "r", "l", "p", "b", "h", "x", "f", "v", "m", "n"];

const vowels = ["a", "e", "i", "o", "u", "w"];
const vowels_cases = ["否", "与", "属", "対", "主", "流"];
const vowels_part_of_speech_types = ["付", "動", "容", "助", "副", "名"];
const vowels_phonetics = ["a", "e", "i", "o", "u", ""];

async function generateConsonants() {
    let filename = path.join("html_index", "index.html");

    const dom = new JSDOM("<!DOCTYPE html><head></head><body></body><html lang='ja'></html>");
    const document = dom.window.document;

    let head = document.head;
    let meta = document.createElement("meta");
    meta.setAttribute("charset", "UTF-8");
    head.appendChild(meta);

    let title = document.createElement("title");
    title.textContent = "子音見出し";
    head.appendChild(title);

    let link1 = document.createElement("link");
    link1.rel = "stylesheet";
    link1.href = "../style/pages.css";
    head.appendChild(link1);
    let link2 = document.createElement("link");
    link2.rel = "stylesheet";
    link2.href = "../style/consonants.css";
    head.appendChild(link2);
    let link3 = document.createElement("link");
    link3.rel = "stylesheet";
    link3.href = "../style/fonts.css";
    head.appendChild(link3);

    let body = document.body;
    let header = document.createElement("header");
    let ulHeader = document.createElement("ul");
    let liHeader1 = document.createElement("li");
    let aHeader1 = document.createElement("a");
    aHeader1.href = "../dictionary.html";
    aHeader1.textContent = "表紙へ戻る";
    liHeader1.appendChild(aHeader1);
    ulHeader.appendChild(liHeader1);
    header.appendChild(ulHeader)
    body.appendChild(header)

    let h1 = document.createElement("h1");
    h1.textContent = "子音見出し";
    body.appendChild(h1);

    let p = document.createElement("p");
    p.textContent = "このページは子音見出しに関する情報を表示します。"
    body.appendChild(p);

    let ul = document.createElement("ul");
    for (let i = 0; i < consonants.length; i++) {
        let li = document.createElement("li");
        let aUl = document.createElement("a");
        aUl.className = "piswpi";
        aUl.href = consonants[i] + ".html";
        aUl.textContent = consonants[i];
        li.appendChild(aUl);
        ul.appendChild(li);
    }
    body.appendChild(ul);

    let footer = document.createElement("footer");
    let ulFooter = document.createElement("ul");
    let liFooter1 = document.createElement("li");
    let aFooter1 = document.createElement("a");
    aFooter1.href = "../dictionary.html";
    aFooter1.textContent = "表紙へ戻る";
    liFooter1.appendChild(aFooter1);
    ulFooter.appendChild(liFooter1);
    footer.appendChild(ulFooter)
    body.appendChild(footer)

    let htmlContent = beautify(dom.serialize(), { indent_size: 4, space_in_empty_paren: true });

    try {
        await fs.writeFile(filename, htmlContent)
        console.log("ファイル" + filename + "を作成しました。");
    } catch (error) {
        console.error("ファイル" + filename + "を作成できませんでした。", error);
    }
}

async function generateIndex(i) {
    let filename = path.join("html_index", consonants[i] + ".html");

    const dom = new JSDOM("<!DOCTYPE html><html lang='ja'><head></head><body></body></html>");
    const document = dom.window.document;

    let head = document.head;
    let meta = document.createElement("meta");
    meta.setAttribute("charset", "UTF-8");
    head.appendChild(meta);

    let title = document.createElement("title");
    title.textContent = "頭文字" + consonants[i];
    head.appendChild(title);

    let link1 = document.createElement("link");
    link1.rel = "stylesheet";
    link1.href = "../style/pages.css";
    head.appendChild(link1);
    let link2 = document.createElement("link");
    link2.rel = "stylesheet";
    link2.href = "../style/index.css";
    head.appendChild(link2);
    let link3 = document.createElement("link");
    link3.rel = "stylesheet";
    link3.href = "../style/fonts.css";
    head.appendChild(link3);
    let link4 = document.createElement("link");
    link4.rel = "icon";
    link4.href = "../icon/" + consonants[i] + ".svg";
    head.appendChild(link4);

    let body = document.body;
    let header = document.createElement("header");
    let ulHeader = document.createElement("ul");
    let liHeader1 = document.createElement("li");
    let aHeader1 = document.createElement("a");
    aHeader1.href = "../dictionary.html";
    aHeader1.textContent = "表紙へ戻る";
    liHeader1.appendChild(aHeader1);
    ulHeader.appendChild(liHeader1);
    let liHeader2 = document.createElement("li");
    let aHeader2 = document.createElement("a");
    aHeader2.href = "index.html";
    aHeader2.textContent = "子音見出しへ戻る";
    liHeader2.appendChild(aHeader2);
    ulHeader.appendChild(liHeader2);
    header.appendChild(ulHeader)
    body.appendChild(header)

    let h1 = document.createElement("h1");
    let spanH1 = document.createElement("span");
    spanH1.className = "piswpi"
    spanH1.textContent = consonants[i];
    h1.appendChild(document.createTextNode("子音"));
    h1.appendChild(spanH1)
    h1.appendChild(document.createTextNode("の見出し"));
    body.appendChild(h1);

    let p = document.createElement("p");
    let span2 = document.createElement("span");
    span2.className = "piswpi"
    span2.textContent = consonants[i];
    p.appendChild(document.createTextNode("このページは"));
    p.appendChild(span2)
    p.appendChild(document.createTextNode("に関する情報を表示します。"));
    body.appendChild(p);

    let ul = document.createElement("ul");
    for (let j = 0; j < consonants.length; j++) {
        for (let k = 0; k < consonants.length; k++) {
            let li = document.createElement("li");
            let aUl = document.createElement("a");
            aUl.className = "piswpi";
            aUl.href = consonants[i] + "/" + consonants[i] + consonants[j] + consonants[k] + ".html";
            aUl.textContent = consonants[i] + consonants[j] + consonants[k];
            li.appendChild(aUl);
            ul.appendChild(li);
        };
    };
    body.appendChild(ul);

    let footer = document.createElement("footer");
    let ulFooter = document.createElement("ul");
    let liFooter1 = document.createElement("li");
    let aFooter1 = document.createElement("a");
    aFooter1.href = "../dictionary.html";
    aFooter1.textContent = "表紙へ戻る";
    liFooter1.appendChild(aFooter1);
    ulFooter.appendChild(liFooter1);
    let liFooter2 = document.createElement("li");
    let aFooter2 = document.createElement("a");
    aFooter2.href = "index.html";
    aFooter2.textContent = "子音見出しへ戻る";
    liFooter2.appendChild(aFooter2);
    ulFooter.appendChild(liFooter2);
    footer.appendChild(ulFooter)
    body.appendChild(footer)

    let htmlContent = beautify(dom.serialize(), { indent_size: 4, space_in_empty_paren: true });

    try {
        await fs.mkdir("index", { recursive: true });
        await fs.writeFile(filename, htmlContent);
        console.log("ファイル" + filename + "を作成しました。");
    } catch (error) {
        console.error("ファイル" + filename + "を作成できませんでした。", error);
    }
}

async function generateIndexDirectory(i) {
    let directory = path.join("html_index", consonants[i]);
    try {
        await fs.mkdir(directory, { recursive: true });
        console.log("ディレクトリ" + directory + "を作成しました。");
    } catch (error) {
        console.error("ディレクトリ" + directory + "を作成できませんでした。", error);
    }
}

async function generateRoots(i, j, k) {

    const createParagraph = (text, className) => {
        let p = document.createElement("p");
        p.textContent = text;
        p.className = className;
        return p;
    };

    let filename = path.join("html_index", consonants[i] + "/" + consonants[i] + consonants[j] + consonants[k] + ".html");

    const dom = new JSDOM("<!DOCTYPE html><html lang='ja'><head></head><body></body></html>");
    const document = dom.window.document;

    let head = document.head;

    let meta = document.createElement("meta");
    meta.setAttribute("charset", "UTF-8");
    head.appendChild(meta);

    let title = document.createElement("title");
    title.textContent = "語根" + consonants[i] + consonants[j] + consonants[k];
    head.appendChild(title);

    let link1 = document.createElement("link");
    link1.rel = "stylesheet";
    link1.href = "../../style/pages.css";
    head.appendChild(link1);
    let link2 = document.createElement("link");
    link2.rel = "stylesheet";
    link2.href = "../../style/roots.css";
    head.appendChild(link2);
    let link3 = document.createElement("link");
    link3.rel = "stylesheet";
    link3.href = "../../style/fonts.css";
    head.appendChild(link3);
    let link4 = document.createElement("link");
    link4.rel = "stylesheet";
    link4.href = "../../style/table.css";
    head.appendChild(link4);

    let body = document.body;

    let header = document.createElement("header");
    let ulHeader = document.createElement("ul");

    let liHeader1 = document.createElement("li");
    let aHeader1 = document.createElement("a");
    aHeader1.href = "../../dictionary.html";
    aHeader1.textContent = "表紙へ戻る";
    liHeader1.appendChild(aHeader1);
    ulHeader.appendChild(liHeader1);

    let liHeader2 = document.createElement("li");
    let aHeader2 = document.createElement("a");
    aHeader2.href = "../index.html";
    aHeader2.textContent = "子音見出しへ戻る";
    liHeader2.appendChild(aHeader2);
    ulHeader.appendChild(liHeader2);

    let liHeader3 = document.createElement("li");
    let aHeader3 = document.createElement("a");
    let spanHeader = document.createElement("span");
    spanHeader.className = "piswpi";
    aHeader3.href = "../" + consonants[i] + ".html";
    spanHeader.textContent = consonants[i];
    aHeader3.appendChild(document.createTextNode("頭文字"));
    aHeader3.appendChild(spanHeader);
    aHeader3.appendChild(document.createTextNode("の見出しへ戻る"));
    liHeader3.appendChild(aHeader3);
    ulHeader.appendChild(liHeader3);

    header.appendChild(ulHeader);
    body.appendChild(header);

    let h1 = document.createElement("h1");
    let spanH1 = document.createElement("span");
    spanH1.className = "piswpi";
    spanH1.textContent = consonants[i] + consonants[j] + consonants[k];
    h1.appendChild(document.createTextNode("語根"));
    h1.appendChild(spanH1);
    body.appendChild(h1);

    let h2 = document.createElement("h2");
    let q = document.createElement("q");
    h2.appendChild(document.createTextNode("この語根は"));
    q.textContent = consonants_means[i] + consonants_means[j] + consonants_means[k];
    h2.appendChild(q);
    h2.appendChild(document.createTextNode("の概念を持つ"));
    body.appendChild(h2);

    let p = document.createElement("p");
    let span = document.createElement("span");
    span.className = "piswpi";
    p.appendChild(document.createTextNode("このページは語根"));
    span.textContent = consonants[i] + consonants[j] + consonants[k];
    p.appendChild(span);
    p.appendChild(document.createTextNode("に関する情報を表示します。"));
    body.appendChild(p);

    for (let n = 0; n < vowels.length; n++) {
        let table = document.createElement("table");
        let caption = document.createElement("caption");
        caption.textContent = vowels_part_of_speech_types[n] + "詞活用表";
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

        thead.append(tr);

        let tr2 = document.createElement("tr");
        vowels.forEach((vowel, l) => {
            let th = document.createElement("th");
            th.appendChild(createParagraph("-" + vowel, "piswpi"));
            th.appendChild(createParagraph(vowels_cases[l] + "格", "case"));
            tr2.appendChild(th);
        });
        thead.appendChild(tr2);
        table.appendChild(thead);
        let tbody = document.createElement("tbody");
        let tr3 = document.createElement("tr");
        let th3 = document.createElement("th");
        let p = document.createElement("p");
        p.textContent = "第二母音";
        p.className = "vertical";
        th3.appendChild(p);
        th3.rowSpan = 7;
        tr3.appendChild(th3);
        tbody.appendChild(tr3);

        vowels.forEach((vowel1, l) => {
            let tr = document.createElement("tr");
            let th = document.createElement("th");
            th.appendChild(createParagraph("-" + vowel1, "piswpi"));
            th.appendChild(createParagraph(vowels_cases[l] + "格", "case"));
            tr.appendChild(th);

            vowels.forEach((vowel2, m) => {
                let td = document.createElement("td");
                td.appendChild(createParagraph(consonants[i] + vowel1 + consonants[j] + vowel2 + consonants[k] + vowels[n], "piswpi"));
                td.appendChild(createParagraph("/" + consonants_phonetics[i] + vowels_phonetics[l] + consonants_phonetics[j] + vowels_phonetics[m] + consonants_phonetics[k] + vowels_phonetics[n] + "/", "phonetic"));
                td.appendChild(createParagraph(vowels_cases[m] + vowels_cases[l] + "格" + vowels_part_of_speech_types[n] + "詞", "root"));
                tr.appendChild(td);
            });

            tbody.appendChild(tr);
        });
        table.appendChild(tbody);
        body.appendChild(table);
    }

    let footer = document.createElement("footer");
    let ulFooter = document.createElement("ul");

    let liFooter1 = document.createElement("li");
    let aFooter1 = document.createElement("a");
    aFooter1.href = "../../dictionary.html";
    aFooter1.textContent = "表紙へ戻る";
    liFooter1.appendChild(aFooter1);
    ulFooter.appendChild(liFooter1);
    let liFooter2 = document.createElement("li");
    let aFooter2 = document.createElement("a");
    aFooter2.href = "../index.html";
    aFooter2.textContent = "子音見出しへ戻る";
    liFooter2.appendChild(aFooter2);
    ulFooter.appendChild(liFooter2);
    let liFooter3 = document.createElement("li");
    let aFooter3 = document.createElement("a");
    let spanFooter = document.createElement("span");
    spanFooter.className = "piswpi";
    aFooter3.href = "../" + consonants[i] + ".html";
    spanFooter.textContent = consonants[i];
    aFooter3.appendChild(document.createTextNode("頭文字"));
    aFooter3.appendChild(spanFooter);
    aFooter3.appendChild(document.createTextNode("の見出しへ戻る"));
    liFooter3.appendChild(aFooter3);
    ulFooter.appendChild(liFooter3);
    footer.appendChild(ulFooter);
    body.appendChild(footer);

    let htmlContent = beautify(dom.serialize(), { indent_size: 4, space_in_empty_paren: true });

    try {
        await fs.writeFile(filename, htmlContent);
        console.log("ファイル" + filename + "を作成しました。");
    } catch (error) {
        console.error("ファイル" + filename + "を作成できませんでした。", error);
    }
}

async function make() {
    await generateConsonants();
    for (let i = 0; i < consonants.length; i++) {
        await generateIndex(i);
        await generateIndexDirectory(i);
        for (let j = 0; j < consonants.length; j++) {
            for (let k = 0; k < consonants.length; k++) {
                await generateRoots(i, j, k);
            }
        }
    }
}

make();
