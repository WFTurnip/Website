const fs = require("fs").promises;
const path = require("path");
const { JSDOM } = require("jsdom");
const beautify = require("js-beautify").html;

const consonants_array = ["k", "g", "t", "d", "s", "z", "q", "c", "r", "l", "p", "b", "h", "x", "f", "v", "m", "n"];

async function generateIndex() {
    let filename = path.join("favicon_index", "index.svg");

    const dom = new JSDOM(`<!DOCTYPE html><body></body>`);
    const document = dom.window.document;
    let svgns = "http://www.w3.org/2000/svg";

    let svg = document.createElementNS(svgns, "svg");
    svg.setAttribute("width", 350);
    svg.setAttribute("height", 350);

    let circle = document.createElementNS(svgns, "circle");
    circle.setAttribute("cx", 175);
    circle.setAttribute("cy", 175);
    circle.setAttribute("r", 125);
    svg.appendChild(circle);

    for (let i = 0; i < 8; i++) {
        let cx = 175 + 150 * Math.cos(i * Math.PI / 4);
        let cy = 175 + 150 * Math.sin(i * Math.PI / 4);
        let circle = document.createElementNS(svgns, "circle");
        circle.setAttribute("cx", cx);
        circle.setAttribute("cy", cy);
        circle.setAttribute("r", 25);
        svg.appendChild(circle);
    }

    let style = document.createElementNS(svgns, "style");
    style.textContent = `
    @media(prefers-color-scheme: light) {
        circle {
            fill: #000
        }
    }

    @media(prefers-color-scheme: dark) {
        circle {
            fill: #c99410
        }
    }
    `;
    svg.appendChild(style);

    let serializer = new dom.window.XMLSerializer();
    let svgString = serializer.serializeToString(svg);

    let svgContent = beautify(svgString, { indent_size: 4, space_in_empty_paren: true });

    try {
        await fs.writeFile(filename, svgContent);
        // console.log("ファイル" + filename + "を作成しました。");
    } catch (error) {
        // console.error("ファイル" + filename + "を作成できませんでした。", error);
    }
}

async function generateConsonant(i) {
    let filename = path.join("favicon_index", consonants_array[i] + ".svg");

    let svg = document.createElementNS(svgns, "svg");
    svg.setAttribute("width", 350);
    svg.setAttribute("height", 350);

    if (i % 2 === 0) {
        let circle = document.createElementNS(svgns, "circle");
        circle.setAttribute("cx", 175);
        circle.setAttribute("cy", 175);
        circle.setAttribute("r", 125);
        svg.appendChild(circle);
    }

    switch (key) {
        case value:
            
            break;

        default:
            break;
    }

    for (let j = 0; k < 8; j++) {
        let cx = 175 + 150 * Math.cos(j * Math.PI / 4);
        let cy = 175 + 150 * Math.sin(j * Math.PI / 4);
        let circle = document.createElementNS(svgns, "circle");
        circle.setAttribute("cx", cx);
        circle.setAttribute("cy", cy);
        circle.setAttribute("r", 25);
        svg.appendChild(circle);
    }

    let style = document.createElementNS(svgns, "style");
    style.textContent = `
    @media(prefers-color-scheme: light) {
        circle {
            fill: #000
        }
    }

    @media(prefers-color-scheme: dark) {
        circle {
            fill: #c99410
        }
    }
    `;
    svg.appendChild(style);

    let serializer = new dom.window.XMLSerializer();
    let svgString = serializer.serializeToString(svg);

    let svgContent = beautify(svgString, { indent_size: 4, space_in_empty_paren: true });

    try {
        await fs.writeFile(filename, svgContent);
        // console.log("ファイル" + filename + "を作成しました。");
    } catch (error) {
        // console.error("ファイル" + filename + "を作成できませんでした。", error);
    }
}

async function generateConsonantDirectory(i) {
    let directory = path.join("favicon_index", consonants_array[i]);
    try {
        await fs.mkdir(directory, { recursive: true });
        // console.log("ディレクトリ" + directory + "を作成しました。");
    } catch (error) {
        // console.error("ディレクトリ" + directory + "を作成できませんでした。");
    }
}

async function generateRoot(i, j, k) {
    let filename = path.join("favicon_index", consonants_array[i] + "/" + consonants_array[i] + consonants_array[j] + consonants_array[k] + ".svg");
    try {
        await fs.writeFile(filename, "");
        // console.log("ファイル" + filename + "を作成しました。");
    } catch (error) {
        // console.error("ファイル" + filename + "を作成できませんでした。", error);
    }
}

async function make() {
    let directory = path.join("favicon_index");
    try {
        await fs.mkdir(directory, { recursive: true });
        console.log("ディレクトリ" + directory + "を作成しました。");
    } catch (error) {
        console.error("ディレクトリ" + directory + "を作成できませんでした。");
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