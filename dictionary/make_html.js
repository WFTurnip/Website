const fs = require("fs").promises;
const path = require("path");
const { JSDOM } = require("jsdom");
const beautify = require("js-beautify").html;

const consonants_array = ["k", "g", "t", "d", "s", "z", "q", "c", "r", "l", "p", "b", "h", "x", "f", "v", "m", "n"];
const consonants_means_array = ["剥離", "癒着", "乖離", "同一", "肉体", "精神", "空白", "物質", "過去", "未来", "鎮静", "高揚", "受動", "能動", "創造", "破壊", "流動", "固定"];
const consonants_pronunciation_array = ["k", "g", "t", "d", "s", "z", "ʔ", "ʕ", "r", "l", "p", "b", "h", "x", "f", "v", "m", "n"];

const vowels_array = ["a", "e", "i", "o", "u", "w"];
const vowels_cases_array = ["否", "与", "属", "対", "主", "流"];
const vowels_part_of_speech_types_array = ["付", "動", "容", "助", "副", "名"];
const vowels_pronunciation_array = ["a", "e", "i", "o", "u", ""];

async function generateIndex() {
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
    let header_nav = document.createElement("nav");
    let header_a = document.createElement("a");
    header_a.href = "../dictionary.html";
    header_a.textContent = "表紙へ戻る";
    header_nav.appendChild(header_a);
    header.appendChild(header_nav);
    body.appendChild(header);

    let h1 = document.createElement("h1");
    h1.textContent = "子音見出し";
    body.appendChild(h1);

    let p = document.createElement("p");
    p.textContent = "この章は子音見出し。"
    body.appendChild(p);

    let ol = document.createElement("ol");
    for (let i = 0; i < consonants_array.length; i++) {
        let li = document.createElement("li");
        let a = document.createElement("a");
        a.className = "piswpi";
        a.href = consonants_array[i] + ".html";
        a.textContent = consonants_array[i];
        li.appendChild(a);
        ol.appendChild(li);
    }
    body.appendChild(ol);

    let footer = document.createElement("footer");
    let footer_nav = document.createElement("nav");
    let footer_a = document.createElement("a");
    footer_a.href = "../dictionary.html";
    footer_a.textContent = "表紙へ戻る";
    footer_nav.appendChild(footer_a);
    footer.appendChild(footer_nav);
    body.appendChild(footer);

    let htmlContent = beautify(dom.serialize(), { indent_size: 4, space_in_empty_paren: true });

    try {
        await fs.writeFile(filename, htmlContent);
        console.log("ファイル" + filename + "を作成しました。");
    } catch (error) {
        console.error("ファイル" + filename + "を作成できませんでした。", error);
    }
}

