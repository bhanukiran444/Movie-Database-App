import React from 'react'
import './Button.css'

const Button = ({onClick, children}) => {
    return(
        <div className='search-button'>
            <button onClick={onClick}>{children}</button>
        </div>
    )
}

export default Button