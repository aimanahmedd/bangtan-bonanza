"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { verifySpotifyToken } from "@/lib/spotify";

export default function GeneratePage(){
    const router = useRouter();

    useEffect(()=>{
        const initialize = async () =>{
            const vibeAnswers = localStorage.getItem("lastVibeAnswers");
            const spotifyToken = localStorage.getItem("spotify_token");

            //if no answers exist
            if (!vibeAnswers){
                router.replace("/vibe")
                return;
            }
            //if no spotify token exists
            if(!spotifyToken){
                router.replace("");
                return;
            }

            //verifying spotify token is valid
            const isValid = await verifySpotifyToken(spotifyToken);

            if(!isValid){
                localStorage.removeItem("spotify_token");
                router.replace("");
                return;
            }
        };

        initialize(); 
    }, [router]);

    return(
        <main>
            <h1>Creating your playlist...hang tight!🎵</h1>
        </main>
    )
}