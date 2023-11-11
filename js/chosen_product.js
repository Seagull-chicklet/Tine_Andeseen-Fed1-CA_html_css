const url = document.location;
console.log({ url });

const search = url.search;

const params = new URLSearchParams(search);
// console.log(params.get("id"));
async function fetchOneProduct(id) {
  //   console.log({ id });
  if (!id) throw new Error("OOps, id is undefined");
  const url = `https://api.noroff.dev/api/v1/rainy-days/${id}`;
  try {
    const response = await fetch(url);
    // console.log({ response });

    if (response.ok) {
      const data = await response.json();
      // console.log({ data });
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
