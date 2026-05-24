'use client'
import { useEffect } from "react"
import { useRouter } from "next/navigation"

export function LandingPage(){
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
    router.push('/generate')
  }

  if (error) {
    // show an error message
    console.error('Spotify auth error:', error)
  }
}, [router])


    return(
        <div className = "landing-page">
        <h1>BANGTAN BONANZA</h1>
        <p>The website for when you know want to listen to BTS but you do not know what songs you want to listen to.</p>
        <a href="/api/auth/login">Connect to Spotify</a>
        </div>
    )
}