import { React, useState } from "react";
import './Login.css';
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"

function Login() {

    const history = useNavigate();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function submit(e) {
        e.preventDefault();

        try {

            await axios.post("http://localhost:8000/", {
                email, password
            })
                .then(res => {
                    if (res.data === "exist") {
                        history("/home", { state: { id: email } })
                        alert("User have successfully login.")
                    }
                    else if (res.data === "notexist") {
                        alert("User have not sign up")
                    }
                })
                .catch(e => {
                    alert("wrong details")
                    console.log(e);
                })

        }
        catch (e) {
            console.log(e);

        }

    }


    return (
        <div className="login">

            <h1>Login</h1>

            <form action="POST">
                <input
                    type="email"
                    className="input-field"
                    onChange={(e) => { setEmail(e.target.value) }}
                    placeholder="Email"
                />
                <input
                    type="password"
                    className="input-field"
                    onChange={(e) => { setPassword(e.target.value) }}
                    placeholder="Password"
                />
                <input
                    type="submit"
                    className="submit-button"
                    value="Login"
                    onClick={submit}
                />

            </form>
            <br />
            <p className="or">OR</p>
            <Link className="link" to="/signup">Signup Page</Link>

        </div>

    )
}

export default Login