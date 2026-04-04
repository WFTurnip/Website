document.addEventListener("DOMContentLoaded", () => {
    const amountInput = document.getElementById("amount");
    const fromSelect = document.getElementById("from");
    const toSelect = document.getElementById("to");
    const result = document.getElementById("result");
    const resultYen = document.getElementById("result_yen");
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
    function formatCompact(num) {
        return num.toLocaleString("ja-JP", {
            notation: "compact",
            compactDisplay: "long"
        });
    }
    function formatYen(num) {
        return num.toLocaleString("ja-JP", {
            style: "currency",
            currency: "JPY"
        });
    }
    [amountInput, fromSelect, toSelect].forEach(element => {
        element.addEventListener("input", convertCurrency);
        element.addEventListener("change", convertCurrency);
    });
});