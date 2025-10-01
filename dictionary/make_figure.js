const fs = require("fs").promises;
const path = require("path");
const { JSDOM } = require("jsdom");
const beautify = require("js-beautify").html;

async function generateArticleConjugationFigure() {
    let filename = path.join("reference/", "figure/", "article_conjugation_figure.svg");
    const svgns = "http://www.w3.org/2000/svg";

    const dom = new JSDOM();
    const document = dom.window.document;

    let svg = document.createElementNS(svgns, "svg");
    svg.setAttribute("width", 100);
    svg.setAttribute("height", 100);

    let circle = document.createElementNS(svgns, "circle");
    circle.setAttribute("cx", 50);
    circle.setAttribute("cy", 50);
    circle.setAttribute("r", 25);
    svg.appendChild(circle);

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

    let circle = document.createElementNS(svgns, "circle");
    circle.setAttribute("cx", 50);
    circle.setAttribute("cy", 50);
    circle.setAttribute("r", 25);
    svg.appendChild(circle);

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

    let circle = document.createElementNS(svgns, "circle");
    circle.setAttribute("cx", 50);
    circle.setAttribute("cy", 50);
    circle.setAttribute("r", 25);
    svg.appendChild(circle);

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

    let circle = document.createElementNS(svgns, "circle");
    circle.setAttribute("cx", 50);
    circle.setAttribute("cy", 50);
    circle.setAttribute("r", 25);
    svg.appendChild(circle);

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

    let circle = document.createElementNS(svgns, "circle");
    circle.setAttribute("cx", 50);
    circle.setAttribute("cy", 50);
    circle.setAttribute("r", 25);
    svg.appendChild(circle);

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

    let circle = document.createElementNS(svgns, "circle");
    circle.setAttribute("cx", 50);
    circle.setAttribute("cy", 50);
    circle.setAttribute("r", 25);
    svg.appendChild(circle);

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
    generateArticleConjugationFigure();
    generateVerbConjugationFigure();
    generateAdjectiveConjugationFigure();
    generateParticleConjugationFigure();
    generateAdverbConjugationFigure();
    generateNounConjugationFigure();
}

make();
