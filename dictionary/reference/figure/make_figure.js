const fs = require("fs").promises;
const path = require("path");
const { JSDOM } = require("jsdom");
const beautify = require("js-beautify").html;

async function generateArticleConjugationFigure() {
    let filename = path.join("article_conjugation_figure.svg");


    const dom = new JSDOM("<!DOCUTYPE html><body></body>");
    const document = dom.window.document;
    let svgns = "http://www.w3.org/2000/svg";

    let svg = document.createElementNS(svgns, "svg");
    svg.setAttribute("width", 100);
    svg.setAttribute("height", 100);

    let circle = document.createElementNS(svgns, "circle");
    circle.setAttribute("cx", 50);
    circle.setAttribute("cy", 50);
    circle.setAttribute("r", 50);
    svg.appendChild(circle);

    let serializer = new dom.window.XMLSerializer();
    let svgString = serializer.serializeToString(svg);

    let svgContent = beautify(svgString, { indent_size: 4, space_in_empty_paren: true })

    try {
        await fs.writeFile(filename, svgContent);
        console.log("ファイル" + filename + "を作成しました。");
    } catch (error) {
        console.log("ファイル" + filename + "を作成できませんでした。");
    }
}

async function generateVerbConjugationFigure() {
    let filename = path.join("verb_conjugation_figure.svg");


    const dom = new JSDOM("<!DOCUTYPE html><body></body>");
    const document = dom.window.document;
    let svgns = "http://www.w3.org/2000/svg";

    let svg = document.createElementNS(svgns, "svg");
    svg.setAttribute("width", 100);
    svg.setAttribute("height", 100);

    let circle = document.createElementNS(svgns, "circle");
    circle.setAttribute("cx", 50);
    circle.setAttribute("cy", 50);
    circle.setAttribute("r", 50);
    svg.appendChild(circle);

    let serializer = new dom.window.XMLSerializer();
    let svgString = serializer.serializeToString(svg);

    let svgContent = beautify(svgString, { indent_size: 4, space_in_empty_paren: true })

    try {
        await fs.writeFile(filename, svgContent);
        console.log("ファイル" + filename + "を作成しました。");
    } catch (error) {
        console.log("ファイル" + filename + "を作成できませんでした。");
    }
}

async function generateAdjectiveConjugationFigure() {
    let filename = path.join("adjective_conjugation_figure.svg");


    const dom = new JSDOM("<!DOCUTYPE html><body></body>");
    const document = dom.window.document;
    let svgns = "http://www.w3.org/2000/svg";

    let svg = document.createElementNS(svgns, "svg");
    svg.setAttribute("width", 100);
    svg.setAttribute("height", 100);

    let circle = document.createElementNS(svgns, "circle");
    circle.setAttribute("cx", 50);
    circle.setAttribute("cy", 50);
    circle.setAttribute("r", 50);
    svg.appendChild(circle);

    let serializer = new dom.window.XMLSerializer();
    let svgString = serializer.serializeToString(svg);

    let svgContent = beautify(svgString, { indent_size: 4, space_in_empty_paren: true })

    try {
        await fs.writeFile(filename, svgContent);
        console.log("ファイル" + filename + "を作成しました。");
    } catch (error) {
        console.log("ファイル" + filename + "を作成できませんでした。");
    }
}

async function generateParticleConjugationFigure() {
    let filename = path.join("particle_conjugation_figure.svg");


    const dom = new JSDOM("<!DOCUTYPE html><body></body>");
    const document = dom.window.document;
    let svgns = "http://www.w3.org/2000/svg";

    let svg = document.createElementNS(svgns, "svg");
    svg.setAttribute("width", 100);
    svg.setAttribute("height", 100);

    let circle = document.createElementNS(svgns, "circle");
    circle.setAttribute("cx", 50);
    circle.setAttribute("cy", 50);
    circle.setAttribute("r", 50);
    svg.appendChild(circle);

    let serializer = new dom.window.XMLSerializer();
    let svgString = serializer.serializeToString(svg);

    let svgContent = beautify(svgString, { indent_size: 4, space_in_empty_paren: true })

    try {
        await fs.writeFile(filename, svgContent);
        console.log("ファイル" + filename + "を作成しました。");
    } catch (error) {
        console.log("ファイル" + filename + "を作成できませんでした。");
    }
}

async function generateAdverbConjugationFigure() {
    let filename = path.join("adverb_conjugation_figure.svg");

    const dom = new JSDOM("<!DOCUTYPE html><body></body>");
    const document = dom.window.document;
    let svgns = "http://www.w3.org/2000/svg";

    let svg = document.createElementNS(svgns, "svg");
    svg.setAttribute("width", 100);
    svg.setAttribute("height", 100);

    let circle = document.createElementNS(svgns, "circle");
    circle.setAttribute("cx", 50);
    circle.setAttribute("cy", 50);
    circle.setAttribute("r", 50);
    svg.appendChild(circle);

    let serializer = new dom.window.XMLSerializer();
    let svgString = serializer.serializeToString(svg);

    let svgContent = beautify(svgString, { indent_size: 4, space_in_empty_paren: true })

    try {
        await fs.writeFile(filename, svgContent);
        console.log("ファイル" + filename + "を作成しました。");
    } catch (error) {
        console.log("ファイル" + filename + "を作成できませんでした。");
    }
}

async function generateNounConjugationFigure() {
    let filename = path.join("noun_conjugation_figure.svg");


    const dom = new JSDOM("<!DOCUTYPE html><body></body>");
    const document = dom.window.document;
    let svgns = "http://www.w3.org/2000/svg";

    let svg = document.createElementNS(svgns, "svg");
    svg.setAttribute("width", 100);
    svg.setAttribute("height", 100);

    let circle = document.createElementNS(svgns, "circle");
    circle.setAttribute("cx", 50);
    circle.setAttribute("cy", 50);
    circle.setAttribute("r", 50);
    svg.appendChild(circle);

    let serializer = new dom.window.XMLSerializer();
    let svgString = serializer.serializeToString(svg);

    let svgContent = beautify(svgString, { indent_size: 4, space_in_empty_paren: true })

    try {
        await fs.writeFile(filename, svgContent);
        console.log("ファイル" + filename + "を作成しました。");
    } catch (error) {
        console.log("ファイル" + filename + "を作成できませんでした。");
    }
}

async function make() {
    console.log("図表生成開始");
    generateArticleConjugationFigure();
    generateVerbConjugationFigure();
    generateAdjectiveConjugationFigure();
    generateParticleConjugationFigure();
    generateAdverbConjugationFigure();
    generateNounConjugationFigure();
    console.log("図表生成完了");
}

make();