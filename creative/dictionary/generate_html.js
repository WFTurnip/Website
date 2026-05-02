const fs = require("fs").promises;
const path = require("path");
const {JSDOM} = require("jsdom");
const beautify = require("js-beautify").html;
const consonantArray = ["k", "g", "t", "d", "s", "z", "q", "c", "r", "l", "p", "b", "h", "x", "f", "v", "m", "n"];
const consonantsConceptArray = ["剥離", "癒着", "乖離", "同一", "肉体", "精神", "空白", "物質", "過去", "未来", "鎮静", "高揚", "受動", "能動", "創造", "破壊", "流動", "固定"];
const consonantPronunciationArray = ["k", "g", "t", "d", "s", "z", "\u{0294}", "\u{0295}", "r", "l", "p", "b", "h", "x", "f", "v", "m", "n"];
const vowelArray = ["a", "e", "i", "o", "u", "w"];
const vowelCaseArray = ["否", "与", "属", "対", "主", "流"];
const vowelPartOfSpeechTypeArray = ["附", "動", "容", "助", "副", "名"];
const vowelPronunciationArray = ["a", "e", "i", "o", "u", ""];

/**
 * インデックスHTMLファイルを生成する関数
 * インデックスファイルには、子ディレクトリである子HTMLファイルへのリンクが含まれる
 */
async function generateIndex() {
    let filename = path.join("html_index", "index.html");
    const dom = new JSDOM("<!DOCTYPE html><html lang='ja'><head></head><body></body></html>");
    const document = dom.window.document;
    let head = document.head;
    let meta = document.createElement("meta");
    meta.setAttribute("charset", "UTF-8");
    head.appendChild(meta);
    let metaViewport = document.createElement("meta");
    metaViewport.setAttribute("name", "viewport");
    metaViewport.setAttribute("content", "width=device-width, initial-scale=1.0");
    head.appendChild(metaViewport);
    let title = document.createElement("title");
    title.textContent = "子音総一覧";
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
    link4.rel = "stylesheet";
    link4.href = "../style/navigator.css";
    head.appendChild(link4);
    let link5 = document.createElement("link");
    link5.rel = "icon";
    link5.href = "../favicon_index/" + "index" + ".svg";
    head.appendChild(link5);
    let body = document.body;
    let header = document.createElement("header");
    let headerOl = document.createElement("ol");
    let headerLi1 = document.createElement("li");
    let headerA1 = document.createElement("a");
    headerA1.href = "../dictionary.html";
    headerA1.textContent = "表紙";
    headerLi1.appendChild(headerA1);
    headerOl.appendChild(headerLi1);
    let headerLi2 = document.createElement("li");
    headerLi2.textContent = "子音総一覧";
    headerOl.appendChild(headerLi2);
    header.appendChild(headerOl);
    body.appendChild(header);
    let h1 = document.createElement("h1");
    h1.textContent = "子音総一覧";
    body.appendChild(h1);
    let article = document.createElement("article");
    let figure = document.createElement("figure");
    let object = document.createElement("object");
    object.data = "../favicon_index/" + "index" + ".svg";
    object.type = "image/svg+xml";
    figure.appendChild(object);
    let figcaption = document.createElement("figcaption");
    figcaption.textContent = "";
    figure.appendChild(figcaption);
    article.appendChild(figure);
    body.appendChild(article);
    let main = document.createElement("main");
    let dl = document.createElement("dl");
    for (let i = 0; i < consonantArray.length; i++) {
        let dt = document.createElement("dt");
        dt.id = consonantArray[i];
        let consonant = document.createElement("span");
        let a = document.createElement("a");
        a.classList.add("xesada");
        a.href = consonantArray[i] + ".html";
        a.textContent = consonantArray[i];
        consonant.appendChild(a);
        dt.appendChild(consonant);
        dl.appendChild(dt);
        let dd = document.createElement("dd");
        dd.textContent = consonantsConceptArray[i];
        dl.appendChild(dd);
        main.appendChild(dl);
    }
    body.appendChild(main);
    let footer = document.createElement("footer");
    let footerOl = document.createElement("ol");
    let footerLi1 = document.createElement("li");
    let footerA1 = document.createElement("a");
    footerA1.href = "../dictionary.html";
    footerA1.textContent = "表紙";
    footerLi1.appendChild(footerA1);
    footerOl.append(footerLi1);
    let footerLi2 = document.createElement("li");
    footerLi2.textContent = "子音総一覧";
    footerOl.appendChild(footerLi2);
    footer.appendChild(footerOl);
    body.appendChild(footer);
    let htmlContent = beautify(dom.serialize(), {indent_size: 4, space_in_empty_paren: true});
    try {
        await fs.writeFile(filename, htmlContent);
        console.log("ファイル" + filename + "を作成しました。");
    } catch (error) {
        console.error("ファイル" + filename + "を作成できませんでした。", error);
    }
}

