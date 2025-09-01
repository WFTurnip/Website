function convertCurrency() {
    let amount = parseFloat(document.getElementById('amount').value) || 0;
    let fromRate = parseFloat(document.getElementById('from').value);
    let toRate = parseFloat(document.getElementById('to').value);
    let toCurrency = document.getElementById('to').options[document.getElementById("to").selectedIndex].text;
    let amountInXi = amount * fromRate;
    let convertedAmount = amountInXi / toRate;
    let convertedAmountInYen = amountInXi / 100;
    document.getElementById('result').innerText = `換算結果：${convertedAmount.toLocaleString("ja-JP", { notation: "compact", compactDisplay: "long", currencySign: "standard" })}${toCurrency}`;
    document.getElementById('result_yen').innerText = `日本円に換算：${convertedAmountInYen.toLocaleString("ja-JP", { style: "currency", currency: "JPY" })}`;
}
