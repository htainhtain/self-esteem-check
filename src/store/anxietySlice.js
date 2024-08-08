import { createSlice } from "@reduxjs/toolkit"
import { anxietyQuestions } from "../questions/anxiety"

const initialState = {
    questionIdx: 0,
    categoryIdx: 0,
    completedQuestionCount: 0,
    isSubmitted: false,
    chosenScore: null,
    totalScore: 0,
}

const hasMore = (idx, len) => {
    return idx < len
}

export const anxietySlice = createSlice({
    name: 'anxiety',
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
            state.completedQuestionCount += 1
            state.chosenScore = null
            state.isSubmitted = false
            if (!hasMore(state.questionIdx, anxietyQuestions[state.categoryIdx].questions.length - 1)) {
                state.questionIdx = 0
                state.categoryIdx += 1
                return
            }
            state.questionIdx += 1
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

export const { setScore, submit, move, setIntialState } = anxietySlice.actions

export default anxietySlice.reducer