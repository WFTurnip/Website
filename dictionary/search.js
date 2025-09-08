const topJsonPath = 'json_index/index.json';

async function fetchJson(path) {
    const response = await fetch(path);
    return await response.json();
}

async function search() {
    const search = document.getElementById('search').value.trim();
    const searchConsonants = document.getElementById('consonants').checked;
    const searchRoots = document.getElementById('roots').checked;
    const searchWords = document.getElementById('words').checked;

    const resultConsonants = document.getElementById('result_consonants');
    const resultRoots = document.getElementById('result_roots');
    const resultWords = document.getElementById('result_words');

    resultConsonants.innerText = '検索中...';
    resultRoots.innerText = '検索中...';
    resultWords.innerText = '検索中...';

    const topJson = await fetchJson(topJsonPath);

    let results = [];

    if (searchConsonants && topJson.index) {
        results.push(...topJson.index.filter(e => e.value.includes(inputKeyword)));
    }

    if (searchConsonants) {
        // 処理
    }
    if (searchRoots) {
        // 処理
    }
    if (searchWords) {
        // 処理
    }
}

document.getElementById('search').addEventListener('input', search);
document.getElementById('consonants').addEventListener('change', search);
document.getElementById('roots').addEventListener('change', search);
document.getElementById('words').addEventListener('change', search);