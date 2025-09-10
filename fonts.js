const text = "Cecolicasw Celemeniki Qoqunoquxw Celegicelw";
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
