"use strict";
//boolean 
let isOpen;
isOpen = true;
//string
let message;
message = `foo${isOpen}`;
//number
let total;
total = 0xff0;
//array (type[])
let items;
items = ["foo", "bar"];
let values;
values = [1, 2, 3];
//tuple
let title;
title = [1, "text"];
//enum
var Color;
(function (Color) {
    Color["white"] = "#fff";
    Color["balck"] = "#000";
})(Color || (Color = {}));
;
//any podendo nao ser tipado 
let coisa;
coisa = [1];
//void (vazio)
function logger() {
    console.log("foo");
}
;
//never 
function error() {
    throw new Error("error");
}
//object
let cart;
cart = {
    key: "fi"
};
let message2 = "mensagem definada";
message2 = "string nova";
window.addEventListener("click", (e) => {
    console.log(e.target);
});
