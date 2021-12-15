"use strict";
class abistrata {
    constructor(nome) {
        this.nome = nome;
    }
}
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
    constructor(name, age, nickname, level, lavel) {
        super(name, age);
        this.nickname = nickname;
        this.level = level;
        this.lavel = lavel;
    }
    get getLevel() {
        console.log("-----Get-----");
        return this.level;
    }
    set setLevel(level) {
        this.level = level;
    }
    logCharDetails() {
        console.log(`thhe player ${this.name} is ${this.age} and has the char ${this.nickname} at level ${this.level}`);
    }
}
const pessoa = new UserAccout("sarah", 30);
console.log(pessoa);
pessoa.logDetails();
const pessoa2 = new CharAccount("john", 45, "johmaster", 80, 9);
console.log(pessoa2.level);
pessoa2.logDetails();
// pessoa2.nickname = "jo"
pessoa2.logCharDetails();
pessoa2.setLevel = 499;
console.log(pessoa2.getLevel);
// const test = new abistrata("caio");
