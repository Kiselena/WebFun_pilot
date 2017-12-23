let Switch = document.getElementById('switch');
let backSwitch = document.getElementById('backSwitch');

function cli(data) {
    let i = 0;
    Switch.addEventListener('click', function() {
        if (i < data.length) {
            View.render(Switch.previousElementSibling, data, i);
            console.log(i);
            i++;
        }
    })
    backSwitch.addEventListener('click', function() {
        if (i > 1) {
            i--;
            View.render(backSwitch.nextElementSibling, data, (i - 1));
            console.log(i);
        }
    })
}
cli(articles);

let sliderNext = document.getElementById('sliderNext');
let sliderBack = document.getElementById('sliderBack');
let image = document.querySelector('.galery__image');

function slider() {
    let i = 0;
    sliderNext.addEventListener('click', function() {
        if (i < imageSrc.length - 1) {
            i++;
            image.style.backgroundImage = "url('" + imageSrc[i] + "')";
            console.log(i);
        }
    })
    sliderBack.addEventListener('click', function() {
        if (i > 0) {
            i--;
            image.style.backgroundImage = "url('" + imageSrc[i] + "')";
            console.log(i);
        }
    })
}
slider();