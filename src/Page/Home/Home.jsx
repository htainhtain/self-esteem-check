import { PiMaskSadBold } from "react-icons/pi";
import { FaHeartbeat } from "react-icons/fa";
import { GiLovers } from "react-icons/gi";
import LinkButton from "../../Components/Link/Link";
import { useContext, useEffect } from "react";
import { NavContext } from "../../store/NavContext";

const Home = () => {
    const {onTitleChange} = useContext(NavContext)

    useEffect(() => {
        onTitleChange('', <></>)
    }, [])

    return (
        <main className="py-10 md:py-[8rem]">
            <div className='container md:flex'>
                <div className='mb-10 md:pr-[4em] md:text-[1.5rem]'>
                    <h1 className='text-[2.6em] leading-snug m-0 md:mb-4'>Welcome to the  <span className="font-bold">Self-Esteem Check</span></h1>
                    <p className='text-slate-400 italic'>Pick a subject to get started</p>
                </div>
                <div className='px-2'>
                    <LinkButton 
                        url='/depression-test'
                        onClick={() => onTitleChange('Burns Depression Checklist', <PiMaskSadBold />)}
                    >
                        <PiMaskSadBold className='inline'/> Burns Depression Checklist
                    </LinkButton>
                    <LinkButton 
                        url='/anxiety-test' 
                        onClick={() => onTitleChange('Burns Anxiety Checklist', <FaHeartbeat />)}
                    >
                        <FaHeartbeat className='inline'/> Burns Anxiety Inventory
                    </LinkButton>
                    <LinkButton 
                        url='/relationship-test' 
                        onClick={() => onTitleChange('Relationship Satisfaction Checklist', <GiLovers />)}
                    >
                        <GiLovers className='inline'/> Relationship Satisfaction Scale 
                    </LinkButton>
                </div>
            </div>

        </main>
    )
}

export default Home