async function generateConsonant(i) {
    let filename = path.join("html_index", consonants_array[i] + ".html");

    const dom = new JSDOM("<!DOCTYPE html><html lang='ja'><head></head><body></body></html>");
    const document = dom.window.document;

    let head = document.head;
    let meta = document.createElement("meta");
    meta.setAttribute("charset", "UTF-8");
    head.appendChild(meta);

    let title = document.createElement("title");
    title.textContent = "頭文字" + consonants_array[i].toUpperCase();
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
    link4.href = "../icon/" + consonants_array[i] + ".svg";
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
    header.appendChild(ulHeader);
    body.appendChild(header);

    let h1 = document.createElement("h1");
    let span1 = document.createElement("span");
    span1.className = "piswpi"
    span1.textContent = consonants_array[i];
    h1.appendChild(document.createTextNode("子音"));
    h1.appendChild(span1);
    h1.appendChild(document.createTextNode("の見出し"));
    body.appendChild(h1);

    let p = document.createElement("p");
    let span2 = document.createElement("span");
    span2.className = "piswpi"
    span2.textContent = consonants_array[i];
    p.appendChild(document.createTextNode("このページは"));
    p.appendChild(span2);
    p.appendChild(document.createTextNode("に関する情報を表示します。"));
    body.appendChild(p);

    let ol = document.createElement("ol");
    for (let j = 0; j < consonants_array.length; j++) {
        for (let k = 0; k < consonants_array.length; k++) {
            let li = document.createElement("li");
            let a = document.createElement("a");
            a.className = "piswpi";
            a.href = consonants_array[i] + "/" + consonants_array[i] + consonants_array[j] + consonants_array[k] + ".html";
            a.textContent = consonants_array[i] + consonants_array[j] + consonants_array[k];
            li.appendChild(a);
            ol.appendChild(li);
        };
    };
    body.appendChild(ol);

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

async function generateConsonantDirectory(i) {
    let directory = path.join("html_index", consonants_array[i]);
    try {
        await fs.mkdir(directory, { recursive: true });
        console.log("ディレクトリ" + directory + "を作成しました。");
    } catch (error) {
        console.error("ディレクトリ" + directory + "を作成できませんでした。", error);
    }
}

async function generateRoot(i, j, k) {
    let filename = path.join("html_index", consonants_array[i] + "/" + consonants_array[i] + consonants_array[j] + consonants_array[k] + ".html");

    const dom = new JSDOM("<!DOCTYPE html><html lang='ja'><head></head><body></body></html>");
    const document = dom.window.document;

    let head = document.head;

    let meta = document.createElement("meta");
    meta.setAttribute("charset", "UTF-8");
    head.appendChild(meta);

    let title = document.createElement("title");
    title.textContent = "語根" + consonants_array[i].toUpperCase() + consonants_array[j].toUpperCase() + consonants_array[k].toUpperCase();
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
    aHeader3.href = "../" + consonants_array[i] + ".html";
    spanHeader.textContent = consonants_array[i];
    aHeader3.appendChild(document.createTextNode("頭文字"));
    aHeader3.appendChild(spanHeader);
    aHeader3.appendChild(document.createTextNode("の見出しへ戻る"));
    liHeader3.appendChild(aHeader3);
    ulHeader.appendChild(liHeader3);

    header.appendChild(ulHeader);
    body.appendChild(header);

    let h1 = document.createElement("h1");
    let span1 = document.createElement("span");
    span1.className = "piswpi";
    span1.textContent = consonants_array[i] + consonants_array[j] + consonants_array[k];
    h1.appendChild(document.createTextNode("語根"));
    h1.appendChild(span1);
    body.appendChild(h1);

    let p = document.createElement("p");
    let span = document.createElement("span");
    span.className = "piswpi";
    p.appendChild(document.createTextNode("このページは語根"));
    span.textContent = consonants_array[i] + consonants_array[j] + consonants_array[k];
    p.appendChild(span);
    p.appendChild(document.createTextNode("に関する情報を表示します。"));
    body.appendChild(p);

    let p2 = document.createElement("p");
    let strong = document.createElement("strong");
    p2.appendChild(document.createTextNode("この語根は"));
    strong.textContent = consonants_means_array[i] + consonants_means_array[j] + consonants_means_array[k];
    p2.appendChild(strong);
    p2.appendChild(document.createTextNode("の概念を持つ"));
    body.appendChild(p2);

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
    aFooter3.href = "../" + consonants_array[i] + ".html";
    spanFooter.textContent = consonants_array[i];
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
    let directory = path.join("html_index");
    try {
        await fs.mkdir(directory, { recursive: true });
        console.log("ディレクトリ" + directory + "を作成しました。");
    } catch (error) {
        console.error("ディレクトリ" + directory + "を作成できませんでした。", error);
    }
    await generateIndex();
    for (let i = 0; i < consonants_array.length; i++) {
        await generateConsonant(i);
        await generateConsonantDirectory(i);
        for (let j = 0; j < consonants_array.length; j++) {
            for (let k = 0; k < consonants_array.length; k++) {
                await generateRoot(i, j, k);
            }
        }
    }
    console.log("ディレクトリ" + directory + "の内部データを生成完了");
}

make();
