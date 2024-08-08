import { getDegreeOfDepression, questions } from "../../questions/depression"

import Result from "../../Components/Result/Result"
import TestDescription from "../../Components/Description/TestDescription"
import AnswerForm from "../../Components/Answer/Answer"
import Progress from "../../Components/Progress/Progress"
import { useDispatch, useSelector } from "react-redux"

import { handleSubmit, setScore, move as moveToNextQuestion, setIntialState} from "../../store/depressionTestSlice"
import { useEffect } from "react"

const totalQuestions = questions.length

const DepressionTest = () => {
    const dispatch = useDispatch()
    const {
        idx, 
        chosenScore, 
        isSubmitted, 
        totalScore 
    } = useSelector(state => state.depressionTest)

    useEffect(() => {
        dispatch(setIntialState())
    }, [])

    const question = questions[idx]
    const hasQuestion = idx < totalQuestions
    const completedPercentage = +Math.round((idx/totalQuestions) * 100)

    return (
        <section id="depression">
            {
                hasQuestion && <div className="container md:flex md:py-[5rem]">
                    <div className="w-full md:pr-[3em]">
                        <TestDescription 
                            question={question} 
                            totalQuestions={totalQuestions} 
                        />
                        <Progress 
                            completedPercentage={completedPercentage}
                        />
                    </div>
                    <AnswerForm 
                        onSubmit={(e) => dispatch(handleSubmit(e))} 
                        onSetScore={(value) => dispatch(setScore({score: value}))} 
                        chosenScore={chosenScore}
                        isSubmitted={isSubmitted}
                        onClickNext={() => dispatch(moveToNextQuestion())}
                    />
                </div>
            }
            <div className="container">
                {
                    !hasQuestion && <Result 
                        score={totalScore} 
                        description={getDegreeOfDepression(totalScore)}
                        label="Degree of Depression"
                    />
                }
            </div>
        </section>
    )
}

export default DepressionTest