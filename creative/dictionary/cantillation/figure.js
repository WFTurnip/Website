function generateCantillationPronunciationFigure() {
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
    caption.textContent = "朗唱発音図";
    figure.appendChild(caption);
    document.getElementById("cantillation-pronunciation-figure").appendChild(figure);
}
function generateCantillationMarksFigure() {
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
    caption.textContent = "朗唱記号図";
    figure.appendChild(caption);
    document.getElementById("cantillation-marks-figure").appendChild(figure);
}
window.addEventListener("load", function () {
    generateCantillationPronunciationFigure();
    generateCantillationMarksFigure();
});