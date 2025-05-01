const express = require("express");
const app = express();
const port = 5000;
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const mongoose = require("mongoose");

// middleware
app.use(express.json());
app.use(cors({
    origin: ["http://localhost:5173"],
    credentials: true
}))

// routes
const bookRoutes = require("./src/books/book.route");
app.use("/api/books", bookRoutes);


// DB Connection
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

