document.addEventListener("DOMContentLoaded", () => {
    const tocRoot = document.getElementById("toc-root");
    if (!tocRoot) return;
    const headings = Array.from(document.querySelectorAll("main h2, main h3, main h4, main h5, main h6"))
        .map(h => ({
            id: h.id || "",
            text: h.textContent.trim(),
            level: parseInt(h.tagName.substring(1))
        }));
    if (headings.length === 0) return;
    const nav = document.createElement("nav");
    const rootUl = document.createElement("ul");
    nav.appendChild(rootUl);
    let stack = [{level: headings[0].level - 1, ul: rootUl}];
    headings.forEach(h => {
        while (h.level > stack[stack.length - 1].level + 1) {
            const lastLi = stack[stack.length - 1].ul.lastElementChild || document.createElement("li");
            if (!stack[stack.length - 1].ul.lastElementChild) {
                stack[stack.length - 1].ul.appendChild(lastLi);
            }
            const newUl = document.createElement("ul");
            lastLi.appendChild(newUl);
            stack.push({level: stack[stack.length - 1].level + 1, ul: newUl});
        }
        while (h.level <= stack[stack.length - 1].level && stack.length > 1) {
            stack.pop();
        }
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.href = "#" + h.id;
        a.textContent = h.text;
        li.appendChild(a);
        stack[stack.length - 1].ul.appendChild(li);
    });
    tocRoot.appendChild(nav);
});
document.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", (e) => {
        const target = document.querySelector(a.getAttribute("href"));
        if (!target) return;
        target.scrollIntoView({behavior: "smooth", block: "center"});
        e.preventDefault();
    });
});
document.querySelectorAll("a[href^='#']").forEach(a => {
    a.addEventListener("click", () => {
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