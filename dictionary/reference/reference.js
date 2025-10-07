const tocNav = document.querySelector("#table-of-content nav");
tocNav.innerHTML = "";

// main 内の各 section を順に走査
document.querySelectorAll("main section").forEach(section => {
    // section 内の h2/h3/h4 を DOM順に取得
    section.querySelectorAll("h2[id], h3[id], h4[id]").forEach(heading => {
        if (!heading.id) return; // id が無い場合はスキップ
        const tocHeading = document.createElement(heading.tagName.toLowerCase());
        const a = document.createElement("a");
        a.href = "#" + heading.id;
        a.textContent = heading.textContent || "(無題)";
        tocHeading.appendChild(a);
        tocNav.appendChild(tocHeading);
    });
});

tocNav.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", e => {
        const target = document.querySelector(a.getAttribute("href"));
        if (!target) return;

        let parent = target.parentElement;
        while (parent) {
            if (parent.tagName.toLowerCase() === "details") {
                parent.open = true
            }
            parent = parent.parentElement;
        }

        target.scrollIntoView({ behavior: "smooth", block: "center" });
        e.preventDefault();
    });
});
