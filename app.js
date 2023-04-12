const express=require('express');
const mongoose=require('mongoose');
const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:false}));

mongoose.connect("mongodb://127.0.0.1:27017/delivery-service");
app.use(express.json());
const db = mongoose.connection
db.on("error", () => console.log("Can't connect to DB"));
db.once("open", () => {
    console.log("Connected to mongo DB");

})

const Orders=require('./routes/order.routes');
Orders(app);

app.listen(7500,()=>{
    console.log("Server running successfully port number: 7500");
})