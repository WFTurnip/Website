function generateCantillationPronunciationTable() {
    let table = document.createElement("table");
    let caption = document.createElement("caption");
    caption.textContent = "朗唱発音表";
    table.appendChild(caption);
    let thead = document.createElement("thead");
    let vowelRow = document.createElement("tr");
    let blank = document.createElement("th");
    blank.textContent = "";
    vowelRow.appendChild(blank);
    for (let i = 0; i < vowelArray.length; i++) {
        let th = document.createElement("th");
        let vowel = document.createElement("div");
        vowel.classList.add("xesada");
        vowel.textContent = "\u{25cc}" + vowelArray[i];
        th.appendChild(vowel);
        let vowelPronunciation = document.createElement("div");
        vowelPronunciation.classList.add("pronunciation");
        vowelPronunciation.textContent = "/" + vowelPronunciationArray[i] + "/";
        th.appendChild(vowelPronunciation);
        vowelRow.appendChild(th);
    }
    thead.appendChild(vowelRow);
    table.appendChild(thead);
    let tbody = document.createElement("tbody");
    for (let i = 0; i < cantillationMarkArray.length; i++) {
        let row = document.createElement("tr");
        let diacriticCell = document.createElement("th");
        let diacritic = document.createElement("div");
        diacritic.classList.add("xesada");
        diacritic.append("\u{25cc}", cantillationMarkArray[i]);
        diacriticCell.appendChild(diacritic);
        let diacriticConcept = document.createElement("div");
        diacriticConcept.classList.add("concept", "pronunciation");
        diacriticConcept.textContent = "/" + cantillationPronunciationArray[i] + "/";
        diacriticCell.appendChild(diacriticConcept);
        row.appendChild(diacriticCell);
        for (let j = 0; j < vowelArray.length; j++) {
            let cell = document.createElement("td");
            let mark = document.createElement("div");
            mark.classList.add("xesada");
            mark.textContent = "\u{25cc}" + vowelArray[j] + cantillationMarkArray[i];
            cell.appendChild(mark);
            let markPronunciation = document.createElement("div");
            markPronunciation.classList.add("pronunciation");
            markPronunciation.textContent = "/" + vowelPronunciationArray[j] + cantillationPronunciationArray[i] + "/";
            cell.appendChild(markPronunciation);
            row.appendChild(cell);
        }
        tbody.appendChild(row);
    }
    table.appendChild(tbody);
    document.getElementById("cantillation-pronunciation-table").appendChild(table);
}
function generateCantillationConceptTable() {
    let table = document.createElement("table");
    let caption = document.createElement("caption");
    caption.textContent = "朗唱記号表";
    table.appendChild(caption);
    let thead = document.createElement("thead");
    let vowelRow = document.createElement("tr");
    let blank = document.createElement("th");
    blank.textContent = "";
    vowelRow.appendChild(blank);
    for (let i = 0; i < vowelArray.length; i++) {
        let th = document.createElement("th");
        let vowel = document.createElement("div");
        vowel.classList.add("xesada");
        vowel.textContent = "\u{25cc}" + vowelArray[i];
        th.appendChild(vowel);
        let vowelPronunciation = document.createElement("div");
        vowelPronunciation.classList.add("pronunciation");
        vowelPronunciation.textContent = "/" + vowelPronunciationArray[i] + "/";
        th.appendChild(vowelPronunciation);
        vowelRow.appendChild(th);
    }
    thead.appendChild(vowelRow);
    table.appendChild(thead);
    let tbody = document.createElement("tbody");
    for (let i = 0; i < cantillationMarkArray.length; i++) {
        let row = document.createElement("tr");
        let diacriticCell = document.createElement("th");
        let diacritic = document.createElement("div");
        diacritic.classList.add("xesada");
        diacritic.append("\u{25cc}", cantillationMarkArray[i]);
        diacriticCell.appendChild(diacritic);
        let diacriticConcept = document.createElement("div");
        let markConceptSpan = document.createElement("span");
        let markPronunciationspan = document.createElement("span");
        markConceptSpan.classList.add("concept");
        markPronunciationspan.classList.add("pronunciation");
        diacriticConcept.textContent = cantillationConceptArray[i] + "声符";
        diacritic.appendChild(markConceptSpan);
        diacritic.appendChild(markPronunciationspan);
        diacriticCell.appendChild(diacriticConcept);
        row.appendChild(diacriticCell);
        for (let j = 0; j < vowelArray.length; j++) {
            let cell = document.createElement("td");
            let mark = document.createElement("div");
            mark.classList.add("xesada");
            mark.textContent = "\u{25cc}" + vowelArray[j] + cantillationMarkArray[i];
            cell.appendChild(mark);
            let markConcept = document.createElement("div");
            let markPronunciationspan = document.createElement("span");
            let markConceptSpan = document.createElement("span");
            markPronunciationspan.classList.add("pronunciation");
            markConceptSpan.classList.add("concept");
            markConceptSpan.textContent = cantillationConceptArray[i] + "声符"
            markPronunciationspan.textContent = "/" + vowelPronunciationArray[j] + "/";
            markConcept.append(markPronunciationspan, markConceptSpan);
            cell.appendChild(markConcept);
            row.appendChild(cell);
        }
        tbody.appendChild(row);
    }
    table.appendChild(tbody);
    document.getElementById("cantillation-marks-table").appendChild(table);
}
window.addEventListener("load", () => {
    generateCantillationPronunciationTable();
    generateCantillationConceptTable();
});