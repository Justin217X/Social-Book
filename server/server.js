require("dotenv").config();

const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const corsOptions = require("./config/corsOptions");
const mongoose = require("mongoose");
const verifyJWT = require("./middleware/verifyJWT");
const cookieParser = require("cookie-parser");
const credentials = require("./middleware/credentials");
const Post = require("./model/Post");

//Handle options credentials check - before CORS
//and fetch cookies credentials requirement
app.use(credentials);

//Cross Orign Resource Sharing
app.use(cors(corsOptions));

//built-in middleware to handle urlencoded form data
app.use(express.urlencoded({ extended: false }));

//built-in middleware for json
app.use(express.json());

//middleware for cookies
app.use(cookieParser());

//routes
app.use("/", require("./routes/root"));
app.use("/register", require("./routes/register"));
app.use("/auth", require("./routes/auth"));
app.use("/refresh", require("./routes/refresh"));
app.use("/logout", require("./routes/logout"));
app.use("/post", require("./routes/post"));
app.get("/allPosts", (req, res) => {
  Post.find()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err.message);
    });
});

app.get("/singlePost", (req, res) => {
  Post.findById("62d689e554bcc837dc4006e8")
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err.message);
    });
});

app.use(verifyJWT);
app.use("/users", require("./routes/api/users"));

app.use(function (err, req, res, next) {
  console.log(err.stack);
  res.status(500).send(err.message);
});
// Route handlers

app.all("*", (req, res) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    //listen for requests
    app.listen(process.env.PORT, () => {
      console.log("connected to DB & listening on port", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
