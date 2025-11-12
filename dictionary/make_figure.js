const fs = require("fs").promises;
const path = require("path");
const { JSDOM } = require("jsdom");
const beautify = require("js-beautify").html;

const consonantsArray = ["k", "g", "t", "d", "s", "z", "q", "c", "r", "l", "p", "b", "h", "x", "f", "v", "m", "n"];
const consonantsMeansArray = ["剥離", "癒着", "乖離", "同一", "肉体", "精神", "空白", "物質", "過去", "未来", "鎮静", "高揚", "受動", "能動", "創造", "破壊", "流動", "固定"];
const consonantsPronunciationArray = ["k", "g", "t", "d", "s", "z", "ʔ", "ʕ", "r", "l", "p", "b", "h", "x", "f", "v", "m", "n"];

const vowelsArray = ["a", "o", "u", "w", "i", "e"];
const vowelsCasesArray = ["否", "対", "主", "流", "属", "与",];
const vowelsPartOfSpeechTypesArray = ["附", "助", "副", "名", "容", "動",];
const vowelsPronunciationArray = ["a", "o", "u", "∅", "i", "e"];

async function generateConsonantFigure() {
    let filename = path.join("reference/", "figure/", "consonant_figure.svg");
    const svgns = "http://www.w3.org/2000/svg";

    const dom = new JSDOM();
    const document = dom.window.document;

    let width = 256;
    let height = 256;

    let apex = 6;

    let svg = document.createElementNS(svgns, "svg");
    svg.setAttribute("width", width);
    svg.setAttribute("height", height);

    let centerX = width / 2;
    let centerY = height / 2;

    for (let i = 0; i <= apex; i++) {
	for (let j = 2; j <= 3; j++) {
            let line = document.createElementNS(svgns, "line");
            let x1 = centerX + (width / 2) * Math.sin(i * Math.PI / 3);
            let y1 = centerY + (height / 2) * Math.cos(i * Math.PI / 3);
            let x2 = centerX + (width / 2) * Math.sin((i + j) * Math.PI / 3);
            let y2 = centerY + (height / 2) * Math.cos((i + j) * Math.PI / 3);
            line.setAttribute("x1", x1);
            line.setAttribute("y1", y1);
            line.setAttribute("x2", x2);
            line.setAttribute("y2", y2);
            line.setAttribute("stroke-width", 1);
            svg.appendChild(line);
	}
    }

    let serializer = new dom.window.XMLSerializer();
    let svgString = serializer.serializeToString(svg);

    let svgContent =
        '<?xml-stylesheet href="../../style/figure.css" type="text/css"?>' + "\n" +
        '<?xml-stylesheet href="../../style/fonts.css" type="text/css"?>' + "\n" +
        '<?xml-stylesheet href="../../style/pages.css" type="text/css"?>' + "\n" +
        svgString;

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

    let width = 256;
    let height = 256;

    let apex = 6;

    let svg = document.createElementNS(svgns, "svg");
    svg.setAttribute("width", width);
    svg.setAttribute("height", height);

    let centerX = width / 2;
    let centerY = height / 2;

    let polyline = document.createElementNS(svgns, "polyline");
    let coodinate = "";
    for (let i = 0; i <= apex; i++) {
        let x = centerX + (width / 2) * Math.sin(i * Math.PI / 3);
        let y = centerY + (height / 2) * Math.cos(i * Math.PI / 3);
        coodinate += x + "," + y + "";
        if (i < apex) {
            coodinate += " ";
        }
    }
    polyline.setAttribute("points", coodinate);
    polyline.setAttribute("fill", "none");
    polyline.setAttribute("stroke-width", 1);
    svg.appendChild(polyline);

    for (let i = 0; i < apex; i++) {
        let text = document.createElementNS(svgns, "text");
        let x = centerX + (width / 2) * Math.sin((4 + i) * Math.PI / 3);
        let y = centerY + (height / 2) * Math.cos((4 + i) * Math.PI / 3);
        text.setAttribute("x", x);
        text.setAttribute("y", y);
        text.textContent = "\u{25cc}" + vowelsArray[i];
        text.classList.add("zosokw");
        svg.appendChild(text);
    }

    for (let i = 0; i < apex; i++) {
        let text = document.createElementNS(svgns, "text");
        let x = centerX + (width / 2) * Math.sin((4 + i) * Math.PI / 3);
        let y = centerY + (height / 2) * Math.cos((4 + i) * Math.PI / 3);
        text.setAttribute("x", x);
        text.setAttribute("y", y);
        text.textContent = "[" + vowelsPronunciationArray[i] + "]";
        text.classList.add("pronunciation");
        svg.appendChild(text);
    }

    let serializer = new dom.window.XMLSerializer();
    let svgString = serializer.serializeToString(svg);

    let svgContent =
        '<?xml-stylesheet href="../../style/figure.css" type="text/css"?>' + "\n" +
        '<?xml-stylesheet href="../../style/fonts.css" type="text/css"?>' + "\n" +
        '<?xml-stylesheet href="../../style/pages.css" type="text/css"?>' + "\n" +
        svgString;

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

    let polygon = document.createElementNS(svgns, "polygon");
    let coodinate = "8,0 8,8 0,8 8,16 16,8";
    polygon.setAttribute("points", coodinate);
    svg.appendChild(polygon);

    let serializer = new dom.window.XMLSerializer();
    let svgString = serializer.serializeToString(svg);

    let svgContent =
        '<?xml-stylesheet href="../../style/figure.css" type="text/css"?>' + "\n" +
        '<?xml-stylesheet href="../../style/fonts.css" type="text/css"?>' + "\n" +
        '<?xml-stylesheet href="../../style/pages.css" type="text/css"?>' + "\n" +
        svgString;

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

    let polygon = document.createElementNS(svgns, "polygon");
    let coodinate = "8,0 0,8 8,16 16,8 8,8";
    polygon.setAttribute("points", coodinate);
    svg.appendChild(polygon);

    let serializer = new dom.window.XMLSerializer();
    let svgString = serializer.serializeToString(svg);

    let svgContent =
        '<?xml-stylesheet href="../../style/figure.css" type="text/css"?>' + "\n" +
        '<?xml-stylesheet href="../../style/fonts.css" type="text/css"?>' + "\n" +
        '<?xml-stylesheet href="../../style/pages.css" type="text/css"?>' + "\n" +
        svgString;

    svgContent = beautify(svgContent, { indent_size: 4 });

    try {
        await fs.writeFile(filename, svgContent);
        console.log("ファイル" + filename + "を作成しました。");
    } catch (error) {
        console.log("ファイル" + filename + "を作成できませんでした。");
    }
}

