export default function counter() {
    const counters = document.querySelectorAll('[data-counter="counter"]')

    if (!counters.length) return

    counters.forEach(elem => {
        const remove = elem.querySelector('[data-counter="remove"]'),
            add = elem.querySelector('[data-counter="add"]'),
            input = elem.querySelector('[data-counter="input"]'),
            max = +input.getAttribute('max'),
            min = +input.getAttribute('min'),
            step = +input.getAttribute('step'),
            validInput = value => {
                const inputValue = +value
                switch (true) {
                    case inputValue <= min:
                        input.value = min
                        remove.setAttribute('disabled', '')
                        break
                    case inputValue >= max:
                        input.value = max
                        add.setAttribute('disabled', '')
                        break
                    default:
                        input.value = inputValue
                        remove.removeAttribute('disabled')
                        add.removeAttribute('disabled')
                }
            }

        validInput(input.value)

        input.addEventListener('change', () => {
            validInput(input.value)
        })

        add.addEventListener('click', () => {
            input.value = +input.value + step
            validInput(input.value)
        })

        remove.addEventListener('click', () => {
            input.value = +input.value - step
            validInput(input.value)
        })
    })
}
