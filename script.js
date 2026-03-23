let display = document.getElementById("display");

let firstNumber = "";
let secondNumber = "";
let operator = "";

//number buttons
document.querySelectorAll(".button_container button").forEach((btn) => {
  btn.addEventListener("click", () => {
    let value = btn.innerText;

    //for special characters

    if (
      btn.id === "clear" ||
      btn.id === "delete" ||
      btn.id === "equals" ||
      btn.dataset.op
    )
      return;

    if (operator === "") {
      firstNumber += value;
      display.value = firstNumber;
    } else {
      secondNumber += value;
      display.value = secondNumber;
    }
    display.value = firstNumber + " " + operator + " " + secondNumber;
  });
});

// operator buttons

document.querySelectorAll(".operator").forEach((btn) => {
  btn.addEventListener("click", () => {
    operator = btn.dataset.op;
    display.value = firstNumber + " " + operator + " " + secondNumber;
    if (operator === "" && btn.dataset.op) return;
  });
});

//equals buttons

document.getElementById("equals").addEventListener("click", () => {
  let result = 0;
  if (firstNumber === "" || secondNumber === "" || operator === "") {
    return;
  }

  let num1 = parseFloat(firstNumber);
  let num2 = parseFloat(secondNumber);

  if (operator === "+") result = num1 + num2;
  else if (operator === "-") result = num1 - num2;
  else if (operator === "*") result = num1 * num2;
  else if (operator === "/") result = num1 / num2;
  else if (operator === "%") result = num1 % num2;

  if (result === undefined) {
    display.value = "Error";
    return;
  }

  display.value = "Ans = " + " " + result;

  //reset
  firstNumber = result.toString();
  secondNumber = "";
  operator = "";
});

// clear button
document.getElementById("clear").addEventListener("click", () => {
  display.value = "";
  firstNumber = "";
  secondNumber = "";
  operator = "";
});

//delete button
document.getElementById("delete").addEventListener("click", () => {
  if (operator === "") {
    firstNumber = firstNumber.slice(0, -1);
    display.value = firstNumber;
  } else {
    secondNumber = secondNumber.slice(0, -1);
    display.value = secondNumber;
  }
});
