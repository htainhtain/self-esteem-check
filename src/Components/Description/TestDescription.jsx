const TestDescription = ({question, totalQuestions, category}) => {
    const cat = category && `Category ${category.id}: ${category.title}`
        
    return (
        <div className="w-full">
            <p>{cat}</p>
            <p className='italic text-gray-500'>Question {question.id} of {totalQuestions}</p>
            <p className='text-[1.5rem] font-medium'>
                <span>{question.title && `${question.title}: `}</span> {question.description}
            </p>
        </div>
    )
}

export default TestDescription