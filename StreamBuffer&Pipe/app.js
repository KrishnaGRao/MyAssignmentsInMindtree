const fs = require("fs");

const readmMe = fs.createReadStream("dummyReadableData.txt", "utf8");
const writeHere = fs.createWriteStream("WritableFile.txt");

//readmMe.pipe(writeHere);

readmMe.on('data', (data)=>{
    // console.log("===> This is new Chunck of Data ===> ")
    // console.log(data);
    // console.log("*************************************************************************************************");
    
    writeHere.write("===> This is new Chunck of Data ===> ");
    writeHere.write(data)
    writeHere.write("*************************************************************************************************");    
    writeHere.write("*************************************************************************************************");    

})