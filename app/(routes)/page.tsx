import HeroImage from "../_components/HeroImage";
import HeroSlogan from "../_components/HeroSlogan";
import Blog from "../_components/Blog";

export default function Home() {
    return (
        <div className="min-h-screen">
            {/* Hero */}
            <section className="container h-screen flex items-center">
                <HeroImage />
                <HeroSlogan />
            </section>
            
            <section className="container mt-[25vh] py-20">
                <h3 className="text-neutral-400 font-medium pb-10">Blog</h3>
                <Blog />
            </section>
        </div>
    );
}
