import Head from "next/head"
import React from "react"
import axios from "axios";
import { useState } from "react"
import { useRouter } from "next/router";

const Login = () => {

  const [username, setUserName] = useState()
  const [password, setPassWord] = useState()
  const router = useRouter()
  const handleLogin = async (e) => {
    e.preventDefault()
    const credential = { username, password }
    const user = await axios.post('/api/auth/login', credential)
    if (user.status === 200) {
      router.push('/dashboard');
    }
    console.log(user)
  }
  const handleLogout = async () => {
    const logout = await axios.get('/api/auth/logout');
    console.log(logout)
  }
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <div className="top-container">
        <div className="login-container">
          <section>
            <h1 className="login"><span className="primary-color">Log</span><span className="main-color">in</span></h1>
            <h6 id="subtitle"><span>sing</span><span>up</span></h6>
          </section>
          <form onSubmit={handleLogin}>
            <h1 className="primary-color">User</h1>
            <input type="text" onChange={(e) => setUserName(e.target.value)} />
            <h1 className="main-color">Password</h1>
            <input type="text" onChange={(e) => setPassWord(e.target.value)} />
            <button className="btn" type="submit">Login</button>

          </form>
          <button className="btn" onClick={() => handleLogout()}>Logout</button>
        </div>
      </div>
    </>

  )
}
export default Login