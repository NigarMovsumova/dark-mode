import React, {useContext} from 'react'
import {DarkModeContext} from './context/DarkModeContext'
import './Container.css'
import Switch from './Switch'

function  Container () {
    const {darkMode} = useContext(DarkModeContext)

    return (
       <div className={darkMode?'dark': 'light'}>
           <Switch/>          
        </div>
    )

}

export default Container