const express = require("express");
const app = express();
const port = 5000;
const dotenv = require("dotenv");

dotenv.config();

const mongoose = require("mongoose");

// routes

async function main(){
    await mongoose.connect(process.env.DB_URL);
    app.use("/", (req, res)=> {
        res.send("Book Store Server is Running!!");
    })
}

main().then(()=> console.log("MongoDB Connect Successfully!!")).catch(err => console.log(err));

app.listen(port, ()=> {
    console.log("Server is running on port", port)
});

