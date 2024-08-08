import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    title: "",
    icon: "",
}

export const navSlice = createSlice({
    name: 'nav',
    initialState,
    reducers: {
        setTitleIcon(state, action)  {
            state.title = action.payload.title
            state.icon = action.payload.icon
        }
    }
})

export const { setTitleIcon } = navSlice.actions

export default navSlice.reducer