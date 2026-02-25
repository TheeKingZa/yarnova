function toggleMenu() {
  const nav = document.getElementById("nav");
  nav.style.display = nav.style.display === "flex" ? "none" : "flex";
}

/* Collapsible Sections */
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".section-collapsible").forEach(title => {
    title.addEventListener("click", () => {
      const content = title.nextElementSibling;
      const expanded = content.style.display === "block";

      content.style.display = expanded ? "none" : "block";
      title.innerHTML = expanded
        ? title.innerHTML.replace("▲", "▼")
        : title.innerHTML.replace("▼", "▲");

      title.style.transform = "scale(1.05)";
      setTimeout(() => { title.style.transform = "scale(1)"; }, 150);
    });
  });
});