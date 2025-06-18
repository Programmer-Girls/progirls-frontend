import {Link} from 'react-router-dom';

export default function Logo() {
    return (
        <section>
            <Link to="/" className="flex items-center">
                <img
                    src="/templogo.png"
                    alt="ProGirls logo com estilização do texto ProGirls em roxo e verde, trazendo uma atmosfera de empoderamento, disposto em um fundo neutro"
                    className="w-30"
                />
            
                <h1 className="text-[var(--color-primary)] text-4xl font-medium">
                    Pro<span className="text-[var(--color-highlight)]">Girls</span>
                </h1>
            </Link>
        </section>
    )

}