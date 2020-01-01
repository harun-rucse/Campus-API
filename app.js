const express = require("express");
const userRouter = require("./routes/userRoutes");

const app = express();

//Middleware
app.use(express.json());

//Route
app.use("/campus/user", userRouter);

//export app
module.exports = app;
