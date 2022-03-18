const button = document.querySelector("button")
const container = document.getElementById("container")
const input = document.querySelector("input")



container.addEventListener("click",function(eo){
 
if(eo.target.className== "icon-trash-o icon" ){
eo.target.parentElement.parentElement.remove()
}
  else if (eo.target.className=="icon-checkbox-unchecked icon"){
    
eo.target.classList.add("dn")
const heart = `  <span class="icon-checkbox-checked icon"></span>`;
eo.target.parentElement.parentElement.getElementsByClassName("para")[0].classList.add("finish")

eo.target.parentElement.innerHTML += heart


  }
  else if (eo.target.className =="icon-checkbox-checked icon"){
    eo.target.parentElement.parentElement.getElementsByClassName("para")[0].classList.remove("finish")
    eo.target.classList.add('dn')
//   const undone = `<span class="icon-checkbox-unchecked icon"></span> `
//   eo.target.parentElement.innerHTML+= undone
eo.target.parentElement.getElementsByClassName("icon-checkbox-unchecked")[0].classList.remove("dn")
  }  
  else if (eo.target.className=="icon-star icon"){
    eo.target.classList.add("orange")
    container.prepend(eo.target.parentElement)
  }
  else if (eo.target.className=="icon-star icon orange"){
    eo.target.classList.remove("orange")
    container.append(eo.target.parentElement)
  }
}

)





button.addEventListener("click", function(eo){
  
eo.preventDefault()
const task =` <div class="task  ">
<span class="icon-star icon"></span>

<p class="para">${input.value}</p>
<div>
<span class="icon-trash-o icon"></span>

<span class="icon-checkbox-unchecked icon"></span> 
</div>

</div>`
if (input.value==""){
    alert("you need to whrite something")
}
else{
    container.innerHTML+= task
    input.value=""
}



} 
)


