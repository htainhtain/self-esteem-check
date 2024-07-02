import AnswerBox from "./AnswerBox"
import Button from "../button/Button"

import { relationShipanswers, defaultAnswers } from "../../questions/answers"

const AnswerForm = ({onSubmit, onSetScore, isSubmitted, onClickNext, chosenScore, isRelationship=false}) => {
    const answers = isRelationship ? relationShipanswers : defaultAnswers 
    return (
        <>
            <form className="my-4 md:my-0 w-full">
                {
                    answers.map((ans, id) => {
                        return (
                            <AnswerBox 
                                key={id}
                                value={ans.value}
                                chosenScore={chosenScore}
                                description={ans.description}
                                setScore={onSetScore}
                            />
                        )
                    })
                }
                {
                    !isSubmitted && 
                    <Button  
                        disabled={chosenScore === null}
                        onClick={onSubmit} 
                        type="submit"
                    >
                        Submit Answer
                    </Button>
                }
                {isSubmitted && <Button onClick={onClickNext}>Next Question</Button>}
            </form>
            
        </>
    )
}

export default AnswerForm