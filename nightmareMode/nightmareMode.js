var inputArray = [];
var signArray = [];

var input = function(e) {
  answer.innerHTML += e.target.innerHTML;
}

var reset = function(e) {
  answer.innerHTML = ""
  inputArray = [];
  signArray = [];
}

var remember = function(e) {
  inputArray.push(answer.innerHTML)
  signArray.push(e.target.innerHTML)
  answer.innerHTML = ""
}

var calculate = function(e) {
  inputArray.push(answer.innerHTML)
  total = Number(inputArray[0])
  for (var i = 0; i < inputArray.length; i++) {
    if (signArray[i] == "x") {
      total = (total * Number(inputArray[i+1]))
    } else if (signArray[i] == "/") {
      total = (total / Number(inputArray[i+1]))
    } else if (signArray[i] == "+") {
      total = (total + Number(inputArray[i+1]))
    } else if (signArray[i] == "-") {
      total = (total - Number(inputArray[i+1]))
    }
  }
  answer.innerHTML = total
  inputArray = [];
  signArray = [];
}

var answer = document.querySelector("#answer p");

var one = document.querySelector("#one p");
one.addEventListener('click', input);

var two = document.querySelector("#two p");
two.addEventListener('click', input)

var three = document.querySelector("#three p");
three.addEventListener('click', input)

var four = document.querySelector("#four p");
four.addEventListener('click', input)

var five = document.querySelector("#five p");
five.addEventListener('click', input)

var six = document.querySelector("#six p");
six.addEventListener('click', input)

var seven = document.querySelector("#seven p");
seven.addEventListener('click', input)

var eight = document.querySelector("#eight p");
eight.addEventListener('click', input)

var nine = document.querySelector("#nine p");
nine.addEventListener('click', input);

var zero = document.querySelector("#zero p");
zero.addEventListener('click', input);

var period = document.querySelector("#decimal p");
period.addEventListener('click', input);

var clear = document.querySelector("#clear p")
clear.addEventListener('click', reset);


var division = document.querySelector("#divide p");
division.addEventListener('click', remember);

var multiply = document.querySelector("#times p");
multiply.addEventListener('click', remember);

var subtract = document.querySelector("#minus p");
subtract.addEventListener('click', remember);

var addition = document.querySelector("#plus p");
addition.addEventListener('click', remember);

var equals = document.querySelector("#equals p");
equals.addEventListener('click', calculate)














