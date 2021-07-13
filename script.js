const add = (a,b) => {
  return a+b;
}

const subtract = (a,b) => {
  return a-b;
}

const multiply = (a,b) => {
  return a*b;
}

const divide = (a,b) => {
  return a/b;
}

const operate = (func,a,b) => {
return func(a,b);
}

let holder = 0;
let storage = [];
const numbers = document.querySelectorAll('#btn.num');
const operators = document.querySelectorAll('.op');
const screen = document.querySelector('.screen');
const clear = document.querySelector('.clear');
const deleteOne = document.querySelector('.delete');
const equal = document.querySelector('.equal');

const pushToScreen = (e) => {
if(screen.textContent == '0'){
  screen.textContent = "";
}
screen.textContent += e.target.value;
holder = screen.textContent;
}

const clearAll = (e) => {
  screen.textContent='0';
  storage = [];
  holder = 0;
}

const removeOne = () => {
  let old = screen.textContent;
  let newText = old.slice(0,-1); //equivalent to slice (0,newtext.length -1)
  if(old.length == 1){
    screen.textContent = '0';
  }
  else{
  screen.textContent = newText;
  }
}

const preOperate = (e) => {
  storage.push(holder);
  storage.push(e.target.value);
  screen.textContent='0';
  console.log(storage);
}

numbers.forEach(number => number.addEventListener('click',pushToScreen))
clear.addEventListener('click', clearAll);
deleteOne.addEventListener('click',removeOne);
operators.forEach(operator => operator.addEventListener('click',preOperate));
