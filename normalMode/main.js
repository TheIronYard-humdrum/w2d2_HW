var calculate = document.querySelector("#calculate-button");


calculate.addEventListener('click', function(e) {
  e.preventDefault();
  var inputOne = document.querySelector("#value-one");
  var inputTwo = document.querySelector("#value-two");
  
  inputOne = inputOne.value;
  inputTwo = inputTwo.value;

  if (typeof Number(inputOne) != "number" || typeof Number(inputTwo) != "number") {
    console.log("we can only calculate numbers here.");
  } else if (typeof Number(inputOne) == "number" && typeof Number(inputTwo) == "number") {
    inputOne = Number(inputOne);
    inputTwo = Number(inputTwo);
    sum = inputOne + inputTwo;
    answer.textContent = sum
  }
});