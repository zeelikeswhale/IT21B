const readline =  require ("readline")

const r1 = readline.createInterface({
    input:process.stdin,
    output: process.stdout
})

console.log("---------------------------")
console.log("Factorial Application");
console.log("1. Say Hello")
console.log("2. Factorial")
console.log("2. Exit Application")
console.log("---------------------------")

r1.question("Enter you choice (1-3): ", choice => {
    console.log (choice)

    if(choice === "1"){
        console.log("HELLO")

    }else if (choice === 2){
        console.log("FACTORIAL")

    }else if (choice === 3){
        console.log("EXITING APPLICATION")
    }else {
        (console.log("INVALID CHOICE. PLEASE TRY AGAIN"))
    }
})