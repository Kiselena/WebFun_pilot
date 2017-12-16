(function() {
    let container = document.querySelector('.js-scroll-content');
    let items = Array.from(container.querySelectorAll('.js-scroll-item'));
    let itemsNumber = items.length;
    let navLinks = Array.from(document.querySelectorAll('.js-scroll-link'));
    let currentItemIndex = 0;
    let scroll = true;

    let moveSection = index => {
        let positionTop = (-index * 100) + '%';
        container.style.top = positionTop;
        console.log(container.style.top);
    };

    let setLocation = index => window.location = `#${items[index].id}`;

    // Set start params
    container.style.top = 0;
    setLocation(currentItemIndex);
    itemsNumber--;

    // Scrolling section by navigation.
    navLinks.forEach(element => {
        element.addEventListener('click', event => {
            event.preventDefault();
            event.stopPropagation();

            let sectionID = element.getAttribute('href').slice(1);

            currentItemIndex = items.findIndex(element => {
                return element.id === sectionID;
            });

            moveSection(currentItemIndex);
        });
    });

    // Scrolling sections by mouse/touchpad.
    window.addEventListener('wheel', event => {
        event.preventDefault();
        event.stopPropagation();

        let direction = event.deltaY;

        if (scroll) {
            if (direction > 0 && currentItemIndex < itemsNumber) {
                currentItemIndex++;
                scroll = false;
            } else if (direction < 0 && currentItemIndex !== 0) {
                currentItemIndex--;
                scroll = false;
            }
            moveSection(currentItemIndex);
        }

    });

    function moveByKeys(e) {
        switch (e.keyCode) {

            case 40: // если нажата клавиша вниз
                if (scroll && currentItemIndex < itemsNumber)
                    currentItemIndex++;
                moveSection(currentItemIndex);
                scroll = false;
                break;
            case 38: // если нажата клавиша вверх
                if (scroll && currentItemIndex > 0)
                    currentItemIndex--;
                moveSection(currentItemIndex);
                scroll = false;
                break;
        }
    }

    addEventListener("keydown", moveByKeys);

    container.addEventListener('transitionend', () => {
        setTimeout(() => scroll = true, 300);
        setLocation(currentItemIndex);
    });

})();

// let galery = document.querySelector('#galery');
// for (let i = 0; i < galery.children.length; i++) {
//     galery.children[i].addEventListener('click', function(e) {
//         for (let prop of galery.children) {
//             if (prop != galery.children[i]) { prop.classList.remove('active'); }
//         }
//         (this.classList.contains('active')) ? this.classList.remove('active'): this.classList.add('active');
//     });
// }

ymaps.ready(init);
var myMap,
    myPlacemark;

function init() {
    myMap = new ymaps.Map("map", {
        center: [59.88482106, 30.32097950],
        zoom: 17
    });

    myPlacemark = new ymaps.Placemark([59.88528479, 30.32048597], {
        balloonContentHeader: 'Web Fun',
        balloonContentBody: 'Библиотека роста и карьеры'
    });

    myMap.geoObjects.add(myPlacemark);
    myPlacemark.balloon.open();
}