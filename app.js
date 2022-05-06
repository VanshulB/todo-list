const express = require("express");
const bodyParser = require("body-parser");
var items= ["Attend MLH Hackathon", "Learn to code in Javascript", "Apply for MLH Fellowship" ];


const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use("/public", express.static("public"));

let workItems = [];

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
    res.render("list", {listTitle: day, items: items});

});

app.post("/", function(req, res){
    console.log(req.body);
    item = req.body.newItem;
    items.push(item);
    res.redirect("/");
});

app.get("/work", function(req, res){
    res.render("list", {listTitle: "Work List", items: workItems});
});

app.post("/work", function(req, res){
    let item =  req.body.newItem;
    workItems.push(item);
    res.redirect("/work");
});

app.listen(3000, function (){
    console.log("Server is running on port 3000");
});


















