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