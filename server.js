var express = require("express"); // make use of express module 
var app = express();
var path = require("path"); 
var HTTP_PORT = process.env.PORT || 8080;  // || : or

// call this function after the http server starts listening for requests
function onHttpStart(){
    console.log("Express http server listening on: " + HTTP_PORT);
}

// home route information 
app.get("/", function(req, res){
    let resText = "";
    resText += "<h2>Declaration(Instructions: text size in heading 2):</h2>"
    resText += "Instructions: The rest text is displayed in paragraph as shown in screenshot<br>";


    resText += "<br><br>I declare that this test is my own work accoedance with Seneca Academic policy. No part of this test<br>";
    resText += "has been copied elctronically or manually from other source.<br><br><br>"
    resText += "Name: Broinson Jeyarajah<br>";
    resText += "Student Number: 101501229<br><br>";
    resText += "<a href='./test1'>Go to test1</a><br><br>";
    resText += "Test 1 is a link, which directs users to the route test1";

    res.send(resText);

});


//directs to the test1 link under views folder 
app.get("/test1", function(req,res){
    res.sendFile(path.join(__dirname,"/views/test1.html"));
  });


//setup http server to listen on HTTP_PORT
app.listen(HTTP_PORT, onHttpStart);
