document.addEventListener("DOMContentLoaded", () => {
    const tocRoot = document.getElementById("toc-root");
    if (!tocRoot) return;
    const h2 = document.createElement("h2");
    h2.textContent = "目次";
    h2.className = "table-of-content";
    tocRoot.appendChild(h2);
    const headingNodes = Array.from(
        document.querySelectorAll("main h2, main h3, main h4, main h5, main h6")
    ).filter(h => !h.closest(".table-of-content"));
    if (headingNodes.length === 0) return;
    const baseLevel = Math.min(...headingNodes.map(h => parseInt(h.tagName[1])));
    const headings = headingNodes.map((h, i) => {
        if (!h.id) {
            const slug = h.textContent
                .trim()
                .toLowerCase()
                .replace(/[^\w]+/g, "-")
                .replace(/^-+|-+$/g, "");
            h.id = slug || `heading-${i}`;
        }
        return {
            id: h.id,
            text: h.textContent.trim(),
            level: parseInt(h.tagName[1]) - baseLevel + 1
        };
    });
    const nav = document.createElement("nav");
    const rootOl = document.createElement("ol");
    nav.appendChild(rootOl);
    let stack = [{level: 0, ol: rootOl}];
    headings.forEach(h => {
        while (h.level > stack[stack.length - 1].level + 1) {
            const parentOl = stack[stack.length - 1].ol;
            let lastLi = parentOl.lastElementChild;
            if (!lastLi) {
                lastLi = document.createElement("li");
                parentOl.appendChild(lastLi);
            }
            const newOl = document.createElement("ol");
            lastLi.appendChild(newOl);
            stack.push({
                level: stack[stack.length - 1].level + 1,
                ol: newOl
            });
        }
        while (h.level <= stack[stack.length - 1].level && stack.length > 1) {
            stack.pop();
        }
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.href = "#" + h.id;
        a.textContent = h.text;
        li.appendChild(a);
        stack[stack.length - 1].ol.appendChild(li);
    });
    tocRoot.appendChild(nav);
});
document.addEventListener("click", (e) => {
    const a = e.target.closest("a[href^='#']");
    if (!a) return;

    const href = a.getAttribute("href");

    // "#"単体は無視
    if (href === "#") return;

    const target = document.querySelector(href);
    if (!target) return;

    e.preventDefault();

    target.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

    // details展開
    let parent = target.parentElement;
    while (parent) {
        if (parent.tagName.toLowerCase() === "details") {
            parent.open = true;
        }
        parent = parent.parentElement;
    }
});