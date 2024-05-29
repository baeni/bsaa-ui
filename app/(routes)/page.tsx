import Navbar from "../_components/Navbar";
import HeroImage from "../_components/HeroImage";
import HeroSlogan from "@/app/_components/HeroSlogan";

export default function Home() {
    return (
        <main className="h-[500vh]">
            <Navbar />

            {/* Hero */}
            <section className="container h-[calc(100vh-21.25rem)] flex items-center">
                <HeroImage />

                <HeroSlogan />
            </section>
        </main>
    );
}
