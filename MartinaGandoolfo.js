//Bienvenidxs a mi INTEGRADOR!!
//soy martina Gandolfo, me alegra que esten corrigiendo mi integrador,espero que les guste y sea lo que esperaban!!
const prompt = require("prompt-sync")();

console.log("¡Bienvenido a la Biblioteca Digital!");

//Ejercicio 1
//Creae un array de objetos llamado libros que contenga al menos 10 libros. 
// Cada libro debe tener las siguientes propiedades:
// id (número)
//  título (string),
// autor (string),
// año (número),
// género (string),
// disponible (booleano)
const libros = [
  { id: 1, titulo: "Cien años de soledad", autor: "Gabriel García Márquez", año: 1967, género: "Realismo mágico", disponible: true },
  { id: 2, titulo: "1984", autor: "George Orwell", año: 1949, género: "Distopía", disponible: false },
  { id: 3, titulo: "El gran Gatsby", autor: "F. Scott Fitzgerald", año: 1925, género: "Novela", disponible: true },
  { id: 4, titulo: "Orgullo y prejuicio", autor: "Jane Austen", año: 1813, género: "Romance", disponible: true },
  { id: 5, titulo: "Don Quijote de la Mancha", autor: "Miguel de Cervantes", año: 1605, género: "Novela", disponible: true },
  { id: 6, titulo: "La Odisea", autor: "Homero", año: -800, género: "Épica", disponible: false },
  { id: 7, titulo: "Matar a un ruiseñor", autor: "Harper Lee", año: 1960, género: "Novela", disponible: true },
  { id: 8, titulo: "Crimen y castigo", autor: "Fiódor Dostoyevski", año: 1866, género: "Novela", disponible: false },
  { id: 9, titulo: "El Principito", autor: "Antoine de Saint-Exupéry", año: 1943, género: "Fábula", disponible: true },
  { id: 10, titulo: "Rayuela", autor: "Julio Cortázar", año: 1963, género: "Novela", disponible: true }
];
// Ejercicio 2
// Cree un array de objetos llamado usuarios con al menos 5 usuarios.
// Cada usuario debe tener:

//id (número)
//nombre (string)
// email (string)
// librosPrestados (array de ids de libros)
const usuarios = [
    { id: 1, nombre: "Martina", email: "Martinaagnadolfoo@gmail.com", librosPrestados: [1, 3] },
    { id: 2, nombre: "Franco", email: "Francoo1234@gmail.com", librosPrestados: [2, 4] },
    { id: 3, nombre: "Malena", email: "Malenitanenu@gmail.com", librosPrestados: [5, 6] },
    { id: 4, nombre: "Facundo" , email: "Fakundo18ramirez@gmail.com", librosPrestados: [7, 8] },
    { id: 5, nombre: "Noah" , email: "NoahFrancis02@gmail.com", librosPrestados: [9, 10] }
];
// A)
//  Implemente una función agregarLibro(id, titulo, autor, anio, genero) que agregue un nuevo libro al array libros.
function agregarLibro(id, titulo, autor, anio, genero) {
    const nuevoLibro = { id, titulo, autor, año: anio, género: genero, disponible: true };
    libros.push(nuevoLibro);
} 
if (libros.some(libro => libro.id === id)) {
    console.log("Ya existe un libro con ese ID.");
    return;
}
// B)
//Cree una función buscarLibro(criterio, valor) que permite buscar libros por título, autor o género utilizando el algoritmo de búsqueda lineal
function buscarLibro(criterio, valor) {
    const resultado = [];
    for (let libro of libros) {
        if (libro[criterio] && libro[criterio].toLowerCase().includes(valor.toLowerCase())) {
            resultado.push(libro);
        }
    }
    return resultado;
}
// C)
 //Desarrolle una función ordenarLibros(criterio) que ordena los libros por título o año utilizando el algoritmo de ordenamiento burbuja (bubble sort) y luego muestre los libros ordenados en la consola
function ordenarLibros(criterio) {
    for (let i = 0; i < libros.length - 1; i++) {
        for (let j = 0; j < libros.length - i - 1; j++) {
            if (criterio === "titulo" && libros[j].titulo > libros[j + 1].titulo) {
                [libros[j], libros[j + 1]] = [libros[j + 1], libros[j]];
            } else if (criterio === "año" && libros[j].año > libros[j + 1].año) {
                [libros[j], libros[j + 1]] = [libros[j + 1], libros[j]];
            }
        }
    }
    console.log(libros);
}
// D)
//Desarrolle una función borrarLibro(id) que elimina el libro que se le pase por parámetro

function borrarLibro(id) {
    const index = libros.findIndex(libro => libro.id === id);
    if (index !== -1) {
        libros.splice(index, 1);
    } else {
        console.log("Libro no encontrado");
    }
}
// Ejercicio 3
// A)
// Implemente una función registrarUsuario(nombre, email) que agrega un nuevo usuario al array usuarios
function registrarUsuario(nombre, email) {
    const nuevoUsuario = { 
        id: usuarios.length + 1, 
        nombre, 
        email, 
        librosPrestados: [] 
    };
    usuarios.push(nuevoUsuario);
}

