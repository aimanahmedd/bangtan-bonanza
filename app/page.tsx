'use client'
import { useEffect } from "react"
import { useRouter } from "next/navigation"
import Image from 'next/image'
import "@/app/styles/page.css"
import dark_purple_star from "../app/assets/dark_purple_star.png"
import light_purple_star from "../app/assets/light_purple_star.png"
import bts_ot7 from "../app/assets/bts_ot7.jpg"


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

        <div className="information-section">
        <h1 id="landing-header">BANGTAN BONANZA</h1>
        <p id="landing-subsection">The website for when you know you want to listen to BTS but are unsure of the right songs at the moment🙃</p>
        <Image src = {bts_ot7} alt = "BTS Group Picture" id="bts-ot7"></Image>


        <Image src = {dark_purple_star} alt = "Dark Purple Star 1" id="dark-purple-star1"></Image>
        <Image src = {light_purple_star} alt = "Light Purple Star 1" id="light-purple-star1"></Image>
        <Image src = {dark_purple_star} alt = "Dark Purple Star 2" id="dark-purple-star2"></Image>

        <Image src = {light_purple_star} alt = "Light Purple Star 2" id="light-purple-star2"></Image>
        <Image src = {light_purple_star} alt = "Light Purple Star 3" id="light-purple-star3"></Image>
        <Image src = {dark_purple_star} alt = "Dark Purple Star 3" id="dark-purple-star3"></Image>
</div>  
        <div className="connect-section">
        <a id="connect" href="/api/auth/login">Connect to Spotify</a>
        <p id="data-safe">We only access your Spotify to create playlists. Your data is safe &lt;3</p>
        </div>
        </div>
    )
}