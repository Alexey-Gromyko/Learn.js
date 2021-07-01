let burger = document.querySelector('.burger-menu');
let list = document.querySelector('.list');
burger.addEventListener('click', function (e) {
    burger.classList.toggle('active');
    list.classList.toggle('show');
})



const animItems = document.querySelectorAll('.anim-items');

if (animItems.length > 0) {
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll() {
        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;


            let animItemPoint = window.innerHeight - animItemHeight / animStart;

            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }

            if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
                animItem.classList.add('_active');
            } else {
                if (!animItem.classList.contains('anim-no')) {
                    animItem.classList.remove('_active');
                }
            }
        }
    }
    function offset(el) {
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
    }
    setTimeout(() => {
        animOnScroll()
    }, 500)
    
}






(function () {
                        var setting = { "height": 403, "width": 1920, "zoom": 17, "queryString": "Зоопарк, Черкассы, Черкасская область, Украина", "place_id": "ChIJAVjNPvdL0UARgtfJ-1KLpC8", "satellite": false, "centerCoord": [49.41443325956543, 32.028202385443116], "cid": "0x2fa48b52fbc9d782", "lang": "ru", "cityUrl": "/ukraine/cherkasy-35348", "cityAnchorText": "Карта [CITY1], Черкассы, Украина", "id": "map-9cd199b9cc5410cd3b1ad21cab2e54d3", "embed_id": "537354" };
                        var d = document;
                        var s = d.createElement('script');
                        s.src = 'https://1map.com/js/script-for-user.js?embed_id=537354';
                        s.async = true;
                        s.onload = function (e) {
                            window.OneMap.initMap(setting)
                        };
                        var to = d.getElementsByTagName('script')[0];
                        to.parentNode.insertBefore(s, to);
                    })();
