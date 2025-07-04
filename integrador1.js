const prompt = require("prompt-sync")({ sigint: true });
//BIENVENIDA/OS!!!
//Soy Martina Gandolfo, tengo 19 años y soy de Argentina.
//Estoy muy emocionada de presentarles mi primer trabajo integrador del curso de JavaScript.
//Este es mi trabajo integrador, espero que cumpla con todas las pautas y que sea lo que esperan ver en esta etapa del curso.
//Intente usar todo lo que pidieron y además agregarle un poco de mi estilo personal,para que sea más estetico.
// Espero que lo disfruten tanto como yo disfrute hacerlo,tuve compicaciones pero no me rendí y lo logré terminar.
//respeté cada paso asi era més facil de seguir y leer el codigo.
console.log("⋆｡ ﾟ☁︎｡ ⋆｡ ﾟ☾ ﾟ｡ ⋆ Bienvenidos a esta biblioteca virtual ⋆｡ ﾟ☁︎｡ ⋆｡ ﾟ☾ ﾟ｡ ⋆");
// Integrador de Biblioteca virtual
// Este código implementa un sistema de gestión de biblioteca con funcionalidades para manejar libros y usuarios.
// Punto 1.a) Crear el array de libros
const libros = [
  { id: 1, titulo: "Cien años de soledad", autor: "Gabriel García Márquez", año: 1967, género: "Realismo mágico", disponible: true },
  { id: 2, titulo: "1984", autor: "George Orwell", año: 1949, género: "Distopía", disponible: true },
  { id: 3, titulo: "Rayuela", autor: "Julio Cortázar", año: 1963, género: "Experimental", disponible: false },
  { id: 4, titulo: "Ficciones", autor: "Jorge Luis Borges", año: 1944, género: "Fantasía", disponible: true },
  { id: 5, titulo: "Orgullo y prejuicio", autor: "Jane Austen", año: 1813, género: "Romance", disponible: true },
  { id: 6, titulo: "El principito", autor: "Antoine de Saint-Exupéry", año: 1943, género: "Fábula", disponible: true },
  { id: 7, titulo: "Don Quijote", autor: "Miguel de Cervantes", año: 1605, género: "Novela", disponible: true },
  { id: 8, titulo: "El túnel", autor: "Ernesto Sabato", año: 1948, género: "Psicológico", disponible: false },
  { id: 9, titulo: "Fahrenheit 451", autor: "Ray Bradbury", año: 1953, género: "Ciencia ficción", disponible: true },
  { id: 10, titulo: "Crimen y castigo", autor: "Fiódor Dostoyevski", año: 1866, género: "Filosófico", disponible: true }
];
// Punto 1.b) Crear el array de usuarios
const usuarios = [
  { id: 1, nombre: "Malena", email: "malena9@gmail.com", librosPrestados: [3] },
  { id: 2, nombre: "Lucas", email: "lucass@gmail.com", librosPrestados: [8] },
  { id: 3, nombre: "Facundo", email: "facuku@gmail.com", librosPrestados: [] },
  { id: 4, nombre: "Erik", email: "eriking@gmail.com", librosPrestados: [2, 6] },
  { id: 5, nombre: "Ruth", email: "rutyty@gmail.com", librosPrestados: [] }
];
// Punto 2.a) Agregar un nuevo libro
function agregarLibro(id, titulo, autor, año, género) {
  libros.push({ id, titulo, autor, año, género, disponible: true });
  console.log(`Libro "${titulo}" agregado exitosamente.`);
}

// Punto 2.b) Buscar libro por título, autor o género
function buscarLibro(criterio, valor) {
  const criteriosValidos = ["titulo", "autor", "genero"];

  if (!criteriosValidos.includes(criterio)) {
    console.log("Criterio inválido. Usa 'titulo', 'autor' o 'genero'.");
    return;
  }

  const resultados = [];

  for (let i = 0; i < libros.length; i++) {
    const campoLibro = libros[i][criterio];
    if (campoLibro && campoLibro.toLowerCase().includes(valor.toLowerCase())) {
      resultados.push(libros[i]);
    }
  }

  if (resultados.length > 0) {
    console.log("Libros encontrados:");
    resultados.forEach(libro => console.log(libro));
  } else {
    console.log("No se encontraron libros con ese criterio!!");
  }
}

