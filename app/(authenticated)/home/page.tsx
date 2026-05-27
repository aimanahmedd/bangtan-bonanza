'use client'

import { useEffect } from "react"
import { useRouter } from "next/navigation"

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
    <div>
      <h1>Welcome home!</h1>
    </div>
  )
}