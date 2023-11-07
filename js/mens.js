// const url = "https://api.noroff.dev/api/v1/rainy-days/";

// const resultsMens = document.querySelector(".product-card");

// async function getJackets() {
//   try {
//     const response = await fetch(url);
//     console.log(response);
//     if (!response.ok) throw new Error("not a valid response");
//     const results = await response.json();

//     console.log(results);

//     resultsMens.innerHTML = "";

//     const jackets = results;

//     jackets.forEach((resultsMens) => {
//       results.innerHTML = `<div class= "product-card">
//                              <h2>${results.title}</h2>
//                            <div class="product-image" style="image: url('${results.image}')"></div>
//                            <p>${results.description}</p>
//                            </div>`;
//     });

//     const products = [];
//     for (let i = 0; i < jackets.length; i++) {
//       if (jackets[i].tags.includes("mens")) {
//         products.push(jackets[i]);
//       }
//     }
//     console.log(products);
//   } catch (error) {
//     console.warn(err.message);
//     resultsMens.innerHTML = error;
//   }
// }

// getJackets();

const url =
  "https://api.noroff.dev/api/v1/rainy-days/298d6c5f-5445-4581-9ff5-be921f4ce37c";
const getJackets = function (url) {
  fetch(url)
    .then(function (response) {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("We got issues");
      }
    })
    .then(function (data) {
      renderData(data);
    })
    .catch(function () {
      throw new Error("Send this to the admin" + error.message);
    });
};

getJackets(url)
  .then(function (data) {
    console.log(data);
  })
  .catch(function (error) {
    console.error(error);
  });
function renderData(data_passed) {
  console.log({ data_passed });
  const productCard = document.querySelector(".product-card");
  productCard.innerHTML = `<div class= "product-content">
                             <figure class="product-image">
                             <img src="${data_passed.image}"></></figure>
                               <h2>${data_passed.title}</h2>
                               <h2>${data_passed.gender}</h2>
                             <p>${data_passed.description}</p>
                             <button class="size-buttons">${data_passed.sizes[0]}</button>
                             <button class="size-buttons">${data_passed.sizes[1]}</button>
                             <button class="size-buttons">${data_passed.sizes[2]}</button>
                             <button class="size-buttons">${data_passed.sizes[3]}</button>
                             <button class="size-buttons">${data_passed.sizes[4]}</button>
                             <button class="size-buttons">${data_passed.sizes[5]}</button>
                             <h3>${data_passed.price}</h3>
                             <a class= "button-add">Add to cart</a>
                             </div>`;
  data_passed.forEach((element) => {
    productCard.innerHTML += `${JSON.stringify(element)}<br></br>`;
  });
  const products = [];
  for (let i = 0; i < jackets.length; i++) {
    if (jackets[i].tags.includes("mens")) {
      products.push(jackets[i]);
    }
  }
}

/////////Shit show///////////

// const url = "https://api.noroff.dev/api/v1/rainy-days/";

// async function getJackets(url) {
//   return fetch(url)
//     .then(function (response) {
//       if (response.ok) {
//         return response.json();
//       } else {
//         throw new Error("We got issues");
//       }
//     })

//     .catch(function (error) {
//       throw new Error("Send this to the admin" + error.message);
//     });
// }

// getJackets(url)
//   .then(function (data) {
//     console.log(data);
//     renderData(data);
//   })

//   .catch(function (error) {
//     console.error(error);
//   });

// function renderData(data_passed) {
//   console.log({ data_passed });
//   const productCard = document.querySelector(".product-card");
//   productCard.innerHTML = "";
//   data_passed.forEach((data_passed) => {
//     productCard.innerHTML = `<div class= "product-content">
//                              <figure class="product-image">
//                              <img src="${data_passed.image}"></></figure>
//                                <h2>${data_passed.title}</h2>
//                                <h2>${data_passed.gender}</h2>
//                              <p>${data_passed.description}</p>
//                              <button class="size-buttons">${data_passed.sizes[0]}</button>
//                              <button class="size-buttons">${data_passed.sizes[1]}</button>
//                              <button class="size-buttons">${data_passed.sizes[2]}</button>
//                              <button class="size-buttons">${data_passed.sizes[3]}</button>
//                              <button class="size-buttons">${data_passed.sizes[4]}</button>
//                              <button class="size-buttons">${data_passed.sizes[5]}</button>
//                              <h3>${data_passed.price}</h3>
//                              <a class= "button-add">Add to cart</a>
//                              </div>`;
//   });
// }
