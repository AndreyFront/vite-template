export default function validate() {
    const forms = document.querySelectorAll('[data-validate]')

    if (!forms.length) return

    forms.forEach(form => {
        form.addEventListener('submit', event => {
            event.preventDefault()

            const inputs = form.querySelectorAll('.input'),
                textareas = form.querySelectorAll('.textarea'),
                dataReqexp = {
                    fio: /^[А-ЯЁа-яё]+(-[А-ЯЁа-яё]+)? [А-ЯЁа-яё]+( [А-ЯЁа-яё]+)?$/,
                    personName: /^[а-яёА-ЯЁ]+$/u,
                    email: /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/,
                    numbers: /^\d+$/,
                },
                error = (el, msg = 'Обязательное поле') => {
                    const message = el.querySelector('.input__message')

                    return {
                        set: () => {
                            if (message) message.innerText = msg
                            el.classList.add(
                                el.classList.contains('input')
                                    ? 'input--error'
                                    : 'textarea--error',
                            )
                        },
                        remove: () => {
                            el.classList.remove(
                                el.classList.contains('input')
                                    ? 'input--error'
                                    : 'textarea--error',
                            )
                            if (message) message.innerText = ''
                        },
                    }
                },
                checkingNumbers = (input, msg) => {
                    const field = input.querySelector('input')
                    if (field.value.match(dataReqexp.numbers)) {
                        error(input).remove()
                    } else {
                        error(input, msg).set()
                    }
                },
                validateTextarea = textarea => {
                    const field = textarea.querySelector('textarea'),
                        valueField = field.value

                    if (field.hasAttribute('required')) {
                        if (valueField === '') {
                            error(textarea).set()
                        } else {
                            error(textarea).remove()
                        }
                    }
                },
                validateInput = input => {
                    const field = input.querySelector('input'),
                        name = field.getAttribute('name'),
                        valueField = field.value

                    if (field.hasAttribute('required')) {
                        if (valueField !== '') {
                            switch (name) {
                                case 'name':
                                    if (
                                        valueField.length >= 2 &&
                                        valueField.match(dataReqexp.personName)
                                    ) {
                                        error(input).remove()
                                    } else {
                                        error(
                                            input,
                                            'Введите корректное имя',
                                        ).set()
                                    }
                                    break
                                case 'fio':
                                    if (
                                        valueField.length > 5 &&
                                        valueField.match(dataReqexp.fio)
                                    ) {
                                        error(input).remove()
                                    } else {
                                        error(
                                            input,
                                            'Введите корректное ФИО',
                                        ).set()
                                    }
                                    break
                                case 'email':
                                    if (valueField.match(dataReqexp.email)) {
                                        error(input).remove()
                                    } else {
                                        error(
                                            input,
                                            'Введите корректный E-mail',
                                        ).set()
                                    }
                                    break
                                case 'phone':
                                    if (valueField.length === 16) {
                                        error(input).remove()
                                    } else {
                                        error(
                                            input,
                                            'Введите полный номер телефона',
                                        ).set()
                                    }
                                    break
                                case 'nameCompany':
                                    if (valueField.length < 5) {
                                        error(input).remove()
                                    } else {
                                        error(
                                            input,
                                            'Введите корректное название компании',
                                        ).set()
                                    }
                                    break
                                case 'paymentAccount':
                                    if (valueField.length === 20) {
                                        error(input).remove()
                                    } else {
                                        error(
                                            input,
                                            'Введите полный номер расчетного счета',
                                        ).set()
                                    }
                                    break
                                case 'kpp':
                                    if (valueField.length === 9) {
                                        error(input).remove()
                                    } else {
                                        error(input, 'Введите полный КПП').set()
                                    }
                                    break
                                case 'bicBank':
                                    if (valueField.length === 9) {
                                        error(input).remove()
                                    } else {
                                        error(
                                            input,
                                            'Введите полный БИК банка',
                                        ).set()
                                    }
                                    break
                                case 'inn':
                                    if (valueField.length === 10) {
                                        error(input).remove()
                                    } else {
                                        error(input, 'Введите полный ИНН').set()
                                    }
                                    break
                                case 'legalAddress':
                                case 'actualAddress':
                                    if (valueField.length > 10) {
                                        error(input).remove()
                                    } else {
                                        error(
                                            input,
                                            'Введите корректный адрес',
                                        ).set()
                                    }
                                    break
                                case 'index':
                                    checkingNumbers(
                                        input,
                                        'Введите корректный индекс',
                                    )
                                    break
                                case 'flat':
                                    checkingNumbers(
                                        input,
                                        'Введите корректный номер квартиры',
                                    )
                                    break
                                case 'floor':
                                    // if (valueField.match(dataReqexp.numbers)) {
                                    //     error(input).remove()
                                    // } else {
                                    //     error(input, 'Введите корректный номер').set()
                                    // }
                                    checkingNumbers(
                                        input,
                                        'Введите корректный номер этажа',
                                    )
                                    break
                                default:
                                    if (valueField.length !== 0) {
                                        error(input).remove()
                                    } else {
                                        error(input).set()
                                    }
                            }
                        } else {
                            error(input).set()
                        }
                    }
                },
                checkFields = () => {
                    inputs.forEach(input => {
                        validateInput(input)
                    })

                    textareas.forEach(textarea => {
                        validateTextarea(textarea)
                    })
                },
                lifeValidate = () => {
                    inputs.forEach(input => {
                        input.addEventListener('click', () => {
                            if (form.getAttribute('data-validate')) {
                                const field = input.querySelector('input')

                                field.addEventListener('input', () =>
                                    validateInput(input),
                                )
                                checkFields()
                            }
                        })
                    })
                },
                validate = () => {
                    let errors = 0

                    inputs.forEach(input => {
                        if (input.classList.contains('input--error')) {
                            errors += 1
                        }
                    })

                    textareas.forEach(input => {
                        if (input.classList.contains('textarea--error')) {
                            errors += 1
                        }
                    })

                    if (errors === 0) {
                        const formData = new FormData(form)
                        console.log('send data')
                        // console.log('Data: ', formData)
                        // console.log('FIO', formData.get('fio'))
                        // console.log('PHONE', formData.get('phone'))
                    }
                }

            lifeValidate()
            checkFields()
            form.setAttribute('data-validate', 'true')

            validate()
        })
    })
}
