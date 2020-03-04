import { configureStore } from "@reduxjs/toolkit"
import showInfo from '../reducers/showInfo/showInfo'

const Store = configureStore({
    reducer: {
        showInfo: showInfo
    }
})

export default Store
