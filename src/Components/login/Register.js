import React, { useState } from "react"
import $ from "jquery";
import HeadTitle from "../../Common/HeadTitle/HeadTitle"
import "./design.css"

const Register = () => {
  const [username, setName] = useState("")
  const [result, setResult] = useState("");
  const [email, setEmail] = useState("")
  const [pwd, setPassword] = useState("")
  const [pwd2, setCpassword] = useState("")

  const [recValue, setRecValue] = useState([])
  // const submitForm = (e) => {
  //   e.preventDefault()
  //   const newValue = { name: name, email: email, password: password, cpassword: cpassword }

  // setRecValue([...recValue, newValue])
  // console.log(newValue)

  // setName("")
  // setEmail("")
  // setPassword("")
  // setCpassword("")
  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = $(e.target);
    $.ajax({
      type: "POST",
      url: form.attr("action"),
      data: form.serialize(),
      success(data) {
        setResult(data);
      },
    });
  }
  return (
    <>
      <HeadTitle />
      <section className='forms top'>
        <div className='container'>
          <div className='sign-box'>
            <p>Don't have an account? Create your account, it takes less than a minute.</p>
            {/* <form action="http://localhost:8000/server.php" onSubmit={submitForm}> */}
            <form action="http://localhost:8000/config_session.inc.php" method="post" onSubmit={(event) => handleSubmit(event)}>

              <input type='text' name='username' value={username} onChange={(event) => handleChange(event)} placeholder='Username' required />
              <input type='email' name='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' required />
              <input type='password' name='pwd' value={pwd} onChange={(e) => setPassword(e.target.value)} placeholder='Password' required />
              <input type='password' name='pwd2' value={pwd2} onChange={(e) => setCpassword(e.target.value)} placeholder='Confirm Password' required />

              <button type='submit' className='primary-btn'>
                Create an Account
              </button>
            </form>
            <h1>{result}</h1>
          </div>
        </div>
      </section>
      <section className='show-data'>
        {recValue.map((cureentValue) => {
          return (
            <>
              <div className='sign-box'>
                <h1>Create an Account Successfully</h1>
                <h3>
                  Name : <p>{cureentValue.username}</p>
                </h3>
                <h3>
                  Email : <p>{cureentValue.email}</p>
                </h3>
                <h3>
                  Password : <p>{cureentValue.pwd}</p>
                </h3>
                <h3>
                  Confirm Password : <p>{cureentValue.pwd2}</p>
                </h3>
              </div>
            </>
          )
        })}
      </section>
    </>
  )
}

export default Register
