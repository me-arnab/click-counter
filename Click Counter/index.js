var i = 0
var h = document.querySelector("#h")
var click = document.querySelector("#b1")
click.addEventListener('click', function(){
    ++i;
    h.textContent = "You clicked me " + i + " times"
})

var reset = document.querySelector("#b2")
reset.addEventListener('click', function(){
    i=0
    h.textContent = "You clicked me " + i + " times"
})