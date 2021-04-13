const myMapFun = (arr, cb)=>{          //we are creating our own function which will take array and callback function
    const newMapArr = [];          //creating a new array for returning it with new values

    for(let i=0; i<arr.length; i++){    //itterating over the array
        const result = cb(arr[i]);      //passing the value of arr[i] to the callback function
                                        // and storing the return value of function to result variable
        newMapArr.push(result);         //adding the result value to the new Array 
    }
    return newMapArr;                   // and finally we are returning newMapArray
}


squareOfArray = myMapFun([22,11,0,1,8,13], (e) => {return(e+10)});  //We are passing an array and a function,
                                                                // this function will run for each elements of array
console.log(squareOfArray); 