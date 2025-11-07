const fs = require("fs").promises;
const path = require("path");
const { JSDOM } = require("jsdom");
const beautify = require("js-beautify").html;

const consonants_array = ["k", "g", "t", "d", "s", "z", "q", "c", "r", "l", "p", "b", "h", "x", "f", "v", "m", "n"];
const consonants_means_array = ["剥離", "癒着", "乖離", "同一", "肉体", "精神", "空白", "物質", "過去", "未来", "鎮静", "高揚", "受動", "能動", "創造", "破壊", "流動", "固定"];
const consonants_pronunciation_array = ["k", "g", "t", "d", "s", "z", "ʔ", "ʕ", "r", "l", "p", "b", "h", "x", "f", "v", "m", "n"];

const vowels_array = ["a", "o", "u", "w", "i", "e"];
const vowels_cases_array = ["否", "対", "主", "流", "属", "与",];
const vowels_part_of_speech_types_array = ["附", "助", "副", "名", "容", "動",];
const vowels_pronunciation_array = ["a", "o", "u", "∅", "i", "e"];

async function generateConsonantFigure() {
    let filename = path.join("reference/", "figure/", "consonant_figure.svg");
    const svgns = "http://www.w3.org/2000/svg";

    const dom = new JSDOM();
    const document = dom.window.document;

    let width = 256;
    let height = 256;

    let apex = 8;

    let svg = document.createElementNS(svgns, "svg");
    svg.setAttribute("width", width);
    svg.setAttribute("height", height);

    let centerX = width / 2;
    let centerY = height / 2;

    let polyline = document.createElementNS(svgns, "polyline");
    let coodinate = "";
    for (let i = 0; i <= apex; i++) {
        let x = centerX + (width / 2) * Math.cos(i * Math.PI / 4);
        let y = centerY + (height / 2) * Math.sin(i * Math.PI / 4);
        coodinate += x + "," + y + "";
        if (i < apex - 1) {
            coodinate += " ";
        }
    }
    polyline.setAttribute("points", coodinate);
    polyline.setAttribute("fill", "none");
    polyline.setAttribute("stroke-width", 1);
    svg.appendChild(polyline);

    let serializer = new dom.window.XMLSerializer();
    let svgString = serializer.serializeToString(svg);

    let svgContent =
        '<?xml-stylesheet href="../../style/figure.css" type="text/css"?>' + "\n" +
        '<?xml-stylesheet href="../../style/fonts.css" type="text/css"?>' + "\n" +
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
        let x = centerX - 6 + (width / 2) * Math.sin(i * Math.PI / 3);
        let y = centerY + (height / 2) * Math.cos(i * Math.PI / 3);
        coodinate += x + "," + y + "";
        if (i <= apex - 1) {
            coodinate += " ";
        }
    }
    polyline.setAttribute("points", coodinate);
    polyline.setAttribute("fill", "none");
    polyline.setAttribute("stroke-width", 1);
    svg.appendChild(polyline);

    for (let i = 0; i < apex; i++) {
        let text = document.createElementNS(svgns, "text");
        let x = centerX - 6 + (width / 2 - 16) * Math.sin((4 + i) * Math.PI / 3);
        let y = centerY + (height / 2 - 16) * Math.cos((4 + i) * Math.PI / 3);
        text.setAttribute("x", x);
        text.setAttribute("y", y);
        text.textContent = "\u{25cc}" + vowels_array[i];
        text.classList.add("zosokw");
        svg.appendChild(text);
    }

    for (let i = 0; i < apex; i++) {
        let text = document.createElementNS(svgns, "text");
        let x = centerX + (width / 2 - 16 * 2) * Math.sin((4 + i) * Math.PI / 3);
        let y = centerY + (height / 2 - 16 * 2) * Math.cos((4 + i) * Math.PI / 3);
        text.setAttribute("x", x);
        text.setAttribute("y", y);
        text.textContent = "/" + vowels_pronunciation_array[i] + "/";
        text.classList.add("pronunciation");
        svg.appendChild(text);
    }

    let serializer = new dom.window.XMLSerializer();
    let svgString = serializer.serializeToString(svg);

    let svgContent =
        '<?xml-stylesheet href="../../style/figure.css" type="text/css"?>' + "\n" +
        '<?xml-stylesheet href="../../style/fonts.css" type="text/css"?>' + "\n" +
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
        if (i <= apex - 1) {
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
        text.textContent = "\u{25cc}" + vowels_array[i];
        text.classList.add("zosokw");
        svg.appendChild(text);
    }

    for (let i = 0; i < apex; i++) {
        let text = document.createElementNS(svgns, "text");
        let x = centerX + (width / 2) * Math.sin(i * Math.PI / 3);
        let y = centerY + (height / 2) * Math.cos(i * Math.PI / 3);
        text.setAttribute("x", x);
        text.setAttribute("y", y);
        text.textContent = vowels_cases_array[i] + "格";
        text.classList.add("cases");
        svg.appendChild(text);
    }

    let serializer = new dom.window.XMLSerializer();
    let svgString = serializer.serializeToString(svg);

    let svgContent =
        '<?xml-stylesheet href="../../style/figure.css" type="text/css"?>' + "\n" +
        '<?xml-stylesheet href="../../style/fonts.css" type="text/css"?>' + "\n" +
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
        if (i <= apex - 1) {
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
        text.textContent = "\u{25cc}" + vowels_array[i];
        text.classList.add("zosokw");
        svg.appendChild(text);
    }

    for (let i = 0; i < apex; i++) {
        let text = document.createElementNS(svgns, "text");
        let x = centerX + (width / 2) * Math.sin(i * Math.PI / 3);
        let y = centerY + (height / 2) * Math.cos(i * Math.PI / 3);
        text.setAttribute("x", x);
        text.setAttribute("y", y);
        text.textContent = vowels_cases_array[i] + "格";
        text.classList.add("cases");
        svg.appendChild(text);
    }

    let serializer = new dom.window.XMLSerializer();
    let svgString = serializer.serializeToString(svg);

    let svgContent =
        '<?xml-stylesheet href="../../style/figure.css" type="text/css"?>' + "\n" +
        '<?xml-stylesheet href="../../style/fonts.css" type="text/css"?>' + "\n" +
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
        let firstCaseApexX = centerX - 6 + (width / 3) * Math.sin((i + 4) * Math.PI / 3);
        let firstCaseApexY = centerY + (height / 3) * Math.cos((i + 4) * Math.PI / 3);
        firstCaseText.setAttribute("x", firstCaseApexX);
        firstCaseText.setAttribute("y", firstCaseApexY);
        firstCaseText.textContent = "\u{25cc}" + vowels_array[i];
        firstCaseText.classList.add("zosokw");
        svg.appendChild(firstCaseText);
        for (let j = 0; j < apex; j++) {
            let conjunctCaseText = document.createElementNS(svgns, "text");
            let conjunctCaseApexX = firstCaseApexX - 12 + (width / 6 - 16 * 2) * Math.sin((j + 4) * Math.PI / 3);
            let conjunctCaseApexY = firstCaseApexY + (height / 6 - 16 * 2) * Math.cos((j + 4) * Math.PI / 3);
            conjunctCaseText.setAttribute("x", conjunctCaseApexX);
            conjunctCaseText.setAttribute("y", conjunctCaseApexY);
            conjunctCaseText.textContent = "\u{25cc}" + vowels_array[i] + "\u{25cc}" + vowels_array[j] + "\u{25cc}";
            conjunctCaseText.classList.add("zosokw");
            svg.appendChild(conjunctCaseText);
        }
    }

    for (let i = 0; i < apex; i++) {
        let firstCaseText = document.createElementNS(svgns, "text");
        let firstCaseApexX = centerX - 16 + (width / 3) * Math.sin((i + 4) * Math.PI / 3);
        let firstCaseApexY = centerY + 16 + (height / 3) * Math.cos((i + 4) * Math.PI / 3);
        firstCaseText.setAttribute("x", firstCaseApexX);
        firstCaseText.setAttribute("y", firstCaseApexY);
        firstCaseText.textContent = vowels_cases_array[i] + "格";
        firstCaseText.classList.add("cases");
        svg.appendChild(firstCaseText);
        for (let j = 0; j < apex; j++) {
            let conjunctCaseText = document.createElementNS(svgns, "text");
            let conjunctCaseApexX = firstCaseApexX - 8 + (width / 6 - 16 * 2) * Math.sin((j + 4) * Math.PI / 3);
            let conjunctCaseApexY = firstCaseApexY + (height / 6 - 16 * 2) * Math.cos((j + 4) * Math.PI / 3);
            conjunctCaseText.setAttribute("x", conjunctCaseApexX);
            conjunctCaseText.setAttribute("y", conjunctCaseApexY);
            conjunctCaseText.textContent = vowels_cases_array[i] + vowels_cases_array[j] + "格";
            conjunctCaseText.classList.add("cases");
            svg.appendChild(conjunctCaseText);
        }
    }

    let serializer = new dom.window.XMLSerializer();
    let svgString = serializer.serializeToString(svg);

    let svgContent =
        '<?xml-stylesheet href="../../style/figure.css" type="text/css"?>' + "\n" +
        '<?xml-stylesheet href="../../style/fonts.css" type="text/css"?>' + "\n" +
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
        if (i <= apex - 1) {
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
        text.textContent = "\u{25cc}" + vowels_array[i];
        text.classList.add("zosokw");
        svg.appendChild(text);
    }

    for (let i = 0; i < apex; i++) {
        let text = document.createElementNS(svgns, "text");
        let x = centerX + (width / 2) * Math.sin(i * Math.PI / 3);
        let y = centerY + (height / 2) * Math.cos(i * Math.PI / 3);
        text.setAttribute("x", x);
        text.setAttribute("y", y);
        text.textContent = vowels_cases_array[i] + "格";
        text.classList.add("cases");
        svg.appendChild(text);
    }

    let serializer = new dom.window.XMLSerializer();
    let svgString = serializer.serializeToString(svg);

    let svgContent =
        '<?xml-stylesheet href="../../style/figure.css" type="text/css"?>' + "\n" +
        '<?xml-stylesheet href="../../style/fonts.css" type="text/css"?>' + "\n" +
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
        if (i <= apex - 1) {
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
        text.textContent = "\u{25cc}" + vowels_array[i];
        text.classList.add("zosokw");
        svg.appendChild(text);
    }

    for (let i = 0; i < apex; i++) {
        let text = document.createElementNS(svgns, "text");
        let x = centerX + (width / 2) * Math.sin(i * Math.PI / 3);
        let y = centerY + (height / 2) * Math.cos(i * Math.PI / 3);
        text.setAttribute("x", x);
        text.setAttribute("y", y);
        text.textContent = vowels_cases_array[i] + "格";
        text.classList.add("cases");
        svg.appendChild(text);
    }

    let serializer = new dom.window.XMLSerializer();
    let svgString = serializer.serializeToString(svg);

    let svgContent =
        '<?xml-stylesheet href="../../style/figure.css" type="text/css"?>' + "\n" +
        '<?xml-stylesheet href="../../style/fonts.css" type="text/css"?>' + "\n" +
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
        if (i <= apex - 1) {
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
        text.textContent = "\u{25cc}" + vowels_array[i];
        text.classList.add("zosokw");
        svg.appendChild(text);
    }

    for (let i = 0; i < apex; i++) {
        let text = document.createElementNS(svgns, "text");
        let x = centerX + (width / 2) * Math.sin(i * Math.PI / 3);
        let y = centerY + (height / 2) * Math.cos(i * Math.PI / 3);
        text.setAttribute("x", x);
        text.setAttribute("y", y);
        text.textContent = vowels_part_of_speech_types_array[i] + "詞";
        text.classList.add("part-of-speech");
        svg.appendChild(text);
    }

    let serializer = new dom.window.XMLSerializer();
    let svgString = serializer.serializeToString(svg);

    let svgContent =
        '<?xml-stylesheet href="../../style/figure.css" type="text/css"?>' + "\n" +
        '<?xml-stylesheet href="../../style/fonts.css" type="text/css"?>' + "\n" +
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
