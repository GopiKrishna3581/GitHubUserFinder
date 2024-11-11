import Header from "./Header"
import Hero from "./Hero"

export default function Home() {
    return (
        <>

            <div class="absolute top-0 z-[-2] h-screen py-2 w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
                <Header />
                <Hero />
                <footer className="text-white text-center  font-normal">2024 © Edition</footer>
            </div>
        </>
    )
}
