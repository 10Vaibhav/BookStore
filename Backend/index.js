const express = require("express");
const app = express();
const port = 5000;
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const mongoose = require("mongoose");

// middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors({
    origin: ["http://localhost:5173"],
    credentials: true
}))


const userRoutes = require("./src/users/user.route");
const bookRoutes = require("./src/books/book.route");
const orderRoute = require("./src/orders/order.route");
const adminRoutes = require("./src/stats/admin.stats")

// routes
app.use("/api/books", bookRoutes);
app.use("/api/orders", orderRoute);
app.use("/api/auth", userRoutes);
app.use("/api/admin",adminRoutes);

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

