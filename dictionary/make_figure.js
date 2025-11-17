const fs = require("fs").promises;
const path = require("path");
const { JSDOM } = require("jsdom");
const beautify = require("js-beautify").html;

const consonantsArray = ["k", "g", "t", "d", "s", "z", "q", "c", "r", "l", "p", "b", "h", "x", "f", "v", "m", "n"];
const consonantsConceptArray = ["剥離", "癒着", "乖離", "同一", "肉体", "精神", "空白", "物質", "過去", "未来", "鎮静", "高揚", "受動", "能動", "創造", "破壊", "流動", "固定"];
const consonantsPronunciationArray = ["k", "g", "t", "d", "s", "z", "\u{0294}", "\u{0295}", "r", "l", "p", "b", "h", "x", "f", "v", "m", "n"];

const vowelsArray = ["a", "o", "u", "w", "i", "e"];
const vowelsCasesArray = ["否", "対", "主", "流", "属", "与",];
const vowelsPartOfSpeechTypesArray = ["附", "助", "副", "名", "容", "動",];
const vowelsPronunciationArray = ["a", "o", "u", "\u{2205}", "i", "e"];

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
            let x1 = centerX + centerX * Math.sin(i * Math.PI / 3);
            let y1 = centerY + centerY * Math.cos(i * Math.PI / 3);
            let x2 = centerX + centerX * Math.sin((i + j) * Math.PI / 3);
            let y2 = centerY + centerY * Math.cos((i + j) * Math.PI / 3);
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
        let x = centerX + centerX * Math.sin(i * Math.PI / 3);
        let y = centerY + centerY * Math.cos(i * Math.PI / 3);
        coodinate += x + ", " + y + "";
        if (i < apex) {
            coodinate += " ";
        }
    }
    polyline.setAttribute("points", coodinate);
    polyline.setAttribute("fill", "none");
    polyline.setAttribute("stroke-width", 1);
    svg.appendChild(polyline);
    for (let i = 0; i < apex; i++) {
        let vowel = document.createElementNS(svgns, "text");
        let vowelPronunciation = document.createElementNS(svgns, "text");
        let x = centerX + centerX * Math.sin((4 + i) * Math.PI / 3);
        let y = centerY + centerY * Math.cos((4 + i) * Math.PI / 3);
        vowel.setAttribute("x", x);
        vowelPronunciation.setAttribute("x", x);
        vowel.setAttribute("y", y);
        vowelPronunciation.setAttribute("y", y);
        vowel.textContent = "\u{25cc}" + vowelsArray[i];
        vowelPronunciation.textContent = "[" + vowelsPronunciationArray[i] + "]";
        vowel.classList.add("zosokw");
        vowelPronunciation.classList.add("pronunciation");
        svg.appendChild(vowel);
        svg.appendChild(vowelPronunciation);
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

async function generateConsonantConceptFigure() {
    let filename = path.join("reference/", "figure/", "consonant_concept_figure.svg");
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
            let x1 = centerX + centerX * Math.sin(i * Math.PI / 3);
            let y1 = centerY + centerY * Math.cos(i * Math.PI / 3);
            let x2 = centerX + centerX * Math.sin((i + j) * Math.PI / 3);
            let y2 = centerY + centerY * Math.cos((i + j) * Math.PI / 3);
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
        let x = centerX + centerX * Math.sin(i * Math.PI / 3);
        let y = centerY + centerY * Math.cos(i * Math.PI / 3);
        coodinate += x + ", " + y + "";
        if (i < apex) {
            coodinate += " ";
        }
    }
    polyline.setAttribute("points", coodinate);
    polyline.setAttribute("fill", "none");
    polyline.setAttribute("stroke-width", 1);
    svg.appendChild(polyline);
    for (let i = 0; i < apex; i++) {
        let vowel = document.createElementNS(svgns, "text");
        let vowelCase = document.createElementNS(svgns, "text");
        let x = centerX + (centerX * (3 / 4)) * Math.sin(i * Math.PI / 3);
        let y = centerY + (centerY * (3 / 4)) * Math.cos(i * Math.PI / 3);
        vowel.setAttribute("x", x);
        vowelCase.setAttribute("x", x);
        vowel.setAttribute("y", y);
        vowelCase.setAttribute("y", y);
        vowel.textContent = "\u{25cc}" + vowelsArray[i];
        vowelCase.textContent = vowelsCasesArray[i] + "格";
        vowel.classList.add("zosokw");
        vowelCase.classList.add("cases");
        svg.appendChild(vowel);
        svg.appendChild(vowelCase);
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
        let x = centerX + centerX * Math.sin(i * Math.PI / 3);
        let y = centerY + centerY * Math.cos(i * Math.PI / 3);
        coodinate += x + ", " + y + "";
        if (i < apex) {
            coodinate += " ";
        }
    }
    polyline.setAttribute("points", coodinate);
    polyline.setAttribute("fill", "none");
    polyline.setAttribute("stroke-width", 1);
    svg.appendChild(polyline);
    for (let i = 0; i < apex; i++) {
        let vowel = document.createElementNS(svgns, "text");
        let vowelCase = document.createElementNS(svgns, "text");
        let x = centerX + (centerX * (3 / 4)) * Math.sin(i * Math.PI / 3);
        let y = centerY + (centerY * (3 / 4)) * Math.cos(i * Math.PI / 3);
        vowel.setAttribute("x", x);
        vowelCase.setAttribute("x", x);
        vowel.setAttribute("y", y);
        vowelCase.setAttribute("y", y);
        vowel.textContent = "\u{25cc}" + vowelsArray[i];
        vowelCase.textContent = vowelsCasesArray[i] + "格";
        vowel.classList.add("zosokw");
        vowelCase.classList.add("cases");
        svg.appendChild(vowel);
        svg.appendChild(vowelCase);
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
        let firstCaseCoodinateX = centerX + (width / 3) * Math.sin(i * Math.PI / 3);
        let firstCaseCoodinateY = centerY + (height / 3) * Math.cos(i * Math.PI / 3);
        let polyline = document.createElementNS(svgns, "polyline");
        let coodinate = "";
        for (let j = 0; j <= apex; j++) {
            let conjunctCaseCoodinateX = firstCaseCoodinateX + (width / 6) * Math.sin(j * Math.PI / 3);
            let conjunctCaseCoodinateY = firstCaseCoodinateY + (height / 6) * Math.cos(j * Math.PI / 3);
            coodinate += conjunctCaseCoodinateX + "," + conjunctCaseCoodinateY + "";
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
        let firstCaseVowel = document.createElementNS(svgns, "text");
        let firstCase = document.createElementNS(svgns, "text");
        let firstCaseCoodinateX = centerX + (width / 3) * Math.sin((i + 4) * Math.PI / 3);
        let firstCaseCoodinateY = centerY + (height / 3) * Math.cos((i + 4) * Math.PI / 3);
        firstCaseVowel.setAttribute("x", firstCaseCoodinateX);
        firstCase.setAttribute("x", firstCaseCoodinateX);
        firstCaseVowel.setAttribute("y", firstCaseCoodinateY);
        firstCase.setAttribute("y", firstCaseCoodinateY);
        firstCaseVowel.textContent = "\u{25cc}" + vowelsArray[i];
        firstCase.textContent = vowelsCasesArray[i] + "格";
        firstCaseVowel.classList.add("zosokw");
        firstCase.classList.add("cases");
        svg.appendChild(firstCaseVowel);
        svg.appendChild(firstCase);
        for (let j = 0; j < apex; j++) {
            let conjunctCaseVowels = document.createElementNS(svgns, "text");
            let conjunctCase = document.createElementNS(svgns, "text");
            let conjunctCaseCoodinateX = firstCaseCoodinateX + (width / 6 - 16 * 2) * Math.sin((j + 4) * Math.PI / 3);
            let conjunctCaseCoodinateY = firstCaseCoodinateY + (height / 6 - 16 * 2) * Math.cos((j + 4) * Math.PI / 3);
            conjunctCaseVowels.setAttribute("x", conjunctCaseCoodinateX);
            conjunctCase.setAttribute("x", conjunctCaseCoodinateX);
            conjunctCaseVowels.setAttribute("y", conjunctCaseCoodinateY);
            conjunctCase.setAttribute("y", conjunctCaseCoodinateY);
            conjunctCaseVowels.textContent = "\u{25cc}" + vowelsArray[i] + "\u{25cc}" + vowelsArray[j] + "\u{25cc}";
            conjunctCase.textContent = vowelsCasesArray[i] + vowelsCasesArray[j] + "格";
            conjunctCaseVowels.classList.add("zosokw");
            conjunctCase.classList.add("cases");
            svg.appendChild(conjunctCaseVowels);
            svg.appendChild(conjunctCase);
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
        let x = centerX + centerX * Math.sin(i * Math.PI / 3);
        let y = centerY + centerY * Math.cos(i * Math.PI / 3);
        coodinate += x + ", " + y + "";
        if (i < apex) {
            coodinate += " ";
        }
    }
    polyline.setAttribute("points", coodinate);
    polyline.setAttribute("fill", "none");
    polyline.setAttribute("stroke-width", 1);
    svg.appendChild(polyline);
    for (let i = 0; i < apex; i++) {
        let vowel = document.createElementNS(svgns, "text");
        let vowelCase = document.createElementNS(svgns, "text");
        let x = centerX + (centerX * (3 / 4)) * Math.sin(i * Math.PI / 3);
        let y = centerY + (centerY * (3 / 4)) * Math.cos(i * Math.PI / 3);
        vowel.setAttribute("x", x);
        vowelCase.setAttribute("x", x);
        vowel.setAttribute("y", y);
        vowelCase.setAttribute("y", y);
        vowel.textContent = "\u{25cc}" + vowelsArray[i];
        vowelCase.textContent = vowelsCasesArray[i] + "格";
        vowel.classList.add("zosokw");
        vowelCase.classList.add("cases");
        svg.appendChild(vowel);
        svg.appendChild(vowelCase);
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
        let x = centerX + centerX * Math.sin(i * Math.PI / 3);
        let y = centerY + centerY * Math.cos(i * Math.PI / 3);
        coodinate += x + ", " + y + "";
        if (i < apex) {
            coodinate += " ";
        }
    }
    polyline.setAttribute("points", coodinate);
    polyline.setAttribute("fill", "none");
    polyline.setAttribute("stroke-width", 1);
    svg.appendChild(polyline);
    for (let i = 0; i < apex; i++) {
        let vowel = document.createElementNS(svgns, "text");
        let vowelCase = document.createElementNS(svgns, "text");
        let x = centerX + (centerX * (3 / 4)) * Math.sin(i * Math.PI / 3);
        let y = centerY + (centerY * (3 / 4)) * Math.cos(i * Math.PI / 3);
        vowel.setAttribute("x", x);
        vowelCase.setAttribute("x", x);
        vowel.setAttribute("y", y);
        vowelCase.setAttribute("y", y);
        vowel.textContent = "\u{25cc}" + vowelsArray[i];
        vowelCase.textContent = vowelsCasesArray[i] + "格";
        vowel.classList.add("zosokw");
        vowelCase.classList.add("cases");
        svg.appendChild(vowel);
        svg.appendChild(vowelCase);
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
        let x = centerX + centerX * Math.sin(i * Math.PI / 3);
        let y = centerY + centerY * Math.cos(i * Math.PI / 3);
        coodinate += x + ", " + y + "";
        if (i < apex) {
            coodinate += " ";
        }
    }
    polyline.setAttribute("points", coodinate);
    polyline.setAttribute("fill", "none");
    polyline.setAttribute("stroke-width", 1);
    svg.appendChild(polyline);
    for (let i = 0; i < apex; i++) {
        let vowel = document.createElementNS(svgns, "text");
        let vowelPartOfSpeech = document.createElementNS(svgns, "text");
        let x = centerX + (centerX * (3 / 4)) * Math.sin(i * Math.PI / 3);
        let y = centerY + (centerY * (3 / 4)) * Math.cos(i * Math.PI / 3);
        vowel.setAttribute("x", x);
        vowelPartOfSpeech.setAttribute("x", x);
        vowel.setAttribute("y", y);
        vowelPartOfSpeech.setAttribute("y", y);
        vowel.textContent = "\u{25cc}" + vowelsArray[i];
        vowelPartOfSpeech.textContent = vowelsPartOfSpeechTypesArray[i] + "詞";
        vowel.classList.add("zosokw");
        vowelPartOfSpeech.classList.add("part-of-speech");
        svg.appendChild(vowel);
        svg.appendChild(vowelPartOfSpeech);
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
    rect.setAttribute("x", width / 4);
    rect.setAttribute("y", height / 4);
    rect.setAttribute("width", centerX);
    rect.setAttribute("height", centerY);
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
    rect.setAttribute("x", width / 4);
    rect.setAttribute("y", height / 4);
    rect.setAttribute("width", centerX);
    rect.setAttribute("height", centerY);
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
    rect.setAttribute("x", width / 4);
    rect.setAttribute("y", height / 4);
    rect.setAttribute("width", centerX);
    rect.setAttribute("height", centerY);
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
    rect.setAttribute("x", width / 4);
    rect.setAttribute("y", height / 4);
    rect.setAttribute("width", centerX);
    rect.setAttribute("height", centerY);
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
    rect.setAttribute("x", width / 4);
    rect.setAttribute("y", height / 4);
    rect.setAttribute("width", centerX);
    rect.setAttribute("height", centerY);
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
    rect.setAttribute("x", width / 4);
    rect.setAttribute("y", height / 4);
    rect.setAttribute("width", centerX);
    rect.setAttribute("height", centerY);
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
    await generateConsonantFigure();
    await generateVowelFigure();
    await generateRtlFigure();
    await generateLtrFigure();
    await generateConsonantConceptFigure();
    await generateFirstCaseFigure();
    await generateSecondCaseFigure();
    await generateConjunctCaseFigure();
    await generatePrefixCaseFigure();
    await generateSuffixCaseFigure();
    await generatePartOfSpeechFigure();
    await generateArticleConjugationFigure();
    await generateVerbConjugationFigure();
    await generateAdjectiveConjugationFigure();
    await generateParticleConjugationFigure();
    await generateAdverbConjugationFigure();
    await generateNounConjugationFigure();
    console.log("ディレクトリ" + directory + "の内部データを生成完了");
}

make();
