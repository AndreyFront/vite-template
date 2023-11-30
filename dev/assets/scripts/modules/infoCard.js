export default function infoCard() {
    const cards = document.querySelectorAll('[data-info-card="main"]')

    if (!cards.length) return

    cards.forEach(card => {
        const btnToggle = card.querySelector('[data-info-card="btn-toggle"]')

        btnToggle.addEventListener('click', () => {
            cards.forEach(itemCard => {
                if (itemCard !== card) {
                    itemCard.classList.remove('active')
                }
            })
            card.classList.toggle('active')
        })
    })
}