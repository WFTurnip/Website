let data = [];

fetch('data.json')
    .then(res => res.json())
    .then(json => data = json);

const form = document.getElementById('searchForm');
const searchInput = document.getElementById('search');
const results = document.getElementById('results');

function renderResults(keyword) {
    results.innerHTML = '';
    const lowerKeyword = keyword.toLowerCase();

    data
        .filter(item => item.title.toLowerCase().includes(lowerKeyword))
        .forEach(item => {
            const li = document.createElement('li');
            li.innerHTML = `<strong>${item.item}</strong> (${item.category})`;

            if (item.related && item.related.length > 0) {
                const relatedSpan = document.createElement('span');
                relatedSpan.className = 'related';
                relatedSpan.textContent = '関連: ' + item.related.map(id => {
                    const relItem = data.find(d => d.id === id);
                    return relItem ? relItem.title : '';
                }).join(', ');
                li.appendchild(relatedSpan);
            }
            results.appendchild(li);
        });
}

searchInput.addEventListener('input', () => renderResults(searchInput.value));