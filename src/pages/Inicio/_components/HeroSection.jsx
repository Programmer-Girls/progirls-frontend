import ImageGallery from './ImageGallery.jsx';
import Button from '../../../components/common/Button.jsx';

const HeroSection = () => {
    const handleVemComAGenteClick = () => {
        window.open('https://chat.whatsapp.com/ElygZKByOGl8MP7ZFVgzdm', '_blank', 'noopener');
        if (newWindow) newWindow.opener = null;
    };

    const handleSaibaMaisClick = () => {
        window.open('https://chat.whatsapp.com/ElygZKByOGl8MP7ZFVgzdm', '_blank', 'noopener');
        if (newWindow) newWindow.opener = null;

    };

    return (
        <section className="relative bg-[--color-black] text-[--color-white] py-20 px-4 md:px-16 flex flex-col md:flex-row items-center justify-between min-h-[calc(100vh-80px)] overflow-hidden">
            <div className="md:w-1/2 flex flex-col items-center space-y-6 z-10">
                <h1 className="font-medium text-[56px] leading-[1] text-center max-w-[777px] mx-auto"
                 style={{ fontFamily: 'var(--font-heading)' }}>
                    Empoderando <span className="text-[var(--color-primary)]">Mulheres</span> no Mundo da <span className="text-[var(--color-highlight)]">Tecnologia</span>
                </h1>

                <p className="font-sans font-normal text-[24px] leading-[1.2] text-center max-w-[646px] mx-auto dark:text-white">
                    Construindo uma comunidade onde mulheres na tecnologia se conectam, aprendem e crescem juntas para remodelar o futuro do setor.
                </p>

                <div className="flex flex-wrap gap-4 mt-6">
                    <Button variant="primary" onClick={handleVemComAGenteClick}>
                        Vem com a gente!
                    </Button>
                    <Button variant="secondary" onClick={handleSaibaMaisClick}>
                        Saiba Mais
                    </Button>
                </div>
            </div>

            <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center items-center z-10">
                <ImageGallery />
            </div>

            <div className="absolute -bottom-24 -left-20 w-80 h-80 bg-[var(--color-highlight)] opacity-30 rounded-full filter blur-3xl"></div>
            <div className="absolute -top-32 -right-32 w-96 h-96 bg-[var(--color-primary)] opacity-20 rounded-full filter blur-3xl"></div>

        </section>
    );
};

export default HeroSection;
