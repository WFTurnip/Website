document.addEventListener("DOMContentLoaded", () => {
    const tocRoot = document.querySelector("#toc-root");
    if (!tocRoot) return;

    const details = document.createElement("details");
    details.open = true;

    const summary = document.createElement("summary");
    const h2 = document.createElement("h2");
    h2.className = "table-of-content";
    h2.textContent = "目次"
    summary.appendChild(h2);

    const nav = document.createElement("nav");
    nav.id = "table-of-content";

    details.appendChild(summary);
    details.appendChild(nav);
    tocRoot.appendChild(details);

    nav.innerHTML = "";

    document.querySelectorAll("main section").forEach(section => {
        section.querySelectorAll("h2[id], h3[id], h4[id], h5[id], h6[id]").forEach(heading => {
            if (!heading.id) return;
            const tocHeading = document.createElement(heading.tagName.toLowerCase());
            const a = document.createElement("a");
            a.href = "#" + heading.id;
            a.textContent = heading.textContent.trim() || "名称未設定";
            tocHeading.appendChild(a);
            nav.appendChild(tocHeading);
        });
    });

    nav.querySelectorAll("a").forEach(a => {
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
                    parent.open = true;
                }
                parent = parent.parentElement;
            }
        });
    });
});