async function generateConsonantMeaningFigure() {
    let filename = path.join("reference/", "figure/", "consonant_meaning_figure.svg");
    const svgns = "http://www.w3.org/2000/svg";

    const dom = new JSDOM();
    const document = dom.window.document;

    let width = 256;
    let height = 256;

    let apex = 6;

    let svg = document.createElementNS(svgns, "svg");
    svg.setAttribute("width", width);
    svg.setAttribute("height", height);

    let centerX = width / 2;
    let centerY = height / 2;

    for (let i = 0; i <= apex; i++) {
	for (let j = 2; j <= 3; j++) {
            let line = document.createElementNS(svgns, "line");
            let x1 = centerX + (width / 2) * Math.sin(i * Math.PI / 3);
            let y1 = centerY + (height / 2) * Math.cos(i * Math.PI / 3);
            let x2 = centerX + (width / 2) * Math.sin((i + j) * Math.PI / 3);
            let y2 = centerY + (height / 2) * Math.cos((i + j) * Math.PI / 3);
            line.setAttribute("x1", x1);
            line.setAttribute("y1", y1);
            line.setAttribute("x2", x2);
            line.setAttribute("y2", y2);
            line.setAttribute("stroke-width", 1);
            svg.appendChild(line);
	}
    }

    let serializer = new dom.window.XMLSerializer();
    let svgString = serializer.serializeToString(svg);

    let svgContent =
        '<?xml-stylesheet href="../../style/figure.css" type="text/css"?>' + "\n" +
        '<?xml-stylesheet href="../../style/fonts.css" type="text/css"?>' + "\n" +
        '<?xml-stylesheet href="../../style/pages.css" type="text/css"?>' + "\n" +
        svgString;

    svgContent = beautify(svgContent, { indent_size: 4 });

    try {
        await fs.writeFile(filename, svgContent);
        console.log("ファイル" + filename + "を作成しました。");
    } catch (error) {
        console.log("ファイル" + filename + "を作成できませんでした。");
    }
}

