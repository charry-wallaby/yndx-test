import './components/carousel';

import SmoothScrollMagic from './components/smoothScroll';
let smoothScrollAllPage = new SmoothScrollMagic;
smoothScrollAllPage.init();

const layout = document.querySelector('.layout');
const pageY = () => {
    return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
}

if(!layout.classList.contains('removeSmoothScroll')){
    window.addEventListener("optimizedScroll", function() {
        if (pageY() > 10) {
            document.body.classList.add("is-scrolled");
        } else {
            document.body.classList.remove("is-scrolled");
        }
    });
}

let isTouch = false;
if ('ontouchstart' in document.documentElement) {
    isTouch = true;
}
document.body.className += isTouch ? ' touch' : ' no-touch';