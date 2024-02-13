import './style.css'


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div >
    <h1>Simple Calculator</h1>
    <div class="display-ac">
      <div id='display' class="display" > </div>
      <button id="ac" type="button">AC</button> 
    </div>
    <p class="note">NOTE: After each calculation press the AC for new one </p>
    <div class="card">
      <button id="one" type="button">1</button>
      <button id="two" type="button">2</button>
      <button id="three" type="button">3</button>
      <button id="plus" type="button">+</button>
      <button id="four" type="button">4</button>
      <button id="five" type="button">5</button>
      <button id="six" type="button">6</button>
      <button id="minus" type="button">-</button>
      <button id="seven" type="button">7</button>
      <button id="eight" type="button">8</button>
      <button id="nine" type="button">9</button>
      <button id="multi" type="button">*</button>
      <button id="zero" type="button">0</button>
      <button id="point" type="button">.</button>
      <button id="equal" type="button">=</button> 
      <button id="divi" type="button">/</button>
      
    </div>

  </div>
`
const outputDisplay = document.querySelector<HTMLInputElement>('#display')!;
const one = document.querySelector<HTMLButtonElement>('#one')!;
const two = document.querySelector<HTMLButtonElement>('#two')!;
const three = document.querySelector<HTMLButtonElement>('#three')!;
const four = document.querySelector<HTMLButtonElement>('#four')!;
const five = document.querySelector<HTMLButtonElement>('#five')!;
const six = document.querySelector<HTMLButtonElement>('#six')!;
const seven = document.querySelector<HTMLButtonElement>('#seven')!;
const eight = document.querySelector<HTMLButtonElement>('#eight')!;
const nine = document.querySelector<HTMLButtonElement>('#nine')!;
const zero = document.querySelector<HTMLButtonElement>('#zero')!;
const point = document.querySelector<HTMLButtonElement>('#point')!;
const plus = document.querySelector<HTMLButtonElement>('#plus')!;
const minus = document.querySelector<HTMLButtonElement>('#minus')!;
const multi = document.querySelector<HTMLButtonElement>('#multi')!;
const divi = document.querySelector<HTMLButtonElement>('#divi')!;
const equal = document.querySelector<HTMLButtonElement>('#equal')!;
const ac = document.querySelector<HTMLButtonElement>('#ac')!;
let num1: number = -123;
let num2: number = -123;
let oparetion: string = 'no';

function display(element: HTMLInputElement, value: string) {
  element.innerHTML += value;
}
function calculation() {
  let tamp = outputDisplay.innerHTML;
  if (oparetion == 'no') return;
  if (num1 !== -123) {
    if (tamp !== "" && oparetion !== 'no') {
      num2 = Number(tamp);
        
      switch (oparetion) {
        case '+': {
          let ans = num1 + num2;
          outputDisplay.innerHTML = String(ans);
          oparetion = 'no';
          num1 = ans;
          num2 = -123;
          break;
        }
        case '-': {
          let ans = num1 - num2;
          outputDisplay.innerHTML = String(ans);
          oparetion = 'no';
          num1 = ans;
          num2 = -123;
          break;
        }
        case '*': {
          let ans: number = (num1 * num2);
          outputDisplay.innerHTML = String(ans);
          oparetion = 'no';
          num1 = ans;
          num2 = -123;
          break;
        }
        case '/': {
          let ans: number = (num1 / num2);
          outputDisplay.innerHTML = String(ans);
          oparetion = 'no';
          num1 = ans;
          num2 = -123;
          break;
        }
      }
    }
    else return;
  }
  else {
    return;
  }
}


function addition() {
  if (num1 !== -123) {
    console.log(num1,oparetion, num2);
    calculation();
    oparetion = 'no';
    return;
  }
  if(outputDisplay.innerHTML === "") return;
  oparetion = '+';
  num1 = Number(outputDisplay.innerHTML);
  outputDisplay.innerHTML = "";
}

function subtraction() {
  if (num1 !== -123) {
    calculation();
    oparetion = 'no';
    return;
  }
  if(outputDisplay.innerHTML === "") return;
  oparetion = '-';
  num1 = Number(outputDisplay.innerHTML);
  outputDisplay.innerHTML = "";
}

function division() {
  if (num1 !== -123) {
    calculation();
    oparetion = 'no';
    return;
  }
  if(outputDisplay.innerHTML === "") return;
  oparetion = '/';
  num1 = Number(outputDisplay.innerHTML);
  outputDisplay.innerHTML = "";
}

function multiplication() {
  if (num1 !== -123) {
    calculation();
    oparetion = 'no';
    return;
  }
  if (outputDisplay.innerHTML === "") return;
  oparetion = '*';
  num1 = Number(outputDisplay.innerHTML);
  outputDisplay.innerHTML = "";
}


function allclear() {
  num1 = -123;
  num2 = -123;
  oparetion = 'no';
  outputDisplay.innerHTML = "";
}


one.addEventListener('click', () => display(outputDisplay, '1'));
two.addEventListener('click', () => display(outputDisplay, '2'));
three.addEventListener('click', () => display(outputDisplay, '3'));
four.addEventListener('click', () => display(outputDisplay, '4'));
five.addEventListener('click', () => display(outputDisplay, '5'));
six.addEventListener('click', () => display(outputDisplay, '6'));
seven.addEventListener('click', () => display(outputDisplay, '7'));
eight.addEventListener('click', () => display(outputDisplay, '8'));
nine.addEventListener('click', () => display(outputDisplay, '9'));
zero.addEventListener('click', () => display(outputDisplay, '0'));
point.addEventListener('click', () => display(outputDisplay, '.'));


equal.addEventListener('click', () => calculation());
plus.addEventListener('click', () => addition());
minus.addEventListener('click', () => subtraction());
multi.addEventListener('click', () => multiplication());
divi.addEventListener('click', () => division());
ac.addEventListener('click', () => allclear());


