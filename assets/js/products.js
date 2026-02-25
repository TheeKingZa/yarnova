/* Load and Display Products From products.json */

document.addEventListener("DOMContentLoaded", () => {
  fetch("./assets/data/products.json")
    .then(r => r.json())
    .then(data => {
      renderProducts("core-products", data.core);
      renderProducts("premium-products", data.premium);
      renderProducts("elite-products", data.elite);
    })
    .catch(err => console.error("Error loading product data:", err));
});

function renderProducts(containerId, list) {
  const container = document.getElementById(containerId);
  container.innerHTML = list.map(product => `
    <div class="card">
      <img src="${product.image}" alt="${product.name}" class="product-img">
      <h3>${product.name}</h3>
      <p>${product.description}</p>
      <p>${product.price}</p>
    </div>
  `).join("");
}