async function generateFirstCaseFigure() {
    let filename = path.join("reference/", "figure/", "first_case_figure.svg");
    const svgns = "http://www.w3.org/2000/svg";
    const dom = new JSDOM();
    const document = dom.window.document;

    let width = 256;
    let height = 256;

    let apex = 6;

    let svg = document.createElementNS(svgns, "svg");
    svg.setAttribute("width", width);
    svg.setAttribute("height", height);

    let centerX = width / 2;
    let centerY = height / 2;

    let polyline = document.createElementNS(svgns, "polyline");
    let coodinate = "";
    for (let i = 0; i <= apex; i++) {
        let x = centerX + (width / 2) * Math.sin(i * Math.PI / 3);
        let y = centerY + (height / 2) * Math.cos(i * Math.PI / 3);
        coodinate += x + "," + y + "";
        if (i < apex) {
            coodinate += " ";
        }
    }
    polyline.setAttribute("points", coodinate);
    polyline.setAttribute("fill", "none");
    polyline.setAttribute("stroke-width", 1);
    svg.appendChild(polyline);

    for (let i = 0; i < apex; i++) {
        let text = document.createElementNS(svgns, "text");
        let x = centerX + (width / 2) * Math.sin(i * Math.PI / 3);
        let y = centerY + (height / 2) * Math.cos(i * Math.PI / 3);
        text.setAttribute("x", x);
        text.setAttribute("y", y);
        text.textContent = "\u{25cc}" + vowelsArray[i];
        text.classList.add("zosokw");
        svg.appendChild(text);
    }

    for (let i = 0; i < apex; i++) {
        let text = document.createElementNS(svgns, "text");
        let x = centerX + (width / 2) * Math.sin(i * Math.PI / 3);
        let y = centerY + (height / 2) * Math.cos(i * Math.PI / 3);
        text.setAttribute("x", x);
        text.setAttribute("y", y);
        text.textContent = vowelsCasesArray[i] + "格";
        text.classList.add("cases");
        svg.appendChild(text);
    }

    let serializer = new dom.window.XMLSerializer();
    let svgString = serializer.serializeToString(svg);

    let svgContent =
        '<?xml-stylesheet href="../../style/figure.css" type="text/css"?>' + "\n" +
        '<?xml-stylesheet href="../../style/fonts.css" type="text/css"?>' + "\n" +
        '<?xml-stylesheet href="../../style/pages.css" type="text/css"?>' + "\n" +
        svgString;

    svgContent = beautify(svgContent, { indent_size: 4 });

    try {
        await fs.writeFile(filename, svgContent);
        console.log("ファイル" + filename + "を作成しました。");
    } catch (error) {
        console.log("ファイル" + filename + "を作成できませんでした。");
    }
}

async function generateSecondCaseFigure() {
    let filename = path.join("reference/", "figure/", "second_case_figure.svg");
    const svgns = "http://www.w3.org/2000/svg";
    const dom = new JSDOM();
    const document = dom.window.document;

    let width = 256;
    let height = 256;

    let apex = 6;

    let svg = document.createElementNS(svgns, "svg");
    svg.setAttribute("width", width);
    svg.setAttribute("height", height);

    let centerX = width / 2;
    let centerY = height / 2;

    let polyline = document.createElementNS(svgns, "polyline");
    let coodinate = "";
    for (let i = 0; i <= apex; i++) {
        let x = centerX + (width / 2) * Math.sin(i * Math.PI / 3);
        let y = centerY + (height / 2) * Math.cos(i * Math.PI / 3);
        coodinate += x + "," + y + "";
        if (i < apex) {
            coodinate += " ";
        }
    }
    polyline.setAttribute("points", coodinate);
    polyline.setAttribute("fill", "none");
    polyline.setAttribute("stroke-width", 1);
    svg.appendChild(polyline);

    for (let i = 0; i < apex; i++) {
        let text = document.createElementNS(svgns, "text");
        let x = centerX + (width / 2) * Math.sin(i * Math.PI / 3);
        let y = centerY + (height / 2) * Math.cos(i * Math.PI / 3);
        text.setAttribute("x", x);
        text.setAttribute("y", y);
        text.textContent = "\u{25cc}" + vowelsArray[i];
        text.classList.add("zosokw");
        svg.appendChild(text);
    }

    for (let i = 0; i < apex; i++) {
        let text = document.createElementNS(svgns, "text");
        let x = centerX + (width / 2) * Math.sin(i * Math.PI / 3);
        let y = centerY + (height / 2) * Math.cos(i * Math.PI / 3);
        text.setAttribute("x", x);
        text.setAttribute("y", y);
        text.textContent = vowelsCasesArray[i] + "格";
        text.classList.add("cases");
        svg.appendChild(text);
    }

    let serializer = new dom.window.XMLSerializer();
    let svgString = serializer.serializeToString(svg);

    let svgContent =
        '<?xml-stylesheet href="../../style/figure.css" type="text/css"?>' + "\n" +
        '<?xml-stylesheet href="../../style/fonts.css" type="text/css"?>' + "\n" +
        '<?xml-stylesheet href="../../style/pages.css" type="text/css"?>' + "\n" +
        svgString;

    svgContent = beautify(svgContent, { indent_size: 4 });

    try {
        await fs.writeFile(filename, svgContent);
        console.log("ファイル" + filename + "を作成しました。");
    } catch (error) {
        console.log("ファイル" + filename + "を作成できませんでした。");
    }
}

