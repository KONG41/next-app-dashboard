import React from "react";
import Link from "next/link"
import axios from "axios";
import { useRouter } from "next/router";
export default function Layout({ children, title }) {
  const router = useRouter()
  const handleLogout = async () => {
    await axios.get('/api/auth/logout');
    router.push('/login');
  }
  return (
    <section className="dash-container">
      <section className="left-nav">
        <ul>
          <li>
            <Link href="/dashboard/contact" > Contact</Link>
          </li>
          <li>
            <Link href="/dashboard/account" >Account</Link>
          </li>
          <li>
            <Link href="/dashboard/telegram" >Telegram</Link>
          </li>
          <li>
            <Link href="/dashboard/setting" >Setting</Link>
          </li>
        </ul>
        <ul>
          <li> <button className="btn" onClick={() => handleLogout()}>Logout</button></li>
        </ul>
      </section>
      <section className="dash-body">
        <div className="dash-header">
          <div className="title"><span>{title}</span></div>
        </div>
        <div className="dash-content">
          {children}
        </div>
      </section>
    </section>
  )
}