// Punto 2.c) Ordenar libros por título o año usando bubble sort
function ordenarLibros(criterio) {
  const copia = [...libros];

  for (let i = 0; i < copia.length - 1; i++) {
    for (let j = 0; j < copia.length - i - 1; j++) {
      if (copia[j][criterio] > copia[j + 1][criterio]) {
        [copia[j], copia[j + 1]] = [copia[j + 1], copia[j]];
      }
    }
  }

  console.log(`Libros ordenados por ${criterio}:`);
  console.log(copia);
}
// Punto 2.d) Eliminar libro por id
function borrarLibro(id) {
  const index = libros.findIndex(libro => libro.id === id);
  if (index !== -1) {
    const eliminado = libros.splice(index, 1)[0];
    console.log(`Libro "${eliminado.titulo}" eliminado.`);
  } else {
    console.log("Libro no encontrado!!");
  }
}
// Punto 3.a) Registrar nuevo usuario
function registrarUsuario(nombre, email) {
  const nuevoId = usuarios.length + 1;
  usuarios.push({ id: nuevoId, nombre, email: email.toLowerCase(), librosPrestados: [] });
  console.log(`Usuario ${nombre} registrado con éxito.`);
}
// Punto 3.b) Mostrar todos los usuarios
function mostrarTodosLosUsuarios() {
  return usuarios;
}
// Punto 3.c) Buscar usuario por email
function buscarUsuario(email) {
  return usuarios.find(u => u.email.toLowerCase() === email.toLowerCase()) || "Usuario no encontrado!!";
}
// Punto 3.d) Borrar usuario por nombre y email
function borrarUsuario(nombre, email) {
  const index = usuarios.findIndex(u => u.nombre === nombre && u.email.toLowerCase() === email.toLowerCase());
  if (index !== -1) {
    const eliminado = usuarios.splice(index, 1)[0];
    console.log(`Usuario ${eliminado.nombre} eliminado.`);
  } else {
    console.log("Usuario no encontrado.");
  }
}
// Punto 4.a) Prestar libro a usuario
function prestarLibro(idLibro, idUsuario) {
  const libro = libros.find(l => l.id === idLibro);
  const usuario = usuarios.find(u => u.id === idUsuario);

  if (!libro || !libro.disponible) return "Libro no disponible o no encontrado.";
  if (!usuario) return "Usuario no encontrado.";

  libro.disponible = false;
  usuario.librosPrestados.push(idLibro);
  return `Libro "${libro.titulo}" prestado a ${usuario.nombre}.`;
}
// Punto 4.b) Devolver libro
function devolverLibro(idLibro, idUsuario) {
  const libro = libros.find(l => l.id === idLibro);
  const usuario = usuarios.find(u => u.id === idUsuario);

  if (!libro || !usuario) return "Libro o usuario no encontrado.";

  const index = usuario.librosPrestados.indexOf(idLibro);
  if (index !== -1) {
    usuario.librosPrestados.splice(index, 1);
    libro.disponible = true;
    return `Libro "${libro.titulo}" devuelto por ${usuario.nombre}.`;
  } else {
    return "El usuario no tiene este libro prestado.";
  }
}
// Punto 5.a) Generar reporte de libros
function generarReporteLibros() {
  const totalLibros = libros.length;

  const librosPrestados = libros.filter(libro => !libro.disponible).length;

  const cantidadPorGenero = libros.reduce((acc, libro) => {
    acc[libro.género] = (acc[libro.género] || 0) + 1;
    return acc;
  }, {});

  const libroMasAntiguo = libros.reduce((a, b) => (a.año < b.año ? a : b));
  const libroMasNuevo = libros.reduce((a, b) => (a.año > b.año ? a : b));

  console.log("📘 Reporte de Libros:");
  console.log("➡ Total de libros:", totalLibros);
  console.log("➡ Libros prestados:", librosPrestados);
  console.log("➡ Cantidad por género:", cantidadPorGenero);
  console.log("➡ Libro más antiguo:", libroMasAntiguo.titulo, `(${libroMasAntiguo.año})`);
  console.log("➡ Libro más nuevo:", libroMasNuevo.titulo, `(${libroMasNuevo.año})`);
}
// Punto 6.a) Libros con títulos que contienen más de una palabra solo con letras
function librosConPalabrasEnTitulo() {
  const regexSoloLetras = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;

  const librosFiltrados = libros.filter(libro => {
    const palabras = libro.titulo.trim().split(/\s+/);
    return palabras.length > 1 && regexSoloLetras.test(libro.titulo);
  });

  const titulos = librosFiltrados.map(libro => libro.titulo);

  console.log("📗 Títulos con más de una palabra (solo letras):", titulos);
  return titulos;
}
// Punto 7.a) Estadísticas de años de publicación
function calcularEstadisticas() {
  const años = libros.map(libro => libro.año);

  const promedio = Math.round(años.reduce((a, b) => a + b, 0) / años.length);

  const frecuencias = {};
  let maxFrecuencia = 0;
  let añoMasFrecuente;

  for (let año of años) {
    frecuencias[año] = (frecuencias[año] || 0) + 1;
    if (frecuencias[año] > maxFrecuencia) {
      maxFrecuencia = frecuencias[año];
      añoMasFrecuente = año;
    }
  }

  const diferencia = Math.max(...años) - Math.min(...años);

  console.log(" Estadísticas:");
  console.log("➡ Promedio de años:", promedio);
  console.log("➡ Año más frecuente:", añoMasFrecuente);
  console.log("➡ Diferencia entre más nuevo y más antiguo:", diferencia);
}
// Punto 8.a) Normalizar títulos, autores y emails
function normalizarDatos() {
  libros.forEach(libro => {
    libro.titulo = libro.titulo.toUpperCase();
    libro.autor = libro.autor.trim();
  });

  usuarios.forEach(usuario => {
    usuario.email = usuario.email.toLowerCase();
  });

  console.log("✔ Datos normalizados correctamente.");
}
function alerta(mensaje) {
    console.log(mensaje);
    }