async function generateConjunctCaseFigure() {
    let filename = path.join("reference/", "figure/", "conjunct_case_figure.svg");
    const svgns = "http://www.w3.org/2000/svg";
    const dom = new JSDOM();
    const document = dom.window.document;

    let width = 512;
    let height = 512;

    let apex = 6;

    let svg = document.createElementNS(svgns, "svg");
    svg.setAttribute("width", width);
    svg.setAttribute("height", height);

    let centerX = width / 2;
    let centerY = height / 2;

    for (let i = 0; i <= apex; i++) {
        let firstCaseApexX = centerX + (width / 3) * Math.sin(i * Math.PI / 3);
        let firstCaseApexY = centerY + (height / 3) * Math.cos(i * Math.PI / 3);
        let polyline = document.createElementNS(svgns, "polyline");
        let coodinate = "";
        for (let j = 0; j <= apex; j++) {
            let conjunctCaseApexX = firstCaseApexX + (width / 6) * Math.sin(j * Math.PI / 3);
            let conjunctCaseApexY = firstCaseApexY + (height / 6) * Math.cos(j * Math.PI / 3);
            coodinate += conjunctCaseApexX + "," + conjunctCaseApexY + "";
            if (j <= apex - 1) {
                coodinate += " ";
            }
        }
        polyline.setAttribute("points", coodinate);
        polyline.setAttribute("fill", "none");
        polyline.setAttribute("stroke-width", 1);
        svg.appendChild(polyline);
    }

    for (let i = 0; i < apex; i++) {
        let firstCaseText = document.createElementNS(svgns, "text");
        let firstCaseApexX = centerX + (width / 3) * Math.sin((i + 4) * Math.PI / 3);
        let firstCaseApexY = centerY + (height / 3) * Math.cos((i + 4) * Math.PI / 3);
        firstCaseText.setAttribute("x", firstCaseApexX);
        firstCaseText.setAttribute("y", firstCaseApexY);
        firstCaseText.textContent = "\u{25cc}" + vowelsArray[i];
        firstCaseText.classList.add("zosokw");
        svg.appendChild(firstCaseText);
        for (let j = 0; j < apex; j++) {
            let conjunctCaseText = document.createElementNS(svgns, "text");
            let conjunctCaseApexX = firstCaseApexX + (width / 6 - 16 * 2) * Math.sin((j + 4) * Math.PI / 3);
            let conjunctCaseApexY = firstCaseApexY + (height / 6 - 16 * 2) * Math.cos((j + 4) * Math.PI / 3);
            conjunctCaseText.setAttribute("x", conjunctCaseApexX);
            conjunctCaseText.setAttribute("y", conjunctCaseApexY);
            conjunctCaseText.textContent = "\u{25cc}" + vowelsArray[i] + "\u{25cc}" + vowelsArray[j] + "\u{25cc}";
            conjunctCaseText.classList.add("zosokw");
            svg.appendChild(conjunctCaseText);
        }
    }

    for (let i = 0; i < apex; i++) {
        let firstCaseText = document.createElementNS(svgns, "text");
        let firstCaseApexX = centerX + (width / 3) * Math.sin((i + 4) * Math.PI / 3);
        let firstCaseApexY = centerY + (height / 3) * Math.cos((i + 4) * Math.PI / 3);
        firstCaseText.setAttribute("x", firstCaseApexX);
        firstCaseText.setAttribute("y", firstCaseApexY);
        firstCaseText.textContent = vowelsCasesArray[i] + "格";
        firstCaseText.classList.add("cases");
        svg.appendChild(firstCaseText);
        for (let j = 0; j < apex; j++) {
            let conjunctCaseText = document.createElementNS(svgns, "text");
            let conjunctCaseApexX = firstCaseApexX + (width / 6 - 16 * 2) * Math.sin((j + 4) * Math.PI / 3);
            let conjunctCaseApexY = firstCaseApexY + (height / 6 - 16 * 2) * Math.cos((j + 4) * Math.PI / 3);
            conjunctCaseText.setAttribute("x", conjunctCaseApexX);
            conjunctCaseText.setAttribute("y", conjunctCaseApexY);
            conjunctCaseText.textContent = vowelsCasesArray[i] + vowelsCasesArray[j] + "格";
            conjunctCaseText.classList.add("cases");
            svg.appendChild(conjunctCaseText);
        }
    }

    let serializer = new dom.window.XMLSerializer();
    let svgString = serializer.serializeToString(svg);

    let svgContent =
        '<?xml-stylesheet href="../../style/figure.css" type="text/css"?>' + "\n" +
        '<?xml-stylesheet href="../../style/fonts.css" type="text/css"?>' + "\n" +
        '<?xml-stylesheet href="../../style/pages.css" type="text/css"?>' + "\n" +
        svgString;

    svgContent = beautify(svgContent, { indent_size: 4 });

    try {
        await fs.writeFile(filename, svgContent);
        console.log("ファイル" + filename + "を作成しました。");
    } catch (error) {
        console.log("ファイル" + filename + "を作成できませんでした。");
    }
}

