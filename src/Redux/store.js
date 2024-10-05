import { configureStore } from '@reduxjs/toolkit'
import themesliceReducer from './themeSlice'


const store = configureStore({
    devTools: true,
    reducer: {
        themeKey: themesliceReducer
    }
})

export default store