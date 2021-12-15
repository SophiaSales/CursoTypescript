"use strict";
class UserAccout {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    logDetails() {
        console.log(`the player ${this.name} is ${this.age} years old.`);
    }
}
class CharAccount extends UserAccout {
    constructor(name, age, nickname, level) {
        super(name, age);
        this.nickname = nickname;
        this.level = level;
    }
    logCharDetails() {
        console.log(`thhe player ${this.name} is ${this.age} and has the char ${this.nickname} at level ${this.level}`);
    }
}
const pessoa = new UserAccout("sarah", 30);
console.log(pessoa);
pessoa.logDetails();
const pessoa2 = new CharAccount("john", 45, "johmaster", 80);
console.log(pessoa2.level);
pessoa2.logDetails();
// pessoa2.nickname = "jo"
pessoa2.logCharDetails();
