
let ciclo1 = document.getElementById("ciclo1");
// escribir los primeros 10 enteros a partir del 0
for (let i = 1; i <= 10; i++) {
    ciclo1.innerHTML += i + "<br/>";
    
}//for i

let ciclo2 = document.getElementById("ciclo2");
// escribir los números del 5 al 100 de 5 en 5
for (let i = 5; i <= 100; i = i + 5) {
    ciclo2.innerHTML += i + "<br/>";
    
}//for i

let ciclo3 = document.getElementById("ciclo3");
// escribir los números del 5 al 100 de 5 en 5
for (let i = 10; i >= 1 ; i --) {
    ciclo3.innerHTML += i + "<br/>";
    
}//for i

let i = 1
let ciclo4 = document.getElementById("ciclo4");
// escribir los números del 5 al 100 de 5 en 5
while (i<=10) {
    ciclo4.innerHTML += i + "<br/>";
    i ++;
}

i = 5
let ciclo5 = document.getElementById("ciclo5");
// escribir los números del 5 al 100 de 5 en 5
while (i<=100) {
    ciclo5.innerHTML += i + "<br/>";
    i += 5;
}

i = 10
let ciclo6 = document.getElementById("ciclo6");
// escribir los números del 10 al 1 de 1 en 1
while (i>=1) {
    ciclo6.innerHTML += i + "<br/>";
    i --;
}

i = 1
let ciclo7 = document.getElementById("ciclo7");
// escribir los números del 1 al 10 de 1 en 1
do {
    ciclo7.innerHTML += i + "<br/>";
    i ++;
} while (i <= 10);

i = 5
let ciclo8 = document.getElementById("ciclo8");
// escribir los números del 5 al 100 de 5 en 5
do {
    ciclo8.innerHTML += i + "<br/>";
    i += 5;
} while (i<=100);

i = 10
let ciclo9 = document.getElementById("ciclo9");
// escribir los números del 10 al 1 de 1 en 1
do {
    ciclo9.innerHTML += i + "<br/>";
    i --;
} while (i>=1);