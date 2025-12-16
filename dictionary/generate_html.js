const fs = require("fs").promises;
const path = require("path");
const { JSDOM } = require("jsdom");
const beautify = require("js-beautify").html;

const consonantsArray = ["k", "g", "t", "d", "s", "z", "q", "c", "r", "l", "p", "b", "h", "x", "f", "v", "m", "n"];
const consonantsConceptArray = ["剥離", "癒着", "乖離", "同一", "肉体", "精神", "空白", "物質", "過去", "未来", "鎮静", "高揚", "受動", "能動", "創造", "破壊", "流動", "固定"];
const consonantsPronunciationArray = ["k", "g", "t", "d", "s", "z", "\u{0294}", "\u{0295}", "r", "l", "p", "b", "h", "x", "f", "v", "m", "n"];

const vowelsArray = ["a", "e", "i", "o", "u", "w"];
const vowelsCasesArray = ["否", "与", "属", "対", "主", "流"];
const vowelsPartOfSpeechTypesArray = ["附", "動", "容", "助", "副", "名"];
const vowelsPronunciationArray = ["a", "e", "i", "o", "u", ""];

async function generateIndex() {
    let filename = path.join("html_index", "index.html");
    const dom = new JSDOM("<!DOCTYPE html><head></head><body></body><html lang='ja'></html>");
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
    let headerUl = document.createElement("ul");
    let headerLi1 = document.createElement("li");
    let headerA1 = document.createElement("a");
    headerA1.href = "../dictionary.html";
    headerA1.textContent = "表紙";
    headerLi1.appendChild(headerA1);
    headerUl.appendChild(headerLi1);
    let headerLi2 = document.createElement("li");
    headerLi2.textContent = "子音一覧";
    headerUl.appendChild(headerLi2);
    header.appendChild(headerUl);
    body.appendChild(header);
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
    let h1 = document.createElement("h1");
    h1.textContent = "子音一覧";
    body.appendChild(h1);
    let main = document.createElement("main");
    let dl = document.createElement("dl");
    for (let i = 0; i < consonantsArray.length; i++) {
        let dt = document.createElement("dt");
        dt.id = consonantsArray[i];
        let consonant = document.createElement("span");
        let a = document.createElement("a");
        a.classList.add("sulive");
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
    let footerNav = document.createElement("nav");
    let footerUl = document.createElement("ul");
    let footerLi1 = document.createElement("li");
    let footerA1 = document.createElement("a");
    footerA1.href = "../dictionary.html";
    footerA1.textContent = "表紙";
    footerLi1.appendChild(footerA1);
    footerUl.append(footerLi1);
    let footerLi2 = document.createElement("li");
    footerLi2.textContent = "子音一覧";
    footerUl.appendChild(footerLi2);
    footerNav.appendChild(footerUl);
    footer.appendChild(footerNav);
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
    title.textContent = "頭文字" + consonantsArray[i].toUpperCase();
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
    link4.href = "../favicon_index/" + consonantsArray[i] + ".svg";
    head.appendChild(link4);
    let body = document.body;
    let header = document.createElement("header");
    let headerUl = document.createElement("ul");
    let headerLi1 = document.createElement("li");
    let headerA1 = document.createElement("a");
    headerA1.href = "../dictionary.html";
    headerA1.textContent = "表紙";
    headerLi1.appendChild(headerA1);
    headerUl.appendChild(headerLi1);
    let headerLi2 = document.createElement("li");
    let headerA2 = document.createElement("a");
    headerA2.href = "index.html";
    headerA2.textContent = "子音一覧";
    headerLi2.appendChild(headerA2);
    headerUl.appendChild(headerLi2);
    let headerLi3 = document.createElement("li");
    let headerSpan = document.createElement("span");
    headerSpan.classList.add("sulive");
    headerSpan.textContent = consonantsArray[i];
    headerLi3.append("子音", headerSpan, "の見出し");
    headerUl.appendChild(headerLi3);
    header.appendChild(headerUl);
    body.appendChild(header);
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
    let h1 = document.createElement("h1");
    let h1Span = document.createElement("span");
    h1Span.classList.add("sulive");
    h1Span.textContent = consonantsArray[i];
    h1.append("子音", h1Span, "の見出し");
    body.appendChild(h1);
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
            a.classList.add("sulive");
            a.href = consonantsArray[i] + "/" + consonantsArray[i] + consonantsArray[j] + consonantsArray[k] + ".html";
            a.textContent = consonantsArray[i] + consonantsArray[j] + consonantsArray[k];
            root.appendChild(a);
            dt.appendChild(root);
            dl.appendChild(dt);
            let dd = document.createElement("dd");
            dd.textContent = consonantsConceptArray[i] + consonantsConceptArray[j] + consonantsConceptArray[k];
            dl.appendChild(dd);
            main.appendChild(dl);
        };
    };
    body.appendChild(main);
    let footer = document.createElement("footer");
    let footerUl = document.createElement("ul");
    let footerLi1 = document.createElement("li");
    let footerA1 = document.createElement("a");
    footerA1.href = "../dictionary.html";
    footerA1.textContent = "表紙";
    footerLi1.appendChild(footerA1);
    footerUl.appendChild(footerLi1);
    let footerLi2 = document.createElement("li");
    let footerA2 = document.createElement("a");
    footerA2.href = "index.html";
    footerA2.textContent = "子音一覧";
    footerLi2.appendChild(footerA2);
    footerUl.appendChild(footerLi2);
    let footerLi3 = document.createElement("li");
    let footerSpan = document.createElement("span");
    footerSpan.classList.add("sulive");
    footerSpan.textContent = consonantsArray[i];
    footerLi3.append("子音", footerSpan, "の見出し");
    footerUl.appendChild(footerLi3);
    footer.appendChild(footerUl);
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
    let directory = path.join("html_index", consonantsArray[i]);
    try {
        await fs.mkdir(directory, { recursive: true });
        console.log("ディレクトリ" + directory + "を作成しました。");
    } catch (error) {
        console.error("ディレクトリ" + directory + "を作成できませんでした。", error);
    }
}

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
    title.textContent = "語根" + consonantsArray[i].toUpperCase() + consonantsArray[j].toUpperCase() + consonantsArray[k].toUpperCase();
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
    link4.rel = "icon";
    link4.href = "../../favicon_index/" + consonantsArray[i] + "/" + consonantsArray[i] + consonantsArray[j] + consonantsArray[k] + ".svg";
    head.appendChild(link4);
    let body = document.body;
    let header = document.createElement("header");
    let headerUl = document.createElement("ul");
    let headerLi1 = document.createElement("li");
    let headerA1 = document.createElement("a");
    headerA1.href = "../../dictionary.html";
    headerA1.textContent = "表紙";
    headerLi1.appendChild(headerA1);
    headerUl.appendChild(headerLi1);
    let headerLi2 = document.createElement("li");
    let headerA2 = document.createElement("a");
    headerA2.href = "../index.html";
    headerA2.textContent = "子音一覧";
    headerLi2.appendChild(headerA2);
    headerUl.appendChild(headerLi2);
    let headerLi3 = document.createElement("li");
    let headerA3 = document.createElement("a");
    headerA3.href = "../" + consonantsArray[i] + ".html";
    let headerSpan1 = document.createElement("span");
    headerSpan1.classList.add("sulive");
    headerSpan1.textContent = consonantsArray[i];
    headerA3.append("子音", headerSpan1, "の見出し");
    headerLi3.appendChild(headerA3);
    headerUl.appendChild(headerLi3);
    let headerLi4 = document.createElement("li");
    let headerSpan2 = document.createElement("span");
    headerSpan2.classList.add("sulive");
    headerSpan2.textContent = consonantsArray[i] + consonantsArray[j] + consonantsArray[k];
    headerLi4.append("語根", headerSpan2);
    headerUl.appendChild(headerLi4);
    header.appendChild(headerUl);
    body.appendChild(header);
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
    let h1 = document.createElement("h1");
    let span1 = document.createElement("span");
    span1.classList.add("sulive");
    span1.textContent =
        consonantsArray[i] +
        consonantsArray[j] +
        consonantsArray[k];
    h1.append("語根", span1);
    body.appendChild(h1);
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
        let details = document.createElement("details");
        details.setAttribute("open", "");
        let summary = document.createElement("summary");
        let h2 = document.createElement("h2");
        h2.textContent = vowelsPartOfSpeechTypesArray[l] + "詞";
        summary.appendChild(h2);
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
                word.classList.add("sulive");
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
    let footerUl = document.createElement("ul");
    let footerLi1 = document.createElement("li");
    let footerA1 = document.createElement("a");
    footerA1.href = "../../dictionary.html";
    footerA1.textContent = "表紙";
    footerLi1.appendChild(footerA1);
    footerUl.appendChild(footerLi1);
    let footerLi2 = document.createElement("li");
    let footerA2 = document.createElement("a");
    footerA2.href = "../index.html";
    footerA2.textContent = "子音一覧";
    footerLi2.appendChild(footerA2);
    footerUl.appendChild(footerLi2);
    let footerLi3 = document.createElement("li");
    let footerA3 = document.createElement("a");
    footerA3.href = "../" + consonantsArray[i] + ".html";
    let footerSpan = document.createElement("span");
    footerSpan.classList.add("sulive");
    footerSpan.textContent = consonantsArray[i];
    footerA3.append("子音", footerSpan, "の見出し");
    footerLi3.appendChild(footerA3);
    footerUl.appendChild(footerLi3);
    let footerLi4 = document.createElement("li");
    let footerSpan2 = document.createElement("span");
    footerSpan2.classList.add("sulive");
    footerSpan2.textContent = consonantsArray[i] + consonantsArray[j] + consonantsArray[k];
    footerLi4.append("語根", footerSpan2);
    footerUl.appendChild(footerLi4);
    footer.appendChild(footerUl);
    body.appendChild(footer);
    let htmlContent = beautify(dom.serialize(), { indent_size: 4, space_in_empty_paren: true });
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
        await fs.mkdir(directory, { recursive: true });
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
