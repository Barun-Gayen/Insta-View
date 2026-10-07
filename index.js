const express = require("express");
const app = express();
const path = require("path");

const port = 1000;

app.use(express.static(path.join(__dirname, "/public/css")));
app.use(express.static(path.join(__dirname, "/public/js")));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));


app.get("/", (req, res) => {
    res.send("Hiii, I am root!")
})

app.get ("/ig/:username", (req, res) => {
    let {username} = req.params;
    const instaData = require("./data.json");

    console.log(req.params);
    console.log(username);
    console.log(instaData[username]);
    
    const data = instaData[username];
    if (data) {
        res.render("insta.ejs", {data});
    }
    else {
        res.render("error.ejs")
    }
    
});


app.listen(port, () => {
    console.log(`Listening on Port : ${port}`);
});