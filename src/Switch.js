import React, {useContext} from 'react'
import {DarkModeContext} from './context/DarkModeContext'

function Switch() {
    const {darkMode, changeMode} = useContext(DarkModeContext)

    const handleMode = () => {
        changeMode()
    }

    return (
    <div>
        <img src={darkMode?'../img/dark.png':'../img/light.png'} onClick={handleMode}/>
    </div>
    )
}

export default Switch