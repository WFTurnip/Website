const fs = require("fs").promises;
const path = require("path");
const { JSDOM } = require("jsdom");
const beautify = require("js-beautify").html;

async function generateConsonantFigure() {
    let filename = path.join("reference/", "figure/", "consonant_figure.svg");
    const svgns = "http://www.w3.org/2000/svg";

    const dom = new JSDOM();
    const document = dom.window.document;

    let svg = document.createElementNS(svgns, "svg");
    svg.setAttribute("width", 100);
    svg.setAttribute("height", 100);

    let rect = document.createElementNS(svgns, "rect");
    rect.setAttribute("x", 25);
    rect.setAttribute("y", 25);
    rect.setAttribute("width", 50);
    rect.setAttribute("height", 50);
    svg.appendChild(rect);

    let serializer = new dom.window.XMLSerializer();
    let svgString = serializer.serializeToString(svg);

    let svgContent = '<?xml-stylesheet href="../../style/figure.css" type="text/css"?>' + "\n" + svgString;

    svgContent = beautify(svgContent, { indent_size: 4 });

    try {
        await fs.writeFile(filename, svgContent);
        console.log("ファイル" + filename + "を作成しました。");
    } catch (error) {
        console.log("ファイル" + filename + "を作成できませんでした。");
    }
}

async function generateVowelFigure() {
    let filename = path.join("reference/", "figure/", "vowel_figure.svg");
    const svgns = "http://www.w3.org/2000/svg";

    const dom = new JSDOM();
    const document = dom.window.document;

    let svg = document.createElementNS(svgns, "svg");
    svg.setAttribute("width", 100);
    svg.setAttribute("height", 100);

    let rect = document.createElementNS(svgns, "rect");
    rect.setAttribute("x", 25);
    rect.setAttribute("y", 25);
    rect.setAttribute("width", 50);
    rect.setAttribute("height", 50);
    svg.appendChild(rect);

    let serializer = new dom.window.XMLSerializer();
    let svgString = serializer.serializeToString(svg);

    let svgContent = '<?xml-stylesheet href="../../style/figure.css" type="text/css"?>' + "\n" + svgString;

    svgContent = beautify(svgContent, { indent_size: 4 });

    try {
        await fs.writeFile(filename, svgContent);
        console.log("ファイル" + filename + "を作成しました。");
    } catch (error) {
        console.log("ファイル" + filename + "を作成できませんでした。");
    }
}

async function generateRtlFigure() {
    let filename = path.join("reference/", "figure/", "rtl_figure.svg");
    const svgns = "http://www.w3.org/2000/svg";

    const dom = new JSDOM();
    const document = dom.window.document;

    let svg = document.createElementNS(svgns, "svg");
    svg.setAttribute("width", 16);
    svg.setAttribute("height", 16);

    let rect = document.createElementNS(svgns, "rect");
    rect.setAttribute("x", 0);
    rect.setAttribute("y", 0);
    rect.setAttribute("width", 16);
    rect.setAttribute("height", 16);
    svg.appendChild(rect);

    let serializer = new dom.window.XMLSerializer();
    let svgString = serializer.serializeToString(svg);

    let svgContent = '<?xml-stylesheet href="../../style/figure.css" type="text/css"?>' + "\n" + svgString;

    svgContent = beautify(svgContent, { indent_size: 4 });

    try {
        await fs.writeFile(filename, svgContent);
        console.log("ファイル" + filename + "を作成しました。");
    } catch (error) {
        console.log("ファイル" + filename + "を作成できませんでした。");
    }
}

