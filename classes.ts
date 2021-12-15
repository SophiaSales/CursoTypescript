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
    readonly level: number;

    constructor(name: string, age: number, nickname: string, level: number){
        super(name, age);

        this.nickname = nickname;
        this.level = level;
    }
    logCharDetails(): void{
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

