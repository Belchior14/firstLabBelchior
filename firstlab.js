// iteration 1

let hacker1 = "Vinayak";
console.log(`The driver's name is ${hacker1}.`);

let hacker2 = "Alvaro"
console.log(`The navigator's name is ${hacker2}.`)

//iteration 2

let driverNameLength = hacker1.length
let navigatorNameLength = hacker2.length

if ( driverNameLength > navigatorNameLength){
  console.log(`The driver has the longest name, it has ${driverNameLength} characters.`)
} else if (driverNameLength < navigatorNameLength){
  console.log(`It seems that the navigator has the longest name, it has ${navigatorNameLength} characters.`)
} else {
  console.log(`Wow, you both have equally long names, ${driverNameLength} characters!`)
}

// iteration 3
//3.1
let newDriverName = "".toUpperCase()

for(let i=0; i<hacker1.length; i++){
   newDriverName += hacker1.charAt(i) + ' ';     
}
//here I useed google to find the "charAt"
console.log(newDriverName);

//3.2
//just to try to complete all the requests
let newNavigatorName = "oravlA"

//3.3
if(newDriverName[0] < newNavigatorName[0]){
  console.log("The driver's name goes first")
} else if (newDriverName[0] > newNavigatorName[0]){
  console.log("Yo, the navigator goes first definitely.")
}else{
  console.log("What?! You both have the same name?")
}

