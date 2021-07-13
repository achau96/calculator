const add = (a,b) => {
  return (+a)+(+b);
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

const operate = (str,a,b) => {
return list[str](a,b);
}

const list = {
  "add" : add,
  "subtract": subtract,
  "multiply" : multiply,
  "divide": divide,
}

let prevHolder = 0;
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
holder += e.target.value;
screen.textContent = Number(holder);
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

  if(storage.length < 3){
  screen.textContent=Number(holder);
  holder = 0;
  if(e.target.value == 'equal'){
    storage = [];
  }
  }
  else {
    if(storage[1] == 'divide' && storage[2] == 0){
      holder = "Error Buddy."
    }
    else{  holder = operate(storage[1],storage[0],storage[2]);}
  screen.textContent = holder;
  storage = [];
  if(e.target.value != 'equal'){
    storage[0] = holder;
    storage[1] = e.target.value;
    holder = 0;
  }
}
console.log(storage);
}

numbers.forEach(number => number.addEventListener('click',pushToScreen))
clear.addEventListener('click', clearAll);
deleteOne.addEventListener('click',removeOne);
operators.forEach(operator => operator.addEventListener('click',preOperate));