if (usuarios.some(usuario => usuario.email === email)) {
    console.log("Ya existe un usuario con ese email.");
    return;
}
// B)
// Implemente una función mostrarTodosLosUsuarios() que me devuelve el array completo de usuarios
function mostrarTodosLosUsuarios() {
    return usuarios;
}
// C)
// Cree una función buscarUsuario(email) que devuelve la información de un usuario dado su email
function buscarUsuario(email) {
    return usuarios.find(usuario => usuario.email === email);
}
// D)
// Implemente una función borrarUsuario(nombre, email) que elimina el usuario seleccionado.
function borrarUsuario(nombre, email) {
    const index = usuarios.findIndex(usuario => usuario.nombre === nombre && usuario.email === email);
    if (index !== -1) {
        usuarios.splice(index, 1);
    } else {
        console.log("Usuario no encontrado");
    }
}
// Ejercicio 4
// A)
//  Desarrolle una función prestarLibro(idLibro, idUsuario) que marca un libro como no disponible y lo agregue a la lista de libros prestados del usuario
function prestarLibro(idLibro, idUsuario) {
    const libro = libros.find(libro => libro.id === idLibro);
    const usuario = usuarios.find(usuario => usuario.id === idUsuario);
    
    if (libro && usuario) {
        if (libro.disponible) {
            libro.disponible = false;
            usuario.librosPrestados.push(idLibro);
            console.log(`Libro "${libro.titulo}" prestado a ${usuario.nombre}`);
        } else {
            console.log("El libro no está disponible");
        }
    } else {
        console.log("Libro o usuario no encontrado");
    }
}
// B)
//Implemente una función devolverLibro(idLibro, idUsuario) que marca un libro como disponible y lo elimine de la lista de libros prestados del usuario
function devolverLibro(idLibro, idUsuario) {
    const libro = libros.find(libro => libro.id === idLibro);
    const usuario = usuarios.find(usuario => usuario.id === idUsuario);
    
    if (libro && usuario) {
        const index = usuario.librosPrestados.indexOf(idLibro);
        if (index !== -1) {
            libro.disponible = true;
            usuario.librosPrestados.splice(index, 1);
            console.log(`Libro "${libro.titulo}" devuelto por ${usuario.nombre}`);
        } else {
            console.log("El libro no está prestado a este usuario");
        }
    } else {
        console.log("Libro o usuario no encontrado");
    }
}
// Ejercicio 5
// A)
// Cree una función generarReporteLibros() que utiliza métodos avanzados de arrays (.map(), .filter(), .reduce()) para generar un reporte con la siguiente información:
 // Cantidad total de libros.
 // Cantidad de libros prestados.
 // Cantidad de libros por género.
 // Libro más antiguo y más nuevo
function generarReporteLibros() {
    const totalLibros = libros.length;
    const librosPrestados = libros.filter(libro => !libro.disponible).length;
    
    const cantidadPorGenero = libros.reduce((acc, libro) => {
        acc[libro.género] = (acc[libro.género] || 0) + 1;
        return acc;
    }, {});
    
    const libroMasAntiguo = libros.reduce((antiguo, libro) => (libro.año < antiguo.año ? libro : antiguo), libros[0]);
    const libroMasNuevo = libros.reduce((nuevo, libro) => (libro.año > nuevo.año ? libro : nuevo), libros[0]);
    
    return {
        totalLibros,
        librosPrestados,
        cantidadPorGenero,
        libroMasAntiguo,
        libroMasNuevo
    };
}
// Ejercicio 6
// Implemente una función librosConPalabrasEnTitulo() que identifia y muestra todos los libros cuyo título contiene más de una palabra (no títulos que contengan números ni otros caracteres).
//  La función devuelve un array con los títulos de esos libros y lo  muestra en la consola.
// tiene un filtro para que solo sean letras las que se ingresen en el titulo.
function librosConPalabrasEnTitulo() {
    const regex = /^[a-zA-Z\s]+$/; // Expresión regular para letras y espacios
    const librosFiltrados = libros.filter(libro => 
        libro.titulo.split(" ").length > 1 && regex.test(libro.titulo)
    );
    
    const titulos = librosFiltrados.map(libro => libro.titulo);
    console.log(titulos);
    return titulos;
}
// Ejercicio 7
//Desarrolle una función calcularEstadisticas() que utiliza el objeto Math para calcular y mostrar:
 //Promedio de años de publicación de los libros.
 // Año de publicación más frecuente.
 // Diferencia en años entre el libro más antiguo y el más nuevo.
