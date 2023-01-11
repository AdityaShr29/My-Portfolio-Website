const exp = require("express");

const app = exp();
app.use(exp.static("public"));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
});

app.listen(3000, function(){
    console.log("Server is running on port 3000");
});