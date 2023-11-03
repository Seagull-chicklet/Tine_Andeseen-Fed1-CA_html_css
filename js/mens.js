const url = "https://api.noroff.dev/api/v1/rainy-days/";

const resultsMens = document;

async function fetchJackets() {
  try {
    const response = await fetch(url);
    const results = await response.json();

    // console.log (results);

    const jackets = results;
    resultsMens.body.innerHTML = "";

    const products = [];
    for (let i = 0; i < jackets.length; i++) {
      if (jackets[i].tags.includes("mens")) {
        products.push(jackets[i]);
      }
    }

    console.log(products);
  } catch (error) {
    console.log(error);
    resultsMens.innerHTML = message("error", error);
  }
}
fetchJackets();
