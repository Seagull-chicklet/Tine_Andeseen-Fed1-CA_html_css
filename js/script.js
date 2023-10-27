const url = "https://api.noroff.dev/api/v1/rainy-days/";

const resultsContainer = document.querySelector(".results");

async function getJackets(){
    try{
        const response = await fetch(url);
        const results = await response.json();
        console.log (results);
    }catch(error){
        console.log(error);
        resultsContainer.innerHTML = error 
    }
}
getJackets();
