const toc = document.querySelector("#table-of-content nav");
toc.innerHTML = ""; // 既存の静的目次を消す

// 各章(section)を走査
document.querySelectorAll("main section[id^='chapter']").forEach(section => {
    const chapterTitle = section.querySelector("h2");
    if (!chapterTitle) return;

    // 章リンクを追加
    const h2link = document.createElement("h2");
    const a2 = document.createElement("a");
    a2.href = "#" + section.id;
    a2.textContent = chapterTitle.textContent;
    h2link.appendChild(a2);
    toc.appendChild(h2link);

    // 節(h3)を取得して追加
    section.querySelectorAll("h3[id]").forEach(sub => {
        const h3link = document.createElement("h3");
        const a3 = document.createElement("a");
        a3.href = "#" + sub.id;
        a3.textContent = sub.textContent || "(無題)";
        h3link.appendChild(a3);
        toc.appendChild(h3link);

        // 小節(h4)があれば、その節の直後に追加
        const nextElements = [];
        let next = sub.nextElementSibling;
        while (next && next.tagName.toLowerCase() === "h4") {
            nextElements.push(next);
            next = next.nextElementSibling;
        }

        nextElements.forEach(h4 => {
            const h4link = document.createElement("h4");
            const a4 = document.createElement("a");
            a4.href = "#" + h4.id;
            a4.textContent = h4.textContent || "(無題)";
            h4link.appendChild(a4);
            toc.appendChild(h4link);
        });
    });
});
// 目次が空なら非表示にする