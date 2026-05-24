export async function GET(){
    const params = new  URLSearchParams({
        client_id: process.env.SPOTIFY_CLIENT_ID!,
        response_type: 'code',
        redirect_uri: process.env.SPOTIFY_REDIRECT_URI!,
        scope:[
            'playlist-modify-private',
            'playlist-modify-public',
            'user-read-private'
        ].join(' ')
    })

    return Response.redirect(
        `https://accounts.spotify.com/authorize?${params}`
    )
}