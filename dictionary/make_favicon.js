const fs = require("fs").promises;
const path = require("path");
const { JSDOM } = require("jsdom");
const beautify = require("js-beautify").html;

const consonants = ["k", "g", "t", "d", "s", "z", "q", "c", "r", "l", "p", "b", "h", "x", "f", "v", "m", "n"];

const minMaxMap = [
    [-4, -1], [-4, -1], [-3, 0], [-3, 0], [-2, 1], [-2, 1],
    [-5, -2], [-5, -2], [0, 8], [0, 8], [-1, 2], [-1, 2],
    [2, 5], [2, 5], [1, 4], [1, 4], [0, 3], [0, 3]
];

const circleStyle = "@media(prefers-color-scheme: light){circle{fill:#000}}@media(prefers-color-scheme: dark){circle{fill:#c99410}}";

function getMinMax(i) {
    return minMaxMap[i] || [0, 0];
}

function addCircle(svg, cx, cy, r) {
    const circle = svg.ownerDocument.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttribute("cx", cx);
    circle.setAttribute("cy", cy);
    circle.setAttribute("r", r);
    svg.appendChild(circle);
}

function addStyle(svg, styleText) {
    const style = svg.ownerDocument.createElementNS("http://www.w3.org/2000/svg", "style");
    style.textContent = styleText;
    svg.appendChild(style);
}

async function writeSVG(filename, svg) {
    const serializer = new svg.ownerDocument.defaultView.XMLSerializer();
    const svgString = serializer.serializeToString(svg);
    const content = beautify(svgString, { indent_size: 4, space_in_empty_paren: true });
    try {
        await fs.writeFile(filename, content);
        console.log("ファイル " + filename + "を作成しました。");
    } catch (e) {
        console.error("ファイル " + filename + "を作成できませんでした。", e);
    }
}

async function generateIndex() {
    const dom = new JSDOM("<!DOCTYPE html><body></body>");
    const doc = dom.window.document;
    const svg = doc.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("width", 100);
    svg.setAttribute("height", 100);

    addCircle(svg, 50, 50, 25);
    for (let i = 0; i < 8; i++) {
        addCircle(svg, 50 + 37.5 * Math.cos(i * Math.PI / 4), 50 + 37.5 * Math.sin(i * Math.PI / 4), 12.5);
    }
    addStyle(svg, circleStyle);

    await writeSVG(path.join("favicon_index", "index.svg"), svg);
}

async function generateConsonant(i) {
    const dom = new JSDOM("<!DOCTYPE html><body></body>");
    const doc = dom.window.document;
    const svg = doc.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("width", 100);
    svg.setAttribute("height", 100);

    if (i % 2 === 1) addCircle(svg, 50, 50, 30);

    const [min, max] = getMinMax(i);
    for (let j = min; j < max; j++) {
        const cx = 50 + 40 * Math.cos(j * Math.PI / 4);
        const cy = 50 + 40 * Math.sin(j * Math.PI / 4);
        addCircle(svg, cx, cy, 10);
    }
    addStyle(svg, circleStyle);

    await writeSVG(path.join("favicon_index", `${consonants[i]}.svg`), svg);
}

async function generateRoot(i, j, k) {
    const dom = new JSDOM("<!DOCTYPE html><body></body>");
    const doc = dom.window.document;
    const svg = doc.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("width", 100);
    svg.setAttribute("height", 100);

    const positions = [
        [25, 25, i],
        [75, 25, j],
        [50, 75, k]
    ];

    const radii = [15, 15, 15];
    const circleOffset = 20;
    const circleRadius = 5;

    positions.forEach(([cx, cy, idx]) => {
        if (idx % 2 === 1) addCircle(svg, cx, cy, radii[positions.indexOf([cx, cy, idx])]);
        const [min, max] = getMinMax(idx);
        for (let n = min; n < max; n++) {
            const x = cx + circleOffset * Math.cos(n * Math.PI / 4);
            const y = cy + circleOffset * Math.sin(n * Math.PI / 4);
            addCircle(svg, x, y, circleRadius);
        }
    });

    addStyle(svg, circleStyle);

    const filename = path.join("favicon_index", consonants[i], `${consonants[i]}${consonants[j]}${consonants[k]}.svg`);
    await writeSVG(filename, svg);
}

async function generateConsonantDirectory(i) {
    const dir = path.join("favicon_index", consonants[i]);
    try {
        await fs.mkdir(dir, { recursive: true });
        console.log("ディレクトリ" + dir + "を作成しました。");
    } catch (e) {
        console.error("ディレクトリ" + dir + "を作成できませんでした。", e);
    }
}

async function make() {
    await fs.mkdir("favicon_index", { recursive: true });
    console.log("ディレクトリ favicon_index を作成しました。");

    await generateIndex();

    for (let i = 0; i < consonants.length; i++) {
        await generateConsonant(i);
        await generateConsonantDirectory(i);
        for (let j = 0; j < consonants.length; j++) {
            for (let k = 0; k < consonants.length; k++) {
                await generateRoot(i, j, k);
            }
        }
    }

    console.log("生成完了");
}

make();