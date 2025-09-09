const form = document.getElementById('searchForm');
const result = document.getElementById('result');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const formData = new FormData(form);
    const paramaters = {};

    formData.forEach((value, key) => {
        paramaters[key] = value;
    });

    result.textContent = JSON.stringify(paramaters, null, 2);
});
