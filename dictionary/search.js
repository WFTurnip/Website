// search.js
document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);

    // パラメータ取得（未指定の場合は空文字・OFF）
    const searchWord = params.get('search') || '';
    const consonants = params.get('consonants') === 'ON';
    const roots = params.get('roots') === 'ON';
    const words = params.get('words') === 'ON';

    // フォームに値を反映
    const searchInput = document.getElementById('search');
    if (searchInput) searchInput.value = searchWord;

    const consonantsBox = document.getElementById('consonants');
    if (consonantsBox) consonantsBox.checked = consonants;

    const rootsBox = document.getElementById('roots');
    if (rootsBox) rootsBox.checked = roots;

    const wordsBox = document.getElementById('words');
    if (wordsBox) wordsBox.checked = words;

    // 結果を表示
    const result = document.getElementById('result');
    if (result) {
        const paramObj = {
            search: searchWord,
            consonants: consonants ? 'ON' : 'OFF',
            roots: roots ? 'ON' : 'OFF',
            words: words ? 'ON' : 'OFF'
        };
        result.textContent = JSON.stringify(paramObj, null, 2);
    }
});
