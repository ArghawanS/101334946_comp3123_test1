
// Arghawan Ghulam Siddiq - 101334946

console.log("")
console.log("Question #1: ")
console.log("")


let prom = new Promise(function(resolve, reject) {
    
})
    
prom.then(function(magic){
    console.log("")
    console.log(magic)
    console.log("")
},  function(error){
    console.log(error)
})

const mixedArray = ['PIZZA',10,true,25,false,'WINGS']

// define an arrow function called lowerCaseWords that takes mixedArray as an input parameter array
lowerCaseWords = (mixedArray) => {
    let result = mixedArray.filter(mixedArray => mixedArray.length > 0);
    let box = [] 
    box = result
    const finalbox = box.map(word => word.toLowerCase());
    console.log(finalbox)
}

lowerCaseWords(mixedArray);