async function generatePrefixCaseFigure() {
    let filename = path.join("reference/", "figure/", "prefix_case_figure.svg");
    const svgns = "http://www.w3.org/2000/svg";
    const dom = new JSDOM();
    const document = dom.window.document;

    let width = 256;
    let height = 256;

    let apex = 6;

    let svg = document.createElementNS(svgns, "svg");
    svg.setAttribute("width", width);
    svg.setAttribute("height", height);

    let centerX = width / 2;
    let centerY = height / 2;

    let polyline = document.createElementNS(svgns, "polyline");
    let coodinate = "";
    for (let i = 0; i <= apex; i++) {
        let x = centerX + (width / 2) * Math.sin(i * Math.PI / 3);
        let y = centerY + (height / 2) * Math.cos(i * Math.PI / 3);
        coodinate += x + "," + y + "";
        if (i < apex) {
            coodinate += " ";
        }
    }
    polyline.setAttribute("points", coodinate);
    polyline.setAttribute("fill", "none");
    polyline.setAttribute("stroke-width", 1);
    svg.appendChild(polyline);

    for (let i = 0; i < apex; i++) {
        let text = document.createElementNS(svgns, "text");
        let x = centerX + (width / 2) * Math.sin(i * Math.PI / 3);
        let y = centerY + (height / 2) * Math.cos(i * Math.PI / 3);
        text.setAttribute("x", x);
        text.setAttribute("y", y);
        text.textContent = "\u{25cc}" + vowelsArray[i];
        text.classList.add("zosokw");
        svg.appendChild(text);
    }

    for (let i = 0; i < apex; i++) {
        let text = document.createElementNS(svgns, "text");
        let x = centerX + (width / 2) * Math.sin(i * Math.PI / 3);
        let y = centerY + (height / 2) * Math.cos(i * Math.PI / 3);
        text.setAttribute("x", x);
        text.setAttribute("y", y);
        text.textContent = vowelsCasesArray[i] + "格";
        text.classList.add("cases");
        svg.appendChild(text);
    }

    let serializer = new dom.window.XMLSerializer();
    let svgString = serializer.serializeToString(svg);

    let svgContent =
        '<?xml-stylesheet href="../../style/figure.css" type="text/css"?>' + "\n" +
        '<?xml-stylesheet href="../../style/fonts.css" type="text/css"?>' + "\n" +
        '<?xml-stylesheet href="../../style/pages.css" type="text/css"?>' + "\n" +
        svgString;

    svgContent = beautify(svgContent, { indent_size: 4 });

    try {
        await fs.writeFile(filename, svgContent);
        console.log("ファイル" + filename + "を作成しました。");
    } catch (error) {
        console.log("ファイル" + filename + "を作成できませんでした。");
    }
}

