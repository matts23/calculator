const displayDiv = document.querySelector('#current-equation');
const finalAnswer = document.querySelector('#answer');
displayDiv.textContent = 0;
finalAnswer.textContent = 0;



const add = function(...num){
  const answer = num.reduce((total, current) => {
      return total+current;
  })
  return answer;
};

const subtract = function(...num){
    const answer = num.reduce((total, current) => {
        return total-current;
    })
    return answer;
};

const multiply = function(...num){
    const answer = num.reduce((total, current) => {
        return total*current;
    })
    return answer;
};


const divide = function(...num){
    const answer = num.reduce((total, current) => {
        return total/current;
    })
    return answer;
};


const evaluateExpression = function(x){

    let screenText = x.split(' ');
    let operationOrder = ['×','÷','+','-'];
    let answer = 0;

    while(screenText.length>1){

        for(let j=0;j<operationOrder.length; j++){
           
            for(let i=0; i<screenText.length; i++){

                if(operationOrder[j]===screenText[i]){

                    if(screenText[i]==='×'){
                        answer = multiply(+screenText[i-1],+screenText[i+1]);
                        screenText.splice(i-1,3,answer);
                    }
                    else if(screenText[i]==='÷'){
                        answer = divide(+screenText[i-1],+screenText[i+1]);
                        screenText.splice(i-1,3,answer);
                    }
                    else if(screenText[i]==='+'){
                        answer = add(+screenText[i-1],+screenText[i+1]);
                        screenText.splice(i-1,3,answer);
                    }
                    else if(screenText[i]==='-'){
                        answer = subtract(+screenText[i-1],+screenText[i+1]);
                        screenText.splice(i-1,3,answer);
                    }
                }
            }
        }
    }
    //displayDiv.textContent = answer;
    finalAnswer.textContent=answer;
}


const equalBtn = document.querySelector('#equal-btn');

equalBtn.addEventListener('click', ()=>{
    evaluateExpression(displayDiv.textContent);
});


const numButtons = document.querySelectorAll('.number');

numButtons.forEach((button)=> {
    button.addEventListener('click', (e)=> {
        if(displayDiv.textContent==='0'){
            displayDiv.textContent = button.value;
            
        }
        else{
            displayDiv.textContent += button.value;
        }
    })
});


const operatorButtons = document.querySelectorAll('.operator');

operatorButtons.forEach((button)=> {
    button.addEventListener('click', (e)=> {
        let equation = displayDiv.textContent.split(' ');
        if(equation[equation.length-1].match(/[0-9]/)){
            displayDiv.textContent += ` ${button.value} `;
        }
        
        if(finalAnswer.textContent !== '0' && displayDiv.textContent !== '0'){
                displayDiv.textContent = finalAnswer.textContent += ` ${button.value} `;
                finalAnswer.textContent = '0';
        } 
    })
});


const clearBtn = document.querySelector('#clear-btn');

clearBtn.addEventListener('click', ()=>{
    displayDiv.textContent = '0';
    finalAnswer.textContent = '0';
});