async function generateLtrFigure() {
    let filename = path.join("reference/", "figure/", "ltr_figure.svg");
    const svgns = "http://www.w3.org/2000/svg";

    const dom = new JSDOM();
    const document = dom.window.document;

    let svg = document.createElementNS(svgns, "svg");
    svg.setAttribute("width", 16);
    svg.setAttribute("height", 16);

    let rect = document.createElementNS(svgns, "rect");
    rect.setAttribute("x", 0);
    rect.setAttribute("y", 0);
    rect.setAttribute("width", 16);
    rect.setAttribute("height", 16);
    svg.appendChild(rect);

    let serializer = new dom.window.XMLSerializer();
    let svgString = serializer.serializeToString(svg);

    let svgContent = '<?xml-stylesheet href="../../style/figure.css" type="text/css"?>' + "\n" + svgString;

    svgContent = beautify(svgContent, { indent_size: 4 });

    try {
        await fs.writeFile(filename, svgContent);
        console.log("ファイル" + filename + "を作成しました。");
    } catch (error) {
        console.log("ファイル" + filename + "を作成できませんでした。");
    }
}

async function generateArticleConjugationFigure() {
    let filename = path.join("reference/", "figure/", "article_conjugation_figure.svg");
    const svgns = "http://www.w3.org/2000/svg";

    const dom = new JSDOM();
    const document = dom.window.document;

    let svg = document.createElementNS(svgns, "svg");
    svg.setAttribute("width", 100);
    svg.setAttribute("height", 100);

    let rect = document.createElementNS(svgns, "rect");
    rect.setAttribute("x", 25);
    rect.setAttribute("y", 25);
    rect.setAttribute("width", 50);
    rect.setAttribute("height", 50);
    svg.appendChild(rect);

    let serializer = new dom.window.XMLSerializer();
    let svgString = serializer.serializeToString(svg);

    let svgContent = '<?xml-stylesheet href="../../style/figure.css" type="text/css"?>' + "\n" + svgString;

    svgContent = beautify(svgContent, { indent_size: 4 });

    try {
        await fs.writeFile(filename, svgContent);
        console.log("ファイル" + filename + "を作成しました。");
    } catch (error) {
        console.log("ファイル" + filename + "を作成できませんでした。");
    }
}

async function generateVerbConjugationFigure() {
    let filename = path.join("reference/", "figure/", "verb_conjugation_figure.svg");
    const svgns = "http://www.w3.org/2000/svg";

    const dom = new JSDOM();
    const document = dom.window.document;

    let svg = document.createElementNS(svgns, "svg");
    svg.setAttribute("width", 100);
    svg.setAttribute("height", 100);

    let rect = document.createElementNS(svgns, "rect");
    rect.setAttribute("x", 25);
    rect.setAttribute("y", 25);
    rect.setAttribute("width", 50);
    rect.setAttribute("height", 50);
    svg.appendChild(rect);

    let serializer = new dom.window.XMLSerializer();
    let svgString = serializer.serializeToString(svg);

    let svgContent = '<?xml-stylesheet href="../../style/figure.css" type="text/css"?>' + "\n" + svgString;

    svgContent = beautify(svgContent, { indent_size: 4 });

    try {
        await fs.writeFile(filename, svgContent);
        console.log("ファイル" + filename + "を作成しました。");
    } catch (error) {
        console.log("ファイル" + filename + "を作成できませんでした。");
    }
}

async function generateAdjectiveConjugationFigure() {
    let filename = path.join("reference/", "figure/", "adjective_conjugation_figure.svg");
    const svgns = "http://www.w3.org/2000/svg";

    const dom = new JSDOM();
    const document = dom.window.document;

    let svg = document.createElementNS(svgns, "svg");
    svg.setAttribute("width", 100);
    svg.setAttribute("height", 100);

    let rect = document.createElementNS(svgns, "rect");
    rect.setAttribute("x", 25);
    rect.setAttribute("y", 25);
    rect.setAttribute("width", 50);
    rect.setAttribute("height", 50);
    svg.appendChild(rect);

    let serializer = new dom.window.XMLSerializer();
    let svgString = serializer.serializeToString(svg);

    let svgContent = '<?xml-stylesheet href="../../style/figure.css" type="text/css"?>' + "\n" + svgString;

    svgContent = beautify(svgContent, { indent_size: 4 });

    try {
        await fs.writeFile(filename, svgContent);
        console.log("ファイル" + filename + "を作成しました。");
    } catch (error) {
        console.log("ファイル" + filename + "を作成できませんでした。");
    }
}

