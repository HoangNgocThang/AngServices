var express = require("express");
var app = express();
app.listen(3000);

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

var mongoose = require("mongoose");
mongoose.connect("mongodb+srv://khoapham:bhZNDV8Kcbd7fUvn@cluster0-qah5q.mongodb.net/sinhvien?retryWrites=true&w=majority")
.catch(()=>{console.log("Error connect MongoDb");});

var SinhVien = require("./Models/SinhVien");

app.post("/add", function(req, res){
    var teo = new SinhVien({
        Ho: req.body.ho,
        Ten: req.body.ten
    });
    teo.save();
    console.log(teo);
    res.send("test");
});