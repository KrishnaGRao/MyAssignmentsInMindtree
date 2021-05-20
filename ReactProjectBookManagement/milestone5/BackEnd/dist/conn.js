"use strict";
var mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/newDB", {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(function () {
    console.log("DB Connection Successful");
}).catch(function (e) {
    console.log("No DB Connection & err is ", e);
});
