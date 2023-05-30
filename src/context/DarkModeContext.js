import React, {createContext, useState} from 'react'

const DarkModeContext = createContext()

function DarkModeProvider(props) {
    const [darkMode, setDarkMode] = useState(false)

    const changeMode = () => {
        setDarkMode(!darkMode)
    }

    const settings = {darkMode, changeMode}

    return (
        <div>
            <DarkModeContext.Provider value={settings}>
                {props.children}
            </DarkModeContext.Provider>
        </div>
    )
}

export {DarkModeProvider, DarkModeContext}