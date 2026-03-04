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
    document.querySelectorAll(".consonant-pronunciation-figure").forEach(function (element) {
        element.appendChild(figure.cloneNode(true));
    });
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
        let x2 = centerX + centerX * Math.sin((i + vowelsArray.length / vowelsPronunciationArray.length) * Math.PI / (apex / 2));
        let y2 = centerY + centerY * Math.cos((i + vowelsArray.length / vowelsPronunciationArray.length) * Math.PI / (apex / 2));
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
        vowel.textContent = "\u{25cc}" + vowelsArray[i];
        vowelPronunciation.textContent = "/" + vowelsPronunciationArray[i] + "/";
        vowel.classList.add("xesada", "script");
        vowelPronunciation.classList.add("pronunciation");
        svg.appendChild(vowel);
        svg.appendChild(vowelPronunciation);
    }
    figure.appendChild(svg);
    const caption = document.createElement("figcaption");
    caption.textContent = "母音発音図";
    figure.appendChild(caption);
    document.querySelectorAll(".vowel-pronunciation-figure").forEach(function (element) {
        element.appendChild(figure.cloneNode(true));
    });
}

function generateLtrFigure() {
    const svgNameSpace = "http://www.w3.org/2000/svg";
    let svg = document.createElementNS(svgNameSpace, "svg");
    svg.setAttribute("width", 16);
    svg.setAttribute("height", 16);
    let polygon = document.createElementNS(svgNameSpace, "polygon");
    let coodinate = "8,0 0,8 8,16 16,8 8,8";
    polygon.setAttribute("points", coodinate);
    svg.appendChild(polygon);
    document.querySelectorAll(".ltr-figure").forEach(function (element) {
        element.appendChild(svg.cloneNode(true));
    });
}

