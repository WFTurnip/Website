const keyboard = document.getElementById("keyboard");
let shiftPressed = false;

document.addEventListener("keydown", e => {
    if (e.key === "Shift") {
        shiftPressed = true;
        keyboard.classList.add("shift-active");
    }
});

document.addEventListener("keyup", e => {
    if (e.key === "Shift") {
        shiftPressed = false;
        keyboard.classList.remove("shift-active");
    }
});

function changeFont(number) {

    const fontClasses = [
        "kodito",
        "lekuta",
        "lozegw",
        "makina",
        "piswpi",
        "polwgo",
        "silwki",
        "sulive",
        "xavani",
        "xesada",
        "xidili",
        "zosokw",
    ];

    const selectedClass = fontClasses[number];

    const elements = document.querySelectorAll("h3, button, textarea");
    elements.forEach(el => {
        fontClasses.forEach(c => el.classList.remove(c));
        el.classList.add(selectedClass);
    });

}