import React from 'react'

const Greeting = (props) => {
    const { name, children } = props;
    
    return (
        <>
            <h2>Greeting from {name}</h2>
            <p>{children}</p>
        </>
    )
}

export default Greeting