import './home.scss'

import main from '@/assets/scripts/main'
import sliderSection from '@/assets/scripts/modules/sliderSection'
import infoCard from '@/assets/scripts/modules/infoCard'
import tabBar from '@/assets/scripts/modules/tabBar'
import costServices from '@/assets/scripts/modules/costServices'
import offers from '@/assets/scripts/modules/offers'

window.onload = () => {
    main()
    sliderSection()
    infoCard()
    tabBar()
    costServices()
    offers()
}