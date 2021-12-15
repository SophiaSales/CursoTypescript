abstract class abistrata { //classe abistrata so pode ser estendida
    nome: string;

    constructor(nome: string) {
        this.nome = nome;
    }
} 
class UserAccout { 
    public name: string;
    protected age: number; 

    constructor(name: string,  age: number){
        this.name = name;
        this.age = age;
    } 
    logDetails(): void{
        console.log(`the player ${this.name} is ${this.age} years old.`);
    }
}
class CharAccount extends UserAccout {
    private nickname: string;
    readonly lavel: number;
    level: number;

    constructor(name: string, age: number, nickname: string, level: number, lavel: number){
        super(name, age);

        this.nickname = nickname;
        this.level = level;
        this.lavel = lavel
    }

    get getLevel(){
        console.log("-----Get-----");
        return this.level
    }
    set setLevel(level: number){
        this.level = level;
    }

    logCharDetails(): void{
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
