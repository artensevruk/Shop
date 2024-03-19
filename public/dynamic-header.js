document.addEventListener("DOMContentLoaded", () => {
  let hederCenter = null;
  window.addEventListener("scroll", () => {
    const header_cont = document.querySelector(".header_container");
    const header = document.querySelector(".header");
    let scrollTop = window.scrollY;
   
     
    if(hederCenter == null){
      hederCenter = header.offsetHeight / 2
    }

   


    if (scrollTop >= hederCenter) {
      header_cont.classList.add("header_container2");
      
    } else {
      
      header_cont.classList.remove("header_container2");
      header.style.marginTop = `0px`;
    }
  });
});
const Batton = document.querySelector(".container_menu");
Batton.addEventListener("click", Click);
function Click() {
  document.querySelector(".leave").classList.toggle("activ");
}
