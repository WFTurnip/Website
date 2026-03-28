document.addEventListener("DOMContentLoaded", () => {
    const allDetails = document.querySelectorAll("details");
    allDetails.forEach(details => {
        const summary = details.querySelector("summary");
        const updateText = () => {
            if (details.open) {
                summary.textContent = "閉";
            } else {
                summary.textContent = "開";
            }
        };
        updateText();
        details.addEventListener("toggle", updateText);
    });
});