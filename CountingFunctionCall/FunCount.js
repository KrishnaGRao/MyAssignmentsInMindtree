
function outerFunction(){
    let count = 0;
    return function(){
        count = ++count;
        return count;
    }
}

const functionCount = outerFunction();  

functionCount();        //1st time funcion call
functionCount();        //2nd time funcion call
functionCount();        //3rd time funcion call
functionCount();        //4th time funcion call       
functionCount();        //5th time funcion call
functionCount();        //6th time funcion call

//now when I will write this function call inside console.log(functionCount()) then it shoud display 7

console.log("We have called this function ",functionCount(), " times");
