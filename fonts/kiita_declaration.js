function changeFont(number) {
    if (document.getElementById) {
        var object = document.getElementById("font");
        switch (number) {
            case 0: object.style.fontFamily = "kodito";
                object.style.fontFeatureSettings = "";
                break;
            case 1: object.style.fontFamily = "lekuta";
                object.style.fontFeatureSettings = "";
                break;
            case 2: object.style.fontFamily = "lozegw";
                object.style.fontFeatureSettings = "";
                break;
            case 3: object.style.fontFamily = "makina";
                object.style.fontFeatureSettings = "";
                break;
            case 4: object.style.fontFamily = "piswpi";
                object.style.fontFeatureSettings = "";
                break;
            case 5: object.style.fontFamily = "polwgo";
                object.style.fontFeatureSettings = "";
                break;
            case 6: object.style.fontFamily = "lozegw";
                object.style.fontFeatureSettings = "";
                break;
            case 7: object.style.fontFamily = "sulive";
                object.style.fontFeatureSettings = "'calt' 1";
                break;
            case 8: object.style.fontFamily = "xavani";
                object.style.fontFeatureSettings = "";
                break;
            case 9: object.style.fontFamily = "xesada";
                object.style.fontFeatureSettings = "";
                break;
            case 10: object.style.fontFamily = "xidili";
                object.style.fontFeatureSettings = "";
                break;
            case 11: object.style.fontFamily = "zosokw";
                object.style.fontFeatureSettings = "'calt' 1";
                break;
        }
    }
}

const controlChars = {
    0: "NUL", 1: "SOH", 2: "STX", 3: "ETX", 4: "EOT", 5: "ENQ", 6: "ACK", 7: "BEL",
    8: "BS", 9: "TAB", 10: "LF", 11: "VT", 12: "FF", 13: "CR", 14: "SO", 15: "SI",
    16: "DLE", 17: "DC1", 18: "DC2", 19: "DC3", 20: "DC4", 21: "NAK", 22: "SYN", 23: "ETB",
    24: "CAN", 25: "EM", 26: "SUB", 27: "ESC", 28: "FS", 29: "GS", 30: "RS", 31: "US",
    127: "DEL"
};
const table = document.createElement("table");
const caption = document.createElement("caption");
caption.textContent = "わからない人のためのASCII表";
caption.style.fontFamily = "monospace";
table.appendChild(caption);

const thead = document.createElement("thead");
const headerRow = document.createElement("tr");
const emptyCell = document.createElement("th");
headerRow.appendChild(emptyCell);
for (let col = 0; col < 16; col++) {
    const th = document.createElement("th");
    th.textContent = "X" + col.toString(16).toUpperCase();
    th.style.fontFamily = "monospace";
    headerRow.appendChild(th);
}
thead.appendChild(headerRow);
table.appendChild(thead);

const tbody = document.createElement("tbody");

for (let row = 0; row < 8; row++) {
    const tr = document.createElement("tr");

    const rowLabel = document.createElement("th");
    rowLabel.textContent = (row * 16).toString(16).toUpperCase().padStart(2, "0");
    rowLabel.style.fontFamily = "monospace"
    tr.appendChild(rowLabel);
    for (let col = 0; col < 16; col++) {
        const code = row * 16 + col;
        const td = document.createElement("td");
        if (controlChars[code]) {
            td.textContent = controlChars[code];
            td.classList.add("control-char");
            td.style.fontFamily = "monospace";
        } else {
            td.textContent = String.fromCharCode(code);
        }
        tr.appendChild(td);
    }
    tbody.appendChild(tr);
}
table.appendChild(tbody);

document.getElementById("table").appendChild(table);
