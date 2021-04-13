function* generateInfinite() {
    var i = 2;
    while (true) {
        yield i++;
    }
}

function FindPrimes(p) {

    if (isPrime(p))
        console.log("Yes , ", p, " is a Prime Number");
    else
        console.log("No, ", p, " is not a prime number");
}

function isPrime(p) {

    let gi = generateInfinite();

    let l = gi.next().value;
    while (l <= (p / 2)) {

        console.log(p, "  %  ", l);

        if (p % l === 0)
            return false

        l = gi.next().value;
    }
    return true;
}

FindPrimes(100);
FindPrimes(2);
FindPrimes(7);
FindPrimes(11);
FindPrimes(20);