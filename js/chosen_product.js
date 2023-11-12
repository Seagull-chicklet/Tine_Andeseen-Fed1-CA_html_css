const url = document.location;
console.log({ url });

const search = url.search;

const params = new URLSearchParams(search);

async function fetchOneProduct(id) {
  if (!id) throw new Error("OOps, id is undefined");
  const url = `https://api.noroff.dev/api/v1/rainy-days/${id}`;
  try {
    const response = await fetch(url);

    if (response.ok) {
      const data = await response.json();

      return data;
    } else {
      throw new Error("We got issues, unexpected response");
    }
  } catch (error) {
    console.log(error);
  }
}

async function renderOneProduct() {
  const id = params.get("id");
  const oneData = await fetchOneProduct(id);
  console.log({ oneData });
  const productDisplay = document.getElementById("cards");
  productDisplay.innerHTML = JSON.stringify(oneData);
}

renderOneProduct();
