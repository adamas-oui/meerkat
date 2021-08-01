const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

app.use(cors());
app.use(express.json());

//connect to mongoose 
mongoose.connect("mongodb+srv://yl4148:yl4148new@clustertest.mhx8s.mongodb.net/updateDB")

//require route 

app.listen(3001, function() {
  console.log("express server is running on port 3001. ")
})