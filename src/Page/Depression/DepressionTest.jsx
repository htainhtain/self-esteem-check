import { useContext } from "react"
import { getDegreeOfDepression, questions } from "../../questions/depression"

import Result from "../../Components/Result/Result"
import TestDescription from "../../Components/Description/TestDescription"
import AnswerForm from "../../Components/Answer/Answer"
import { DepressionContext } from "../../store/DepressionContext"
import Progress from "../../Components/Progress/Progress"

const totalQuestions = questions.length

const DepressionTest = () => {
    const { idx, 
            chosenScore, 
            isSubmitted, 
            totalScore, 
            handleSubmit,
            moveToNextQuestion, 
            setScore 
        } = useContext(DepressionContext)

    const question = questions[idx]
    const hasQuestion = idx < totalQuestions
    const resultDescription = getDegreeOfDepression(totalScore)
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
                        onSubmit={handleSubmit} 
                        onSetScore={setScore} 
                        chosenScore={chosenScore}
                        isSubmitted={isSubmitted}
                        onClickNext={moveToNextQuestion}
                    />
                </div>
            }
            <div className="container">
                {
                    !hasQuestion && <Result 
                        score={totalScore} 
                        description={resultDescription}
                        label="Degree of Depression"
                    />
                }
            </div>
        </section>
    )
}

export default DepressionTest