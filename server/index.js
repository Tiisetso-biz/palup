//import required dependencies
import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

//import required routes
import postRoutes from "./routes/posts.js";
import userRoutes from "./routes/users.js";

//intialize express
const app = express();
dotenv.config(); //config our dotenv

//make use of body-parser for json objects and url, also limit the data send to 30mb
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

//routes
app.use("/posts", postRoutes);
app.use("/user", userRoutes);

//port where our server will be serving from
const PORT = process.env.PORT || 5000;

/* MONGOOSE SETUP */
//URI
const uri = process.env.MONGO_URL;

//Connect to DB
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//connection error handling
mongoose.connection.on("error", function () {
  console.log("Could not connect to the database. Exiting now...");
  process.exit();
});

//successful connection
mongoose.connection.once("open", function () {
  console.log("Successfully connected to database");
});

//listen
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
