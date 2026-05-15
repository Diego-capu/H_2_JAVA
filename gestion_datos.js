// TASK 1: Creación del objeto de productos
const productos = {
    1: {
        id: 1,
        nombre: "Laptop Dell",
        precio: 1200
    },
    2: {
        id: 2,
        nombre: "Mouse inalámbrico",
        precio: 25
    },
    3: {
        id: 3,
        nombre: "Teclado mecánico",
        precio: 80
    },
    4: {
        id: 4,
        nombre: "Monitor 27\"",
        precio: 350
    }
};

// Función de validación para productos
function validarProducto(producto) {
    if (!producto || typeof producto.id !== 'number' || 
        typeof producto.nombre !== 'string' || producto.nombre.trim() === '' ||
        typeof producto.precio !== 'number' || producto.precio <= 0) {
        console.error("Producto inválido:", producto);
        return false;
    }
    return true;
}

// Validar todos los productos
console.log("=== Validación de productos ===");
Object.values(productos).forEach(prod => {
    validarProducto(prod);
});

// TASK 2: Uso de Set con números
const numeros = new Set([5, 10, 15, 10, 20, 5, 25]);
console.log("Set después de eliminar duplicados:", numeros);

numeros.add(30);                    // Agregar nuevo número
console.log("Después de .add(30):", numeros);

console.log("¿Existe el 15?", numeros.has(15));
numeros.delete(10);                 // Eliminar un número
console.log("Después de eliminar 10:", numeros);

console.log("Recorriendo el Set con for...of:");
for (let num of numeros) {
    console.log(num);
}

// TASK 3: Creación del Map (categoría -> nombre del producto)
const categoriaMap = new Map();
categoriaMap.set("Electrónica", productos[1].nombre);
categoriaMap.set("Accesorios", productos[2].nombre);
categoriaMap.set("Periféricos", productos[3].nombre);
categoriaMap.set("Monitores", productos[4].nombre);

console.log("Map de categorías:", categoriaMap);

// TASK 4: Iteración sobre las estructuras
console.log("\n=== Iteración con for...in en el objeto de productos ===");
for (let key in productos) {
    const prod = productos[key];
    console.log(`ID: ${key} | Nombre: ${prod.nombre} | Precio: $${prod.precio}`);
}

console.log("\n=== Iteración con for...of en el Set ===");
for (let num of numeros) {
    console.log("Número único:", num);
}

console.log("\n=== Iteración con forEach en el Map ===");
categoriaMap.forEach((nombre, categoria) => {
    console.log(`Categoría: ${categoria} → Producto: ${nombre}`);
});

// TASK 5: Lista completa y pruebas finales
console.log("\n=== Lista completa de productos (objeto) ===");
console.log(productos);

console.log("\n=== Productos únicos (Set de IDs) ===");
const idsUnicos = new Set(Object.keys(productos).map(Number));
console.log(idsUnicos);

console.log("\n=== Categorías y nombres (Map) ===");
console.log(categoriaMap);

console.log("\n✅ Todas las tareas completadas con éxito, Papi.");