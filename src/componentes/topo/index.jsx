/* Componente titulo => Este componente amostra e altera o título do jogo
   através da variável status que vem direto da área serviço*/
   
import { status } from '../../servico';
import './style.css';

const Topo = () => {

  return(
        
    <div className='topo'>
        <h1>{status}</h1>
    </div>
 
    )
}

export default Topo;