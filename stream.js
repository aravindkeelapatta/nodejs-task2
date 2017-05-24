// var fs = require("fs");

// var path =require("path");

// var filepath = path.join(__dirname, "sample.txt")

// var readable = 	fs.createReadStream(filepath, {encoding: "utf-8", highWaterMark: 16 * 1024})

// var writable = fs.createWriteStream("./sample1.txt"	);

// readable.on("data", function(chunk) {
// 	console.log(chunk.length)

// 	writable.write(chunk)	
// })





var fs = require("fs");  
// Create a readable stream  
var readerStream = fs.createReadStream('input.txt');  
// Create a writable stream  
var writerStream = fs.createWriteStream('./output.txt');  
// Pipe the read and write operations  
// read input.txt and write data to output.txt  
readerStream.pipe(writerStream);  
console.log("Program Ended");   