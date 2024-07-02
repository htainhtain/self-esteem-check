import { createContext, useReducer } from "react";

export const DepressionContext = createContext({
    idx: 0,
    isSubmitted: false,
    chosenScore: null,
    totalScore: 0,
    resultDescription: "",
    setScore: () => {},
    handleSubmit: () => {},
    moveToNextQuestion: () => {},
})

const depressionReducer = (state, action) => {
    let nextState = {...state}
    switch(action.type) {
        case 'SET_SCORE': 
            nextState['chosenScore'] = action.payload.score
            break
        case 'SUBMIT':
            action.payload.e.preventDefault()
            nextState['totalScore'] = state.totalScore + state.chosenScore
            nextState['isSubmitted'] = true
            break
        case 'MOVE':
            nextState['idx'] = state.idx + 1
            nextState['chosenScore'] = null
            nextState['isSubmitted'] = false
            break
    } 
    return nextState
}

const DepressionContextProvider = ({children}) => {
    const [depressionState, depressionDispatch] = useReducer(depressionReducer, {
        idx: 0,
        isSubmitted: false,
        chosenScore: null,
        totalScore: 0,
    })

    const setScore = (score) => {
        depressionDispatch({
            type: 'SET_SCORE',
            payload: {
                score: score
            }
        })
    }

    const handleSubmit = (e) => {
        depressionDispatch({
            type: 'SUBMIT',
            payload: {
                e: e,
            }
        })
    }

    const moveToNextQuestion = (e) => {
        depressionDispatch({
            type: 'MOVE',
        })
    }

    const depressionCtx = {
        idx: depressionState.idx,
        isSubmitted: depressionState.isSubmitted,
        chosenScore: depressionState.chosenScore,
        totalScore: depressionState.totalScore,
        setScore: setScore,
        handleSubmit: handleSubmit,
        moveToNextQuestion: moveToNextQuestion
    }


    return (
        <DepressionContext.Provider value={depressionCtx}>
            {children}
        </DepressionContext.Provider>
    )
}

export default DepressionContextProvider