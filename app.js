
class Person{
    constructor(name, age, occupation, message){
        this.name = name;
        this.age = age;
        this.occupation = occupation;
        this.message = message;
    }

    displayInfo(){
        console.log("Name: " + this.name);
        console.log("Age: " + this.age);
        console.log("Occupation: " + this.occupation);
        console.log("Message: " + this.message);
        console.log("-------------------");
    }

    showName(){
        console.log(this.name);
    }

    showMessage(){
        console.log(this.message);
    }
}

const person1 = new Person("Zee Batumbakal", 20, "manghihilot", "sir, tapos na po");
const person2 = new Person("Zee Hindi pinili", 20, "matrix protector", "I MISS HIM");

person1.displayInfo();