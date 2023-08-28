import Swiper, {
    Navigation,
    Lazy,
	EffectFade,
    Autoplay,
    EffectCoverflow,
    EffectFlip
} from "swiper";
Swiper.use([Navigation, EffectFade, Lazy, Autoplay, EffectCoverflow, EffectFlip]);


window.addEventListener('DOMContentLoaded', () => {

    const resizableSwiper = (breakpoint, swiperClass, swiperSettings, callback) => {
        let swiper;

        breakpoint = window.matchMedia(breakpoint);

        const enableSwiper = function(className, settings) {
            swiper = new Swiper(className, settings);

            if (callback) {
                callback(swiper);
            }
        }

        const checker = function() {
            if (breakpoint.matches) {
                return enableSwiper(swiperClass, swiperSettings);
            } else {
                if (swiper !== undefined) swiper.destroy(true, true);
                return;
            }
        };

        breakpoint.addEventListener('change', checker);
        checker();
    }

    const someFunc = (instance) => {
        if (instance) {
            instance.on('slideChange', function (e) {
                console.log('*** mySwiper.activeIndex', instance.activeIndex);
            });
        }
    };

    resizableSwiper(
        '(max-width: 767px)',
        '.access__carousel',
        {
        direction: "horizontal",
        slidesPerView: 1,
        loop: false,
        autoHeight: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        },
        someFunc
    );
});
