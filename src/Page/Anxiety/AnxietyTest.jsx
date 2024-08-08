import { anxietyQuestions, getDegreeOfAnxiety } from "../../questions/anxiety"
import TestDescription from "../../Components/Description/TestDescription"
import AnswerForm from "../../Components/Answer/Answer"
import Result from "../../Components/Result/Result"
import Progress from "../../Components/Progress/Progress"
import { useDispatch, useSelector } from "react-redux"
import { move as  moveToNextQuestion, handleSubmit, setScore, setIntialState } from "../../store/anxietySlice"
import { useEffect } from "react"

const totalQuestions = anxietyQuestions.reduce((acc, ques) => acc + ques.questions.length, 0)

const AnxietyTest = () => {
    const dispatch = useDispatch()
    const {
        categoryIdx,
        questionIdx, 
        completedQuestionCount, 
        isSubmitted, 
        chosenScore,
        totalScore 
    } = useSelector(state => state.anxietyTest)

    useEffect(() => {
        dispatch(setIntialState())
    }, [])
    
    const question = anxietyQuestions[categoryIdx] && anxietyQuestions[categoryIdx].questions[questionIdx]
    const category = anxietyQuestions[categoryIdx] && anxietyQuestions[categoryIdx].category
    
    const hasQuestion = categoryIdx < anxietyQuestions.length
    const completedPercentage = +Math.round((completedQuestionCount/totalQuestions) * 100)

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
                            description={getDegreeOfAnxiety(totalScore)}
                            label="Degree of Anxiety"
                        />
                    }
                </div>
        </section>
    )
}

export default AnxietyTest