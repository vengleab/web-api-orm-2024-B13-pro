const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config()

const express = require("express");
const userRoutes = require("./routers/userRoutes");
const morgan = require("morgan");
const articleRoutes = require("./routers/articleRoutes");
const app = express();
app.use(cors({ origin: "http://localhost:3000"}))
app.use("/assets", express.static("public"))
app.use(morgan("common"))
// const logMiddleware = (req, res, next) => {
//   console.time("req_time")
//   console.log(`Logging=====> ${req.method}`);
//   next();
//   console.timeEnd("req_time");
// }
// app.use(logMiddleware)

// app.use(morgan(":method :url :status"))
// app.set("view engine", 'ejs')
app.use(express.json())

app.use("",userRoutes)
app.use("", articleRoutes)
app.get("/", (req, res) => {
  console.log("Handling");
  for(let i=0; i<1_000_000_000;i++);
  // throw Error("Random Error");
  console.log("handle request");
  const style = "stylesheet"
  // res.send("<link rel='"+ style +"' href='/assets/css/styles.css'><h1 style='color: red'><img src='/assets/img/promise.webp'>NodeJS Project</h1>")
  res.send(`
    
    <form>

      <input name="email" placeholder="Email" />
      <input name="password" placeholder="Password" />
    </form>
    
    `)
})



const notFoundMiddleware = (req, res, next) => {
  res.status(404).send({ message: "Page not found"})
}

const errorMiddleware = (error, req, res, next) => {
  res.status(500).send({ message: "Unknown Error"})
}


app.use(errorMiddleware);
app.use(notFoundMiddleware);

app.listen(8080, ()=> {
  console.log("Server is running on http://localhost");
  console.log(process.env.PORT);
})