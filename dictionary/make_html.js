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
    title.textContent = "子音一覧";
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
    link4.href = "../favicon_index/" + "index" + ".svg";
    head.appendChild(link4);


    let body = document.body;
    let header = document.createElement("header");
    let header_nav = document.createElement("nav");
    let header_ol = document.createElement("ol");
    let header_li1 = document.createElement("li");
    let header_a1 = document.createElement("a");
    header_a1.href = "../dictionary.html";
    header_a1.textContent = "表紙";
    header_li1.appendChild(header_a1);
    header_ol.appendChild(header_li1);
    let header_li2 = document.createElement("li");
    header_li2.textContent = "子音一覧";
    header_ol.appendChild(header_li2);
    header_nav.appendChild(header_ol);
    header.appendChild(header_nav);
    body.appendChild(header);

    let h1 = document.createElement("h1");
    h1.textContent = "子音一覧";
    body.appendChild(h1);

    let main = document.createElement("main");
    for (let i = 0; i < consonants_array.length; i++) {
        let p = document.createElement("p");

        let index = document.createElement("span");
        let a = document.createElement("a");
        a.classList.add("zosokw");
        a.href = consonants_array[i] + ".html";
        a.textContent = consonants_array[i];
        index.appendChild(a);
        p.appendChild(index);

        let index_meaning = document.createElement("span");
        index_meaning.textContent = consonants_means_array[i];
        p.appendChild(index_meaning);

        main.appendChild(p);
    }
    body.appendChild(main);

    let footer = document.createElement("footer");
    let footer_nav = document.createElement("nav");
    let footer_ol = document.createElement("ol");
    let footer_li1 = document.createElement("li");
    let footer_a1 = document.createElement("a");
    footer_a1.href = "../dictionary.html";
    footer_a1.textContent = "表紙";
    footer_li1.appendChild(footer_a1);
    footer_ol.append(footer_li1);
    let footer_li2 = document.createElement("li");
    footer_li2.textContent = "子音一覧";
    footer_ol.appendChild(footer_li2);
    footer_nav.appendChild(footer_ol);
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
    link2.href = "../style/consonants.css";
    head.appendChild(link2);
    let link3 = document.createElement("link");
    link3.rel = "stylesheet";
    link3.href = "../style/fonts.css";
    head.appendChild(link3);
    let link4 = document.createElement("link");
    link4.rel = "icon";
    link4.href = "../favicon_index/" + consonants_array[i] + ".svg";
    head.appendChild(link4);

    let body = document.body;

    let header = document.createElement("header");
    let header_nav = document.createElement("nav");
    let header_ol = document.createElement("ol");
    let header_li1 = document.createElement("li");
    let header_a1 = document.createElement("a");
    header_a1.href = "../dictionary.html";
    header_a1.textContent = "表紙";
    header_li1.appendChild(header_a1);
    header_ol.appendChild(header_li1);
    let header_li2 = document.createElement("li");
    let header_a2 = document.createElement("a");
    header_a2.href = "index.html";
    header_a2.textContent = "子音一覧";
    header_li2.appendChild(header_a2);
    header_ol.appendChild(header_li2);
    let header_li3 = document.createElement("li");
    let header_span = document.createElement("span");
    header_span.classList.add("zosokw");
    header_span.textContent = consonants_array[i];
    header_li3.appendChild(document.createTextNode("子音"));
    header_li3.appendChild(header_span);
    header_li3.appendChild(document.createTextNode("見出し"));
    header_ol.appendChild(header_li3);
    header_nav.appendChild(header_ol);
    header.appendChild(header_nav);
    body.appendChild(header);

    let h1 = document.createElement("h1");
    let h1_span = document.createElement("span");
    h1_span.classList.add("zosokw");
    h1_span.textContent = consonants_array[i];
    h1.appendChild(document.createTextNode("子音"));
    h1.appendChild(h1_span);
    h1.appendChild(document.createTextNode("の見出し"));
    body.appendChild(h1);

    let main = document.createElement("main");
    for (let j = 0; j < consonants_array.length; j++) {
        for (let k = 0; k < consonants_array.length; k++) {
            let index = document.createElement("p");

            let root = document.createElement("span");
            let a = document.createElement("a");
            a.classList.add("zosokw");
            a.href = consonants_array[i] + "/" + consonants_array[i] + consonants_array[j] + consonants_array[k] + ".html";
            a.textContent = consonants_array[i] + consonants_array[j] + consonants_array[k];
            root.appendChild(a);
            index.appendChild(root);

            let root_meaning = document.createElement("span");
            root_meaning.textContent = consonants_means_array[i] + consonants_means_array[j] + consonants_means_array[k];
            index.appendChild(root_meaning);

            main.appendChild(index);
        };
    };
    body.appendChild(main);

    let footer = document.createElement("footer");
    let footer_nav = document.createElement("nav");
    let footer_ol = document.createElement("ol");
    let footer_li1 = document.createElement("li");
    let footer_a1 = document.createElement("a");
    footer_a1.href = "../dictionary.html";
    footer_a1.textContent = "表紙";
    footer_li1.appendChild(footer_a1);
    footer_ol.appendChild(footer_li1);
    let footer_li2 = document.createElement("li");
    let footer_a2 = document.createElement("a");
    footer_a2.href = "index.html";
    footer_a2.textContent = "子音一覧";
    footer_li2.appendChild(footer_a2);
    footer_ol.appendChild(footer_li2);
    let footer_li3 = document.createElement("li");
    let footer_span = document.createElement("span");
    footer_span.classList.add("zosokw");
    footer_span.textContent = consonants_array[i];
    footer_li3.appendChild(document.createTextNode("子音"));
    footer_li3.appendChild(footer_span);
    footer_li3.appendChild(document.createTextNode("見出し"));
    footer_ol.appendChild(footer_li3);
    footer_nav.appendChild(footer_ol);
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
    let link5 = document.createElement("link");
    link5.rel = "icon";
    link5.href = "../../favicon_index/" + consonants_array[i] + "/" + consonants_array[i] + consonants_array[j] + consonants_array[k] + ".svg";
    head.appendChild(link5);

    let body = document.body;

    let header = document.createElement("header");
    let header_nav = document.createElement("nav");
    let header_ol = document.createElement("ol");
    let header_li1 = document.createElement("li");
    let header_a1 = document.createElement("a");
    header_a1.href = "../../dictionary.html";
    header_a1.textContent = "表紙";
    header_li1.appendChild(header_a1);
    header_ol.appendChild(header_li1);
    let header_li2 = document.createElement("li");
    let header_a2 = document.createElement("a");
    header_a2.href = "../index.html";
    header_a2.textContent = "子音一覧";
    header_li2.appendChild(header_a2);
    header_ol.appendChild(header_li2);
    let header_li3 = document.createElement("li");
    let header_a3 = document.createElement("a");
    let header_span1 = document.createElement("span");
    header_span1.classList.add("zosokw");
    header_a3.href = "../" + consonants_array[i] + ".html";
    header_span1.textContent = consonants_array[i];
    header_a3.appendChild(document.createTextNode("子音"));
    header_a3.appendChild(header_span1);
    header_a3.appendChild(document.createTextNode("の見出し"));
    header_li3.appendChild(header_a3);
    header_ol.appendChild(header_li3);
    let header_li4 = document.createElement("li");
    let header_span2 = document.createElement("span");
    header_span2.classList("zosokw");
    header_span2.textContent = consonants_array[i] + consonants_array[j] + consonants_array[k];
    header_li4.appendChild(document.createTextNode("語根"));
    header_li4.appendChild(header_span2);
    header_ol.appendChild(header_li4);
    header_nav.appendChild(header_ol);
    header.appendChild(header_nav);
    body.appendChild(header);

    let h1 = document.createElement("h1");
    let span1 = document.createElement("span");
    span1.classList.add("zosokw");
    span1.textContent = consonants_array[i] + consonants_array[j] + consonants_array[k];
    h1.appendChild(document.createTextNode("語根"));
    h1.appendChild(span1);
    body.appendChild(h1);

    let p1 = document.createElement("p");
    let strong = document.createElement("strong");
    p1.appendChild(document.createTextNode("この語根は"));
    strong.textContent = consonants_means_array[i] + consonants_means_array[j] + consonants_means_array[k];
    p1.appendChild(strong);
    p1.appendChild(document.createTextNode("の概念を持つ"));
    body.appendChild(p1);

    let main = document.createElement("main");

    for (let l = 0; l < vowels_array.length; l++) {
        for (let m = 0; m < vowels_array.length; m++) {
            for (let n = 0; n < vowels_array.length; n++) {
                let index = document.createElement("p");

                let word = document.createElement("span");
                word.classList.add("zosokw");
                word.textContent = consonants_array[i] + vowels_array[l] + consonants_array[j] + vowels_array[m] + consonants_array[k] + vowels_array[n];
                index.appendChild(word);

                let word_pronunciation = document.createElement("span");
                word_pronunciation.classList.add("pronunciation");
                word_pronunciation.textContent = "/" + consonants_pronunciation_array[i] + vowels_pronunciation_array[l] + consonants_pronunciation_array[j] + vowels_pronunciation_array[m] + consonants_pronunciation_array[k] + vowels_pronunciation_array[n] + "/";
                index.appendChild(word_pronunciation);

                let word_cases = document.createElement("span");
                word_cases.classList.add("cases");
                word_cases.textContent = vowels_cases_array[l] + vowels_cases_array[m] + "格";
                index.appendChild(word_cases);

                let word_part_of_speech = document.createElement("span");
                word_part_of_speech.classList.add("part-of-speech");
                word_part_of_speech.textContent = vowels_part_of_speech_types_array[n] + "詞";
                index.appendChild(word_part_of_speech);

                main.appendChild(index);

                let index_meaning = document.createElement("p");
                index_meaning.textContent = "";
                main.appendChild(index_meaning);
            }
        }
    }

    body.appendChild(main);

    let footer = document.createElement("footer");
    let footer_nav = document.createElement("nav");
    let footer_ol = document.createElement("ol");
    let footer_li1 = document.createElement("li");
    let footer_a1 = document.createElement("a");
    footer_a1.href = "../../dictionary.html";
    footer_a1.textContent = "表紙";
    footer_li1.appendChild(footer_a1);
    footer_ol.appendChild(footer_li1);
    let footer_li2 = document.createElement("li");
    let footer_a2 = document.createElement("a");
    footer_a2.href = "../index.html";
    footer_a2.textContent = "子音一覧";
    footer_li2.appendChild(footer_a2);
    footer_ol.appendChild(footer_li2);
    let footer_li3 = document.createElement("li");
    let footer_a3 = document.createElement("a");
    let footer_span = document.createElement("span");
    footer_span.classList.add("zosokw");
    footer_a3.href = "../" + consonants_array[i] + ".html";
    footer_span.textContent = consonants_array[i];
    footer_a3.appendChild(document.createTextNode("子音"));
    footer_a3.appendChild(footer_span);
    footer_a3.appendChild(document.createTextNode("の見出し"));
    footer_li3.appendChild(footer_a3);
    footer_ol.appendChild(footer_li3);
    let footer_li4 = document.createElement("li");
    let footer_span2 = document.createElement("span");
    footer_span2.classList("zosokw");
    footer_span2.textContent = consonants_array[i] + consonants_array[j] + consonants_array[k];
    footer_li4.appendChild(document.createTextNode("語根"));
    footer_li4.appendChild(footer_span2);
    footer_ol.appendChild(footer_li4);
    footer_nav.appendChild(footer_ol);
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
