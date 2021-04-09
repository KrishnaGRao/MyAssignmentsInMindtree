
const EventEmmiter = require("events");

const ev = new EventEmmiter();

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
    let lo = min;
    let hi = Math.min(lo + 10, max);          

    let count = 0;

    let iid = setInterval(() => {

        for (let i = lo; i < hi; i++) {
            if (isPrime(i)) {
                count++;
                ev.emit('event1', { action: "Prime", min, max, index: count, value: i });
            }
        }

        lo = hi;
        hi = Math.min(lo + 10, max);
        if (lo >= max) {  // its time to finish
            clearInterval(iid);             
            ev.emit('event1',{ action: "DONE", min, max, primes: count })    //returning the result 
        }
    }, 1)
}


findPrime(2, 100)        
findPrime(100, 200)     
findPrime(50, 100)       

ev.on('event1', (a) => {
    console.log(a);
})