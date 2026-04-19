window.addEventListener("DOMContentLoaded", () => {
    const main = document.getElementsByTagName("main")[0];
    document.querySelector("form").addEventListener("click", (e) => {
        if (e.target.matches("input[type='button']")) {
            main.className = e.target.value;
        }
    });
});