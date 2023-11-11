const url = "https://api.noroff.dev/api/v1/rainy-days/";

const resultsWomens = document.querySelector(".product-card");

async function fetch_jackets() {
  try {
    const response = await fetch(url);
    const results = await response.json();

    const jackets = results;

    const products = [];
    for (let i = 0; i < jackets.length; i++) {
      if (jackets[i].tags.includes("womens")) {
        products.push(jackets[i]);
      }
    }
    console.log(products);
  } catch (error) {
    console.log(error);

    resultsWomens.innerHTML = message("error", error);
  }
}
fetch_jackets(url);
