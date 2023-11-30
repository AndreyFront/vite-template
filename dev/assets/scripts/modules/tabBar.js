import Swiper from '../../../../node_modules/swiper/swiper-bundle'

export default function tabBar() {
    const mains = document.querySelectorAll('[data-tab-bar="main"]')

    if (!mains.length) return

    mains.forEach(main => {
        const slider = main.querySelector('[data-tab-bar="slider"]'),
            tabs = main.querySelectorAll('[data-tab-bar="tab"]'),
            swiper = new Swiper(slider, {
                slidesPerView: 'auto',
                freeMode: true
            })

        let eventType = window.matchMedia("(max-width: 992px)").matches ? 'click' : 'touchEnd'

        swiper.on(eventType, (swiper, event) => {
            const el = event.target
                        
            if (el.closest('[data-tab-bar="tab"]')) {
                const tab = el.closest('[data-tab-bar="tab"]')

                tabs.forEach(tabItem => {
                    if (tabItem !== tab) tabItem.classList.remove('active')
                })

                tab.classList.add('active')
            }
        })
    })
}