/* Neste componente temos o botão que atualiza a página através da função alteraState 
   que vem direto da área de serviço*/
   
import { alteraState } from '../../servico';
import './style.css';

const Botao = () => {

    return(
        <div className='container-botao'>
            <button onClick={alteraState}>Start</button>
        </div>
    )
}

export default Botao;