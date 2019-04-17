import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
    return(
        <div>
            <h3>We could not find what you were looking for :(</h3>
            <Link to="/">Here you can browse the movies</Link>
        </div>
    )
}

export default NotFound