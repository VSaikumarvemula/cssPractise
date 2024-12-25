const images = [
    'family.jpeg',
    'wifehusband.jpeg',
   ' fatherdaughter.jpg',

];

let currentIndex = 0;

function changeBackground() {
    const hero = document.getElementById('hero');
    hero.style.backgroundImage = `url(${images[currentIndex]})`;
    currentIndex = (currentIndex + 1) % images.length;
}

// Change image every 5 seconds (5000 milliseconds)
setInterval(changeBackground, 5000);

// Initial background image
changeBackground();
