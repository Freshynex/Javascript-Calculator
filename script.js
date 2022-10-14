  let operation = '';
  let number1 = null;
  let number2 = null;
  let input = '';
  let result = 0;
  //----------CALCULATOR BUTTONS--------

  //NUMBERS
  let numberButtons = document.querySelectorAll('.num');

  numberButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      input += e.target.textContent;
      console.log(input);
    })
  })

  //OPERATORS
  let operatorButtons = document.querySelectorAll('.op');

  operatorButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      if(number1 === null){
      number1 = parseInt(input);
      input = '';
      }
      
      input = '';

      if(e.target.classList.contains('+btn')){
        operation = 'add';
      }
      if(e.target.classList.contains('-btn')){
        operation = 'subtract';
      }
      if(e.target.classList.contains('multbtn')){
        operation = 'multiply';
      }
      if(e.target.classList.contains('divbtn')){
        operation = 'divide';
      }
      console.log(operation);
    })
  })

  let calculateButton = document.querySelector('.eqlbtn');
  calculateButton.addEventListener('click', calculate);

  function calculate(a,b,op){
    a = parseInt(number1);
    b = parseInt(input);
    if(operation === 'add'){
      console.log(a+b);
      number1 = a+b;
      return a+b;

    }
    else if(operation === 'subtract'){
      console.log(a-b);
      number1 = a-b;
      return a-b;
    }
    else if(operation === 'multiply'){
      console.log(a*b);
      number1 = a*b;
      return a*b;
    }
    else if(operation === 'divide'){
      console.log(a/b);
      number1 = a/b;
      return a/b;
    }
}

  