/**
 *
 * @param {*} i
 */
async function generateConsonant(i) {
    let filename = path.join("html_index", consonantArray[i] + ".html");
    const dom = new JSDOM("<!DOCTYPE html><html lang='ja'><head></head><body></body></html>");
    const document = dom.window.document;
    let head = document.head;
    let meta = document.createElement("meta");
    meta.setAttribute("charset", "UTF-8");
    head.appendChild(meta);
    let metaViewport = document.createElement("meta");
    metaViewport.setAttribute("name", "viewport");
    metaViewport.setAttribute("content", "width=device-width, initial-scale=1.0");
    head.appendChild(metaViewport);
    let title = document.createElement("title");
    title.textContent = consonantArray[i].toUpperCase() + "を頭字とする語根の一覧";
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
    link4.rel = "stylesheet";
    link4.href = "../style/navigator.css";
    head.appendChild(link4);
    let link5 = document.createElement("link");
    link5.rel = "icon";
    link5.href = "../favicon_index/" + consonantArray[i] + ".svg";
    head.appendChild(link5);
    let body = document.body;
    let header = document.createElement("header");
    let headerOl = document.createElement("ol");
    let headerLi1 = document.createElement("li");
    let headerA1 = document.createElement("a");
    headerA1.href = "../dictionary.html";
    headerA1.textContent = "表紙";
    headerLi1.appendChild(headerA1);
    headerOl.appendChild(headerLi1);
    let headerLi2 = document.createElement("li");
    let headerA2 = document.createElement("a");
    headerA2.href = "index.html";
    headerA2.textContent = "子音総一覧";
    headerLi2.appendChild(headerA2);
    headerOl.appendChild(headerLi2);
    let headerLi3 = document.createElement("li");
    let headerSpan = document.createElement("span");
    headerSpan.classList.add("xesada");
    headerSpan.textContent = consonantArray[i];
    headerLi3.append(headerSpan, "を頭字とする語根の一覧");
    headerOl.appendChild(headerLi3);
    header.appendChild(headerOl);
    body.appendChild(header);
    let h1 = document.createElement("h1");
    let h1Span = document.createElement("span");
    h1Span.classList.add("xesada");
    h1Span.textContent = consonantArray[i];
    h1.append(h1Span, "を頭字とする語根の一覧");
    body.appendChild(h1);
    let article = document.createElement("article");
    let figure = document.createElement("figure");
    let object = document.createElement("object");
    object.data = "../favicon_index/" + consonantArray[i] + ".svg";
    object.type = "image/svg+xml";
    figure.appendChild(object);
    let figcaption = document.createElement("figcaption");
    figcaption.textContent = "";
    figure.appendChild(figcaption);
    article.appendChild(figure);
    body.appendChild(article);
    let main = document.createElement("main");
    let p = document.createElement("p");
    let b = document.createElement("b");
    b.textContent = consonantsConceptArray[i];
    b.classList.add("concept");
    p.append("この子音は", b, "の概念を表す。");
    main.appendChild(p);
    let dl = document.createElement("dl");
    for (let j = 0; j < consonantArray.length; j++) {
        for (let k = 0; k < consonantArray.length; k++) {
            let dt = document.createElement("dt");
            dt.id = consonantArray[i] + consonantArray[j] + consonantArray[k];
            let root = document.createElement("span");
            let a = document.createElement("a");
            a.classList.add("xesada");
            a.href = consonantArray[i] + "/" + consonantArray[i] + consonantArray[j] + consonantArray[k] + ".html";
            a.textContent = consonantArray[i] + consonantArray[j] + consonantArray[k];
            root.appendChild(a);
            dt.appendChild(root);
            dl.appendChild(dt);
            let dd = document.createElement("dd");
            dd.textContent = consonantsConceptArray[i] + consonantsConceptArray[j] + consonantsConceptArray[k];
            dl.appendChild(dd);
        }
    }
    main.appendChild(dl);
    body.appendChild(main);
    let footer = document.createElement("footer");
    let footerOl = document.createElement("ol");
    let footerLi1 = document.createElement("li");
    let footerA1 = document.createElement("a");
    footerA1.href = "../dictionary.html";
    footerA1.textContent = "表紙";
    footerLi1.appendChild(footerA1);
    footerOl.appendChild(footerLi1);
    let footerLi2 = document.createElement("li");
    let footerA2 = document.createElement("a");
    footerA2.href = "index.html";
    footerA2.textContent = "子音総一覧";
    footerLi2.appendChild(footerA2);
    footerOl.appendChild(footerLi2);
    let footerLi3 = document.createElement("li");
    let footerSpan = document.createElement("span");
    footerSpan.classList.add("xesada");
    footerSpan.textContent = consonantArray[i];
    footerLi3.append(footerSpan, "を頭字とする語根の一覧");
    footerOl.appendChild(footerLi3);
    footer.appendChild(footerOl);
    body.appendChild(footer);
    let htmlContent = beautify(dom.serialize(), {indent_size: 4, space_in_empty_paren: true});
    try {
        await fs.writeFile(filename, htmlContent);
        console.log("ファイル" + filename + "を作成しました。");
    } catch (error) {
        console.error("ファイル" + filename + "を作成できませんでした。", error);
    }
}

