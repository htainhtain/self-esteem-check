import { Link } from "react-router-dom"

const LinkButton = ({url, onClick, children, center=false}) => {
    let pClass = 'flex items-center gap-2'
    
    if(center) {
        pClass = pClass + ' justify-center'
    }
    return (
        <Link 
            to={url} 
            onClick={onClick}
            className='inline-block bg-white dark:bg-navy text-[1.5rem] px-3 py-5 rounded-xl mb-5 text-xl w-full'
        > 
            <p className={pClass}>
                {children}
            </p> 
        </Link>
    )
}

export default LinkButton