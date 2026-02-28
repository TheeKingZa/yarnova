/* Load & render crochet products from crochet_products.json */

document.addEventListener("DOMContentLoaded", () => {

  fetch("./assets/data/crochet_products.json")
    .then(res => res.json())
    .then(data => {
      renderCrochetProducts("crochet-wearables", data.wearables);
      renderCrochetProducts("crochet-decor", data.decor);
    })
    .catch(err => console.error("Error loading crochet products:", err));

});


function renderCrochetProducts(containerId, items) {

  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = items.map(item => {
    
    // fallback image
    const imageSrc = item.image && item.image.trim() !== ""
      ? item.image
      : "./assets/images/text_Logo_B.png";

    return `
      <div class="card">
        <img class="product-img" src="${imageSrc}" alt="${item.name}">
        <h3>${item.name}</h3>
        <p>${item.description}</p>
        <p><strong>${item.price}</strong></p>
      </div>
    `;
  }).join("");

}