/**
 *
 * @param {*} i
 */
async function generateConsonantDirectory(i) {
    let directory = path.join("html_index", consonantArray[i]);
    try {
        await fs.mkdir(directory, {recursive: true});
        console.log("ディレクトリ" + directory + "を作成しました。");
    } catch (error) {
        console.error("ディレクトリ" + directory + "を作成できませんでした。", error);
    }
}

/**
 *
 * @param {*} i
 * @param {*} j
 * @param {*} k
 */
async function generateRoot(i, j, k) {
    let filename = path.join("html_index", consonantArray[i] + "/" + consonantArray[i] + consonantArray[j] + consonantArray[k] + ".html");
    const dom = new JSDOM("<!DOCTYPE html><html lang='ja'><head></head><body></body></html>");
    const document = dom.window.document;
    let head = document.head;
    let meta = document.createElement("meta");
    meta.setAttribute("charset", "UTF-8");
    head.appendChild(meta);
    let metaViewport = document.createElement("meta");
    metaViewport.setAttribute("name", "viewport");
    metaViewport.setAttribute("content", "width=device-width, initial-scale=1.0");
    head.appendChild(metaViewport);
    let title = document.createElement("title");
    title.textContent = consonantArray[i].toUpperCase() + consonantArray[j].toUpperCase() + consonantArray[k].toUpperCase() + "を語根とする単語の一覧";
    head.appendChild(title);
    let link1 = document.createElement("link");
    link1.rel = "stylesheet";
    link1.href = "../../style/pages.css";
    head.appendChild(link1);
    let link2 = document.createElement("link");
    link2.rel = "stylesheet";
    link2.href = "../../style/index.css";
    head.appendChild(link2);
    let link3 = document.createElement("link");
    link3.rel = "stylesheet";
    link3.href = "../../style/fonts.css";
    head.appendChild(link3);
    let link4 = document.createElement("link");
    link4.rel = "stylesheet";
    link4.href = "../../style/navigator.css";
    head.appendChild(link4);
    let link5 = document.createElement("link");
    link5.rel = "icon";
    link5.href = "../../favicon_index/" + consonantArray[i] + "/" + consonantArray[i] + consonantArray[j] + consonantArray[k] + ".svg";
    head.appendChild(link5);
    let script1 = document.createElement("script");
    script1.src = "../../fetch_details.js";
    head.appendChild(script1);
    let body = document.body;
    let header = document.createElement("header");
    let headerOl = document.createElement("ol");
    let headerLi1 = document.createElement("li");
    let headerA1 = document.createElement("a");
    headerA1.href = "../../dictionary.html";
    headerA1.textContent = "表紙";
    headerLi1.appendChild(headerA1);
    headerOl.appendChild(headerLi1);
    let headerLi2 = document.createElement("li");
    let headerA2 = document.createElement("a");
    headerA2.href = "../index.html";
    headerA2.textContent = "子音総一覧";
    headerLi2.appendChild(headerA2);
    headerOl.appendChild(headerLi2);
    let headerLi3 = document.createElement("li");
    let headerA3 = document.createElement("a");
    headerA3.href = "../" + consonantArray[i] + ".html";
    let headerSpan1 = document.createElement("span");
    headerSpan1.classList.add("xesada");
    headerSpan1.textContent = consonantArray[i];
    headerA3.append(headerSpan1, "を頭字とする語根の一覧");
    headerLi3.appendChild(headerA3);
    headerOl.appendChild(headerLi3);
    let headerLi4 = document.createElement("li");
    let headerSpan2 = document.createElement("span");
    headerSpan2.classList.add("xesada");
    headerSpan2.textContent = consonantArray[i] + consonantArray[j] + consonantArray[k];
    headerLi4.append(headerSpan2, "を語根とする単語の一覧");
    headerOl.appendChild(headerLi4);
    header.appendChild(headerOl);
    body.appendChild(header);
    let h1 = document.createElement("h1");
    let span1 = document.createElement("span");
    span1.classList.add("xesada");
    span1.textContent =
        consonantArray[i] +
        consonantArray[j] +
        consonantArray[k];
    h1.append(span1, "を語根とする単語の一覧");
    body.appendChild(h1);
    let article = document.createElement("article");
    let figure = document.createElement("figure");
    let object = document.createElement("object");
    object.data = "../../favicon_index/" + consonantArray[i] + "/" + consonantArray[i] + consonantArray[j] + consonantArray[k] + ".svg";
    object.type = "image/svg+xml";
    figure.appendChild(object);
    let figcaption = document.createElement("figcaption");
    figcaption.textContent = "";
    figure.appendChild(figcaption);
    article.appendChild(figure);
    body.appendChild(article);
    let main = document.createElement("main");
    let p = document.createElement("p");
    let b = document.createElement("b");
    b.textContent =
        consonantsConceptArray[i] +
        consonantsConceptArray[j] +
        consonantsConceptArray[k];
    b.classList.add("concept");
    p.append("この語根は", b, "の概念を表す。");
    main.append(p);
    for (let l = 0; l < vowelArray.length; l++) {
        let h2 = document.createElement("h2");
        h2.textContent = vowelPartOfSpeechTypeArray[l] + "詞";
        main.appendChild(h2);
        let details = document.createElement("details");
        details.open = true;
        let summary = document.createElement("summary");
        summary.textContent = "";
        details.appendChild(summary);
        let dl = document.createElement("dl");
        for (let m = 0; m < vowelArray.length; m++) {
            for (let n = 0; n < vowelArray.length; n++) {
                let dt = document.createElement("dt");
                dt.id =
                    consonantArray[i] + vowelArray[m] +
                    consonantArray[j] + vowelArray[n] +
                    consonantArray[k] + vowelArray[l];
                let word = document.createElement("b");
                word.classList.add("xesada");
                word.textContent =
                    consonantArray[i] + vowelArray[m] +
                    consonantArray[j] + vowelArray[n] +
                    consonantArray[k] + vowelArray[l];
                dt.appendChild(word);
                let wordPronunciation = document.createElement("b");
                wordPronunciation.classList.add("pronunciation");
                wordPronunciation.textContent =
                    "/" +
                    consonantPronunciationArray[i] + vowelPronunciationArray[m] +
                    consonantPronunciationArray[j] + vowelPronunciationArray[n] +
                    consonantPronunciationArray[k] + vowelPronunciationArray[l] +
                    "/";
                dt.appendChild(wordPronunciation);
                let wordCases = document.createElement("b");
                wordCases.classList.add("cases");
                wordCases.textContent = vowelCaseArray[m] + vowelCaseArray[n] + "格";
                dt.appendChild(wordCases);
                let wordPartOfSpeech = document.createElement("b");
                wordPartOfSpeech.classList.add("part-of-speech");
                wordPartOfSpeech.textContent = vowelPartOfSpeechTypeArray[l] + "詞";
                dt.appendChild(wordPartOfSpeech);
                dl.appendChild(dt);
                let dd = document.createElement("dd");
                dd.textContent = "";
                dl.appendChild(dd);
            }
        }
        details.appendChild(dl);
        main.appendChild(details);
        let hr = document.createElement("hr");
        main.appendChild(hr);
    }
    body.appendChild(main);
    let footer = document.createElement("footer");
    let footerOl = document.createElement("ol");
    let footerLi1 = document.createElement("li");
    let footerA1 = document.createElement("a");
    footerA1.href = "../../dictionary.html";
    footerA1.textContent = "表紙";
    footerLi1.appendChild(footerA1);
    footerOl.appendChild(footerLi1);
    let footerLi2 = document.createElement("li");
    let footerA2 = document.createElement("a");
    footerA2.href = "../index.html";
    footerA2.textContent = "子音総一覧";
    footerLi2.appendChild(footerA2);
    footerOl.appendChild(footerLi2);
    let footerLi3 = document.createElement("li");
    let footerA3 = document.createElement("a");
    footerA3.href = "../" + consonantArray[i] + ".html";
    let footerSpan = document.createElement("span");
    footerSpan.classList.add("xesada");
    footerSpan.textContent = consonantArray[i];
    footerA3.append(footerSpan, "を頭字とする語根の一覧");
    footerLi3.appendChild(footerA3);
    footerOl.appendChild(footerLi3);
    let footerLi4 = document.createElement("li");
    let footerSpan2 = document.createElement("span");
    footerSpan2.classList.add("xesada");
    footerSpan2.textContent = consonantArray[i] + consonantArray[j] + consonantArray[k];
    footerLi4.append(footerSpan2, "を語根とする単語の一覧");
    footerOl.appendChild(footerLi4);
    footer.appendChild(footerOl);
    body.appendChild(footer);
    let htmlContent = beautify(dom.serialize(), {indent_size: 4, space_in_empty_paren: true});
    try {
        await fs.writeFile(filename, htmlContent);
        console.log("ファイル" + filename + "を作成しました。");
    } catch (error) {
        console.error("ファイル" + filename + "を作成できませんでした。", error);
    }
}
/**
 * この関数は、html_indexディレクトリの内部データを生成するための関数である。
 * まず、html_indexディレクトリを作成し、その中にインデックスHTMLファイルを生成する。
 * 次に、子ディレクトリである子HTMLファイルを生成する。
 * 最後に、子HTMLファイルの中に、さらに子HTMLファイルへのリンクを含むHTMLファイルを生成する。
 * これらの処理は、非同期関数として実装されているため、順番に実行されることが保証されている。
 */
async function generate() {
    let directory = path.join("html_index");
    try {
        await fs.mkdir(directory, {recursive: true});
        console.log("ディレクトリ" + directory + "を作成しました。");
    } catch (error) {
        console.error("ディレクトリ" + directory + "を作成できませんでした。", error);
    }
    await generateIndex();
    for (let i = 0; i < consonantArray.length; i++) {
        await generateConsonant(i);
        await generateConsonantDirectory(i);
        for (let j = 0; j < consonantArray.length; j++) {
            for (let k = 0; k < consonantArray.length; k++) {
                await generateRoot(i, j, k);
            }
        }
    }
    console.log("ディレクトリ" + directory + "の内部データを生成完了。");
}

generate();