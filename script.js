function operate(operator,a,b){
    let add = 0;		//add 1
    let subtract = 0; //subtract 2
    let multiple = 0; //multiply 3
    let divide = 0;	//divide 4
    let modulo = 0;	//modulo 5
    
    let number1 = a;
    let number2 = b;
    
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


  //----------CALCULATOR BUTTONS--------

  let key1 = document.querySelectorAll('.calcbtn');
  Array.from(key1);
  key1.forEach(button => {
    button.addEventListener('click', (e) => {
    let buttonPressed = e.target.classList.item(1);
    console.log(buttonPressed);
    //checktarget(buttonPressed);
    }
  )
  })


/*function checktarget(buttonPressed){
    let number = null;
    switch(buttonPressed)
      case 
}*/

