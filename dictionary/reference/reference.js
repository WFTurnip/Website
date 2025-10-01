document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function () {
        const targetId = link.dataset.target;
        if (targetId) {
            const details = document.getElementById(targetId);
            if (details) {
                details.open = true;
            }
        }
    });
});