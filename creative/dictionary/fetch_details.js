document.addEventListener("DOMContentLoaded", () => {
    const allDetails = document.querySelectorAll("details");
    /**
     * すべての<details>要素に対して、開閉状態に応じてsummaryのテキストを更新するイベントリスナーを追加する
     */
    allDetails.forEach(details => {
        const summary = details.querySelector("summary");
        /**
         * summaryのテキストを更新する関数
         */
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