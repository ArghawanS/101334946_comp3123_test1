"use strict";

// Arghawan Ghulam Siddiq - 101334946
console.log("");
console.log("Question #3: ");
console.log(""); // Including File System Module

var fs = require('fs'); // Including Process Module


var process = require('process'); // Including Path Module


var path = require('path'); // Setting path module for the log directory


var logDir = './question-3/logs'; // Add Function - Create the new directory, create log files and output on console 

var add = function add() {
  // Checks if the directory exists, if not, it will create it
  if (!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir);
    console.log("".concat(logDir, " created."));
  } else {
    console.log("".concat(logDir, " already created."));
  } // Change directory into the log directory


  process.chdir(logDir); // For loop to create each file up to 10, so 9 files

  for (var i = 0; i < 10; i++) {
    // Create and write in the file
    fs.writeFileSync("log".concat(i, ".txt"), "log ".concat(i, " file")); // Output all file names to console

    console.log("log".concat(i));
  }
}; // I am unsure as to why it is not deleting the directory or files... I am positive this is correct:
// Remove Log Files function


var remove = function remove() {
  // If statement to make sure the directory exists
  if (fs.existsSync(logDir)) {
    // Change to the log directory
    process.chdir(logDir); // Reads and returns log directory

    fs.readdirSync(process.cwd(), function (error, files) {
      // For each statement to iterate through each file to delete
      files.forEach(function (file) {
        fs.unlink(file, function (error) {
          if (error) {
            console.log("Error deleting file ".concat(file));
          }

          console.log("Deleting files... ".concat(file));
        });
      });
    });
  }
};

add();
remove();