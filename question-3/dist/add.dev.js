"use strict";

// Arghawan Ghulam Siddiq - 101334946
console.log("");
console.log("Question #3: ");
console.log("");

var fs = require('fs');

var log_dir = './logs/';

if (!fs.existsSync(log_dir)) {
  fs.mkdirSync(log_dir);
  process.chdir(log_dir);

  for (var i = 0; i < 10; i++) {
    file_name = "log".concat(i, ".txt");
    fs.writeFile("".concat(file_name), '', function (err) {
      if (err) return console.log(err);
    });
    console.log(file_name);
  }
}