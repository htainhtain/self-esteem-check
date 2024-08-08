import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    idx: 0,
    isSubmitted: false,
    chosenScore: null,
    totalScore: 0,
    resultDescription: "",
}

export const depressionTestSlice = createSlice({
    name: 'depression test',
    initialState,
    reducers: {
        setScore: (state, action)  => {
            state.chosenScore = action.payload.score
        },
        submit: (state) => {
            state.totalScore += state.chosenScore
            state.isSubmitted = true
        },
        move: (state) => {
            state.idx += 1
            state.chosenScore = null
            state.isSubmitted = false
        },
        setIntialState: () => initialState,
    }
})

export const handleSubmit = (e) => {
    return (dispatch) => {
        e.preventDefault()
        dispatch(submit())
    }
}

export const { setScore, submit, move, setIntialState  } = depressionTestSlice.actions

export default depressionTestSlice.reducer