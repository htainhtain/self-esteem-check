import { createContext, useState } from "react";

export const NavContext = createContext({
    title: "",
    icon: <></>,
    onTitleChange: () => {},
})

const NavContextProvider = ({children}) => {
    const [navTitle, setNavTitle] = useState({
        title: "",
        icon: <></>,
    })

    const handleTitleChange = (title, icon) => {
        setNavTitle({
            title,
            icon
        })
    }

    const navContext = {
        title: navTitle.title,
        icon: navTitle.icon,
        onTitleChange: handleTitleChange,
    }

    return (
        <NavContext.Provider value={navContext}>
            {children}
        </NavContext.Provider>
    )
}

export default NavContextProvider