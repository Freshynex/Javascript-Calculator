function operate(operator,a,b){
    let add = 0;		//add 1
    let subtract = 0; //subtract 2
    let multiple = 0; //multiply 3
    let divide = 0;	//divide 4
    let modulo = 0;	//modulo 5
    

    
    if(operator === undefined){ //
       add = 0;		
      subtract = 0; 	 
      multiple = 0;	
      divide = 0;		 
      modulo = 0;		
      
    }
    if(operator === 1){
      add = 1;		 
      subtract = 0; 	
      divide = 0;		 
      modulo = 0;		
      
      let result = add(number1,number2);
      return result;
    }
      
    
    
    if(operator === 2){
      add = 0;		 
      subtract = 1; 	
      multiple = 0;	
      divide = 0;		
      modulo = 0;		
      
    }
    
    if(operator === 3){
      add = 0;		 
      subtract = 0; 	 
      multiple = 1;
      divide = 0;	
      modulo = 0;		
      
    }
    if(operator === 4){
      add = 0;		
      subtract = 0; 	
      multiple = 0;
      divide = 1;		
      modulo = 0;		
      
    }
    if(operator === 5){
      add = 0;		
      subtract = 0; 	
      multiple = 0;	 
      divide = 0;	
      modulo = 1;		 
      
    }
}

  function add(a,b){
    add = 0;		 
    subtract = 0; 	 
    multiple = 0;	
    divide = 0;		
    modulo = 0;		 
    
    
    let result = a && b ? a+b : null ;
    return result;
  
  }
  let operation = '';
  let number1 = null;
  let number2 = null;

  //----------CALCULATOR BUTTONS--------
  let displayValue;
  let calcDisplay = document.querySelector('.displayfield');
  //calcDisplay.textContent = displayValue;
  let key1 = document.querySelectorAll('.calcbtn');
  Array.from(key1);
  key1.forEach(button => {
    button.addEventListener('click', (e) => {
    let buttonPressed = e.target.classList.item(1);
    let buttonPressedValue = parseInt(e.target.textContent);
    //console.log(buttonPressedValue + 'value of button');
    console.log(buttonPressed);
    if(!isNaN(buttonPressedValue)){
      if(number2 !== null){
        number1 = number2;
        number2 = null;
      }    
      calcDisplay.textContent += buttonPressedValue;
      displayValue = parseInt(calcDisplay.textContent);
      console.log(displayValue);
      console.log(typeof displayValue); 
      
    }
  
    else{
      
      switch(buttonPressed){
        case '+btn':
         if(number1 === null){
          operation = "add";
          number1 = displayValue;
          displayValue = null;
          calcDisplay.textContent = '';
          console.log(number1);
         }
         else{
          operation = "add";
          displayValue = null;
          calcDisplay.textContent = '';
         }
         break;
         case 'eqlbtn':
          console.log(number1);
          if(number1 !== null){
            number2 = displayValue;
            result = number1 + number2;
            number1 = result;
            
            calcDisplay.textContent = result;
            number2 = null;
            result = null;
          }
        break;
         
         

      }
    }
    //checktarget(buttonPressed);
    }
  )
  })


/*function checktarget(buttonPressed){
    let number = null;
    switch(buttonPressed)
      case 
}*/

