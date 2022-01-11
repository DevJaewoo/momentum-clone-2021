const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg"];
const imageOfDay = images[Math.floor(Math.random() * images.length)];

const backgroundImage = document.createElement("img");
backgroundImage.src = `img/${imageOfDay}`;

document.body.appendChild(backgroundImage);
