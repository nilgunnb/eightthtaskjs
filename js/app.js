let droparea = document.querySelector("#DropArea")
let count = 4
let number = document.querySelector(".count")
droparea.ondragover = function(e){
    e.preventDefault()
    this.style.borderStyle = "dashed"
}

droparea.ondragleave = function(e){
    e.preventDefault()
    this.style.borderStyle = "solid"
}

let items = document.querySelectorAll(".box")

for(item of items){
    item.ondragstart = function(e){
        e.dataTransfer.setData("data",this.id)
    }
}

droparea.ondrop = function(e){
    let id = e.dataTransfer.getData("data")
    let box = document.getElementById(id)
    this.appendChild(box)
    count --
    number.innerHTML = count
}