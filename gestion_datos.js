function ejecutarGestionDatos() {
    console.log("=========================================");
    console.log(" INICIANDO GESTIÓN DE ESTRUCTURAS DE DATOS ");
    console.log("=========================================");
    
    // Función de validación para asegurar que los datos sean correctos
    const validarProducto = (producto) => {
        if (!producto) return false;
        
        const idValido = typeof producto.id === 'string' || typeof producto.id === 'number';
        const nombreValido = typeof producto.nombre === 'string' && producto.nombre.trim() !== '';
        const precioValido = typeof producto.precio === 'number' && producto.precio > 0;
        
        return idValido && nombreValido && precioValido;
    };

    // Creación del objeto de productos
    const catalogoProductos = {
        item1: { id: "P001", nombre: "Laptop Developer Pro", precio: 1200 },
        item2: { id: "P002", nombre: "Monitor Ultrawide", precio: 450 },
        item3: { id: "P003", nombre: "Teclado Mecánico", precio: 150 },
        item4: { id: "P004", nombre: "", precio: -20 } // Producto inválido para probar la validación
    };

    console.log("\n--- LISTA DE PRODUCTOS (OBJETO) ---");
    
    // Iteración con for...in
    for (const clave in catalogoProductos) {
        const producto = catalogoProductos[clave];
        
        // Aplicamos la validación
        if (validarProducto(producto)) {
            console.log(`✅ [${clave}]: ID: ${producto.id} | ${producto.nombre} | $${producto.precio}`);
        } else {
            console.error(`❌ Error en [${clave}]: Datos inválidos o incompletos.`, producto);
        }
    }

    // Uso de métodos de Object
    console.log("\n-> Uso de Object.keys():", Object.keys(catalogoProductos));
    console.log("-> Uso de Object.values():", Object.values(catalogoProductos));
    console.log("-> Uso de Object.entries():", Object.entries(catalogoProductos));


    // ==========================================
    // TASK 2: USO DE SET EN JAVASCRIPT
    // ==========================================
    console.log("\n--- GESTIÓN DE SETS (VALORES ÚNICOS) ---");
    
    // Creamos un Set con valores repetidos
    const idsVisitas = new Set([10, 20, 30, 10, 20, 40, 50]);
    
    // Imprime en consola mostrando cómo elimina duplicados
    console.log("Set original (sin duplicados):", idsVisitas);
    
    // Agregamos un nuevo número
    idsVisitas.add(60);
    console.log("Set después de .add(60):", idsVisitas);
    
    // Verificamos si existe un valor
    console.log("¿El Set contiene el número 30? (.has):", idsVisitas.has(30));
    
    // Eliminamos un número
    idsVisitas.delete(40);
    console.log("Set después de .delete(40):", idsVisitas);
    
    // Recorremos el Set con for...of
    console.log("Recorriendo el Set con for...of:");
    for (const id of idsVisitas) {
        console.log(`ID único visitado: ${id}`);
    }


    // ==========================================
    // TASK 3 & 4: CREACIÓN DE MAP E ITERACIÓN
    // ==========================================
    console.log("\n--- GESTIÓN DE MAPS (CLAVE-VALOR) ---");
    
    // Creamos un Map relacionando Categoría -> Nombre del producto
    const categoriasMap = new Map();
    
    categoriasMap.set("Computación", "Laptop Developer Pro");
    categoriasMap.set("Periféricos", "Monitor Ultrawide");
    categoriasMap.set("Accesorios", "Teclado Mecánico");

    // Recorremos el Map utilizando forEach()
    console.log("Recorriendo el Map con forEach():");
    categoriasMap.forEach((nombreProducto, categoria) => {
        console.log(`Categoría: ${categoria.padEnd(15, ' ')} => Producto: ${nombreProducto}`);
    });

    // Mensaje final en la interfaz
    alert("¡Datos procesados con éxito! Por favor, revisa la Consola (F12) para ver las estructuras de datos en acción.");
}

// Vinculación del evento al botón de la interfaz HTML
document.getElementById('btnProcesar').addEventListener('click', ejecutarGestionDatos);