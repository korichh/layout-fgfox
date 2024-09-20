'use strict';

// Image background
const ibg_init = function () {
    const ibg = document.querySelectorAll('.ibg');
    for (let i = 0; i < ibg.length; i++) {
        if (ibg[i].querySelector('img')) {
            ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
        }
    }
}();

const animation_init = function () {
    const animation = new AnimationListener({
        params: {
            mobile: true,
        },

        selectors: {
            '.hero-inner__title .title1': {
                direction: 'bottom',
            },
            '.hero-inner__title .title2': {
                direction: 'bottom',
                delay: '0.2s',
            },
            '.hero-inner__main .main': {
                direction: 'bottom',
                delay: '0.3s',
            },
            '.hero-inner__main .circle-left-top': {
                direction: 'left',
                delay: '0.3s',
            },
            '.hero-inner__main .circle-right-middle': {
                direction: 'right',
                delay: '0.4s',
            },
            '.hero-inner__main .circle-left-bottom': {
                direction: 'left',
                delay: '0.5s',
            },
            '.hello-block': {
                direction: 'bottom',
            },
            '.hello-block__text': {
                direction: 'bottom',
                delay: '0.2s',
            },
            '.hello-block__button': {
                direction: 'bottom',
                delay: '0.2s',
            },
            '.items-list__left .items-block:nth-child(1)': {
                direction: 'left',
            },
            '.items-list__left .items-block:nth-child(2)': {
                direction: 'left',
                delay: '0.2s',
            },
            '.items-list__right': {
                direction: 'right',
                delay: '0.3s',
            },
            '.feedback-block:nth-child(1)': {
                direction: 'left',
            },
            '.feedback-block:nth-child(2)': {
                direction: 'right',
                delay: '0.2s',
            },
            '.footer-inner': {
                direction: 'bottom',
            }
        },
    });
}();