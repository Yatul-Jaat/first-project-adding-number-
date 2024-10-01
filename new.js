let count=document.getElementById("display-0")
let hello=0
let save=document.getElementById("saved-output")
function adding(){
    hello+=1
    count.innerText=hello
}

function saving (){
    save.innerText+= hello + "-"
    hello=0
    count.innerText=hello
}