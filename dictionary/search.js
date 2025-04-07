document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('searchForm').addEventListener('submit', function (event) {
        event.preventDefault();
        const searchElegian = document.getElementById('search_el').value;
        const searchJapanese = document.getElementById('search_ja').value;

        const searchResult = document.getElementById('searchResults');
        searchResult.innerHTML = "";

        // Elegianの結果を新しいp要素として追加
        const elegianResult = document.createElement('p');
        elegianResult.classList.add('elegia');
        elegianResult.textContent = "Qinilw Giqwci : " + searchElegian;
        searchResult.appendChild(elegianResult);

        // 日本語の結果を新しいp要素として追加
        const japaneseResult = document.createElement('p');
        japaneseResult.textContent = "日本語：" + searchJapanese;
        searchResult.appendChild(japaneseResult);
    });
});
