//boolean 
let isOpen: boolean;
isOpen = true;

//string
let message: string;
message = `foo${isOpen}`;

//number
let total: number;
total = 0xff0;

//array (type[])
let items: string[];
items = ["foo","bar"]

let values : Array<number>;
values = [1, 2, 3];

//tuple
let title: [number, string];
title = [1, "text"]

//enum
enum Color{
    white = '#fff',
    balck = '#000'
};

//any podendo nao ser tipado 
let coisa: any;
coisa = [1];

//void (vazio)
function logger():void{
    console.log("foo");
};

//null / undefined
type Bla = string | undefined;

//never 
function error(): never{
    throw new Error("error");
}

//object
let cart: object;
cart = {
    key: "fi"
};

let message2 = "mensagem definada"
message2 = "string nova"

window.addEventListener("click", (e) =>{
    console.log(e.target);
})