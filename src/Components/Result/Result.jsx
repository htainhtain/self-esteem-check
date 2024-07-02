import { CiHome } from "react-icons/ci"
import LinkButton from "../Link/Link"

const Result = ({score, description, label}) => {
    return (
        <div className="text-[1.5rem]">
            <p>Checklist completed...</p>
            <div className='bg-white dark:bg-navy flex justify-center items-center flex-col py-10 my-10'>
                <div className='text-center mb-5'>
                    <p className="text-gray-500">Your score</p>
                    <p className="text-[2rem]">{score}</p>
                </div>
                <div className='text-center'>
                    <p className="text-gray-500">{label}</p>
                    <p className="text-[2rem]">{description}</p>
                </div>
            </div>
            <LinkButton 
                url='/' 
                className='inline-block text-center'
                center={true}
            >
                <CiHome className='inline'/> Home
            </LinkButton>
        </div>
    )
}

export default Result