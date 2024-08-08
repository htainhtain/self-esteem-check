import { useEffect, useState } from "react";
import { CiLight } from "react-icons/ci";
import { CiDark } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { PiMaskSadBold  } from "react-icons/pi";
import { FaHeartbeat } from "react-icons/fa";
import { GiLovers } from "react-icons/gi";
import { toggleTheme } from "../../store/themeSlice";

const iconMaps = {
    PiMaskSadBold: <PiMaskSadBold />,
    FaHeartbeat: <FaHeartbeat />,
    GiLovers: <GiLovers />,
}

const Nav = () => {
    const dispatch = useDispatch()
    const {title, icon} = useSelector(state => state.nav)
    const isDarkTheme = useSelector(state => state.theme.isDarkTheme)

    const changeTheme = () => {
        dispatch(toggleTheme(isDarkTheme))
    }

    return (
        <nav className='container py-6 text-[1rem] flex justify-between items-center'>
            <div className='flex items-center gap-2'>
                 {iconMaps[icon]} {title}
            </div>
            <label className="inline-flex items-center cursor-pointer">
                <CiLight className="text-lg"/>
                <input 
                    type="checkbox" 
                    className="sr-only peer" 
                    checked={isDarkTheme}
                    onChange={changeTheme}
                />
                <div className="mx-2 relative w-11 h-6 bg-purple rounded-full peer peer-focus:ring-4 peer-focus:ring-purple-300 dark:peer-focus:ring-purple-800 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
                <CiDark />
            </label>
        </nav>
    )
}

export default Nav