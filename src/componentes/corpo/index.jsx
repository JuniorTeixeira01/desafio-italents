/* Neste componente temos os subtítulos dos jogadores e as imagens dos dados que são
   alteradas através das variáves importadas direto da área de serviço, nomeadas de 
   imagensGeradas1 e imagensGeradas2*/
   
import './style.css';
import { imagensGeradas1, imagensGeradas2 } from '../../servico';

const Corpo = () => {
    return(

        <div className='container-corpo'>
            <main className='corpo-players'>
                <section className='corpo-players_jogador'>
                    <h3>Player 1</h3>
                    <h3>Player 2</h3>
                </section>
                <section className='corpo-players_imagens'>
                    <img src={imagensGeradas1} alt="Dado 1" />
                    <img src={imagensGeradas2} alt="Dado 2" />
                </section>
            </main>
        </div>
    );
};

export default Corpo;