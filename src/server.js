//Initialization
const express = require('express');
const app = express();

const mongoose = require('mongoose');
const Note = require('./models/Note');

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const MONGODB_CONNECT_URI = "mongodb+srv://anuragkashyap82:anurag1234@cluster0.sgm5njq.mongodb.net/notesdb";
mongoose.connect(MONGODB_CONNECT_URI).then(function(){

app.get("/", function(req, res){
    const response = { statuscode: res.statusCode, message: "API Works!!!"};
    res.json(response);
 });

 const noteRouter = require("./routes/Note");
    app.use("/notes", noteRouter);
});




 // Starting the server on a port
 const PORT = process.env.PORT || 5000;
app.listen(PORT, function(){
    console.log("Server started at port 5000");
});