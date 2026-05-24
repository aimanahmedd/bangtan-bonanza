'use client'
import { useEffect } from "react"
import { useRouter } from "next/navigation"
import Image from 'next/image'
import "@/app/styles/page.css"
import dark_purple_star from "../app/assets/dark_purple_star.png"
import light_purple_star from "../app/assets/light_purple_star.png"


export default function LandingPage(){
    const router = useRouter()
    //checks for token in URL
    useEffect(() => {
  const params = new URLSearchParams(window.location.search)
  const token = params.get('token')
  const error = params.get('error')

  if (token) {
    localStorage.setItem('spotify_token', token)
    // clean the token out of the URL
    window.history.replaceState({}, '', '/')
    // redirect to the quiz
    router.push('/home')
  }

  if (error) {
    // show an error message
    console.error('Spotify auth error:', error)
  }
}, [router])


    return(
        <div className = "landing-page">
        <h1 className="landing-header">BANGTAN BONANZA</h1>
        <Image src = {dark_purple_star} alt = "Dark Purple Star 1" id="dark_purple_star1"></Image>
        <Image src = {light_purple_star} alt = "Light Purple Star 1" id="light_purple_star1"></Image>
        <Image src = {dark_purple_star} alt = "Dark Purple Star 2" id="dark_purple_star2"></Image>
        <p>The website for when you know want to listen to BTS but you do not know what songs you want to listen to.</p>
        <a id="connect" href="/api/auth/login">Connect to Spotify</a>
        </div>
    )
}