import React, { useState } from 'react'


const SignUpForm = ({ setToken }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    const handleSubmit = (e) => {
        try {
            e.preventDefault()

            const getData = async () => {
                const response = await fetch('https://fsa-jwt-practice.herokuapp.com/signup',
                {
                    method: 'POST',
                    headers:  {"Content-Type": "application/json"},
                    body: JSON.stringify({
                        username: username,
                        password: password
                    })
                })
                const result = await response.json()
                console.log(result)
                const token  = result.token
                setToken(token)
            }

            getData()
        }
        catch (error) {
            setError(error.message)
            console.log(error)
        }
    }

    return (
        <>
            <h2>Sign Up</h2>

            {error && <p>{error}</p>}

            <form onSubmit={handleSubmit}>
                <label>
                    Username: 
                    <input value={username} 
                    onChange={(e) => setUsername(e.target.value)} />

                </label>
                <label>
                    Password: 
                    <input value={password} 
                    onChange={(e) => setPassword(e.target.value)} />

                </label>
                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default SignUpForm