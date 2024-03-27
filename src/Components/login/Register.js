import React, { useRef,useState } from "react"
import HeadTitle from "../../Common/HeadTitle/HeadTitle"
import "./design.css"
import { useAuth } from "../../contexts/AuthContext"
//import { Link, useHistory } from "react-router-dom"


export default function Signup() {
  // const usernameRef = useRef()
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const { signup } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
 // const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match")
    }

    try {
      setError("")
      setLoading(true)
      await signup(emailRef.current.value, passwordRef.current.value)
      //history.push("/")
    } catch {
      setError("Failed to create an account")
    }

    setLoading(false)
  }

  return (
    <>
      <HeadTitle />
      <section className='forms top'>
        <div className='container'>
          <div className='sign-box'>
            <p>Don't have an account? Create your account, it takes less than a minute.</p>
            {error && <h3>{error}</h3>}
            <form onSubmit={handleSubmit}>
              {/* <input type='text' name='username' ref={usernameRef} placeholder='Username' required /> */}
              <input type='email' name='email' ref={emailRef} placeholder='Email' required />
              <input type='password' name='password' ref={passwordRef} placeholder='Password' required />
              <input type='password' name='password2' ref={passwordConfirmRef} placeholder='Confirm Password' required />
              <button  disabled={loading} type='submit' className='primary-btn'>
                Create an Account
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}


