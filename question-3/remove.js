

// Arghawan Ghulam Siddiq - 101334946
console.log("");
console.log("Question #3: ");
console.log(""); 

var fs = require('fs');
var log_dir = './logs/';
if(fs.existsSync(log_dir))
{
	fs.readdirSync(log_dir).forEach(file => {
		fs.unlinkSync(log_dir + file);
		console.log(`deleted: ${file}`); 
	});
	fs.rmdirSync(log_dir);
	console.log(`deleted: ${log_dir}`);
}

