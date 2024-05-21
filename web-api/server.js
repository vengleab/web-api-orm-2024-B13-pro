const express = require("express");
const userData = require("./users.json")

const app = express();

app.use("/assets", express.static("public"))

app.get("/", (req, res) => {
  res.send("<link rel='stylesheet' href='/assets/css/styles.css'><h1 style='color: red'><img src='/assets/img/promise.webp'>NodeJS Project</h1>")
})

app.get("/users", (req, res) => {
  res.send(userData)
})

app.listen(80, ()=> {
  console.log("Server is running on http://localhost");
})