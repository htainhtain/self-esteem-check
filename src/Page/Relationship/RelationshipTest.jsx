import { useEffect } from "react"

import { getRelationshipSatisfactionLevel, relationshipQuestions } from "../../questions/relationship"

import TestDescription from "../../Components/Description/TestDescription"
import AnswerForm from "../../Components/Answer/Answer"
import Result from "../../Components/Result/Result"
import Progress from "../../Components/Progress/Progress"
import { useDispatch, useSelector } from "react-redux"
import { handleSubmit, setScore, move as moveToNextQuestion, setIntialState } from "../../store/relationshipTestSlice"

const totalQuestions = relationshipQuestions.length

const RelationshipTest = () => {
    const dispatch = useDispatch()
    const {
        idx, 
        chosenScore, 
        isSubmitted, 
        totalScore 
    } = useSelector(state => state.relationshipTest)

    useEffect(() => {
        dispatch(setIntialState())
        console.log("relationship useeffect")
    }, [])


    const question = relationshipQuestions[idx]
    const hasQuestion = idx < relationshipQuestions.length
    const completedPercentage = +Math.round((idx/totalQuestions) * 100)

    return (
        <section id="relationship">
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
                        isRelationship={true}
                    />
                </div>
            }
            <div className="container">
                {
                    !hasQuestion && <Result 
                        score={totalScore} 
                        description={getRelationshipSatisfactionLevel(totalScore)}
                        label="Level of Satisfaction"
                    />
                }
            </div>
        </section>
    )
}

export default RelationshipTest