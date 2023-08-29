import Swiper, { Navigation, EffectCreative } from "swiper";
Swiper.use([Navigation, EffectCreative]);


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

    // const someFunc = (instance) => {
    //     if (instance) {
    //         instance.on('slideChange', function (e) {
    //             console.log('*** mySwiper.activeIndex', instance.activeIndex);
    //         });
    //     }
    // };

    resizableSwiper(
        '(max-width: 575px) and (orientation: portrait)',
        '.access__carousel',
        {
            slidesPerView: 1,
            speed: 600,
            effect: "creative",
            creativeEffect: {
                prev: {
                    shadow: false,
                    translate: ["-120%", 0, -500],
                },
                next: {
                    shadow: false,
                    translate: ["120%", 0, -500],
                },
            },
            navigation: {
                nextEl: '.access__carousel-nav_btn.--next',
                prevEl: '.access__carousel-nav_btn.--prev',
            },
        },
        // someFunc
    );
});
