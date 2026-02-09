import { useState } from "react"

const IP = process.env.REACT_APP_BACKEND_IP;

const Signup = () => {
    // state to handle the signup form
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [message, setMessage] = useState("")

    const handleSingup = async () => {

        if (password !== confirmPassword) {
            return alert("Password mismatched")
        }
        // API to create the user 
        const url = `${IP}/api/v1/auth/signup`
        const res = await fetch(
            url,
        )
        const data = await res.json();
        setMessage(data.message)
    }

    return (
        <div>
            <h2>Signup</h2>

            <form onSubmit={handleSingup}>
                <input
                    type="text"
                    placeholder="username"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    required
                />

                <input
                    type="password"
                    placeholder="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />

                <input
                    type="password"
                    placeholder="enter password again"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                />

                <button type="submit">Signup</button>

                {message !== "" && 
                    <h2>{ message }</h2>
                }
            </form>
        </div>
    )
}

export default Signup;