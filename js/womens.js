const url = "https://api.noroff.dev/api/v1/rainy-days/";

const resultsWomens = document;

async function fetchJackets() {
  try {
    const response = await fetch(url);
    const results = await response.json();

    // console.log (results);

    const jackets = results;
    resultsWomens.body.innerHTML = "";

    const products = [];
    for (let i = 0; i < jackets.length; i++) {
      if (jackets[i].tags.includes("womens")) {
        products.push(jackets[i]);
      }
    }
    function renderJackets(jacket) {
      const section = document.querySelector(".lightweight-wrapping");

      const jacketDiv = document.createElement("div");

      const jacketTitle = document.createElement("h2");
      jacketTitle.innerText = jackets.title;
      const jacketContent = document.createElement("p");

      jacketDiv.appendChild(jacketTitle);

      section.appendChild(jacketDiv);
    }

    async function renderJackets() {
      const jackets = await getJackets();

      jackets.forEach((jacket) => renderJackets(jacket));
    }
    renderJackets();

    console.log(products);
  } catch (error) {
    console.log(error);
    resultsWomens.innerHTML = message("error", error);
  }
}
fetchJackets();
