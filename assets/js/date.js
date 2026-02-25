/* Automatically update the year in the footer */
document.addEventListener("DOMContentLoaded", () => {
  const year = new Date().getFullYear();
  document.querySelectorAll(".current-year").forEach(el => {
    el.textContent = year;
  });
});