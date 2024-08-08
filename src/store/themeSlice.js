import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isDarkTheme: true,
}

export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        setTheme(state, action)  {
            state.isDarkTheme = action.payload
        }
    }
})

const setDarkThemeClass = (isDarkTheme) => {
    document.body.classList.remove("dark")
    if (isDarkTheme) {
        document.body.classList.add("dark")
    } 
}

export const toggleTheme = (isDarkTheme) => {
    return (dispatch) => {
        let currentTheme = !isDarkTheme
        dispatch(setTheme(currentTheme))
        setDarkThemeClass(currentTheme)
    }
}

export const getSelectedTheme = () => {
    return (dispatch) => {
        let isDarkTheme = JSON.parse(localStorage.getItem("isDarkTheme")) || true
        dispatch(setTheme(isDarkTheme))
        setDarkThemeClass(isDarkTheme)
    }
}

export const { setTheme } = themeSlice.actions

export default themeSlice.reducer