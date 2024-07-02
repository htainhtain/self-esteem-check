const Progress = ({completedPercentage}) => {
    return (
        <div className='w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 my-10'>
            <div className='bg-purple h-2.5 rounded-full' style={{width: `${completedPercentage}%`}}/>
        </div>
    )
}

export default Progress