document.addEventListener("DOMContentLoaded", () => {
    const amountInput = document.getElementById("amount");
    const fromSelect = document.getElementById("from");
    const toSelect = document.getElementById("to");
    const result = document.getElementById("result");
    const resultYen = document.getElementById("result-yen");
    /**
     * 通貨を換算する
     */
    function convertCurrency() {
        const amount = parseFloat(amountInput.value) || 0;
        const fromRate = parseFloat(fromSelect.value);
        const toRate = parseFloat(toSelect.value);
        const toCurrency = toSelect.selectedOptions[0].text;
        const amountInSekt = amount * fromRate;
        const converted = amountInSekt / toRate;
        const yen = amountInSekt / 100;
        result.textContent = "換算結果：" + formatCompact(converted) + toCurrency;
        resultYen.textContent = "日本円に換算：" + formatYen(yen);
    }
    /**
     * 数値を標準形式でフォーマットする
     * @param {number} num - フォーマットする数値
     * @returns {string} - フォーマットされた文字列
     */
    function formatCompact(num) {
        return num.toLocaleString("ja-JP", {
            notation: "standard",
            compactDisplay: "long"
        });
    }
    /**
     * 数値を日本円形式でフォーマットする
     * @param {number} num - フォーマットする数値
     * @returns {string} - フォーマットされた文字列
     */
    function formatYen(num) {
        return num.toLocaleString("ja-JP", {
            style: "currency",
            currency: "JPY"
        });
    }
    /**
     * 入力フィールドとセレクトボックスの変更イベントに対して換算処理を実行する
     */
    [amountInput, fromSelect, toSelect].forEach(element => {
        element.addEventListener("input", convertCurrency);
        element.addEventListener("change", convertCurrency);
    });
});