function generateRtlFigure() {
    const svgNameSpace = "http://www.w3.org/2000/svg";
    let svg = document.createElementNS(svgNameSpace, "svg");
    svg.setAttribute("width", 16);
    svg.setAttribute("height", 16);
    let polygon = document.createElementNS(svgNameSpace, "polygon");
    let coodinate = "8,0 8,8 0,8 8,16 16,8";
    polygon.setAttribute("points", coodinate);
    svg.appendChild(polygon);
    document.querySelectorAll(".rtl-figure").forEach(function (element) {
        element.appendChild(svg.cloneNode(true));
    });
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
    document.querySelectorAll(".consonant-concept-figure").forEach(function (element) {
        element.appendChild(figure.cloneNode(true));
    });
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
    document.querySelectorAll(".prefix-consonant-figure").forEach(function (element) {
        element.appendChild(figure.cloneNode(true));
    });
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
    document.querySelectorAll(".suffix-consonant-figure").forEach(function (element) {
        element.appendChild(figure.cloneNode(true));
    });
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
        let x2 = centerX + centerX * Math.sin((i + vowelsArray.length / vowelsPronunciationArray.length) * Math.PI / (apex / 2));
        let y2 = centerY + centerY * Math.cos((i + vowelsArray.length / vowelsPronunciationArray.length) * Math.PI / (apex / 2));
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
        vowel.textContent = "\u{25cc}" + vowelsArray[i] + "\u{25cc}\u{25cc}";
        vowelCase.textContent = vowelsCasesArray[i] + "格";
        vowel.classList.add("xesada", "script");
        vowelCase.classList.add("cases");
        svg.appendChild(vowel);
        svg.appendChild(vowelCase);
    }
    figure.appendChild(svg);
    const caption = document.createElement("figcaption");
    caption.textContent = "前置格図";
    figure.appendChild(caption);
    document.querySelectorAll(".first-case-figure").forEach(function (element) {
        element.appendChild(figure.cloneNode(true));
    });
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
        let x2 = centerX + centerX * Math.sin((i + vowelsArray.length / vowelsPronunciationArray.length) * Math.PI / (apex / 2));
        let y2 = centerY + centerY * Math.cos((i + vowelsArray.length / vowelsPronunciationArray.length) * Math.PI / (apex / 2));
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
        vowel.textContent = "\u{25cc}\u{25cc}" + vowelsArray[i] + "\u{25cc}";
        vowelCase.textContent = vowelsCasesArray[i] + "格";
        vowel.classList.add("xesada", "script");
        vowelCase.classList.add("cases");
        svg.appendChild(vowel);
        svg.appendChild(vowelCase);
    }
    figure.appendChild(svg);
    const caption = document.createElement("figcaption");
    caption.textContent = "後置格図";
    figure.appendChild(caption);
    document.querySelectorAll(".second-case-figure").forEach(function (element) {
        element.appendChild(figure.cloneNode(true));
    });
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
        firstCaseVowel.textContent = "\u25cc" + vowelsArray[i] + "\u25cc\u25cc";
        firstCase.textContent = vowelsCasesArray[i] + "格";
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
            conjunctCaseVowel.textContent = "\u25cc" + vowelsArray[i] + "\u25cc" + vowelsArray[j] + "\u25cc";
            conjunctCase.textContent = vowelsCasesArray[i] + vowelsCasesArray[j] + "格";
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
    document.querySelectorAll(".conjunct-case-figure").forEach(function (element) {
        element.appendChild(figure.cloneNode(true));
    });
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
        let x2 = centerX + centerX * Math.sin((i + vowelsArray.length / vowelsPronunciationArray.length) * Math.PI / (apex / 2));
        let y2 = centerY + centerY * Math.cos((i + vowelsArray.length / vowelsPronunciationArray.length) * Math.PI / (apex / 2));
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
        vowel.textContent = "\u{25cc}" + vowelsArray[i] + "\u{25cc}\u{25cc}\u{25cc}";
        vowelCase.textContent = vowelsCasesArray[i] + "格";
        vowel.classList.add("xesada", "script");
        vowelCase.classList.add("cases");
        svg.appendChild(vowel);
        svg.appendChild(vowelCase);
    }
    figure.appendChild(svg);
    const caption = document.createElement("figcaption");
    caption.textContent = "接頭辞格図";
    figure.appendChild(caption);
    document.querySelectorAll(".prefix-case-figure").forEach(function (element) {
        element.appendChild(figure.cloneNode(true));
    });
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
        let x2 = centerX + centerX * Math.sin((i + vowelsArray.length / vowelsPronunciationArray.length) * Math.PI / (apex / 2));
        let y2 = centerY + centerY * Math.cos((i + vowelsArray.length / vowelsPronunciationArray.length) * Math.PI / (apex / 2));
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
        vowel.textContent = "\u{25cc}\u{25cc}\u{25cc}\u{25cc}" + vowelsArray[i];
        vowelCase.textContent = vowelsCasesArray[i] + "格";
        vowel.classList.add("xesada", "script");
        vowelCase.classList.add("cases");
        svg.appendChild(vowel);
        svg.appendChild(vowelCase);
    }
    figure.appendChild(svg);
    const caption = document.createElement("figcaption");
    caption.textContent = "接尾辞格図";
    figure.appendChild(caption);
    document.querySelectorAll(".suffix-case-figure").forEach(function (element) {
        element.appendChild(figure.cloneNode(true));
    });
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
        let x2 = centerX + centerX * Math.sin((i + vowelsArray.length / vowelsPronunciationArray.length) * Math.PI / (apex / 2));
        let y2 = centerY + centerY * Math.cos((i + vowelsArray.length / vowelsPronunciationArray.length) * Math.PI / (apex / 2));
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
        vowel.textContent = "\u{25cc}\u{25cc}\u{25cc}" + vowelsArray[i];
        vowelPartOfSpeech.textContent = vowelsPartOfSpeechTypesArray[i] + "詞";
        vowel.classList.add("xesada", "script");
        vowelPartOfSpeech.classList.add("part-of-speech");
        svg.appendChild(vowel);
        svg.appendChild(vowelPartOfSpeech);
    }
    figure.appendChild(svg);
    const caption = document.createElement("figcaption");
    caption.textContent = "品詞図";
    figure.appendChild(caption);
    document.querySelectorAll(".part-of-speech-figure").forEach(function (element) {
        element.appendChild(figure.cloneNode(true));
    });
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
    let rect = document.createElementNS(svgNameSpace, "rect");
    rect.setAttribute("x", width / 4);
    rect.setAttribute("y", height / 4);
    rect.setAttribute("width", centerX);
    rect.setAttribute("height", centerY);
    svg.appendChild(rect);
    figure.appendChild(svg);
    const caption = document.createElement("figcaption");
    caption.textContent = "附詞活用図";
    figure.appendChild(caption);
    document.querySelectorAll(".article-conjugation-figure").forEach(function (element) {
        element.appendChild(figure.cloneNode(true));
    });
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
    let rect = document.createElementNS(svgNameSpace, "rect");
    rect.setAttribute("x", width / 4);
    rect.setAttribute("y", height / 4);
    rect.setAttribute("width", centerX);
    rect.setAttribute("height", centerY);
    svg.appendChild(rect);
    figure.appendChild(svg);
    const caption = document.createElement("figcaption");
    caption.textContent = "動詞活用図";
    figure.appendChild(caption);
    document.querySelectorAll(".verb-conjugation-figure").forEach(function (element) {
        element.appendChild(figure.cloneNode(true));
    });
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
    let rect = document.createElementNS(svgNameSpace, "rect");
    rect.setAttribute("x", width / 4);
    rect.setAttribute("y", height / 4);
    rect.setAttribute("width", centerX);
    rect.setAttribute("height", centerY);
    svg.appendChild(rect);
    figure.appendChild(svg);
    const caption = document.createElement("figcaption");
    caption.textContent = "容詞活用図";
    figure.appendChild(caption);
    document.querySelectorAll(".adjective-conjugation-figure").forEach(function (element) {
        element.appendChild(figure.cloneNode(true));
    });
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
    let rect = document.createElementNS(svgNameSpace, "rect");
    rect.setAttribute("x", width / 4);
    rect.setAttribute("y", height / 4);
    rect.setAttribute("width", centerX);
    rect.setAttribute("height", centerY);
    svg.appendChild(rect);
    figure.appendChild(svg);
    const caption = document.createElement("figcaption");
    caption.textContent = "助詞活用図";
    figure.appendChild(caption);
    document.querySelectorAll(".particle-conjugation-figure").forEach(function (element) {
        element.appendChild(figure.cloneNode(true));
    });
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
    let rect = document.createElementNS(svgNameSpace, "rect");
    rect.setAttribute("x", width / 4);
    rect.setAttribute("y", height / 4);
    rect.setAttribute("width", centerX);
    rect.setAttribute("height", centerY);
    svg.appendChild(rect);
    figure.appendChild(svg);
    const caption = document.createElement("figcaption");
    caption.textContent = "副詞活用図";
    figure.appendChild(caption);
    document.querySelectorAll(".adverb-conjugation-figure").forEach(function (element) {
        element.appendChild(figure.cloneNode(true));
    });
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
    let rect = document.createElementNS(svgNameSpace, "rect");
    rect.setAttribute("x", width / 4);
    rect.setAttribute("y", height / 4);
    rect.setAttribute("width", centerX);
    rect.setAttribute("height", centerY);
    svg.appendChild(rect);
    figure.appendChild(svg);
    const caption = document.createElement("figcaption");
    caption.textContent = "名詞活用図";
    figure.appendChild(caption);
    document.querySelectorAll(".noun-conjugation-figure").forEach(function (element) {
        element.appendChild(figure.cloneNode(true));
    });
}

window.addEventListener("load", function () {
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
