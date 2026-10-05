// Simulador de compra - Pre Entrega 2

const nombre = prompt("Ingrese su nombre");

let totalCompra = 0;
let continuar = "SI";

alert("Hola " + nombre + ". Bienvenido al simulador de compra");

while (continuar == "SI") {

    const producto = prompt("Ingrese el nombre del producto");

    const precio = parseFloat(prompt("Ingrese el precio del producto"));

    const stock = parseInt(prompt("Ingrese el stock disponible"));

    const cantidad = parseInt(prompt("Ingrese la cantidad que desea comprar"));

    if (cantidad <= 0) {

        alert("La cantidad ingresada no es válida");

    } else if (cantidad <= stock) {

        const subtotal = precio * cantidad;

        totalCompra = totalCompra + subtotal;

        alert("Producto agregado. Subtotal: $" + subtotal);

        console.log("Producto: " + producto);
        console.log("Cantidad: " + cantidad);
        console.log("Subtotal: $" + subtotal);

    } else {

        alert("No hay suficiente stock de " + producto);

        console.log("Stock disponible: " + stock);
    }

    continuar = prompt("¿Desea agregar otro producto? Escriba SI o NO");
}

alert("Compra finalizada. Total: $" + totalCompra);

console.log("Cliente: " + nombre);
console.log("Total de la compra: $" + totalCompra);