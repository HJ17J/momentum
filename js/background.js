const images = ["626893.jpg", "694833.jpg", "765645.jpg", "3045622091.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

document.body.style.backgroundImage = `url(img/${chosenImage})`;
