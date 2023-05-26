const input=document.getElementById("text");
function fetchAPI(word)
{
    const url="https://api.dictionaryapi.dev/api/v2/entries/en/${word}>"
    console.log(word)
}
input.addEventListener("keyup",(e)=>{
    // console.log(e.key);
    if(e.target.value && e.key==="Enter"){
        fetchAPI(e.target.value)
    }

});