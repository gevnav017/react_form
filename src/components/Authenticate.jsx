import React, { useState } from 'react'


const Authenticate = ({ token }) => {
    const [successMessage, setSuccessMessage] = useState(null)
    const [errorMessage, setErrorMessage] = useState(null)

    const handleClick = async () => {

        try {
            const response = await fetch('https://fsa-jwt-practice.herokuapp.com/authenticate',
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            })
            const result = await response.json()

            setSuccessMessage('Authentication Successful!')
        }
        catch (error) {
            setErrorMessage(error.message)
            console.log(errorMessage)
        }
    }

    return (
        <>
            <h2>Authenticate</h2>

            {successMessage && <p>{successMessage}</p>}
            {errorMessage && <p>{errorMessage}</p>}

            <button onClick={handleClick}>Authenticate Token</button>
        </>
    )
}

export default Authenticate