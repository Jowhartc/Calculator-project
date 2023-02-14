//display numbers  in text box
function addnum(num) {
  result.value += num;
}

//clear textbox
function clearBox() {
  result.value = "";
}
//evaluate
function evaluateNum() {
  // var exp=result.value//
  // var output=eval(exp)//
  // result.value=output
    result.value = eval(result.value);
}
//remove text one by one
function removeLastNum() {
  currentExp = result.value;
  result.value = currentExp.slice(0, -1);
}
