export default function costServices() {
    const mains = document.querySelectorAll('[data-cost-services="main"]')

    if (!mains.length) return

    mains.forEach(main => {
        const tabBar = main.querySelector('[data-tab-bar="main"]'),
            innerCards = main.querySelectorAll('[data-cost-services="inner-cards"]')

        if (tabBar && innerCards.length) {
            const slider = tabBar.querySelector('[data-tab-bar="slider"]'),
                tabs = tabBar.querySelectorAll('[data-tab-bar="tab"]')

            let eventType = window.matchMedia("(max-width: 992px)").matches ? 'click' : 'touchEnd'

            slider.swiper.on(eventType, (swiper, event) => {
                const el = event.target
                    
                if (el.closest('[data-tab-bar="tab"]')) {
                    const tab = el.closest('[data-tab-bar="tab"]')

                    tabs.forEach((tabItem, index) => {
                        if (tabItem === tab) {
                            innerCards.forEach((innerCard, innerCardIndex) => {
                                if (innerCardIndex === index) {
                                    innerCard.classList.add('active')
                                } else {
                                    innerCard.classList.remove('active')
                                }
                            })
                        }
                    })
                }
            })
        }
    })
}