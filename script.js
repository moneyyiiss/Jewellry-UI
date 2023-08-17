let close =document.getElementById("close")
let open =document.getElementById("open")
let navbar=document.getElementById("navshow")

close.addEventListener("click",()=>{navbar.style.visibility="hidden",
open.style.visibility="visible"
})
open.addEventListener("click",()=>{navbar.style.visibility="visible",

open.style.visibility="hidden"})
