import './ui-kit.scss'

import main from '@/assets/scripts/main'
import select from '@/assets/scripts/modules/select.js'
import customScrollbar from '@/assets/scripts/modules/customScrollbar'
import counter from '@/assets/scripts/modules/counter'
import range from '@/assets/scripts/modules/range'

window.onload = () => {
    main()
    select()
    customScrollbar()
    counter()
    range()
}
