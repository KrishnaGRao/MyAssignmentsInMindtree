//This myFilterFunction takes two parameter one is array and 2nd is callback function
const myFilterFunction = (arr , cb)=>{
    let newArr = [];        //creation of new array for returning filterd value

    for (let i = 0; i < arr.length; i++) {     //iterating over main array
        const val = cb(arr[i]);     //passing the arr[i] value to the callback function 
                                    //& callback function will return true or false on condition
        if(val == true){
            newArr.push(arr[i])     //if cb returns true then we store the value to the new arr
        }        
    }
    return newArr;
}

const arr = [5,6,7,8,-9,-10,-11,-12,13,14,55,66,77,88] //creating a dynamic array

let result = myFilterFunction(arr, (value)=>{return value>=0})  //calling myFilterFunction by passing arr and a function

console.log(result);    