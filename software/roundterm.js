const text = "The quick brown fox jumps over the lazy dog.";
let index = 0;
const elements = document.querySelectorAll('.typing-text');

function typeEffect() {
    if (index < text.length) {
        elements.forEach(element => {
            element.textContent += text.charAt(index);
        });
        index++;
        setTimeout(typeEffect, 50);
    }
}

typeEffect();
