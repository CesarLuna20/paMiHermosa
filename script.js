onload = () => {
    document.body.classList.remove("container");
  };



// Array de nombres de imágenes (rutas relativas)
const images = [
  "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg",
  "6.jpg", "7.jpg", "8.jpg", "9.jpg", "10.jpg",
  "11.jpg", "12.jpg", "13.jpg", "14.jpg", "15.jpg",
  "16.jpg", "17.jpg", "18.jpg", "19.jpg", "20.jpg"
];


let index = 0;

// Función para cambiar la imagen
const changeImage = () => {
  const imagePath = `./${images[index]}`; // Construye la ruta relativa
  document.getElementById("slideshow").src = imagePath; // Cambia la imagen
};

// Función para avanzar a la siguiente imagen
const nextImage = () => {
  index = (index + 1) % images.length; // Avanza al siguiente índice
  changeImage();
};

// Función para retroceder a la imagen anterior
const prevImage = () => {
  index = (index - 1 + images.length) % images.length; // Retrocede al índice anterior
  changeImage();
};

const checkRedirect = () => {
  if (images[index] === "11.jpg") {
    window.location.href = "index3.html"; // Si es 11.jpg, redirige a index3.html
  } else {
    window.location.href = "index2.html"; // De lo contrario, redirige a index2.html
  }
};

// Cambia la imagen cada 3 segundos
//setInterval(nextImage, 5000);