function calcularEstadisticas() {
    const años = libros.map(libro => libro.año);
    
    const promedioAños = años.reduce((sum, año) => sum + año, 0) / años.length;
    
    const añoFrecuente = años.reduce((acc, año) => {
        acc[año] = (acc[año] || 0) + 1;
        return acc;
    }, {});
    
    const añoMasFrecuente = Object.keys(añoFrecuente).reduce((a, b) => 
        añoFrecuente[a] > añoFrecuente[b] ? a : b
    );
    
    const libroMasAntiguo = Math.min(...años);
    const libroMasNuevo = Math.max(...años);
    const diferenciaAños = libroMasNuevo - libroMasAntiguo;
    
    console.log(`Promedio de años de publicación: ${promedioAños}`);
    console.log(`Año de publicación más frecuente: ${añoMasFrecuente}`);
    console.log(`Diferencia en años entre el libro más antiguo (${libroMasAntiguo}) y el más nuevo (${libroMasNuevo}): ${diferenciaAños}`);
}

// Ejercicio 8
 //Cree una función normalizarDatos() que utiliza el método de strings para:
 //Convertir todos los títulos a mayúsculas.
 //Eliminar espacios en blanco al inicio y final de los nombres de autores.
 //Formatear los emails de los usuarios a minúsculas.

function normalizarDatos() {
    libros.forEach(libro => {
        libro.titulo = libro.titulo.toUpperCase();
        libro.autor = libro.autor.trim();
    });
    
    usuarios.forEach(usuario => {
        usuario.email = usuario.email.toLowerCase().trim();
    });
}
// Ejercicio 9
//Implemente una función menuPrincipal() que muestra un menú de opciones al usuario y permite interactuar con el sistema utilizando prompt().
// El menú incluye opciones para todas las funcionalidades anteriores y utiliza estructuras de control.
  
function menuPrincipal() {
    let opcion;
    do {
        console.log("\n--- Menú Principal ---");
        console.log("1. Agregar Libro");
        console.log("2. Buscar Libro");
        console.log("3. Ordenar Libros");
        console.log("4. Borrar Libro");
        console.log("5. Registrar Usuario");
        console.log("6. Mostrar Todos los Usuarios");
        console.log("7. Buscar Usuario");
        console.log("8. Borrar Usuario");
        console.log("9. Prestar Libro");
        console.log("10. Devolver Libro");
        console.log("11. Generar Reporte de Libros");
        console.log("12. Libros con Palabras en Título");
        console.log("13. Calcular Estadísticas");
        console.log("14. Normalizar Datos");
        console.log("0. Salir");

        opcion = parseInt(prompt("Seleccione una opción: "));

        switch (opcion) {
            case 1:
                const id = parseInt(prompt("Ingrese ID del libro: "));
                const titulo = prompt("Ingrese título del libro: ");
                const autor = prompt("Ingrese autor del libro: ");
                const año = parseInt(prompt("Ingrese año de publicación: "));
                const genero = prompt("Ingrese género del libro: ");
                agregarLibro(id, titulo, autor, año, genero);
                break;
            case 2:
                const criterio = prompt("Ingrese criterio de búsqueda (titulo, autor, género): ");
                const valor = prompt(`Ingrese valor para buscar por ${criterio}: `);
                const resultados = buscarLibro(criterio, valor);
                console.log(resultados);
                break;
            case 3:
                const criterioOrdenamiento = prompt("Ingrese criterio de ordenamiento (titulo, año): ");
                ordenarLibros(criterioOrdenamiento);
                break;
            case 4:
                const idBorrar = parseInt(prompt("Ingrese ID del libro a borrar: "));
                borrarLibro(idBorrar);
                break;
            case 5:
                const nombreUsuario = prompt("Ingrese nombre del usuario: ");
                const emailUsuario = prompt("Ingrese email del usuario: ");
                registrarUsuario(nombreUsuario, emailUsuario);
                break;
            case 6:
                console.log(mostrarTodosLosUsuarios());
                break;
            case 7:
                const emailBuscar = prompt("Ingrese email del usuario a buscar: ");
                const usuarioEncontrado = buscarUsuario(emailBuscar);
                console.log(usuarioEncontrado); 
                break;
            case 8:
                const nombreBorrar = prompt("Ingrese nombre del usuario a borrar: ");
                const emailBorrar = prompt("Ingrese email del usuario a borrar: ");
                borrarUsuario(nombreBorrar, emailBorrar);
                break;
            case 9:
                const idLibroPrestar = parseInt(prompt("Ingrese ID del libro a prestar: "));
                const idUsuarioPrestar = parseInt(prompt("Ingrese ID del usuario: "));
                prestarLibro(idLibroPrestar, idUsuarioPrestar);
                break;
            case 10:
                const idLibroDevolver = parseInt(prompt("Ingrese ID del libro a devolver: "));
                const idUsuarioDevolver = parseInt(prompt("Ingrese ID del usuario: "));
                devolverLibro(idLibroDevolver, idUsuarioDevolver);
                break;
            case 11:
                const reporte = generarReporteLibros();
                console.log(reporte);
                break;
            case 12:
                const librosConPalabras = librosConPalabrasEnTitulo();
                console.log(librosConPalabras);
                break;
            case 13:
                calcularEstadisticas();
                break;
            case 14:
                normalizarDatos();
                console.log("Datos normalizados.");
                break;
            case 0:
                console.log("Saliendo del sistema...");
                break;
            default:
                console.log("Opción no válida. Intente nuevamente.");
        }
    } while (opcion !== 0);
}
menuPrincipal();
