// Progressive loading of images
let imagesToLoad = document.querySelectorAll('img[data-src]');
console.log("imagesToLoad: " + String(imagesToLoad))
const loadImages = (image) => {
    image.setAttribute('src', image.getAttribute('data-src'));
    image.onLoad = () => {
        image.removeAttribute('data-src');
    };
};
imagesToLoad.forEach((img) => {
    loadImages(img);
});
