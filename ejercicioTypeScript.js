"use strict";
function saludar(nombre) {
    return "Hola, ".concat(nombre, "! ");
}
var mensaje = saludar("Estudiante");
document.getElementById("saludo").innerText = mensaje;
// EJERCICIO 1
// Creamos una función que genera el saludo personalizado
function saludarUsuario(usuario) {
    return "Hola, ".concat(usuario.nombre, "! Tienes ").concat(usuario.edad, " a\u00F1os.");
}
// Ejemplo de uso
var usuario1 = {
    nombre: "Neo",
    edad: 30
};
var saludo = saludarUsuario(usuario1);
console.log(saludo); // Hola, Neo! Tienes 30 años.
// Función que calcula el precio total del carrito y muestra los nombres de los productos
function calcularTotalCarrito(productos) {
    var total = 0;
    var nombresProductos = productos.map(function (producto) { return producto.nombre; }).join(", ");
    productos.forEach(function (producto) {
        total += producto.precio;
    });
    // Mostrar los nombres de los productos y el precio total en la pantalla
    document.getElementById("listaProductos").innerText = "Productos: ".concat(nombresProductos);
    document.getElementById("precioTotal").innerText = "Precio Total: $".concat(total.toFixed(2));
    return total;
}
// Ejemplo de uso
var carrito = [
    { nombre: "Manzana", precio: 1.2 },
    { nombre: "Pan", precio: 2.5 },
    { nombre: "Leche", precio: 1.8 }
];
calcularTotalCarrito(carrito);
// Función que calcula la distancia entre dos puntos
function calcularDistancia(punto1, punto2) {
    var dx = punto2.x - punto1.x;
    var dy = punto2.y - punto1.y;
    return Math.sqrt(dx * dx + dy * dy);
}
// Ejemplo de uso
var puntoA = { x: 10, y: 11 };
var puntoB = { x: 12, y: 13 };
var distancia = calcularDistancia(puntoA, puntoB);
console.log("La distancia entre los puntos es: ".concat(distancia));
// EJERCICIO 4
// Desarrolla una función que reciba un array de usuarios. Cada usuario tiene un nombre, un
// correo y un estado que indica si está activo o no. La función debe devolver solo los usuarios
// que están activos.
// Función que filtra y devuelve solo los usuarios activos
function obtenerUsuariosActivos(usuarios) {
    return usuarios.filter(function (usuario) { return usuario.activo; });
}
// Ejemplo de uso
var usuarios = [
    { nombre: "Alice", correo: "alice@example.com", activo: true },
    { nombre: "Bob", correo: "bob@example.com", activo: false },
    { nombre: "Charlie", correo: "charlie@example.com", activo: true }
];
var usuariosActivos = obtenerUsuariosActivos(usuarios);
console.log(usuariosActivos);
//EJERCICIO 5
// Escribe una función que acepte como parámetro un número o una cadena. Si recibe un
// número debe devolver su cuadrado. Si recibe una cadena, debe devolverla en mayúsculas
function procesarEntrada(entrada) {
    if (typeof entrada === "number") {
        return entrada * entrada;
    }
    else if (typeof entrada === "string") {
        return entrada.toUpperCase();
    }
    // Añadiendo una declaración de retorno predeterminada para manejar casos inesperados
    throw new Error("Tipo de entrada no válido.");
}
// Ejemplos de uso
console.log(procesarEntrada(5)); // 25
console.log(procesarEntrada("hola mundo")); // HOLA
// EJERCICIO 6
// Crea una función que gestione una lista de tareas. Cada tarea tiene un título, una
// descripción, una duración estimada y un estado que indica si está completada o no. Debe
// poder permitirse agregar nuevas tareas, eliminar tareas existentes o modificar las
// existentes. Para ello crea los botones necesarios y pide por pantalla lo que consideres
// oportuno
// EJERCICIO 7
// Desarrolla una función que acepte un array de cualquier tipo y devuelva un nuevo array con
// los elementos en orden inverso
function invertirArray(array) {
    return array.slice().reverse();
}
// Ejemplo de uso
var numeros = [1, 2, 3, 4, 5];
var numerosInvertidos = invertirArray(numeros);
console.log(numerosInvertidos); // [5, 4, 3, 2, 1]
var palabras = ["hola", "mundo", "typescript"];
var palabrasInvertidas = invertirArray(palabras);
console.log(palabrasInvertidas); // ["typescript", "mundo", "hola"]
var animales = [
    { nombre: "Elefante", tamaño: "grande", categoria: "mamífero" },
    { nombre: "Gato", tamaño: "pequeño", categoria: "mamífero" },
    { nombre: "Águila", tamaño: "mediano", categoria: "ave" },
    { nombre: "Serpiente", tamaño: "mediano", categoria: "reptil" },
    { nombre: "Tiburón", tamaño: "grande", categoria: "pez" },
    { nombre: "Rana", tamaño: "pequeño", categoria: "anfibio" }
];
function filtrarPorTamaño(tamaño) {
    return animales.filter(function (animal) { return animal.tamaño === tamaño; }).map(function (animal) { return animal.nombre; });
}
function filtrarPorCategoria(categoria) {
    return animales.filter(function (animal) { return animal.categoria === categoria; }).map(function (animal) { return animal.nombre; });
}
function mostrarAnimales(animales) {
    var listaElement = document.getElementById("listaAnimales");
    listaElement.innerHTML = animales.join(", ");
}
document.getElementById("btnPequeño").addEventListener("click", function () {
    mostrarAnimales(filtrarPorTamaño("pequeño"));
});
document.getElementById("btnMediano").addEventListener("click", function () {
    mostrarAnimales(filtrarPorTamaño("mediano"));
});
document.getElementById("btnGrande").addEventListener("click", function () {
    mostrarAnimales(filtrarPorTamaño("grande"));
});
document.getElementById("btnMamifero").addEventListener("click", function () {
    mostrarAnimales(filtrarPorCategoria("mamífero"));
});
document.getElementById("btnAve").addEventListener("click", function () {
    mostrarAnimales(filtrarPorCategoria("ave"));
});
document.getElementById("btnReptil").addEventListener("click", function () {
    mostrarAnimales(filtrarPorCategoria("reptil"));
});
document.getElementById("btnPez").addEventListener("click", function () {
    mostrarAnimales(filtrarPorCategoria("pez"));
});
document.getElementById("btnAnfibio").addEventListener("click", function () {
    mostrarAnimales(filtrarPorCategoria("anfibio"));
});
var inventario = [];
function agregarProducto(producto) {
    if (producto.cantidad < 0 || producto.precioUnitario < 0) {
        console.error("La cantidad y el precio unitario no pueden ser menores que 0.");
        return;
    }
    inventario.push(producto);
    mostrarInventario();
}
function modificarPrecio(nombre, nuevoPrecio) {
    if (nuevoPrecio < 0) {
        console.error("El precio unitario no puede ser menor que 0.");
        return;
    }
    var producto = inventario.find(function (p) { return p.nombre === nombre; });
    if (producto) {
        producto.precioUnitario = nuevoPrecio;
        mostrarInventario();
    }
    else {
        console.error("Producto no encontrado.");
    }
}
function modificarCantidad(nombre, nuevaCantidad) {
    if (nuevaCantidad < 0) {
        console.error("La cantidad no puede ser menor que 0.");
        return;
    }
    var producto = inventario.find(function (p) { return p.nombre === nombre; });
    if (producto) {
        producto.cantidad = nuevaCantidad;
        mostrarInventario();
    }
    else {
        console.error("Producto no encontrado.");
    }
}
function calcularValorTotal() {
    return inventario.reduce(function (total, producto) { return total + (producto.cantidad * producto.precioUnitario); }, 0);
}
function mostrarInventario() {
    var listaElement = document.getElementById("listaInventario");
    listaElement.innerHTML = inventario.map(function (p) { return "".concat(p.nombre, ": ").concat(p.cantidad, " unidades, ").concat(p.precioUnitario, "\u20AC"); }).join("<br>");
}
document.getElementById("btnCuadrarCaja").addEventListener("click", function () {
    var valorTotal = calcularValorTotal();
    alert("El valor total de los productos disponibles es: ".concat(valorTotal, "\u20AC"));
});
function mostrarResumenPedido(pedido) {
    var cliente = pedido.cliente, productos = pedido.productos, fecha = pedido.fecha;
    var total = productos.reduce(function (sum, producto) { return sum + (producto.cantidad * producto.precioUnitario); }, 0);
    console.log("Resumen del Pedido:");
    console.log("Cliente: ".concat(cliente.nombre));
    console.log("Direcci\u00F3n: ".concat(cliente.direccion));
    console.log("Correo: ".concat(cliente.correo));
    console.log("Fecha: ".concat(fecha.toLocaleDateString()));
    console.log("Productos:");
    productos.forEach(function (producto) {
        console.log("- ".concat(producto.nombre, " (").concat(producto.categoria, "): ").concat(producto.cantidad, " x ").concat(producto.precioUnitario, "\u20AC"));
    });
    console.log("Total: ".concat(total.toFixed(2), "\u20AC"));
}
// Ejemplo de uso
var pedido = {
    cliente: {
        nombre: "Juan Pérez",
        direccion: "Calle Falsa 123",
        correo: "juan.perez@example.com"
    },
    productos: [
        { nombre: "Manzana", categoria: "alimentación", cantidad: 5, precioUnitario: 0.5 },
        { nombre: "Juguete", categoria: "ocio", cantidad: 2, precioUnitario: 15.0 },
        { nombre: "Detergente", categoria: "hogar", cantidad: 1, precioUnitario: 3.75 }
    ],
    fecha: new Date()
};
mostrarResumenPedido(pedido);
var EntrenadorManager = /** @class */ (function () {
    function EntrenadorManager() {
        this.entrenadores = [];
    }
    EntrenadorManager.prototype.agregarEntrenador = function (entrenador) {
        this.entrenadores.push(entrenador);
    };
    EntrenadorManager.prototype.mostrarEntrenadores = function () {
        this.entrenadores.forEach(function (entrenador) {
            console.log("Entrenador: ".concat(entrenador.nombre));
            console.log("Regi\u00F3n: ".concat(entrenador.region));
            var _a = entrenador.pokemon, mote = _a.mote, especie = _a.especie, tipo1 = _a.tipo1, tipo2 = _a.tipo2;
            console.log("Pok\u00E9mon: ".concat(mote ? mote : especie, " (").concat(especie, ")"));
            console.log("Tipo 1: ".concat(tipo1));
            if (tipo2) {
                console.log("Tipo 2: ".concat(tipo2));
            }
            console.log('---');
        });
    };
    return EntrenadorManager;
}());
var manager = new EntrenadorManager();
var entrenador1 = {
    nombre: "Ash Ketchum",
    region: "Kanto",
    pokemon: {
        especie: "Pikachu",
        tipo1: "eléctrico"
    }
};
var entrenador2 = {
    nombre: "Misty",
    region: "Kanto",
    pokemon: {
        mote: "Staryu",
        especie: "Staryu",
        tipo1: "agua"
    }
};
manager.agregarEntrenador(entrenador1);
manager.agregarEntrenador(entrenador2);
manager.mostrarEntrenadores();
