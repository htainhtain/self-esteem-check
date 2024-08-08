import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    idx: 0,
    isSubmitted: false,
    chosenScore: null,
    totalScore: 0,
    resultDescription: "",
}

export const relationshipTestSlice = createSlice({
    name: 'relationship test',
    initialState,
    reducers: {
        setScore(state, action)  {
            state.chosenScore = action.payload.score
        },
        submit(state) {
            state.totalScore += state.chosenScore
            state.isSubmitted = true
        },
        move(state) {
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

export const { setScore, submit, move, setIntialState  } = relationshipTestSlice.actions

export default relationshipTestSlice.reducer