// alert("hallo meine mutter");
// console.log()
 const togglebutton = document.getElementsByClassName("toggle-button")[0]
 const navbarlinks = document.getElementsByClassName("navbarlinks")[0]
 const ulia = document.getElementsByClassName("ulia")


 togglebutton.addEventListener("click", ()=>{
    navbarlinks.classList.toggle("active");
    ulia.classList.toggle("active");
 })


