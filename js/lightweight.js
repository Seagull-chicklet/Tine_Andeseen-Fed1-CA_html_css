const url = "https://api.noroff.dev/api/v1/rainy-days/";

const resultsLightweight = document;

async function fetchJackets(){
    try{
        const response = await fetch(url);
        const results = await response.json();

        // console.log (results);

        const jackets = results;
        resultsLightweight.body.innerHTML = "";

         const products =[];
        for (let i = 0; i < jackets.length; i++){

            if (jackets[i].tags.includes('womens')){
                
                products.push(jackets[i]);
                
            };
        

        //     resultsLightweight.innerHTML += `<div class="product-content">
        //                                   <h2>${gender} + ${ jacketTitle}>/h2
        //                                   </div>`;
        }
        console.log(products);
    }catch(error){
        console.log(error);
        resultsLightweight.innerHTML = message("error",error  )  
    }
}
fetchJackets();

for(let i = 0; i <products.description.length; i++ ){
    console.log(products.description[i]);
}