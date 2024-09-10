 
/* Com esses imports na área de serviço faço as importações das Imagens
   direto da pasta assets*/
import imagem1 from '../assets/dice1.png';
import imagem2 from '../assets/dice2.png';
import imagem3 from '../assets/dice3.png';
import imagem4 from '../assets/dice4.png';
import imagem5 from '../assets/dice5.png';
import imagem6 from '../assets/dice6.png';

/* Aqui estamos colocando as Imagens dentro do array para podermos seleciona-las 
   aleatóriamente, com as variáveis geradoras de imagens*/
const arrayImagens = [imagem1, imagem2, imagem3, imagem4, imagem5, imagem6];

const randomGerador1 = Math.floor(Math.random() * arrayImagens.length - 1);
const randomGerador2 = Math.floor(Math.random() * arrayImagens.length - 1);

const imagensGeradas1 = arrayImagens[randomGerador1 + 1];
const imagensGeradas2 = arrayImagens[randomGerador2 + 1];

/* Nessa Parte guardo nas variáveis os titulos que serão atualizados para o player 
   vencedor, após o butão ser ativado*/
const play1 = 'Player 1 Wins !!!';
const play2 = 'Player 2 Wins !!!';
const draw = 'Draw';

/* Aqui faço a condicional para quando o botão for ativado*/
const status =  randomGerador1 > randomGerador2 ? play1 : randomGerador2 > randomGerador1 ? play2 : draw;


/* Esta função atualiza a página para poder fazer os dados rodar*/
const alteraState = () => {
   window.location.reload(true);
 }

/* Aqui estou fazendo a exportação da Função, e das variáveis que serão usadas nos componentes*/
 export { alteraState, imagensGeradas1, imagensGeradas2, status };