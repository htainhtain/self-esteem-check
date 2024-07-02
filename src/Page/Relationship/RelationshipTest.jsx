import { useState } from "react"

import { getRelationshipSatisfactionLevel, relationshipQuestions } from "../../questions/relationship"

import TestDescription from "../../Components/Description/TestDescription"
import AnswerForm from "../../Components/Answer/Answer"
import Result from "../../Components/Result/Result"
import Progress from "../../Components/Progress/Progress"

const totalQuestions = relationshipQuestions.length

const RelationshipTest = () => {
    const [idx, setIdx] = useState(0)
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [chosenScore, setChosenScore] = useState(null)
    const [totalScore, setTotalScore] = useState(0)

    const question = relationshipQuestions[idx]

    const moveToNextQuestion = () => {
        setIdx(prevId => prevId+1)
        setChosenScore(null)
        setIsSubmitted(false)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setTotalScore(prevScore => prevScore + chosenScore)
        setIsSubmitted(true)
    }

    const setScore = (score) => {
        setChosenScore(score)
    }

    const hasQuestion = idx < relationshipQuestions.length

    const resultDescription = getRelationshipSatisfactionLevel(totalScore)
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
                        onSubmit={handleSubmit} 
                        onSetScore={setScore} 
                        chosenScore={chosenScore}
                        isSubmitted={isSubmitted}
                        onClickNext={moveToNextQuestion}
                        isRelationship={true}
                    />
                </div>
            }
            <div className="container">
                {
                    !hasQuestion && <Result 
                        score={totalScore} 
                        description={resultDescription}
                        label="Level of Satisfaction"
                    />
                }
            </div>
        </section>
    )
}

export default RelationshipTest