window.addEventListener('load', function () {
    let menu = document.querySelector('.menu');
    menu.addEventListener('click', function (e) {
        let link = e.target;

        if (link.classList.contains('menu__link')) {
            e.preventDefault();
            link.classList.add('menu__link-active');
            scrollToTarget(link.hash, 70);
        }
    });

    if (location.hash !== '') {
        scrollToTarget(location.hash, 70);
    }
    let btn = document.querySelector('.btn_scrolltop');

    let menuScroll = document.querySelectorAll('a');

    window.onscroll = (e) => {
        let docTop = getBodyScrollTop();
        if (docTop >= 100) {
            btn.classList.add("active")
        } else {
            btn.classList.remove("active")
        }
        for (let i = menuScroll.length - 1; i >= 0; i--) {
            let top = document.querySelector(menuScroll[i].hash).offsetTop - 300;
            if (docTop > top) {
                menu.querySelector('.menu__link-active').classList.remove('menu__link-active');
                menuScroll[i].classList.add('menu__link-active');
                break;
            }
        }
    };

    btn.addEventListener('click', () => {
        scrollToTarget('#about', 10)
    });

    function scrollToTarget(id, topIndent) {
        let target = document.querySelector(id);
        if (target !== null) {
            let pos = target.offsetTop - topIndent;
            window.scrollTo({
                top: pos,
                behavior: 'smooth'
            });

            /* window.scrollTo(0, pos); */
        }
    }

    function getBodyScrollTop() {
        return self.pageYOffset || (document.documentElement && document.documentElement.scrollTop) || (document.body && document.body.scrollTop);
    }
});