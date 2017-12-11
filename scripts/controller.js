let Switch = document.getElementById('switch');
let backSwitch = document.getElementById('backSwitch');

function cli(data) {
    let i = 0;
    Switch.addEventListener('click', function() {
        Switch.classList.add('active');
        if (i < data.length) {
            View.render(Switch.previousElementSibling, data, i);
            console.log(i);
            i++;
        }
    })
    backSwitch.addEventListener('click', function() {
        backSwitch.classList.add('active');
        if (i > 1) {
            i--;
            View.render(backSwitch.nextElementSibling, data, (i - 1));
            console.log(i);
        }
    })
}
cli(articles);