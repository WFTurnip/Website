const text = "Cecolicasw Celemeniki Qoqunoquxw Celegicelw";
let index = 0;
const elements = document.querySelectorAll('.typing-text');
// タイピングエフェクトを適用する要素をすべて取得

function typeEffect() {
    if (index < text.length) {
        elements.forEach(element => {
            element.textContent += text.charAt(index);
            // 各要素に対して文字を追加
        });
        index++;
        setTimeout(typeEffect, 50);
        // 50msで次の文字を表示
    }
}

typeEffect();
// 最初の呼び出し
