const express = require("express");
const userRoutes = require("./routers/userRoutes")
const app = express();

app.use(express.json())
app.use("/assets", express.static("public"))
app.use("/v1",userRoutes)
app.get("/", (req, res) => {
  const style = "stylesheet"
  res.send("<link rel='"+ style +"' href='/assets/css/styles.css'><h1 style='color: red'><img src='/assets/img/promise.webp'>NodeJS Project</h1>")
})

app.listen(80, ()=> {
  console.log("Server is running on http://localhost");
})