// Punto 9: Menú principal (requiere entorno con prompt)
function menuPrincipal() {
  let opcion;

  do {
    opcion = prompt(`
｡°✩ ⋆｡‧˚ʚ Menú principal ɞ˚‧｡⋆ ｡°✩
1.   ╰┈➤ Agregar libro
2.   ╰┈➤ Buscar libro
3.   ╰┈➤ Ordenar libros
4.   ╰┈➤ Borrar libro
5.   ╰┈➤ Registrar usuario
6.   ╰┈➤ Mostrar usuarios
7.   ╰┈➤ Buscar usuario
8.   ╰┈➤ Borrar usuario
9.   ╰┈➤ Prestar libro
10.  ╰┈➤ Devolver libro
11.  ╰┈➤ Generar reporte
12.  ╰┈➤ Libros con varias palabras
13.  ╰┈➤ Estadísticas
14.  ╰┈➤ Normalizar datos
15.  ╰┈➤ Salir.•.•.•.
☆ Elegí una opción ☆ :
`);

    switch (opcion) {
      case "1":
        const id = libros.length + 1;
        const titulo = prompt("Título: ");
        const autor = prompt("Autor: ");
        const año = parseInt(prompt("Año: "));
        const genero = prompt("Género: ");
        agregarLibro(id, titulo, autor, año, genero);
        break;

      case "2":
        const crit = prompt(" ➔ Buscar por: titulo / autor / género: ").toLowerCase();
        
        console.log(buscarLibro(crit));
        break;

      case "3":
        const criterio = prompt("➔ Ordenar por: titulo / año: ");
        ordenarLibros(criterio);
        break;

      case "4":
        const idBorrar = parseInt(prompt(" ➔ ID del libro a borrar: "));
        borrarLibro(idBorrar);
        break;

      case "5":
        const nombre = prompt(" ➔ Nombre del usuario: ");
        const email = prompt(" ➔ Email del usuario: ");
        registrarUsuario(nombre, email);
        break;

      case "6":
        console.log(mostrarTodosLosUsuarios());
        break;

      case "7":
        const emailBuscado = prompt("➔ Email del usuario a buscar: ");
        console.log(buscarUsuario(emailBuscado));
        break;

      case "8":
        const nom = prompt("➔ Nombre del usuario: ");
        const em = prompt("➔ Email del usuario: ");
        borrarUsuario(nom, em);
        break;

      case "9":
        const idLibro = parseInt(prompt("➔ ID del libro a prestar: "));
        const idUsuario = parseInt(prompt("➔ ID del usuario: "));
        console.log(prestarLibro(idLibro, idUsuario));
        break;

      case "10":
        const idLibroDev = parseInt(prompt("➔ ID del libro a devolver: "));
        const idUsuarioDev = parseInt(prompt("➔ ID del usuario: "));
        console.log(devolverLibro(idLibroDev, idUsuarioDev));
        break;

      case "11":
        generarReporteLibros();
        break;

      case "12":
        librosConPalabrasEnTitulo();
        break;

      case "13":
        calcularEstadisticas();
        break;

      case "14":
        normalizarDatos();
        break;

        case "15":
        console.log(" ⋆｡ ﾟ☁︎｡ ⋆｡ ﾟ☾ ﾟ｡ ⋆ Saliendo del sistema ⋆｡ ﾟ☁︎｡ ⋆｡ ﾟ☾ ﾟ｡ ⋆" );
        break;
    }
  } while (opcion !== "15");
}
// Llamar a la función para iniciar el menú
menuPrincipal();
