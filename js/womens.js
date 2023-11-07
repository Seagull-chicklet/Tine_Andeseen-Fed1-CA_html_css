const url = "https://api.noroff.dev/api/v1/rainy-days/";

const productCard = document.querySelector(".product-card");

async function fetchJackets() {
  try {
    const response = await fetch(url);
    const results = await response.json();

    // console.log(results);

    const jackets = results;
    productCard.innerHTML = "";

    const products = [];
    for (let i = 0; i < jackets.length; i++) {
      if (jackets[i].tags.includes("womens")) {
        products.push(jackets[i]);
      }
    }
    console.log(products);
  } catch (error) {
    console.log(error);

    productCard.innerHTML = message("error", error);
  }
}
fetchJackets(url);
