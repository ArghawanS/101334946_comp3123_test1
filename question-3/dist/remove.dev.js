"use strict";

// Arghawan Ghulam Siddiq - 101334946
console.log("");
console.log("Question #3: ");
console.log("");

var fs = require('fs');

var log_dir = './logs/';

if (fs.existsSync(log_dir)) {
  fs.readdirSync(log_dir).forEach(function (file) {
    fs.unlinkSync(log_dir + file);
    console.log("deleted: ".concat(file));
  });
  fs.rmdirSync(log_dir);
  console.log("deleted: ".concat(log_dir));
}