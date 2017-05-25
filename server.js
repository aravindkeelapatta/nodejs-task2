var express = require("express");

var app = express();

var router = express.Router();

var importData = require("./import")


console.log(importData)	

app.use("/api", router)

router.get("/employee", function(request, response) {
	var employee = [
      {name : "Aravind", age : 23, gender: "male"},
      {name : "Shiva", age : 25, gender: "male"},
      {name : "Keerthy", age : 24, gender: "female"},
      {name : "kavya", age : 21, gender: "female"}
	]
	response.json({employee})
})

PORT = process.env.PORT || 8081;

app.listen(8081, function() {
	console.log("Server Listening at port !!" + PORT)
})