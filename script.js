// Algoritmo para armar tu lista de compras
let producto = "";
let item;

do {
    item = prompt("Ingresa un item que quieras agregar a tu lista de compras - Escribe ESC cuando termines");
    if (item != "ESC") {
        producto = producto + item + "\n";
    }
} while (item != "ESC");

alert('En tu lista de compras tienes los siguientes productos: '+"\n"+producto)

console.log("Tu lista de productos es:");
console.log(producto);