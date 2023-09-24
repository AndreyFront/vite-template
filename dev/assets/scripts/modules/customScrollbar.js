import SimpleBar from 'simplebar'
import ResizeObserver from 'resize-observer-polyfill'

export default function customScrollbar() {
    const elements = document.querySelectorAll('[data-custom-scrollbar]')

    if (!elements.length) return

    window.ResizeObserver = ResizeObserver

    elements.forEach(elem => {
        new SimpleBar(elem, {
            autoHide: false,
        })
    })
}
