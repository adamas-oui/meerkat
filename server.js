const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

// //test if react is running on localhost3001
// app.get("/", function(req, res) {
//   res.send("express text here")
// })

app.use(cors());
app.use(express.json());


// //connect to mongoose 
mongoose.connect("mongodb+srv://yl4148:yl4148new@clustertest.mhx8s.mongodb.net/updateDB", { useNewUrlParser: true }, { useUnifiedTopology: true })

//require route 
app.use("/", require("./routes/updateProfileRoute"));

app.listen(3001, function() {
  console.log("express server is running on port 3001. ")
})