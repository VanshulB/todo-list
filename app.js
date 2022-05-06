const express = require("express");
const bodyParser = require("body-parser");


const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    // res.send("<h1>Hello world</h1>");
    var today = new Date();
    var currentDay = today.getDay();

    var options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    }

    var day = today.toLocaleDateString("en-US", options);
    // console.log(day);
    
    // res.send("Hello World");
    res.render("list", {kindOfDay: day});

});

app.post("/", function(req, res){
    var ans = req.body.newItem;
    console.log(ans);
});


app.listen(3000, function (){
    console.log("Server is running on port 3000");
});

