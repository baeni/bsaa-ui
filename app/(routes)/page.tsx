import HeroImage from "../_components/HeroImage";
import HeroSlogan from "../_components/HeroSlogan";
import Footer from "../_components/Footer";
import Additional from "../_components/Additional";

export default function Home() {
    return (
        <main className="min-h-screen">
            {/* Hero */}
            <section>
                <HeroImage />

                <div className="container h-screen relative flex flex-col items-center justify-center">
                    <HeroSlogan />
                </div>
            </section>
            
            <section className="container">
                <Additional />
            </section>
            
            <Footer />
        </main>
    );
}
