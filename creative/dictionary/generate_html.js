const fs = require("fs").promises;
const path = require("path");
const {JSDOM} = require("jsdom");
const beautify = require("js-beautify").html;
const consonantsArray = ["k", "g", "t", "d", "s", "z", "q", "c", "r", "l", "p", "b", "h", "x", "f", "v", "m", "n"];
const consonantsConceptArray = ["剥離", "癒着", "乖離", "同一", "肉体", "精神", "空白", "物質", "過去", "未来", "鎮静", "高揚", "受動", "能動", "創造", "破壊", "流動", "固定"];
const consonantsPronunciationArray = ["k", "g", "t", "d", "s", "z", "\u{0294}", "\u{0295}", "r", "l", "p", "b", "h", "x", "f", "v", "m", "n"];
const vowelsArray = ["a", "e", "i", "o", "u", "w"];
const vowelsCasesArray = ["否", "与", "属", "対", "主", "流"];
const vowelsPartOfSpeechTypesArray = ["附", "動", "容", "助", "副", "名"];
const vowelsPronunciationArray = ["a", "e", "i", "o", "u", ""];

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
    for (let i = 0; i < consonantsArray.length; i++) {
        let dt = document.createElement("dt");
        dt.id = consonantsArray[i];
        let consonant = document.createElement("span");
        let a = document.createElement("a");
        a.classList.add("xesada");
        a.href = consonantsArray[i] + ".html";
        a.textContent = consonantsArray[i];
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
    let filename = path.join("html_index", consonantsArray[i] + ".html");
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
    title.textContent = consonantsArray[i].toUpperCase() + "を頭字とする語根の一覧";
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
    link5.href = "../favicon_index/" + consonantsArray[i] + ".svg";
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
    headerSpan.textContent = consonantsArray[i];
    headerLi3.append(headerSpan, "を頭字とする語根の一覧");
    headerOl.appendChild(headerLi3);
    header.appendChild(headerOl);
    body.appendChild(header);
    let h1 = document.createElement("h1");
    let h1Span = document.createElement("span");
    h1Span.classList.add("xesada");
    h1Span.textContent = consonantsArray[i];
    h1.append(h1Span, "を頭字とする語根の一覧");
    body.appendChild(h1);
    let article = document.createElement("article");
    let figure = document.createElement("figure");
    let object = document.createElement("object");
    object.data = "../favicon_index/" + consonantsArray[i] + ".svg";
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
    for (let j = 0; j < consonantsArray.length; j++) {
        for (let k = 0; k < consonantsArray.length; k++) {
            let dt = document.createElement("dt");
            dt.id = consonantsArray[i] + consonantsArray[j] + consonantsArray[k];
            let root = document.createElement("span");
            let a = document.createElement("a");
            a.classList.add("xesada");
            a.href = consonantsArray[i] + "/" + consonantsArray[i] + consonantsArray[j] + consonantsArray[k] + ".html";
            a.textContent = consonantsArray[i] + consonantsArray[j] + consonantsArray[k];
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
    footerSpan.textContent = consonantsArray[i];
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
    let directory = path.join("html_index", consonantsArray[i]);
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
    let filename = path.join("html_index", consonantsArray[i] + "/" + consonantsArray[i] + consonantsArray[j] + consonantsArray[k] + ".html");
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
    title.textContent = consonantsArray[i].toUpperCase() + consonantsArray[j].toUpperCase() + consonantsArray[k].toUpperCase() + "を語根とする単語の一覧";
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
    link5.href = "../../favicon_index/" + consonantsArray[i] + "/" + consonantsArray[i] + consonantsArray[j] + consonantsArray[k] + ".svg";
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
    headerA3.href = "../" + consonantsArray[i] + ".html";
    let headerSpan1 = document.createElement("span");
    headerSpan1.classList.add("xesada");
    headerSpan1.textContent = consonantsArray[i];
    headerA3.append(headerSpan1, "を頭字とする語根の一覧");
    headerLi3.appendChild(headerA3);
    headerOl.appendChild(headerLi3);
    let headerLi4 = document.createElement("li");
    let headerSpan2 = document.createElement("span");
    headerSpan2.classList.add("xesada");
    headerSpan2.textContent = consonantsArray[i] + consonantsArray[j] + consonantsArray[k];
    headerLi4.append(headerSpan2, "を語根とする単語の一覧");
    headerOl.appendChild(headerLi4);
    header.appendChild(headerOl);
    body.appendChild(header);
    let h1 = document.createElement("h1");
    let span1 = document.createElement("span");
    span1.classList.add("xesada");
    span1.textContent =
        consonantsArray[i] +
        consonantsArray[j] +
        consonantsArray[k];
    h1.append(span1, "を語根とする単語の一覧");
    body.appendChild(h1);
    let article = document.createElement("article");
    let figure = document.createElement("figure");
    let object = document.createElement("object");
    object.data = "../../favicon_index/" + consonantsArray[i] + "/" + consonantsArray[i] + consonantsArray[j] + consonantsArray[k] + ".svg";
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
    for (let l = 0; l < vowelsArray.length; l++) {
        let h2 = document.createElement("h2");
        h2.textContent = vowelsPartOfSpeechTypesArray[l] + "詞";
        main.appendChild(h2);
        let details = document.createElement("details");
        details.open = true;
        let summary = document.createElement("summary");
        summary.textContent = "";
        details.appendChild(summary);
        let dl = document.createElement("dl");
        for (let m = 0; m < vowelsArray.length; m++) {
            for (let n = 0; n < vowelsArray.length; n++) {
                let dt = document.createElement("dt");
                dt.id =
                    consonantsArray[i] + vowelsArray[m] +
                    consonantsArray[j] + vowelsArray[n] +
                    consonantsArray[k] + vowelsArray[l];
                let word = document.createElement("span");
                word.classList.add("xesada");
                word.textContent =
                    consonantsArray[i] + vowelsArray[m] +
                    consonantsArray[j] + vowelsArray[n] +
                    consonantsArray[k] + vowelsArray[l];
                dt.appendChild(word);
                let wordPronunciation = document.createElement("span");
                wordPronunciation.classList.add("pronunciation");
                wordPronunciation.textContent =
                    "/" +
                    consonantsPronunciationArray[i] + vowelsPronunciationArray[m] +
                    consonantsPronunciationArray[j] + vowelsPronunciationArray[n] +
                    consonantsPronunciationArray[k] + vowelsPronunciationArray[l] +
                    "/";
                dt.appendChild(wordPronunciation);
                let wordCases = document.createElement("span");
                wordCases.classList.add("cases");
                wordCases.textContent = vowelsCasesArray[m] + vowelsCasesArray[n] + "格";
                dt.appendChild(wordCases);
                let wordPartOfSpeech = document.createElement("span");
                wordPartOfSpeech.classList.add("part-of-speech");
                wordPartOfSpeech.textContent = vowelsPartOfSpeechTypesArray[l] + "詞";
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
    footerA3.href = "../" + consonantsArray[i] + ".html";
    let footerSpan = document.createElement("span");
    footerSpan.classList.add("xesada");
    footerSpan.textContent = consonantsArray[i];
    footerA3.append(footerSpan, "を頭字とする語根の一覧");
    footerLi3.appendChild(footerA3);
    footerOl.appendChild(footerLi3);
    let footerLi4 = document.createElement("li");
    let footerSpan2 = document.createElement("span");
    footerSpan2.classList.add("xesada");
    footerSpan2.textContent = consonantsArray[i] + consonantsArray[j] + consonantsArray[k];
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

async function generate() {
    let directory = path.join("html_index");
    try {
        await fs.mkdir(directory, {recursive: true});
        console.log("ディレクトリ" + directory + "を作成しました。");
    } catch (error) {
        console.error("ディレクトリ" + directory + "を作成できませんでした。", error);
    }
    await generateIndex();
    for (let i = 0; i < consonantsArray.length; i++) {
        await generateConsonant(i);
        await generateConsonantDirectory(i);
        for (let j = 0; j < consonantsArray.length; j++) {
            for (let k = 0; k < consonantsArray.length; k++) {
                await generateRoot(i, j, k);
            }
        }
    }
    console.log("ディレクトリ" + directory + "の内部データを生成完了。");
}

generate();