function saludar(nombre: string): string {
    return `Hola, ${nombre}! `;
}

const mensaje = saludar("Estudiante");
document.getElementById("saludo")!.innerText = mensaje;

// Definimos la interfaz para el usuario
interface Usuario {
    nombre: string;
    edad?: number; // edad is optional for some use cases
    correo?: string; // correo is optional for some use cases
    activo?: boolean; // activo is optional for some use cases
}

// EJERCICIO 1
// Creamos una función que genera el saludo personalizado
function saludarUsuario(usuario: Usuario): string {
    return `Hola, ${usuario.nombre}! Tienes ${usuario.edad} años.`;
}

// Ejemplo de uso
const usuario1: Usuario = {
    nombre: "Neo",
    edad: 30
};
const saludo = saludarUsuario(usuario1);
console.log(saludo); // Hola, Neo! Tienes 30 años.

// EJERCICIO 2
// Crea una función que reciba un array de productos. Cada producto tiene un nombre y un
// precio. La función debe devolver el precio total del carrito. Muestra por pantalla la lista de
// nombres de productos y el precio total.

// Definimos la interfaz para el producto
interface ProductoSimple {
    nombre: string;
    precio: number;
}

// Función que calcula el precio total del carrito y muestra los nombres de los productos
function calcularTotalCarrito(productos: ProductoSimple[]): number {
    let total = 0;
    let nombresProductos = productos.map(producto => producto.nombre).join(", ");

    productos.forEach(producto => {
        total += producto.precio;
    });

    // Mostrar los nombres de los productos y el precio total en la pantalla
    document.getElementById("listaProductos")!.innerText = `Productos: ${nombresProductos}`;
    document.getElementById("precioTotal")!.innerText = `Precio Total: $${total.toFixed(2)}`;

    return total;
}

// Ejemplo de uso
const carrito: ProductoSimple[] = [
    { nombre: "Manzana", precio: 1.2 },
    { nombre: "Pan", precio: 2.5 },
    { nombre: "Leche", precio: 1.8 }
];

calcularTotalCarrito(carrito);

// EJERCICIO 3
// Escribe una función que calcule la distancia entre dos puntos del sistema cartesiano. Los
// puntos se representan mediante sus coordenadas x e y.

// Definimos una interfaz para representar un punto en el sistema cartesiano
interface Punto {
    x: number;
    y: number;
}

// Función que calcula la distancia entre dos puntos
function calcularDistancia(punto1: Punto, punto2: Punto): number {
    const dx = punto2.x - punto1.x;
    const dy = punto2.y - punto1.y;
    return Math.sqrt(dx * dx + dy * dy);
}

// Ejemplo de uso
const puntoA: Punto = { x: 10, y: 11 };
const puntoB: Punto = { x: 12, y: 13 };

const distancia = calcularDistancia(puntoA, puntoB);
console.log(`La distancia entre los puntos es: ${distancia}`);

// EJERCICIO 4
// Desarrolla una función que reciba un array de usuarios. Cada usuario tiene un nombre, un
// correo y un estado que indica si está activo o no. La función debe devolver solo los usuarios
// que están activos.

// Función que filtra y devuelve solo los usuarios activos
function obtenerUsuariosActivos(usuarios: Usuario[]): Usuario[] {
    return usuarios.filter(usuario => usuario.activo);
}

// Ejemplo de uso
const usuarios: Usuario[] = [
    { nombre: "Alice", correo: "alice@example.com", activo: true },
    { nombre: "Bob", correo: "bob@example.com", activo: false },
    { nombre: "Charlie", correo: "charlie@example.com", activo: true }
];

const usuariosActivos = obtenerUsuariosActivos(usuarios);
console.log(usuariosActivos);

//EJERCICIO 5
// Escribe una función que acepte como parámetro un número o una cadena. Si recibe un
// número debe devolver su cuadrado. Si recibe una cadena, debe devolverla en mayúsculas

