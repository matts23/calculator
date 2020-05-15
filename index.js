const displayDiv = document.querySelector('#display');
displayDiv.textContent = 0;


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

/*
const operate = function(callback, a, b){
    return callback(a,b);
}
*/

const parseDisplay = function(x){

    let problem = x.split(' ');
    let currentProblem = [...problem]
    let answer = 0;

    while(problem.length>1){  
        for(let i=0; i<problem.length;i++){

            if(problem[i]==='×'){
                answer = multiply(+problem[i-1],+problem[i+1]);
                problem.splice(i-1,3,answer);
                console.log(problem);
                //displayDiv.textContent = answer;
            }
            else if(problem[i]==='/'){
                answer = divide(+problem[i-1],+problem[i+1]);
                problem.splice(i-1,3,answer);
                //displayDiv.textContent = answer;
            }
            else if(problem[i]==='+'){
                answer = add(+problem[i-1],+problem[i+1]);
                problem.splice(i-1,3,answer);
                //displayDiv.textContent = answer;
            }
            else if(problem[i]==='-'){
                answer = subtract(+problem[i-1],+problem[i+1]);
                problem.splice(i-1,3,answer);
                //displayDiv.textContent = answer;
            }
        }
    }
    displayDiv.textContent = answer;
}

//parseDisplay(displayDiv.textContent);

const equalBtn = document.querySelector('#equal-btn');

equalBtn.addEventListener('click', ()=>{
    console.log(parseDisplay(displayDiv.textContent));
})


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
    })
});


const clearBtn = document.querySelector('#clear-btn');

clearBtn.addEventListener('click', ()=>{
    displayDiv.textContent = '0';
})


