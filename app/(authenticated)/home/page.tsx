'use client'

import { useEffect} from "react"
import { useRouter } from "next/navigation"
import {Card} from "react-bootstrap"
import "@/app/styles/home.css"


export default function HomePage() {
  const router = useRouter()

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const token = params.get("token")

    if (token) {
      localStorage.setItem("spotify_token", token)
      window.history.replaceState({}, "", "/home")
    }

    const existingToken = localStorage.getItem("spotify_token")
    if(!token && !existingToken){
      router.push('/')
    }
  }, [router])

  return (
    <div className="home-content">
      {/*Quiz Section */}
          <Card body className="quiz-card">
            <Card.Title id="card-title">BTS PLAYLIST MODD QUIZ</Card.Title>
            <Card.Text id="card-text">Describe how you are feeling with the guided questions or your own words and get your very own generated playlist!</Card.Text>
            <a id="go-to-vibe" href="/vibe">Vibe</a>
          </Card>
    </div>
  )
}