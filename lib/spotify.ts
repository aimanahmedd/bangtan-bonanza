export async function verifySpotifyToken(token: string): Promise<boolean>{
    try{
        const response = await fetch("https://api.spotify.com/v1/me",{
            headers:{
                Authorization: `Bearer ${token}`,
            },
        });
        return response.ok;
    } catch (error){
        console.error("Failed to verify Spotify token:", error);
        return false;
    }
}