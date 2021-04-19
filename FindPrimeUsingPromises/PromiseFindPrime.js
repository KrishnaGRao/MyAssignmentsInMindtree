
const isPrime = (number) => {

    if (number < 2)
        return false;

    for (let i = 2; i <= number / 2; i++) {
        if (number % i === 0)
            return false;
    }
    return true;
}

const findPrime = (min, max) => {
    let newArr = [];
    let lo = min;
    let hi = Math.min(lo + 10, max);          

    return new Promise(function(resolve,reject){

        let iid = setInterval(() => {
            for (let i = lo; i < hi; i++) {
                if (isPrime(i)) {
                    newArr.push(i);                
                }
            }

            lo = hi;
            hi = Math.min(lo + 10, max);
            if (lo >= max) {  // its time to finish
                clearInterval(iid);
                resolve(newArr,count)             
                // ({ action: "DONE", min, max, primes: count })    //returning the result 
            }
        }, 1)
    })
}




findPrime(2, 100,)              //fun call 1st
.then((result,count)=>{
    console.log("This is for 2 to 100");
    console.log(result);
})
console.log("first call is 2 to 100");   

findPrime(100, 200)             //fun call 2nd
.then((result,count)=>{
    console.log("This is for 100 to 200");
    console.log(result);
})
console.log("second call is 100 to 200");

findPrime(50, 100)              //fun call 3rd
.then((result,count)=>{
    console.log("This is for 50 to 100");
    console.log(result);
})     
console.log("third call is 50 to 100");  
