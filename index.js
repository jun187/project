const  btnEL=document.getElementById("btn");
const joke=document.getElementById("pid")
const apikey="ynJl5viLxyYogmPnBMWZq3Tb41jWZl7XtVkxwwcP";
const option={
    method: "GET" ,
    headers: { 'X-Api-Key': apikey},

};

const apiurl="https://api.api-ninjas.com/v1/dadjokes?limit=1";
async function getjoke()
{    joke.innerText= "updating..";

 
    const response= await fetch(apiurl,option);
    const data= await response.json();
   joke.innerText= data[0] .joke;
   
  
}

btnEL.addEventListener("click",getjoke);
