// import { PiMaskSadBold } from "react-icons/pi";
import { NavContext } from "../../store/NavContext";
import { useContext, useEffect, useState } from "react";
import { CiLight } from "react-icons/ci";
import { CiDark } from "react-icons/ci";

const Nav = () => {
    const {icon, title} = useContext(NavContext)
    const [isDarkTheme, setIsDarkTheme] = useState(true)

    const handleThemeChange = () => {
        setIsDarkTheme(prevTheme => !prevTheme)

        document.body.classList.remove("dark")
        if (isDarkTheme) {
            document.body.classList.add("dark")
        }  
    }

    useEffect(() => {
        document.body.classList.remove("dark")
        if (isDarkTheme) {
            document.body.classList.add("dark")
        }  
    }, [isDarkTheme])

    return (
        <nav className='container py-6 text-[1rem] flex justify-between items-center'>
            <div className='flex items-center gap-2'>
                 {icon} {title}
            </div>
            <label className="inline-flex items-center cursor-pointer">
                <CiLight className="text-lg"/>
                <input 
                    type="checkbox" 
                    className="sr-only peer" 
                    checked={isDarkTheme}
                    onChange={handleThemeChange}
                />
                <div className="mx-2 relative w-11 h-6 bg-purple rounded-full peer peer-focus:ring-4 peer-focus:ring-purple-300 dark:peer-focus:ring-purple-800 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
                <CiDark />
            </label>
        </nav>
    )
}

export default Nav