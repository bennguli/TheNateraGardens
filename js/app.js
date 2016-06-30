$(document).foundation()

//sliding image js
//getting the element's id and saving it
var blue = document.getElementById("slider");
//an array of images
var orange = ["img/sleep.jpg", "img/honey.jpg", "img/waoo.jpg", "img/Weddings4.jpg", "img/ixchel-beach-hotel.jpg", "img/musica.jpg","img/coastalview.jpg","img/www.kidsfunincyprus.com%20playground%20Cyprus%207.JPG"];
//counter
var counter = 0;
//function to image slider
function slidy() {
    blue.src = orange[counter];
    counter++;
    //counter reset
    if (counter >= orange.length) {
        counter = 0;
    }
}
setInterval(slidy, 3000);
