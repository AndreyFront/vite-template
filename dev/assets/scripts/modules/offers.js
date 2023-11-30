export default function offers() {
    const mains = document.querySelectorAll('[data-offers="main"]')

    if (!mains.length) return

    mains.forEach(main => {
        const btn = main.querySelector('[data-offers="btn"]'),
            mContainer = main.querySelector('[data-offers="m-container"]')

        if (window.matchMedia('(max-width: 576px)').matches) {
            const clonedBtn = btn.cloneNode(true)

            mContainer.append(clonedBtn)
    
            btn.remove()
        }
    })
}