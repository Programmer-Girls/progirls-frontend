import HeroSection from './_components/HeroSection.jsx';

export default function Inicio() {
    return (
        <div className="min-h-screen bg-[--color-black]">
            <main>
                <div className="w-full h-[2px] bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-highlight)] opacity-80"></div>
                <HeroSection />
                <div className="w-full h-[2px] bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-highlight)] opacity-80"></div>

            </main>
        </div>
    );
}