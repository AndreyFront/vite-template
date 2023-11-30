import Swiper from '../../../../node_modules/swiper/swiper-bundle'

export default function sliderSection() {
    const mains = document.querySelectorAll('[data-slider-section="main"]')

    if (!mains.length) return

    mains.forEach(main => {
        const slider = main.querySelector('[data-slider-section="slider"]'),
            btnPrev = main.querySelector('[data-slider-section="btn-prev"]'),
            btnNext = main.querySelector('[data-slider-section="btn-next"]'),
            swiper = new Swiper(slider, {
                slidesPerView: 'auto',
                spaceBetween: 20,
                navigation: {
                    nextEl: btnNext,
                    prevEl: btnPrev,
                },
                a11y: {
                    prevSlideMessage: 'Предыдущий слайд',
                    nextSlideMessage: 'Следующий слайд',
                },
            })
    })
}