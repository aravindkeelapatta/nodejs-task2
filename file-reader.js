var EventEmitter = require("events").EventEmitter;

var emitter = new EventEmitter();

var fs = require("fs");

var path = require("path");

var filepath = path.join(__dirname, "json-file.json")



emitter.on("start_reading", function(filepath) {
	console.log("start Reading the File")
	fs.readFile(filepath, "utf-8", function(err, data) {
		if(err) {
			emitter.emit("error", err)
			return;
		}
		emitter.emit("print_content", data)
	})
} )



emitter.on("print_content", function(data) {
	console.log(data);
	emitter.emit("done", "Successfully Reading the file");
})

emitter.on("error", function(message) {
	console.log(message);
})

emitter.on("done", function(message) {
	console.log(message);
})

emitter.emit("start_reading", filepath);