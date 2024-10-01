const icons = document.querySelectorAll(".heading button");
icons.forEach((item)=>{
    item.addEventListener("click",(e)=>{
    const paragraph = e.target.parentElement.parentElement.nextElementSibling;
        if(e.target.classList.contains("fa-minus")){
        e.target.classList.remove("fa-minus")
        e.target.classList.add("fa-plus")  
        e.target.parentElement.classList.add("inactive")
        paragraph.style.display="none"
        } else{
            e.target.classList.add("fa-minus")
            e.target.classList.remove("fa-plus")  
            e.target.parentElement.classList.remove("inactive") 
            paragraph.style.display="block"
        }
    })
})