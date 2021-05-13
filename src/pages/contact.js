import React from 'react'
import { Link } from 'gatsby'

const ContactPage = () => {
    return (
        <div>
            <h1> this is contact page</h1>
            <p>
                leave a message down blow.
                <Link to ="/about">contact me!</Link>
            </p>
        </div>
    )
}

export default ContactPage