async function generateParticleConjugationFigure() {
    let filename = path.join("reference/", "figure/", "particle_conjugation_figure.svg");
    const svgns = "http://www.w3.org/2000/svg";

    const dom = new JSDOM();
    const document = dom.window.document;

    let svg = document.createElementNS(svgns, "svg");
    svg.setAttribute("width", 100);
    svg.setAttribute("height", 100);

    let rect = document.createElementNS(svgns, "rect");
    rect.setAttribute("x", 25);
    rect.setAttribute("y", 25);
    rect.setAttribute("width", 50);
    rect.setAttribute("height", 50);
    svg.appendChild(rect);

    let serializer = new dom.window.XMLSerializer();
    let svgString = serializer.serializeToString(svg);

    let svgContent = '<?xml-stylesheet href="../../style/figure.css" type="text/css"?>' + "\n" + svgString;

    svgContent = beautify(svgContent, { indent_size: 4 });

    try {
        await fs.writeFile(filename, svgContent);
        console.log("ファイル" + filename + "を作成しました。");
    } catch (error) {
        console.log("ファイル" + filename + "を作成できませんでした。");
    }
}

async function generateAdverbConjugationFigure() {
    let filename = path.join("reference/", "figure/", "adverb_conjugation_figure.svg");
    const svgns = "http://www.w3.org/2000/svg";

    const dom = new JSDOM();
    const document = dom.window.document;

    let svg = document.createElementNS(svgns, "svg");
    svg.setAttribute("width", 100);
    svg.setAttribute("height", 100);

    let rect = document.createElementNS(svgns, "rect");
    rect.setAttribute("x", 25);
    rect.setAttribute("y", 25);
    rect.setAttribute("width", 50);
    rect.setAttribute("height", 50);
    svg.appendChild(rect);

    let serializer = new dom.window.XMLSerializer();
    let svgString = serializer.serializeToString(svg);

    let svgContent = '<?xml-stylesheet href="../../style/figure.css" type="text/css"?>' + "\n" + svgString;
    svgContent = beautify(svgContent, { indent_size: 4 });

    try {
        await fs.writeFile(filename, svgContent);
        console.log("ファイル" + filename + "を作成しました。");
    } catch (error) {
        console.log("ファイル" + filename + "を作成できませんでした。");
    }
}

async function generateNounConjugationFigure() {
    let filename = path.join("reference/", "figure/", "noun_conjugation_figure.svg");
    const svgns = "http://www.w3.org/2000/svg";

    const dom = new JSDOM();
    const document = dom.window.document;

    let svg = document.createElementNS(svgns, "svg");
    svg.setAttribute("width", 100);
    svg.setAttribute("height", 100);

    let rect = document.createElementNS(svgns, "rect");
    rect.setAttribute("x", 25);
    rect.setAttribute("y", 25);
    rect.setAttribute("width", 50);
    rect.setAttribute("height", 50);
    svg.appendChild(rect);

    let serializer = new dom.window.XMLSerializer();
    let svgString = serializer.serializeToString(svg);

    let svgContent = '<?xml-stylesheet href="../../style/figure.css" type="text/css"?>' + "\n" + svgString;

    svgContent = beautify(svgContent, { indent_size: 4 });

    try {
        await fs.writeFile(filename, svgContent);
        console.log("ファイル" + filename + "を作成しました。");
    } catch (error) {
        console.log("ファイル" + filename + "を作成できませんでした。");
    }
}

async function make() {
    generateConsonantFigure();
    generateVowelFigure();
    generateRtlFigure();
    generateLtrFigure();
    generateArticleConjugationFigure();
    generateVerbConjugationFigure();
    generateAdjectiveConjugationFigure();
    generateParticleConjugationFigure();
    generateAdverbConjugationFigure();
    generateNounConjugationFigure();
}

make();
