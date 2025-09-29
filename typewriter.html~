const textarea = document.querySelector("textarea");

const keys = document.querySelectorAll(".key");

let shiftActive = false;

keys.forEach(key => {
    key.addEventListener("click", () => {

        if (key.dataset.key === "shift") {
            shiftActive = !shiftActive;

            document.querySelectorAll(".key").forEach(k => {
                k.classList.toggle("shift-active", shiftActive);
            });
            return;
        }

        let char;
        if (shiftActive && key.dataset.shift) {
            char = key.dataset.shift;
        } else {
            char = key.dataset.normal;
        }

        textarea.value += char ?? '';
    });
});

function changeFont(number) {

    const fontClasses = ["kodito", "lekuta", "lozegw", "makina", "piswpi", "polwgo", "silwki", "sulive", "xavani", "xesada", "xidili", "zosokw"];

    const selectedClass = fontClasses[number];

    const elements = document.querySelectorAll("h3, button, textarea");
    elements.forEach(el => {
        fontClasses.forEach(c => el.classList.remove(c));
        el.classList.add(selectedClass);
    });

}