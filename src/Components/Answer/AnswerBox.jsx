const AnswerBox = ({value, description, setScore, chosenScore}) => {
    const isActive = chosenScore == value
    let btnClass = 'block bg-[#F4F6FA] dark:bg-navy text-[1.5rem] px-3 py-5 rounded-xl mb-5 w-full text-left border-purple'
    let scoreClass = 'mr-3 bg-white text-black px-3 py-2 rounded-xl'

    if(isActive) {
        btnClass += ' border-2 border-purple'
        scoreClass = 'mr-3 bg-purple text-white px-3 py-2 rounded-xl bg-purple text-white'
    }

    return (
        <button 
            value={description} 
            onClick={(e) => {
                e.preventDefault()
                setScore(value)}
            } 
            className={btnClass}
        >
            <span className={scoreClass}>
                {value}
            </span>
            <span>
                {description}
            </span>
        </button>
    )
}

export default AnswerBox