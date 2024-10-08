const express =require("express");

const app = express();

app.listen(4000,function(){
    console.log("server started !!!!");
});

app.get("/", function (request, response) {
    response.sendFile(__dirname + "/index.html");
    
});

app.get('/style.css', function (req, res) {
    res.sendFile(__dirname + "/" + "style.css");
});

app.get('/script.js', function (req, res) {
    res.sendFile(__dirname + "/" + "script.js");
});


app.use(express.static('public'));
app.use('/images', express.static('images')); 