async function generateSuffixCaseFigure() {
    let filename = path.join("reference/", "figure/", "suffix_case_figure.svg");
    const svgns = "http://www.w3.org/2000/svg";
    const dom = new JSDOM();
    const document = dom.window.document;

    let width = 256;
    let height = 256;

    let apex = 6;

    let svg = document.createElementNS(svgns, "svg");
    svg.setAttribute("width", width);
    svg.setAttribute("height", height);

    let centerX = width / 2;
    let centerY = height / 2;

    let polyline = document.createElementNS(svgns, "polyline");
    let coodinate = "";
    for (let i = 0; i <= apex; i++) {
        let x = centerX + (width / 2) * Math.sin(i * Math.PI / 3);
        let y = centerY + (height / 2) * Math.cos(i * Math.PI / 3);
        coodinate += x + "," + y + "";
        if (i < apex) {
            coodinate += " ";
        }
    }
    polyline.setAttribute("points", coodinate);
    polyline.setAttribute("fill", "none");
    polyline.setAttribute("stroke-width", 1);
    svg.appendChild(polyline);

    for (let i = 0; i < apex; i++) {
        let text = document.createElementNS(svgns, "text");
        let x = centerX + (width / 2) * Math.sin(i * Math.PI / 3);
        let y = centerY + (height / 2) * Math.cos(i * Math.PI / 3);
        text.setAttribute("x", x);
        text.setAttribute("y", y);
        text.textContent = "\u{25cc}" + vowelsArray[i];
        text.classList.add("zosokw");
        svg.appendChild(text);
    }

    for (let i = 0; i < apex; i++) {
        let text = document.createElementNS(svgns, "text");
        let x = centerX + (width / 2) * Math.sin(i * Math.PI / 3);
        let y = centerY + (height / 2) * Math.cos(i * Math.PI / 3);
        text.setAttribute("x", x);
        text.setAttribute("y", y);
        text.textContent = vowelsCasesArray[i] + "格";
        text.classList.add("cases");
        svg.appendChild(text);
    }

    let serializer = new dom.window.XMLSerializer();
    let svgString = serializer.serializeToString(svg);

    let svgContent =
        '<?xml-stylesheet href="../../style/figure.css" type="text/css"?>' + "\n" +
        '<?xml-stylesheet href="../../style/fonts.css" type="text/css"?>' + "\n" +
        '<?xml-stylesheet href="../../style/pages.css" type="text/css"?>' + "\n" +
        svgString;

    svgContent = beautify(svgContent, { indent_size: 4 });

    try {
        await fs.writeFile(filename, svgContent);
        console.log("ファイル" + filename + "を作成しました。");
    } catch (error) {
        console.log("ファイル" + filename + "を作成できませんでした。");
    }
}

