function generateConsonantPronunciationFigure() {
    const figure = document.createElement("figure");
    const svgNameSpace = "http://www.w3.org/2000/svg";
    let width = 256;
    let height = 256;
    let apex = 6;
    let svg = document.createElementNS(svgNameSpace, "svg");
    svg.setAttribute("width", width);
    svg.setAttribute("height", height);
    let centerX = width / 2;
    let centerY = height / 2;
    for (let i = 0; i <= apex; i++) {
        for (let j = 2; j <= 3; j++) {
            let line = document.createElementNS(svgNameSpace, "line");
            let x1 = centerX + centerX * Math.sin(i * Math.PI / (apex / 2));
            let y1 = centerY + centerY * Math.cos(i * Math.PI / (apex / 2));
            let x2 = centerX + centerX * Math.sin((i + j) * Math.PI / (apex / 2));
            let y2 = centerY + centerY * Math.cos((i + j) * Math.PI / (apex / 2));
            line.setAttribute("x1", x1);
            line.setAttribute("y1", y1);
            line.setAttribute("x2", x2);
            line.setAttribute("y2", y2);
            line.setAttribute("stroke-width", 1);
            line.setAttribute("stroke-linecap", "round");
            svg.appendChild(line);
        }
    }
    figure.appendChild(svg);
    const caption = document.createElement("figcaption");
    caption.textContent = "子音発音図";
    figure.appendChild(caption);
    document.getElementById("consonant-pronunciation-figure").appendChild(figure);
}
function generateVowelPronunciationFigure() {
    const figure = document.createElement("figure");
    const svgNameSpace = "http://www.w3.org/2000/svg";
    let width = 256;
    let height = 256;
    let apex = 6;
    let svg = document.createElementNS(svgNameSpace, "svg");
    svg.setAttribute("width", width);
    svg.setAttribute("height", height);
    let centerX = width / 2;
    let centerY = height / 2;
    for (let i = 0; i < apex; i++) {
        let line = document.createElementNS(svgNameSpace, "line");
        let x1 = centerX + centerX * Math.sin(i * Math.PI / (apex / 2));
        let y1 = centerY + centerY * Math.cos(i * Math.PI / (apex / 2));
        let x2 = centerX + centerX * Math.sin((i + vowelArray.length / vowelPronunciationArray.length) * Math.PI / (apex / 2));
        let y2 = centerY + centerY * Math.cos((i + vowelArray.length / vowelPronunciationArray.length) * Math.PI / (apex / 2));
        line.setAttribute("x1", x1);
        line.setAttribute("y1", y1);
        line.setAttribute("x2", x2);
        line.setAttribute("y2", y2);
        line.setAttribute("stroke-width", 1);
        line.setAttribute("stroke-linecap", "round");
        svg.appendChild(line);
        let vowel = document.createElementNS(svgNameSpace, "text");
        let vowelPronunciation = document.createElementNS(svgNameSpace, "text");
        let x = centerX + (centerX * (3 / 4)) * Math.sin((4 + i) * Math.PI / (apex / 2));
        let y = centerY + (centerY * (3 / 4)) * Math.cos((4 + i) * Math.PI / (apex / 2));
        vowel.setAttribute("x", x);
        vowelPronunciation.setAttribute("x", x);
        vowel.setAttribute("y", y);
        vowelPronunciation.setAttribute("y", y);
        vowel.textContent = "\u{25cc}" + vowelArray[i];
        vowelPronunciation.textContent = "/" + vowelPronunciationArray[i] + "/";
        vowel.classList.add("xesada", "script");
        vowelPronunciation.classList.add("pronunciation");
        svg.appendChild(vowel);
        svg.appendChild(vowelPronunciation);
    }
    figure.appendChild(svg);
    const caption = document.createElement("figcaption");
    caption.textContent = "母音発音図";
    figure.appendChild(caption);
    document.getElementById("vowel-pronunciation-figure").appendChild(figure);
}
function generateLtrFigure() {
    const svgNameSpace = "http://www.w3.org/2000/svg";
    let width = 16;
    let height = 16;
    let svg = document.createElementNS(svgNameSpace, "svg");
    svg.setAttribute("width", width);
    svg.setAttribute("height", height);
    let polygon = document.createElementNS(svgNameSpace, "polygon");
    let coodinate = "8,0 0,8 8,16 16,8 8,8";
    polygon.setAttribute("points", coodinate);
    svg.appendChild(polygon);
    document.getElementById("ltr-figure").appendChild(svg);
}
function generateRtlFigure() {
    const svgNameSpace = "http://www.w3.org/2000/svg";
    let width = 16;
    let height = 16;
    let svg = document.createElementNS(svgNameSpace, "svg");
    svg.setAttribute("width", width);
    svg.setAttribute("height", height);
    let polygon = document.createElementNS(svgNameSpace, "polygon");
    let coodinate = "8,0 8,8 0,8 8,16 16,8";
    polygon.setAttribute("points", coodinate);
    svg.appendChild(polygon);
    document.getElementById("rtl-figure").appendChild(svg);
}
function generateConsonantConceptFigure() {
    const figure = document.createElement("figure");
    const svgNameSpace = "http://www.w3.org/2000/svg";
    let width = 256;
    let height = 256;
    let apex = 6;
    let svg = document.createElementNS(svgNameSpace, "svg");
    svg.setAttribute("width", width);
    svg.setAttribute("height", height);
    let centerX = width / 2;
    let centerY = height / 2;
    for (let i = 0; i <= apex; i++) {
        for (let j = 2; j <= 3; j++) {
            let line = document.createElementNS(svgNameSpace, "line");
            let x1 = centerX + centerX * Math.sin(i * Math.PI / (apex / 2));
            let y1 = centerY + centerY * Math.cos(i * Math.PI / (apex / 2));
            let x2 = centerX + centerX * Math.sin((i + j) * Math.PI / (apex / 2));
            let y2 = centerY + centerY * Math.cos((i + j) * Math.PI / (apex / 2));
            line.setAttribute("x1", x1);
            line.setAttribute("y1", y1);
            line.setAttribute("x2", x2);
            line.setAttribute("y2", y2);
            line.setAttribute("stroke-width", 1);
            line.setAttribute("stroke-linecap", "round");
            svg.appendChild(line);
        }
    }
    figure.appendChild(svg);
    const caption = document.createElement("figcaption");
    caption.textContent = "子音概念図";
    figure.appendChild(caption);
    document.getElementById("consonant-concept-figure").appendChild(figure);
}
function generatePrefixConsonantFigure() {
    const figure = document.createElement("figure");
    const svgNameSpace = "http://www.w3.org/2000/svg";
    let width = 256;
    let height = 256;
    let apex = 6;
    let svg = document.createElementNS(svgNameSpace, "svg");
    svg.setAttribute("width", width);
    svg.setAttribute("height", height);
    let centerX = width / 2;
    let centerY = height / 2;
    for (let i = 0; i <= apex; i++) {
        for (let j = 2; j <= 3; j++) {
            let line = document.createElementNS(svgNameSpace, "line");
            let x1 = centerX + centerX * Math.sin(i * Math.PI / (apex / 2));
            let y1 = centerY + centerY * Math.cos(i * Math.PI / (apex / 2));
            let x2 = centerX + centerX * Math.sin((i + j) * Math.PI / (apex / 2));
            let y2 = centerY + centerY * Math.cos((i + j) * Math.PI / (apex / 2));
            line.setAttribute("x1", x1);
            line.setAttribute("y1", y1);
            line.setAttribute("x2", x2);
            line.setAttribute("y2", y2);
            line.setAttribute("stroke-width", 1);
            line.setAttribute("stroke-linecap", "round");
            svg.appendChild(line);
        }
    }
    figure.appendChild(svg);
    const caption = document.createElement("figcaption");
    caption.textContent = "接頭辞図";
    figure.appendChild(caption);
    document.getElementById("prefix-consonant-figure").appendChild(figure);
}
function generateSuffixConsonantFigure() {
    const figure = document.createElement("figure");
    const svgNameSpace = "http://www.w3.org/2000/svg";
    let width = 256;
    let height = 256;
    let apex = 6;
    let svg = document.createElementNS(svgNameSpace, "svg");
    svg.setAttribute("width", width);
    svg.setAttribute("height", height);
    let centerX = width / 2;
    let centerY = height / 2;
    for (let i = 0; i <= apex; i++) {
        for (let j = 2; j <= 3; j++) {
            let line = document.createElementNS(svgNameSpace, "line");
            let x1 = centerX + centerX * Math.sin(i * Math.PI / (apex / 2));
            let y1 = centerY + centerY * Math.cos(i * Math.PI / (apex / 2));
            let x2 = centerX + centerX * Math.sin((i + j) * Math.PI / (apex / 2));
            let y2 = centerY + centerY * Math.cos((i + j) * Math.PI / (apex / 2));
            line.setAttribute("x1", x1);
            line.setAttribute("y1", y1);
            line.setAttribute("x2", x2);
            line.setAttribute("y2", y2);
            line.setAttribute("stroke-width", 1);
            line.setAttribute("stroke-linecap", "round");
            svg.appendChild(line);
        }
    }
    figure.appendChild(svg);
    const caption = document.createElement("figcaption");
    caption.textContent = "接尾辞図";
    figure.appendChild(caption);
    document.getElementById("suffix-consonant-figure").appendChild(figure);
}
function generateFirstCaseFigure() {
    const figure = document.createElement("figure");
    const svgNameSpace = "http://www.w3.org/2000/svg";
    let width = 256;
    let height = 256;
    let apex = 6;
    let svg = document.createElementNS(svgNameSpace, "svg");
    svg.setAttribute("width", width);
    svg.setAttribute("height", height);
    let centerX = width / 2;
    let centerY = height / 2;
    for (let i = 0; i < apex; i++) {
        let line = document.createElementNS(svgNameSpace, "line");
        let x1 = centerX + centerX * Math.sin(i * Math.PI / (apex / 2));
        let y1 = centerY + centerY * Math.cos(i * Math.PI / (apex / 2));
        let x2 = centerX + centerX * Math.sin((i + vowelArray.length / vowelPronunciationArray.length) * Math.PI / (apex / 2));
        let y2 = centerY + centerY * Math.cos((i + vowelArray.length / vowelPronunciationArray.length) * Math.PI / (apex / 2));
        line.setAttribute("x1", x1);
        line.setAttribute("y1", y1);
        line.setAttribute("x2", x2);
        line.setAttribute("y2", y2);
        line.setAttribute("stroke-width", 1);
        line.setAttribute("stroke-linecap", "round");
        svg.appendChild(line);
        let vowel = document.createElementNS(svgNameSpace, "text");
        let vowelCase = document.createElementNS(svgNameSpace, "text");
        let x = centerX + (centerX * (3 / 4)) * Math.sin(i * Math.PI / (apex / 2));
        let y = centerY + (centerY * (3 / 4)) * Math.cos(i * Math.PI / (apex / 2));
        vowel.setAttribute("x", x);
        vowelCase.setAttribute("x", x);
        vowel.setAttribute("y", y);
        vowelCase.setAttribute("y", y);
        vowel.textContent = "\u{25cc}" + vowelArray[i] + "\u{25cc}\u{25cc}";
        vowelCase.textContent = vowelCaseArray[i] + "格";
        vowel.classList.add("xesada", "script");
        vowelCase.classList.add("cases");
        svg.appendChild(vowel);
        svg.appendChild(vowelCase);
    }
    figure.appendChild(svg);
    const caption = document.createElement("figcaption");
    caption.textContent = "前置格図";
    figure.appendChild(caption);
    document.getElementById("first-case-figure").appendChild(figure);
}
function generateSecondCaseFigure() {
    const figure = document.createElement("figure");
    const svgNameSpace = "http://www.w3.org/2000/svg";
    let width = 256;
    let height = 256;
    let apex = 6;
    let svg = document.createElementNS(svgNameSpace, "svg");
    svg.setAttribute("width", width);
    svg.setAttribute("height", height);
    let centerX = width / 2;
    let centerY = height / 2;
    for (let i = 0; i < apex; i++) {
        let line = document.createElementNS(svgNameSpace, "line");
        let x1 = centerX + centerX * Math.sin(i * Math.PI / (apex / 2));
        let y1 = centerY + centerY * Math.cos(i * Math.PI / (apex / 2));
        let x2 = centerX + centerX * Math.sin((i + vowelArray.length / vowelPronunciationArray.length) * Math.PI / (apex / 2));
        let y2 = centerY + centerY * Math.cos((i + vowelArray.length / vowelPronunciationArray.length) * Math.PI / (apex / 2));
        line.setAttribute("x1", x1);
        line.setAttribute("y1", y1);
        line.setAttribute("x2", x2);
        line.setAttribute("y2", y2);
        line.setAttribute("stroke-width", 1);
        line.setAttribute("stroke-linecap", "round");
        svg.appendChild(line);
        let vowel = document.createElementNS(svgNameSpace, "text");
        let vowelCase = document.createElementNS(svgNameSpace, "text");
        let x = centerX + (centerX * (3 / 4)) * Math.sin(i * Math.PI / (apex / 2));
        let y = centerY + (centerY * (3 / 4)) * Math.cos(i * Math.PI / (apex / 2));
        vowel.setAttribute("x", x);
        vowelCase.setAttribute("x", x);
        vowel.setAttribute("y", y);
        vowelCase.setAttribute("y", y);
        vowel.textContent = "\u{25cc}\u{25cc}" + vowelArray[i] + "\u{25cc}";
        vowelCase.textContent = vowelCaseArray[i] + "格";
        vowel.classList.add("xesada", "script");
        vowelCase.classList.add("cases");
        svg.appendChild(vowel);
        svg.appendChild(vowelCase);
    }
    figure.appendChild(svg);
    const caption = document.createElement("figcaption");
    caption.textContent = "後置格図";
    figure.appendChild(caption);
    document.getElementById("second-case-figure").appendChild(figure);
}
function generateConjunctCaseFigure() {
    const figure = document.createElement("figure");
    const svgNameSpace = "http://www.w3.org/2000/svg";
    const width = 512;
    const height = 512;
    const apex = 6;
    const svg = document.createElementNS(svgNameSpace, "svg");
    svg.setAttribute("width", width);
    svg.setAttribute("height", height);
    const centerX = width / 2;
    const centerY = height / 2;
    for (let i = 0; i < apex; i++) {
        const firstCaseX = centerX + (width / 3) * Math.sin(i * Math.PI / (apex / 2));
        const firstCaseY = centerY + (height / 3) * Math.cos(i * Math.PI / (apex / 2));
        for (let j = 0; j < apex; j++) {
            const line = document.createElementNS(svgNameSpace, "line");
            const x1 = firstCaseX + (width / 6) * Math.sin(j * Math.PI / (apex / 2));
            const y1 = firstCaseY + (height / 6) * Math.cos(j * Math.PI / (apex / 2));
            const x2 = firstCaseX + (width / 6) * Math.sin((j + 1) * Math.PI / (apex / 2));
            const y2 = firstCaseY + (height / 6) * Math.cos((j + 1) * Math.PI / (apex / 2));
            line.setAttribute("x1", x1);
            line.setAttribute("y1", y1);
            line.setAttribute("x2", x2);
            line.setAttribute("y2", y2);
            line.setAttribute("stroke-width", 1);
            line.setAttribute("stroke-linecap", "round");
            svg.appendChild(line);
        }
        const firstCaseVowel = document.createElementNS(svgNameSpace, "text");
        const firstCase = document.createElementNS(svgNameSpace, "text");
        firstCaseVowel.setAttribute("x", firstCaseX);
        firstCase.setAttribute("y", firstCaseY);
        firstCase.setAttribute("x", firstCaseX);
        firstCase.setAttribute("y", firstCaseY);
        firstCaseVowel.textContent = "\u25cc" + vowelArray[i] + "\u25cc\u25cc";
        firstCase.textContent = vowelCaseArray[i] + "格";
        firstCaseVowel.classList.add("xesada", "script");
        firstCase.classList.add("cases");
        svg.appendChild(firstCaseVowel);
        svg.appendChild(firstCase);
        for (let j = 0; j < apex; j++) {
            const conjunctCaseVowel = document.createElementNS(svgNameSpace, "text");
            const conjunctCase = document.createElementNS(svgNameSpace, "text");
            const cx = firstCaseX + (width / 6 - 32) * Math.sin((j + 4) * Math.PI / (apex / 2));
            const cy = firstCaseY + (height / 6 - 32) * Math.cos((j + 4) * Math.PI / (apex / 2));
            conjunctCaseVowel.setAttribute("x", cx);
            conjunctCaseVowel.setAttribute("y", cy);
            conjunctCase.setAttribute("x", cx);
            conjunctCase.setAttribute("y", cy);
            conjunctCaseVowel.textContent = "\u25cc" + vowelArray[i] + "\u25cc" + vowelArray[j] + "\u25cc";
            conjunctCase.textContent = vowelCaseArray[i] + vowelCaseArray[j] + "格";
            conjunctCaseVowel.classList.add("xesada", "script");
            conjunctCase.classList.add("cases");
            svg.appendChild(conjunctCaseVowel);
            svg.appendChild(conjunctCase);
        }
    }
    figure.appendChild(svg);
    const caption = document.createElement("figcaption");
    caption.textContent = "複合格図";
    figure.appendChild(caption);
    document.getElementById("conjunct-case-figure").appendChild(figure);
}
function generatePrefixCaseFigure() {
    const figure = document.createElement("figure");
    const svgNameSpace = "http://www.w3.org/2000/svg";
    let width = 256;
    let height = 256;
    let apex = 6;
    let svg = document.createElementNS(svgNameSpace, "svg");
    svg.setAttribute("width", width);
    svg.setAttribute("height", height);
    let centerX = width / 2;
    let centerY = height / 2;
    for (let i = 0; i < apex; i++) {
        let line = document.createElementNS(svgNameSpace, "line");
        let x1 = centerX + centerX * Math.sin(i * Math.PI / (apex / 2));
        let y1 = centerY + centerY * Math.cos(i * Math.PI / (apex / 2));
        let x2 = centerX + centerX * Math.sin((i + vowelArray.length / vowelPronunciationArray.length) * Math.PI / (apex / 2));
        let y2 = centerY + centerY * Math.cos((i + vowelArray.length / vowelPronunciationArray.length) * Math.PI / (apex / 2));
        line.setAttribute("x1", x1);
        line.setAttribute("y1", y1);
        line.setAttribute("x2", x2);
        line.setAttribute("y2", y2);
        line.setAttribute("stroke-width", 1);
        line.setAttribute("stroke-linecap", "round");
        svg.appendChild(line);
        let vowel = document.createElementNS(svgNameSpace, "text");
        let vowelCase = document.createElementNS(svgNameSpace, "text");
        let x = centerX + (centerX * (3 / 4)) * Math.sin(i * Math.PI / (apex / 2));
        let y = centerY + (centerY * (3 / 4)) * Math.cos(i * Math.PI / (apex / 2));
        vowel.setAttribute("x", x);
        vowelCase.setAttribute("x", x);
        vowel.setAttribute("y", y);
        vowelCase.setAttribute("y", y);
        vowel.textContent = "\u{25cc}" + vowelArray[i] + "\u{25cc}\u{25cc}\u{25cc}";
        vowelCase.textContent = vowelCaseArray[i] + "格";
        vowel.classList.add("xesada", "script");
        vowelCase.classList.add("cases");
        svg.appendChild(vowel);
        svg.appendChild(vowelCase);
    }
    figure.appendChild(svg);
    const caption = document.createElement("figcaption");
    caption.textContent = "接頭辞格図";
    figure.appendChild(caption);
    document.getElementById("prefix-case-figure").appendChild(figure);
}
function generateSuffixCaseFigure() {
    const figure = document.createElement("figure");
    const svgNameSpace = "http://www.w3.org/2000/svg";
    let width = 256;
    let height = 256;
    let apex = 6;
    let svg = document.createElementNS(svgNameSpace, "svg");
    svg.setAttribute("width", width);
    svg.setAttribute("height", height);
    let centerX = width / 2;
    let centerY = height / 2;
    for (let i = 0; i < apex; i++) {
        let line = document.createElementNS(svgNameSpace, "line");
        let x1 = centerX + centerX * Math.sin(i * Math.PI / (apex / 2));
        let y1 = centerY + centerY * Math.cos(i * Math.PI / (apex / 2));
        let x2 = centerX + centerX * Math.sin((i + vowelArray.length / vowelPronunciationArray.length) * Math.PI / (apex / 2));
        let y2 = centerY + centerY * Math.cos((i + vowelArray.length / vowelPronunciationArray.length) * Math.PI / (apex / 2));
        line.setAttribute("x1", x1);
        line.setAttribute("y1", y1);
        line.setAttribute("x2", x2);
        line.setAttribute("y2", y2);
        line.setAttribute("stroke-width", 1);
        line.setAttribute("stroke-linecap", "round");
        svg.appendChild(line);
        let vowel = document.createElementNS(svgNameSpace, "text");
        let vowelCase = document.createElementNS(svgNameSpace, "text");
        let x = centerX + (centerX * (3 / 4)) * Math.sin(i * Math.PI / (apex / 2));
        let y = centerY + (centerY * (3 / 4)) * Math.cos(i * Math.PI / (apex / 2));
        vowel.setAttribute("x", x);
        vowelCase.setAttribute("x", x);
        vowel.setAttribute("y", y);
        vowelCase.setAttribute("y", y);
        vowel.textContent = "\u{25cc}\u{25cc}\u{25cc}\u{25cc}" + vowelArray[i];
        vowelCase.textContent = vowelCaseArray[i] + "格";
        vowel.classList.add("xesada", "script");
        vowelCase.classList.add("cases");
        svg.appendChild(vowel);
        svg.appendChild(vowelCase);
    }
    figure.appendChild(svg);
    const caption = document.createElement("figcaption");
    caption.textContent = "接尾辞格図";
    figure.appendChild(caption);
    document.getElementById("suffix-case-figure").appendChild(figure);
}
function generatePartOfSpeechFigure() {
    const figure = document.createElement("figure");
    const svgNameSpace = "http://www.w3.org/2000/svg";
    let width = 256;
    let height = 256;
    let apex = 6;
    let svg = document.createElementNS(svgNameSpace, "svg");
    svg.setAttribute("width", width);
    svg.setAttribute("height", height);
    let centerX = width / 2;
    let centerY = height / 2;
    for (let i = 0; i < apex; i++) {
        let line = document.createElementNS(svgNameSpace, "line");
        let x1 = centerX + centerX * Math.sin(i * Math.PI / (apex / 2));
        let y1 = centerY + centerY * Math.cos(i * Math.PI / (apex / 2));
        let x2 = centerX + centerX * Math.sin((i + vowelArray.length / vowelPronunciationArray.length) * Math.PI / (apex / 2));
        let y2 = centerY + centerY * Math.cos((i + vowelArray.length / vowelPronunciationArray.length) * Math.PI / (apex / 2));
        line.setAttribute("x1", x1);
        line.setAttribute("y1", y1);
        line.setAttribute("x2", x2);
        line.setAttribute("y2", y2);
        line.setAttribute("stroke-width", 1);
        line.setAttribute("stroke-linecap", "round");
        svg.appendChild(line);
        let vowel = document.createElementNS(svgNameSpace, "text");
        let vowelPartOfSpeech = document.createElementNS(svgNameSpace, "text");
        let x = centerX + (centerX * (3 / 4)) * Math.sin(i * Math.PI / (apex / 2));
        let y = centerY + (centerY * (3 / 4)) * Math.cos(i * Math.PI / (apex / 2));
        vowel.setAttribute("x", x);
        vowelPartOfSpeech.setAttribute("x", x);
        vowel.setAttribute("y", y);
        vowelPartOfSpeech.setAttribute("y", y);
        vowel.textContent = "\u{25cc}\u{25cc}\u{25cc}" + vowelArray[i];
        vowelPartOfSpeech.textContent = vowelPartOfSpeechTypeArray[i] + "詞";
        vowel.classList.add("xesada", "script");
        vowelPartOfSpeech.classList.add("part-of-speech");
        svg.appendChild(vowel);
        svg.appendChild(vowelPartOfSpeech);
    }
    figure.appendChild(svg);
    const caption = document.createElement("figcaption");
    caption.textContent = "品詞図";
    figure.appendChild(caption);
    document.getElementById("part-of-speech-figure").appendChild(figure);
}
function generateArticleConjugationFigure() {
    const figure = document.createElement("figure");
    const svgNameSpace = "http://www.w3.org/2000/svg";
    let width = 256;
    let height = 256;
    let apex = 6;
    let svg = document.createElementNS(svgNameSpace, "svg");
    svg.setAttribute("width", width);
    svg.setAttribute("height", height);
    let centerX = width / 2;
    let centerY = height / 2;
    for (let i = 0; i <= apex; i++) {
        for (let j = 2; j <= 3; j++) {
            let line = document.createElementNS(svgNameSpace, "line");
            let x1 = centerX + centerX * Math.sin(i * Math.PI / (apex / 2));
            let y1 = centerY + centerY * Math.cos(i * Math.PI / (apex / 2));
            let x2 = centerX + centerX * Math.sin((i + j) * Math.PI / (apex / 2));
            let y2 = centerY + centerY * Math.cos((i + j) * Math.PI / (apex / 2));
            line.setAttribute("x1", x1);
            line.setAttribute("y1", y1);
            line.setAttribute("x2", x2);
            line.setAttribute("y2", y2);
            line.setAttribute("stroke-width", 1);
            line.setAttribute("stroke-linecap", "round");
            svg.appendChild(line);
        }
    }
    figure.appendChild(svg);
    const caption = document.createElement("figcaption");
    caption.textContent = "附詞活用図";
    figure.appendChild(caption);
    document.getElementById("article-conjugation-figure").appendChild(figure);
}
function generateVerbConjugationFigure() {
    const figure = document.createElement("figure");
    const svgNameSpace = "http://www.w3.org/2000/svg";
    let width = 256;
    let height = 256;
    let apex = 6;
    let svg = document.createElementNS(svgNameSpace, "svg");
    svg.setAttribute("width", width);
    svg.setAttribute("height", height);
    let centerX = width / 2;
    let centerY = height / 2;
    for (let i = 0; i <= apex; i++) {
        for (let j = 2; j <= 3; j++) {
            let line = document.createElementNS(svgNameSpace, "line");
            let x1 = centerX + centerX * Math.sin(i * Math.PI / (apex / 2));
            let y1 = centerY + centerY * Math.cos(i * Math.PI / (apex / 2));
            let x2 = centerX + centerX * Math.sin((i + j) * Math.PI / (apex / 2));
            let y2 = centerY + centerY * Math.cos((i + j) * Math.PI / (apex / 2));
            line.setAttribute("x1", x1);
            line.setAttribute("y1", y1);
            line.setAttribute("x2", x2);
            line.setAttribute("y2", y2);
            line.setAttribute("stroke-width", 1);
            line.setAttribute("stroke-linecap", "round");
            svg.appendChild(line);
        }
    }
    figure.appendChild(svg);
    const caption = document.createElement("figcaption");
    caption.textContent = "動詞活用図";
    figure.appendChild(caption);
    document.getElementById("verb-conjugation-figure").appendChild(figure);
}
function generateAdjectiveConjugationFigure() {
    const figure = document.createElement("figure");
    const svgNameSpace = "http://www.w3.org/2000/svg";
    let width = 256;
    let height = 256;
    let apex = 6;
    let svg = document.createElementNS(svgNameSpace, "svg");
    svg.setAttribute("width", width);
    svg.setAttribute("height", height);
    let centerX = width / 2;
    let centerY = height / 2;
    for (let i = 0; i <= apex; i++) {
        for (let j = 2; j <= 3; j++) {
            let line = document.createElementNS(svgNameSpace, "line");
            let x1 = centerX + centerX * Math.sin(i * Math.PI / (apex / 2));
            let y1 = centerY + centerY * Math.cos(i * Math.PI / (apex / 2));
            let x2 = centerX + centerX * Math.sin((i + j) * Math.PI / (apex / 2));
            let y2 = centerY + centerY * Math.cos((i + j) * Math.PI / (apex / 2));
            line.setAttribute("x1", x1);
            line.setAttribute("y1", y1);
            line.setAttribute("x2", x2);
            line.setAttribute("y2", y2);
            line.setAttribute("stroke-width", 1);
            line.setAttribute("stroke-linecap", "round");
            svg.appendChild(line);
        }
    }
    figure.appendChild(svg);
    const caption = document.createElement("figcaption");
    caption.textContent = "容詞活用図";
    figure.appendChild(caption);
    document.getElementById("adjective-conjugation-figure").appendChild(figure);
}
function generateParticleConjugationFigure() {
    const figure = document.createElement("figure");
    const svgNameSpace = "http://www.w3.org/2000/svg";
    let width = 256;
    let height = 256;
    let apex = 6;
    let svg = document.createElementNS(svgNameSpace, "svg");
    svg.setAttribute("width", width);
    svg.setAttribute("height", height);
    let centerX = width / 2;
    let centerY = height / 2;
    for (let i = 0; i <= apex; i++) {
        for (let j = 2; j <= 3; j++) {
            let line = document.createElementNS(svgNameSpace, "line");
            let x1 = centerX + centerX * Math.sin(i * Math.PI / (apex / 2));
            let y1 = centerY + centerY * Math.cos(i * Math.PI / (apex / 2));
            let x2 = centerX + centerX * Math.sin((i + j) * Math.PI / (apex / 2));
            let y2 = centerY + centerY * Math.cos((i + j) * Math.PI / (apex / 2));
            line.setAttribute("x1", x1);
            line.setAttribute("y1", y1);
            line.setAttribute("x2", x2);
            line.setAttribute("y2", y2);
            line.setAttribute("stroke-width", 1);
            line.setAttribute("stroke-linecap", "round");
            svg.appendChild(line);
        }
    }
    figure.appendChild(svg);
    const caption = document.createElement("figcaption");
    caption.textContent = "助詞活用図";
    figure.appendChild(caption);
    document.getElementById("particle-conjugation-figure").appendChild(figure);
}
function generateAdverbConjugationFigure() {
    const figure = document.createElement("figure");
    const svgNameSpace = "http://www.w3.org/2000/svg";
    let width = 256;
    let height = 256;
    let apex = 6;
    let svg = document.createElementNS(svgNameSpace, "svg");
    svg.setAttribute("width", width);
    svg.setAttribute("height", height);
    let centerX = width / 2;
    let centerY = height / 2;
    for (let i = 0; i <= apex; i++) {
        for (let j = 2; j <= 3; j++) {
            let line = document.createElementNS(svgNameSpace, "line");
            let x1 = centerX + centerX * Math.sin(i * Math.PI / (apex / 2));
            let y1 = centerY + centerY * Math.cos(i * Math.PI / (apex / 2));
            let x2 = centerX + centerX * Math.sin((i + j) * Math.PI / (apex / 2));
            let y2 = centerY + centerY * Math.cos((i + j) * Math.PI / (apex / 2));
            line.setAttribute("x1", x1);
            line.setAttribute("y1", y1);
            line.setAttribute("x2", x2);
            line.setAttribute("y2", y2);
            line.setAttribute("stroke-width", 1);
            line.setAttribute("stroke-linecap", "round");
            svg.appendChild(line);
        }
    }
    figure.appendChild(svg);
    const caption = document.createElement("figcaption");
    caption.textContent = "副詞活用図";
    figure.appendChild(caption);
    document.getElementById("adverb-conjugation-figure").appendChild(figure);
}
function generateNounConjugationFigure() {
    const figure = document.createElement("figure");
    const svgNameSpace = "http://www.w3.org/2000/svg";
    let width = 256;
    let height = 256;
    let apex = 6;
    let svg = document.createElementNS(svgNameSpace, "svg");
    svg.setAttribute("width", width);
    svg.setAttribute("height", height);
    let centerX = width / 2;
    let centerY = height / 2;
    for (let i = 0; i <= apex; i++) {
        for (let j = 2; j <= 3; j++) {
            let line = document.createElementNS(svgNameSpace, "line");
            let x1 = centerX + centerX * Math.sin(i * Math.PI / (apex / 2));
            let y1 = centerY + centerY * Math.cos(i * Math.PI / (apex / 2));
            let x2 = centerX + centerX * Math.sin((i + j) * Math.PI / (apex / 2));
            let y2 = centerY + centerY * Math.cos((i + j) * Math.PI / (apex / 2));
            line.setAttribute("x1", x1);
            line.setAttribute("y1", y1);
            line.setAttribute("x2", x2);
            line.setAttribute("y2", y2);
            line.setAttribute("stroke-width", 1);
            line.setAttribute("stroke-linecap", "round");
            svg.appendChild(line);
        }
    }
    figure.appendChild(svg);
    const caption = document.createElement("figcaption");
    caption.textContent = "名詞活用図";
    figure.appendChild(caption);
    document.getElementById("noun-conjugation-figure").appendChild(figure);
}
window.addEventListener("load", () => {
    generateConsonantPronunciationFigure();
    generateVowelPronunciationFigure();
    generateRtlFigure();
    generateLtrFigure();
    generateConsonantConceptFigure();
    generatePrefixConsonantFigure();
    generateSuffixConsonantFigure();
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
});