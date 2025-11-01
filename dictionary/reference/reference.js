document.addEventListener("DOMContentLoaded", () => {
    const tocNav = document.querySelector("#table-of-content");
    if (!tocNav) return;

    tocNav.innerHTML = "";

    document.querySelectorAll("main section").forEach(section => {
        section.querySelectorAll("h2[id], h3[id], h4[id]").forEach(heading => {
            if (!heading.id) return;
            const tocHeading = document.createElement(heading.tagName.toLowerCase());
            const a = document.createElement("a");
            a.href = "#" + heading.id;
            a.textContent = heading.textContent.trim() || "(無題)";
            tocHeading.appendChild(a);
            tocNav.appendChild(tocHeading);
        });
    });

    tocNav.querySelectorAll("a").forEach(a => {
        a.addEventListener("click", e => {
            const target = document.querySelector(a.getAttribute("href"));
            if (!target) return;

            target.scrollIntoView({ behavior: "smooth", block: "center" });
            e.preventDefault();
        });
    });

    document.querySelectorAll("a[href^='#']").forEach(a => {
        a.addEventListener("click", e => {
            const target = document.querySelector(a.getAttribute("href"));
            if (!target) return;

            let parent = target.parentElement;
            while (parent) {
                if (parent.tagName.toLowerCase() === "details") {
                    // parent.open = !parent.open; // 開閉トグルにしたい場合
                    parent.open = true; // 常に開くだけならこちら
                }
                parent = parent.parentElement;
            }
        });
    });
});