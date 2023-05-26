const ratingELS=document.querySelectorAll(".rating");
let SelectedRating="";
const btn=document.getElementById("btn");
const containerEl=document.getElementById("container")
ratingELS.forEach((ratingEL)=>{
    ratingEL.addEventListener("click",(event)=>{
    
    removeActive();
    SelectedRating=event.target.innerText||event.target.parentNode.innerText;
    
    event.target.classList.add("active");
    event.target.parentNode.classList.add("active");
    
    

});
});
BroadcastChannel.addEventListener("click",()=>{
    if(SelectedRating!==""){
        containerEl.innerHTML='<strong>Thank you</strong>'
}
})

function removeActive(){
  ratingELS.forEach((ratingEl)=> {
  ratingEL.classList.remove("active");
    
  }); 

}
 



 