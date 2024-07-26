const express = require("express");
// const mongoose = require("mongoose");
const methodOverride = require("method-override");
let path = require("path");

// const ejsMate = require("ejs-mate");

// const Listing = require("./models/listing.js")

const app = express();
let port = 8080;

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

app.set("view engine", "ejs");
// app.engine('ejs', ejsMate);
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public/css")));
app.use(express.static(path.join(__dirname, "public/static")));

// const db_url = 'mongodb://127.0.0.1:27017/staywise';

// main()
//     .then(
//         console.log("successfull")
//     )
//     .catch(err => console.log(err));

// async function main() {
//     await mongoose.connect(db_url);
// }


// home page 
app.get("/", (req,res) => {
    res.render("index.ejs");
})

// bloodline page 
app.get("/bloodline", (req,res) => {
    res.render("bloodline.ejs");
})

// disha page 
app.get("/disha", (req,res) => {
    res.render("disha.ejs");
})

// jagriti page 
app.get("/jagriti", (req,res) => {
    res.render("jagriti.ejs");
})

// escape page 
app.get("/escape", (req,res) => {
    res.render("escape.ejs");
})


app.listen(port , () => {
    console.log("Server is active");
})