async function generatePartOfSpeechFigure() {
    let filename = path.join("reference/", "figure/", "part_of_speach_figure.svg");
    const svgns = "http://www.w3.org/2000/svg";
    const dom = new JSDOM();
    const document = dom.window.document;

    let width = 256;
    let height = 256;

    let apex = 6;

    let svg = document.createElementNS(svgns, "svg");
    svg.setAttribute("width", width);
    svg.setAttribute("height", height);

    let centerX = width / 2;
    let centerY = height / 2;

    let polyline = document.createElementNS(svgns, "polyline");
    let coodinate = "";
    for (let i = 0; i <= apex; i++) {
        let x = centerX + (width / 2) * Math.sin(i * Math.PI / 3);
        let y = centerY + (height / 2) * Math.cos(i * Math.PI / 3);
        coodinate += x + "," + y + "";
        if (i < apex) {
            coodinate += " ";
        }
    }
    polyline.setAttribute("points", coodinate);
    polyline.setAttribute("fill", "none");
    polyline.setAttribute("stroke-width", 1);
    svg.appendChild(polyline);

    for (let i = 0; i < apex; i++) {
        let text = document.createElementNS(svgns, "text");
        let x = centerX + (width / 2) * Math.sin(i * Math.PI / 3);
        let y = centerY + (height / 2) * Math.cos(i * Math.PI / 3);
        text.setAttribute("x", x);
        text.setAttribute("y", y);
        text.textContent = "\u{25cc}" + vowelsArray[i];
        text.classList.add("zosokw");
        svg.appendChild(text);
    }

    for (let i = 0; i < apex; i++) {
        let text = document.createElementNS(svgns, "text");
        let x = centerX + (width / 2) * Math.sin(i * Math.PI / 3);
        let y = centerY + (height / 2) * Math.cos(i * Math.PI / 3);
        text.setAttribute("x", x);
        text.setAttribute("y", y);
        text.textContent = vowelsPartOfSpeechTypesArray[i] + "詞";
        text.classList.add("part-of-speech");
        svg.appendChild(text);
    }

    let serializer = new dom.window.XMLSerializer();
    let svgString = serializer.serializeToString(svg);

    let svgContent =
        '<?xml-stylesheet href="../../style/figure.css" type="text/css"?>' + "\n" +
        '<?xml-stylesheet href="../../style/fonts.css" type="text/css"?>' + "\n" +
        '<?xml-stylesheet href="../../style/pages.css" type="text/css"?>' + "\n" +
        svgString;

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

    let width = 256;
    let height = 256;

    let apex = 6;

    let svg = document.createElementNS(svgns, "svg");
    svg.setAttribute("width", width);
    svg.setAttribute("height", height);

    let centerX = width / 2;
    let centerY = height / 2;

    let rect = document.createElementNS(svgns, "rect");
    rect.setAttribute("x", 25);
    rect.setAttribute("y", 25);
    rect.setAttribute("width", 50);
    rect.setAttribute("height", 50);
    svg.appendChild(rect);

    let serializer = new dom.window.XMLSerializer();
    let svgString = serializer.serializeToString(svg);

    let svgContent =
        '<?xml-stylesheet href="../../style/figure.css" type="text/css"?>' + "\n" +
        '<?xml-stylesheet href="../../style/fonts.css" type="text/css"?>' + "\n" +
        '<?xml-stylesheet href="../../style/pages.css" type="text/css"?>' + "\n" +
        svgString;

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

    let width = 256;
    let height = 256;

    let apex = 6;

    let svg = document.createElementNS(svgns, "svg");
    svg.setAttribute("width", width);
    svg.setAttribute("height", height);

    let centerX = width / 2;
    let centerY = height / 2;

    let rect = document.createElementNS(svgns, "rect");
    rect.setAttribute("x", 25);
    rect.setAttribute("y", 25);
    rect.setAttribute("width", 50);
    rect.setAttribute("height", 50);
    svg.appendChild(rect);

    let serializer = new dom.window.XMLSerializer();
    let svgString = serializer.serializeToString(svg);

    let svgContent =
        '<?xml-stylesheet href="../../style/figure.css" type="text/css"?>' + "\n" +
        '<?xml-stylesheet href="../../style/fonts.css" type="text/css"?>' + "\n" +
        '<?xml-stylesheet href="../../style/pages.css" type="text/css"?>' + "\n" +
        svgString;

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

    let width = 256;
    let height = 256;

    let apex = 6;

    let svg = document.createElementNS(svgns, "svg");
    svg.setAttribute("width", width);
    svg.setAttribute("height", height);

    let centerX = width / 2;
    let centerY = height / 2;

    let rect = document.createElementNS(svgns, "rect");
    rect.setAttribute("x", 25);
    rect.setAttribute("y", 25);
    rect.setAttribute("width", 50);
    rect.setAttribute("height", 50);
    svg.appendChild(rect);

    let serializer = new dom.window.XMLSerializer();
    let svgString = serializer.serializeToString(svg);

    let svgContent =
        '<?xml-stylesheet href="../../style/figure.css" type="text/css"?>' + "\n" +
        '<?xml-stylesheet href="../../style/fonts.css" type="text/css"?>' + "\n" +
        '<?xml-stylesheet href="../../style/pages.css" type="text/css"?>' + "\n" +
        svgString;

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

    let width = 256;
    let height = 256;

    let apex = 6;

    let svg = document.createElementNS(svgns, "svg");
    svg.setAttribute("width", width);
    svg.setAttribute("height", height);

    let centerX = width / 2;
    let centerY = height / 2;

    let rect = document.createElementNS(svgns, "rect");
    rect.setAttribute("x", 25);
    rect.setAttribute("y", 25);
    rect.setAttribute("width", 50);
    rect.setAttribute("height", 50);
    svg.appendChild(rect);

    let serializer = new dom.window.XMLSerializer();
    let svgString = serializer.serializeToString(svg);

    let svgContent =
        '<?xml-stylesheet href="../../style/figure.css" type="text/css"?>' + "\n" +
        '<?xml-stylesheet href="../../style/fonts.css" type="text/css"?>' + "\n" +
        '<?xml-stylesheet href="../../style/pages.css" type="text/css"?>' + "\n" +
        svgString;

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

    let width = 256;
    let height = 256;

    let apex = 6;

    let svg = document.createElementNS(svgns, "svg");
    svg.setAttribute("width", width);
    svg.setAttribute("height", height);

    let centerX = width / 2;
    let centerY = height / 2;

    let rect = document.createElementNS(svgns, "rect");
    rect.setAttribute("x", 25);
    rect.setAttribute("y", 25);
    rect.setAttribute("width", 50);
    rect.setAttribute("height", 50);
    svg.appendChild(rect);

    let serializer = new dom.window.XMLSerializer();
    let svgString = serializer.serializeToString(svg);

    let svgContent =
        '<?xml-stylesheet href="../../style/figure.css" type="text/css"?>' + "\n" +
        '<?xml-stylesheet href="../../style/fonts.css" type="text/css"?>' + "\n" +
        '<?xml-stylesheet href="../../style/pages.css" type="text/css"?>' + "\n" +
        svgString;

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

    let width = 256;
    let height = 256;

    let apex = 6;

    let svg = document.createElementNS(svgns, "svg");
    svg.setAttribute("width", width);
    svg.setAttribute("height", height);

    let centerX = width / 2;
    let centerY = height / 2;

    let rect = document.createElementNS(svgns, "rect");
    rect.setAttribute("x", 25);
    rect.setAttribute("y", 25);
    rect.setAttribute("width", 50);
    rect.setAttribute("height", 50);
    svg.appendChild(rect);

    let serializer = new dom.window.XMLSerializer();
    let svgString = serializer.serializeToString(svg);

    let svgContent =
        '<?xml-stylesheet href="../../style/figure.css" type="text/css"?>' + "\n" +
        '<?xml-stylesheet href="../../style/fonts.css" type="text/css"?>' + "\n" +
        '<?xml-stylesheet href="../../style/pages.css" type="text/css"?>' + "\n" +
        svgString;

    svgContent = beautify(svgContent, { indent_size: 4 });

    try {
        await fs.writeFile(filename, svgContent);
        console.log("ファイル" + filename + "を作成しました。");
    } catch (error) {
        console.log("ファイル" + filename + "を作成できませんでした。");
    }
}

async function make() {
    let directory = path.join("reference/", "figure");
    try {
        await fs.mkdir(directory, { recursive: true });
        console.log("ディレクトリ" + directory + "を作成しました。");
    } catch (error) {
        console.log("ディレクトリ" + directory + "を作成できませんでした。");
    }
    generateConsonantFigure();
    generateVowelFigure();
    generateRtlFigure();
    generateLtrFigure();
    generateConsonantMeaningFigure();
    generateFirstCaseFigure();
    generateSecondCaseFigure();
    generateConjunctCaseFigure();
    generatePrefixCaseFigure();
    generateSuffixCaseFigure();
    generatePartOfSpeechFigure();
    generateArticleConjugationFigure();
    generateVerbConjugationFigure();
    generateAdjectiveConjugationFigure();
    generateParticleConjugationFigure();
    generateAdverbConjugationFigure();
    generateNounConjugationFigure();
    console.log("ディレクトリ" + directory + "の内部データを生成完了");
}

make();
