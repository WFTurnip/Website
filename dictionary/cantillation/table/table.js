const diacriticsArray = ["\u{0301}", "\u{0317}", "\u{0300}", "\u{0316}", "\u{0302}", "\u{032d}", "\u{030c}", "\u{032c}", "\u{0307}", "\u{0323}", "\u{0308}", "\u{0324}", "\u{0304}", "\u{0331}"];
const diacriticsConceptArray = ["高揚", "低揚", "高抑", "低抑", "高昇", "低昇", "高降", "低降", "高終", "低終", "高分", "低分", "高平", "低平"];
const vowelsArray = ["a", "e", "i", "o", "u", "w"];
const vowelsPronunciationArray = ["a", "e", "i", "o", "u", "\u{2205}"];

function generateCantillationMarksTable() {
    let table = document.createElement("table");
    let caption = document.createElement("caption");
    caption.textContent = "詠唱記号表";
    table.appendChild(caption);
    let thead = document.createElement("thead");
    let vowelRow = document.createElement("tr");
    let blank = document.createElement("th");
    blank.textContent = "";
    vowelRow.appendChild(blank);
    for (let i = 0; i < vowelsArray.length; i++) {
        let th = document.createElement("th");
        let vowel = document.createElement("div");
        vowel.classList.add("lekuta");
        vowel.textContent = "\u{25cc}" + vowelsArray[i];
        th.appendChild(vowel);
        let vowelPronunciation = document.createElement("div");
        vowelPronunciation.classList.add("pronunciation");
        vowelPronunciation.textContent = "/" + vowelsPronunciationArray[i] + "/";
        th.appendChild(vowelPronunciation);
        vowelRow.appendChild(th);
    }
    thead.appendChild(vowelRow);
    table.appendChild(thead);
    let tbody = document.createElement("tbody");
    for (let i = 0; i < diacriticsArray.length; i++) {
        let row = document.createElement("tr");
        let diacriticCell = document.createElement("th");
        let diacritic = document.createElement("div");
        diacritic.classList.add("lekuta");
        diacritic.textContent = "\u{25cc}" + diacriticsArray[i];
        diacriticCell.appendChild(diacritic);
        let diacriticConcept = document.createElement("div");
        diacriticConcept.classList.add("concept");
        diacriticConcept.textContent = diacriticsConceptArray[i] + "声符";
        diacriticCell.appendChild(diacriticConcept);
        row.appendChild(diacriticCell);
        for (let j = 0; j < vowelsArray.length; j++) {
            let cell = document.createElement("td");
            let mark = document.createElement("div");
            mark.classList.add("lekuta");
            mark.textContent = vowelsArray[j] + diacriticsArray[i];
            cell.appendChild(mark);
            row.appendChild(cell);
        }
        tbody.appendChild(row);
    }
    table.appendChild(tbody);
    document.querySelectorAll(".cantillation-marks-table").forEach(function (element) {
        element.appendChild(table.cloneNode(true));
    });
}

window.onload = function () {
    generateCantillationMarksTable()
}