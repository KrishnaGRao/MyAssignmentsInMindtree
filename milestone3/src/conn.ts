const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/newDB",{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("DB Connection Successful");
}).catch((e:Error)=>{
    console.log("No DB Connection & err is ",e);
})