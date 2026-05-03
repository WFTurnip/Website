window.addEventListener("DOMContentLoaded", () => {
    const text = "Ceqerwlicusw Celemeniqikw Cinarwziqilw";
    let index = 0;
    const elements = document.querySelectorAll(".typing-text");
    /**
     * テキストを一文字ずつ表示するタイプエフェクトの関数
     * text変数の内容を、elementsで指定された要素に一文字ずつ表示していく
     */
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
});