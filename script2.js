
const circular_slider=document.querySelector(".wrapper"),
 slides=document.querySelectorAll(".slides"),
 images=document.querySelectorAll(".slides img")
 item_name=document.getElementById("name"),
 item=document.getElementById("itemid")
const images_name=["","Pave","Hidden Halo","Vintage & Antique","Pave"]
const item_description=[
    {name:"$2500",desc:"very costly"},
    {name:"$3500",desc:"very costly"},
    {name:"$4500",desc:"very lorem"},
    {name:"$2500",desc:"very clorem"},
    {name:"$3500",desc:"very cheap"}
]
slides.forEach((slide,i)=>{
    slide.onclick=()=>{
     item.firstElementChild.innerHTML=item_description[i].name;
    // item.lastElementClid.innerHTML=item_description[i].desc
    
    item_name.innerHTML=images_name[i]
    circular_slider.style.transform=`rotateZ(-${360/5*(i+2)}deg)` 
   images.forEach((img,i)=>{
    img.style.setProperty('--img-no',2)
    img.classList.remove("active")

   })
  slide.querySelector(img).classList.add("active")


}
})