function procesarEntrada(entrada: number | string): number | string {
    if (typeof entrada === "number") {
        return entrada * entrada;
    } else if (typeof entrada === "string") {
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

function invertirArray<T>(array: T[]): T[] {
    return array.slice().reverse();
}

// Ejemplo de uso
const numeros = [1, 2, 3, 4, 5];
const numerosInvertidos = invertirArray(numeros);
console.log(numerosInvertidos); // [5, 4, 3, 2, 1]

const palabras = ["hola", "mundo", "typescript"];
const palabrasInvertidas = invertirArray(palabras);
console.log(palabrasInvertidas); // ["typescript", "mundo", "hola"]



// EJERCICIO 8
// Vamos a crear una lista de animales vertebrados. Estos animales tendrán como
// características el nombre de la especie, el tamaño (solo puede tomar “pequeño”, “mediano”
// o “grande”) y categoría (“mamífero”, “ave”; “reptil”, “pez”, “anfibio”).
// Crear botones que te indiquen los nombres de las especies de animal según su tamaño y
// otros botones según su categoría.

interface Animal {
    nombre: string;
    tamaño: "pequeño" | "mediano" | "grande";
    categoria: "mamífero" | "ave" | "reptil" | "pez" | "anfibio";
}

const animales: Animal[] = [
    { nombre: "Elefante", tamaño: "grande", categoria: "mamífero" },
    { nombre: "Gato", tamaño: "pequeño", categoria: "mamífero" },
    { nombre: "Águila", tamaño: "mediano", categoria: "ave" },
    { nombre: "Serpiente", tamaño: "mediano", categoria: "reptil" },
    { nombre: "Tiburón", tamaño: "grande", categoria: "pez" },
    { nombre: "Rana", tamaño: "pequeño", categoria: "anfibio" }
];

function filtrarPorTamaño(tamaño: "pequeño" | "mediano" | "grande"): string[] {
    return animales.filter(animal => animal.tamaño === tamaño).map(animal => animal.nombre);
}

function filtrarPorCategoria(categoria: "mamífero" | "ave" | "reptil" | "pez" | "anfibio"): string[] {
    return animales.filter(animal => animal.categoria === categoria).map(animal => animal.nombre);
}

function mostrarAnimales(animales: string[]): void {
    const listaElement = document.getElementById("listaAnimales")!;
    listaElement.innerHTML = animales.join(", ");
}

document.getElementById("btnPequeño")!.addEventListener("click", () => {
    mostrarAnimales(filtrarPorTamaño("pequeño"));
});

document.getElementById("btnMediano")!.addEventListener("click", () => {
    mostrarAnimales(filtrarPorTamaño("mediano"));
});

document.getElementById("btnGrande")!.addEventListener("click", () => {
    mostrarAnimales(filtrarPorTamaño("grande"));
});

document.getElementById("btnMamifero")!.addEventListener("click", () => {
    mostrarAnimales(filtrarPorCategoria("mamífero"));
});

document.getElementById("btnAve")!.addEventListener("click", () => {
    mostrarAnimales(filtrarPorCategoria("ave"));
});

document.getElementById("btnReptil")!.addEventListener("click", () => {
    mostrarAnimales(filtrarPorCategoria("reptil"));
});

document.getElementById("btnPez")!.addEventListener("click", () => {
    mostrarAnimales(filtrarPorCategoria("pez"));
});

document.getElementById("btnAnfibio")!.addEventListener("click", () => {
    mostrarAnimales(filtrarPorCategoria("anfibio"));
});

// EJERCICIO 9
// Implementa un sistema de inventario para una tienda. Se debe permitir añadir productos
// con un nombre, cantidad y precio unitario. Se debe poder añadir productos nuevos, variar el
// precio de los existentes y aumentar o disminuir el número de elementos de un producto en
// cuestión. Ni la cantidad de producto ni el precio pueden ser menor que 0.
// Añade un botón que cuadre caja y diga cuánto vale el total de productos disponibles.

interface ProductoInventario {
    nombre: string;
    cantidad: number;
    precioUnitario: number;
}

let inventario: ProductoInventario[] = [];

function agregarProducto(producto: ProductoInventario): void {
    if (producto.cantidad < 0 || producto.precioUnitario < 0) {
        console.error("La cantidad y el precio unitario no pueden ser menores que 0.");
        return;
    }
    inventario.push(producto);
    mostrarInventario();
}

function modificarPrecio(nombre: string, nuevoPrecio: number): void {
    if (nuevoPrecio < 0) {
        console.error("El precio unitario no puede ser menor que 0.");
        return;
    }
    const producto = inventario.find((p: ProductoInventario) => p.nombre === nombre);
    if (producto) {
        producto.precioUnitario = nuevoPrecio;
        mostrarInventario();
    } else {
        console.error("Producto no encontrado.");
    }
}

function modificarCantidad(nombre: string, nuevaCantidad: number): void {
    if (nuevaCantidad < 0) {
        console.error("La cantidad no puede ser menor que 0.");
        return;
    }
    const producto = inventario.find((p: ProductoInventario) => p.nombre === nombre);
    if (producto) {
        producto.cantidad = nuevaCantidad;
        mostrarInventario();
    } else {
        console.error("Producto no encontrado.");
    }
}

function calcularValorTotal(): number {
    return inventario.reduce((total, producto) => total + (producto.cantidad * producto.precioUnitario), 0);
}

function mostrarInventario(): void {
    const listaElement = document.getElementById("listaInventario")!;
    listaElement.innerHTML = inventario.map(p => `${p.nombre}: ${p.cantidad} unidades, ${p.precioUnitario}€`).join("<br>");
}

document.getElementById("btnCuadrarCaja")!.addEventListener("click", () => {
    const valorTotal = calcularValorTotal();
    alert(`El valor total de los productos disponibles es: ${valorTotal}€`);
});


// EJERCICIO 10
// Escribe un programa que reciba un objeto que represente el Pedido de una tienda online. El
// pedido ha de constar de la siguiente información:
// Cliente: Objeto con datos del cliente (nombre, dirección y correo electrónico)
// Productos: array de Productos, donde cada producto tiene un nombre,categoría, cantidad y
// precio unitario.
// Fecha: la fecha del pedido.
// Las categorías del producto solo pueden ser “alimentación”, “ocio”, “hogar”, “higiene
// personal” y “textil y calzado”.
// Cuando se quiera saber el contenido de un pedido se mostrará un resumen de sus
// principales características.

interface Cliente {
    nombre: string;
    direccion: string;
    correo: string;
}

interface ProductoPedido {
    nombre: string;
    categoria: "alimentación" | "ocio" | "hogar" | "higiene personal" | "textil y calzado";
    cantidad: number;
    precioUnitario: number;
}

interface Pedido {
    cliente: Cliente;
    productos: ProductoPedido[];
    fecha: Date;
}

function mostrarResumenPedido(pedido: Pedido): void {
    const { cliente, productos, fecha } = pedido;
    const total = productos.reduce((sum, producto) => sum + (producto.cantidad * producto.precioUnitario), 0);

    console.log(`Resumen del Pedido:`);
    console.log(`Cliente: ${cliente.nombre}`);
    console.log(`Dirección: ${cliente.direccion}`);
    console.log(`Correo: ${cliente.correo}`);
    console.log(`Fecha: ${fecha.toLocaleDateString()}`);
    console.log(`Productos:`);
    productos.forEach(producto => {
        console.log(`- ${producto.nombre} (${producto.categoria}): ${producto.cantidad} x ${producto.precioUnitario}€`);
    });
    console.log(`Total: ${total.toFixed(2)}€`);
}

// Ejemplo de uso
const pedido: Pedido = {
    cliente: {
        nombre: "Mía Nicole González",
        direccion: "Calle Informática 33",
        correo: "mia.gonzalez@example.com"
    },
    productos: [
        { nombre: "Manzana", categoria: "alimentación", cantidad: 5, precioUnitario: 0.5 },
        { nombre: "Juguete", categoria: "ocio", cantidad: 2, precioUnitario: 15.0 },
        { nombre: "Detergente", categoria: "hogar", cantidad: 1, precioUnitario: 3.75 }
    ],
    fecha: new Date()
};

mostrarResumenPedido(pedido);

// EJERCICIO 11
// En un programa, se tiene una lista de Entrenadores Pokémon. Cade Entrenador tiene un
// nombre, una región de origen (Kanto, Johto, Hoenn, Sinnoh, Teselia, Kalos, Alola, Galar o
// Paldea) y un Pokémon asociado como compañero. Casa pokémon puede tener un mote (si
// no, es el nombre de la especie), el nombre de la especie (por ejemplo: Pikachu, Charizard,
// Mewtwo, Dracovish, Scorbunny, Zamazenta, Xerneas, Cödigo Cero, etc.) y un tipo1
// (obligatorio) y un tipo2 (opcional) entre las siguientes opciones: normal, fuego, planta, agua,
// eléctrico, tierra, roca, veneno, hielo, acero, lucha, volador, fantasma, bicho, psíquico, hada,
// siniestro y dragón.
// Deberemos poder añadir nuevos entrenadores, y de cada uno se podrá mostrar la
// información asociada.
// NOTA: Aunque las especies de pokémon estén limitadas, como son 1008, bien modelarlo
// permitiendo solo un subconjunto de dichas especies o permitiendo que el valor de entrada
// sea texto libre.

interface Pokemon {
    mote?: string;
    especie: string;
    tipo1: "normal" | "fuego" | "planta" | "agua" | "eléctrico" | "tierra" | "roca" | "veneno" | "hielo" | "acero" | "lucha" | "volador" | "fantasma" | "bicho" | "psíquico" | "hada" | "siniestro" | "dragón";
    tipo2?: "normal" | "fuego" | "planta" | "agua" | "eléctrico" | "tierra" | "roca" | "veneno" | "hielo" | "acero" | "lucha" | "volador" | "fantasma" | "bicho" | "psíquico" | "hada" | "siniestro" | "dragón";
}

interface Entrenador {
    nombre: string;
    region: "Kanto" | "Johto" | "Hoenn" | "Sinnoh" | "Teselia" | "Kalos" | "Alola" | "Galar" | "Paldea";
    pokemon: Pokemon;
}

class EntrenadorManager {
    private entrenadores: Entrenador[] = [];

    agregarEntrenador(entrenador: Entrenador): void {
        this.entrenadores.push(entrenador);
    }

    mostrarEntrenadores(): void {
        this.entrenadores.forEach(entrenador => {
            console.log(`Entrenador: ${entrenador.nombre}`);
            console.log(`Región: ${entrenador.region}`);
            const { mote, especie, tipo1, tipo2 } = entrenador.pokemon;
            console.log(`Pokémon: ${mote ? mote : especie} (${especie})`);
            console.log(`Tipo 1: ${tipo1}`);
            if (tipo2) {
                console.log(`Tipo 2: ${tipo2}`);
            }
            console.log('---');
        });
    }
}

const manager = new EntrenadorManager();

const entrenador1: Entrenador = {
    nombre: "Ash Ketchum",
    region: "Kanto",
    pokemon: {
        especie: "Pikachu",
        tipo1: "eléctrico"
    }
};

const entrenador2: Entrenador = {
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