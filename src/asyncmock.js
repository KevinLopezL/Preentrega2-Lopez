const productos = [
  {
    id: "1",
    nombre: "Watchmen",
    precio: 3500,
    img: "../img/watchmen.jpg",
    detailp: "Watchmen es una serie limitada de cómics de doce números escrita por Alan Moore e ilustrada por Dave Gibbons. Originalmente publicado por DC Comics como una serie limitada mensual entre 1986 a 1987, más tarde se volvió a publicar como un libro en rústica comercial, que popularizó el formato de novela gráfica",
    idCat: "2",
  },
  {
    id: "2",
    nombre: "Batman",
    precio: 2500,
    img: "../img/Batman.jpg",
    detailp: "Bruce Wayne se despierta en el Asilo Arkham. Joven. Cuerdo. Y... él nunca fue Batman. Así comienza este extenso cuento del Caballero Oscuro a medida que se embarca en una búsqueda a través de un paisaje devastado con un enorme elenco de caras conocidas del Universo DC.",
    idCat: "2",
  },
  {
    id: "3",
    nombre: "Llavero Avengers",
    precio: 1200,
    img: "../img/LlaveroAvenger.jpg",
    detailp: "Llavero Avengers - Los vengadores, de metal, mide 7 cms de alto x 5,5cms de ancho. Ideal para las llaves del hogar, auto, oficina o para coleccionar.",
    idCat: "3",
  },
  {
    id: "4",
    nombre: "Funko Morty",
    precio: 5000,
    img: "../img/FunkoMorty.jpg",
    detailp: "Personaje: Morty With Glorzo Marca: Funko, línea pop Licencia: Rick & Morty",
    idCat: "3",
  },
  {
    id: "5",
    nombre: "Old Man Logan",
    precio: 3000,
    img: "../img/Wolverine.jpg",
    detailp: "Pocos sobrevivieron a la purga que la unión de los villanos llevó a cabo. Uno de los pocos supervivientes fue Wolverine, un hombre que ya no responde por ese alias. Ahora es solo Logan, y Logan ha jurado no volver a matar o hacer daño a otro ser vivo en lo que le quede de vida.",
    idCat: "2",
  },
  {
    id: "6",
    nombre: "Spiderman Noir",
    precio: 3500,
    img: "../img/SpidermanNoir.jpg",
    detailp: "¡Muerte y misterio al estilo Marvel! El año: 1939. A medida que el espectro de la guerra empieza a asomarse desde el horizonte, un Spider-Man oscuro hace su parte luchando en casa. ¡Pero cuando alguien es asesinado en el club nocturno de Black Cat y todas las pistas apunten al extranjero, Spidey no tendrá más opción que tomar el siguiente vuelo a Europa!",
    idCat: "2",
  },
  {
    id: "7",
    nombre: "Remera Rick y Morty",
    precio: 6500,
    img: "../img/RemeraMorty.jpg",
    detailp: "Remera negra talle XL (Extra Extra Large / Extra Extra Grande) de algodón de excelente calidad con un diseño sublimado de Rick utilizando ropa casual sosteniendo un monitor mientras escucha música con su walkman.",
    idCat: "3",
  },
  
];

export const getProductos = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productos);
    }, 100);
  });
};

//Creamos una nueva función similar pero que nos retorne un solo item:

export const getUnProducto = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const producto = productos.find((prod) => prod.id === id);
      resolve(producto);
    }, 100);
  });
};

//Creamos una nueva función que retorna toda la categoría.

export const getProductosPorCategoria = (idCategoria) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const productosCategoria = productos.filter(
        (prod) => prod.idCat === idCategoria
      );
      resolve(productosCategoria);
    }, 100);
  });
};
