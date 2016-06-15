number = ''
console.log("Hello")


var totaled = false

var string = function(e) {

  if (totaled == true) {
    clear(e)
    totaled = false
  } else {
      if (e.target.innerHTML == "x") {
        number += "*"
        document.querySelector(".input").innerHTML = number
      } 
      else if (e.target.innerHTML == "/") {
        number += "\xF7"
        document.querySelector(".input").innerHTML = number
      }
      else {
        number+= e.target.innerHTML
        document.querySelector(".input").innerHTML = number
    }
  }
}

var clear = function(e) {
  number = '';
  document.querySelector(".input").innerHTML = number;
}

var equate = function(e) {
  number = number.replace("\xF7", "/")
  total = eval(number)
  document.querySelector(".input").innerHTML = total
  totaled = true
}

var input = document.querySelectorAll(".number")

var events = function(input) {
  for (var i = 0; i < input.length; i++) {
    input[i].addEventListener('click', string)
  }
}
events(input)

var clearer = document.querySelector(".clear")
clearer.addEventListener('click', clear)

var equals = document.querySelector(".equals")
equals.addEventListener('click', equate)

