var btnVamos = document.querySelector("#vamos")
var btnpredizer = document.querySelector("#predizer")
var body = document.querySelector("body")

btnVamos.addEventListener("click", function (){
    body.className = "vamos-js";
})
btnpredizer.addEventListener("click", function (){
    body.className = "predizer-js";
})