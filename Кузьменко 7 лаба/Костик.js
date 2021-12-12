window.onload = function (){
var images = [
    "https://www.interfax.ru/ftproot/textphotos/2017/07/10/avia700.jpg", 
    "https://tvmig.ru/upload/iblock/55b/%D1%81%D0%B0%D0%BC%D0%BE%D0%BB%D0%B5%D1%82.jpg", 
    "https://atn.ua/sites/default/files/kak-uznat-onlajn-skolko-samoletov-sejchas-v-nebe1-e1550468604211.jpg "
];

var num = 0;
var slider = document.getElementById("slider");

var prevBtn = document.getElementById("prevBtn");
prevBtn.onclick = function (){
    prev();
}

var nextBtn = document.getElementById("nextBtn");
nextBtn.onclick = function (){
    next();
}


function next() {
    num++;
    if(num >= images.length) {
        num = 0;
    }
    slider.src = images[num];
}

function prev() {
    num--;
    if(num < 0) {
        num = images.length-1;
    }
    slider.src = images[num];
}
};

