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
    svg.setAttribute("width", 500);
    svg.setAttribute("height", 500);

    let circle = document.createElementNS(svgns, "circle");
    circle.setAttribute("cx", 250);
    circle.setAttribute("cy", 250);
    circle.setAttribute("r", 200);
    svg.appendChild(circle);

    for (let i = 0; i < 8; i++) {
        let cx = 250 + 225 * Math.cos(i * Math.PI / 4);
        let cy = 250 + 225 * Math.sin(i * Math.PI / 4);
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

    const dom = new JSDOM(`<!DOCTYPE html><body></body>`);
    const document = dom.window.document;
    let svgns = "http://www.w3.org/2000/svg";

    let svg = document.createElementNS(svgns, "svg");
    svg.setAttribute("width", 500);
    svg.setAttribute("height", 500);

    if (i % 2 === 1) {
        let circle = document.createElementNS(svgns, "circle");
        circle.setAttribute("cx", 250);
        circle.setAttribute("cy", 250);
        circle.setAttribute("r", 150);
        svg.appendChild(circle);
    }

    let min, max;

    switch (i) {
        case 0:
        case 1:
            min = -4;
            max = -1;
            break;
        case 2:
        case 3:
            min = -3;
            max = 0;
            break;
        case 4:
        case 5:
            min = -2;
            max = 1;
            break;
        case 6:
        case 7:
            min = -1;
            max = 2;
            break;
        default:
            break;
    }

    for (let j = min; j < max; j++) {
        let cx = 250 + 200 * Math.cos(j * Math.PI / 4);
        let cy = 250 + 200 * Math.sin(j * Math.PI / 4);
        let circle = document.createElementNS(svgns, "circle");
        circle.setAttribute("cx", cx);
        circle.setAttribute("cy", cy);
        circle.setAttribute("r", 50);
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