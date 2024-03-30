import {React, useState } from "react";
import { Container, } from "react-bootstrap";
import './Login.css';
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"

function SignUp() {

  const history=useNavigate();

  const [email,setEmail]=useState('')
  const [username,setUserName]=useState('')
  const [password,setPassword]=useState('')

  async function submit(e){
      e.preventDefault();

      try{

          await axios.post("http://localhost:8000/signup",{
              email,password, username
          })
          .then(res=>{
              if(res.data==="exist"){
                  alert("User already exists")
              }
              else if(res.data==="notexist"){
                  history("/login",{state:{id:email}})
              }
          })
          .catch(e=>{
              alert("wrong details")
              console.log(e);
          })

      }
      catch(e){
          console.log(e);

      }

  }


  return (
    <Container fluid className="login-section">
 <div className="login">
        <h1>Signup</h1>
        <form action="POST">
          <input
            type="email"
            className="input-field"
            onChange={(e) => { setEmail(e.target.value) }}
            placeholder="Email"
          />
            <input
            type="text"
            className="input-field"
            onChange={(e) => { setUserName(e.target.value) }}
            placeholder="Username"
          />
          <input
            type="password"
            className="input-field"
            onChange={(e) => { setPassword(e.target.value) }}
            placeholder="Password"
          />
          <input
            type="submit"
            value="Register"
            className="submit-button"
            onClick={submit}
          />
        </form>
        <br />
        <p className="or" >OR</p>
      
        <Link className="link" to="/login">Login Page</Link>
      </div>
  </Container>
  );
}

export default SignUp;
