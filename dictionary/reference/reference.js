document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", event => {
        const targetId = link.dataset.target;
        if (targetId) {
            const details = document.getElementById(targetId);
            if (details) {
                details.open = true;
            }
        }
    });
});