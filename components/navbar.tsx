'use client'
import Link from "next/link"
import dark_star from "../app/assets/dark_purple_star.png"
import light_star from "../app/assets/light_purple_star.png"
import { usePathname } from "next/navigation"
import Image from 'next/image'
import "@/app/styles/navbar.css"
//import path from "path"


export default function Navbar(){
    const pathname = usePathname()

    return(
        <nav className="navigation-bar">
            <div className="text-center">

                <div className="header-container">
                    <Image src={dark_star} alt= "Dark Purple Star" id="star-image"></Image>
                    <h1 id="nav-header">BANGTAN BONANZA</h1>
                    <Image src={light_star} alt= "Light Purple Star" id="star-image"></Image>
                </div>

                <div className="navbar-links">
                    <Link href="/home" className={pathname==="/home" ? "active" : ""}>Home</Link>
                    <Link href="/quiz" className={pathname==="/quiz" ? "active" : ""}>Quiz</Link>
                    <Link href="/allPlaylists" className={pathname==="/allPlaylists" ? "active" : ""}>Playlists</Link>
                </div>

            </div>

        </nav>

    )


}