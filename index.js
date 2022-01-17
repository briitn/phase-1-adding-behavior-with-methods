// Your code here
class Cat{
    constructor(name,sex){
        this.name=name;
        this.sex=sex
    }
    speak(){
        return `${this.name} says meow!`
    }
}

class Dog{
    constructor(name,sex){
        this.name=name;
        this.sex=sex
    }
    speak(){
        return `${this.name} says woof!`
    }
}

class Bird{
    constructor(name,sex){
        this.name=name;
        this.sex=sex
    }
    speak(){
        if(this.sex==='male'){return`It's me! ${this.name}, the parrot!`
    }else {return `${this.name} says squawk!`}
}}

let cat1= new Cat('teddy', 'male')
let bird1= new Bird('lemon','female')