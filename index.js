// es5 OOP

// function Students(name, age) {
//     this.name =name;
//     this.age = age;
    
// }

// var student1 = new Students("ma van nam", 19);
// console.log(student1.name, student1.age);



// es6 OOP

class Student {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}

let student1 = new Student("ma van Nam", 119);

console.log(student1.name,student1.age);
