import { useState } from "react"

import { anxietyQuestions, getDegreeOfAnxiety } from "../../questions/anxiety"
import TestDescription from "../../Components/Description/TestDescription"
import AnswerForm from "../../Components/Answer/Answer"
import Result from "../../Components/Result/Result"
import Progress from "../../Components/Progress/Progress"

const totalQuestions = anxietyQuestions.reduce((acc, ques) => acc + ques.questions.length, 0)

const AnxietyTest = () => {
    const [questionIdx, setQuestionIdx] = useState(0)
    const [categoryIdx, setCategoryIdx] = useState(0)
    const [completedQuestionCount, setCompletedQuestionCount] = useState(0)
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [chosenScore, setChosenScore] = useState(null)
    const [totalScore, setTotalScore] = useState(0)

    const moveToNextQuestion = () => {
        setCompletedQuestionCount(prevCount => prevCount + 1)
        if (questionIdx == anxietyQuestions[categoryIdx].questions.length - 1) {
            setCategoryIdx(prevIdx => prevIdx + 1)
            setQuestionIdx(0)
            setChosenScore(null)
            setIsSubmitted(false)
            return
        }
        setChosenScore(null)
        setQuestionIdx(prevId => prevId+1)
        setIsSubmitted(false)
    }

    const setScore = (score) => {
        setChosenScore(score)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setTotalScore(prevScore => prevScore + chosenScore)
        setIsSubmitted(true)
    }
    
    const question = anxietyQuestions[categoryIdx] && anxietyQuestions[categoryIdx].questions[questionIdx]
    const category = anxietyQuestions[categoryIdx] && anxietyQuestions[categoryIdx].category
    
    const hasQuestion = categoryIdx < anxietyQuestions.length
    const resultDescription = getDegreeOfAnxiety(totalScore)
    const completedPercentage = +Math.round((completedQuestionCount/totalQuestions) * 100)

    console.log("hasQuestion: ", hasQuestion)

    return (
        <section id="anxiety">
                {
                    hasQuestion && <div className="container md:flex md:py-[5rem]">
                        <div className="w-full md:pr-[3em]">
                            <TestDescription 
                                category={category}
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
                            label="Degree of Anxiety"
                        />
                    }
                </div>
        </section>
    )
}

export default AnxietyTest