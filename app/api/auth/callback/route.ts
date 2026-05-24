import { NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
  const code = request.nextUrl.searchParams.get('code')
  const error = request.nextUrl.searchParams.get('error')

  // if user denied access on Spotify's page
  if (error) {
    return Response.redirect('http://127.0.0.1:3000/?error=access_denied')
  }

  if (!code) {
    return Response.redirect('http://127.0.0.1:3000/?error=no_code')
  }

  // exchange the code for an access token
  const response = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic ' + Buffer.from(
        `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`
      ).toString('base64')
    },
    body: new URLSearchParams({
      grant_type: 'authorization_code',
      code,
      redirect_uri: process.env.SPOTIFY_REDIRECT_URI!
    })
  })

  const data = await response.json()

  if (!response.ok) {
    return Response.redirect('http://127.0.0.1:3000/?error=token_failed')
  }

  // redirect to frontend with token in URL
  return Response.redirect(
    `http://127.0.0.1:3000/?token=${data.access_token}`
  )
}