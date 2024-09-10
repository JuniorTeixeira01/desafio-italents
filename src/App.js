/* Componente Principal, que faz a importação dos componentes: Topo, Corpo, Botão e Footer*/

import Topo from './componentes/topo';
import Corpo from './componentes/corpo';
import Botao from './componentes/botao';
import Footer from './componentes/footer';
import './App.css';


function App() {


  return (
    <div className="App">
       <Topo />
       <Corpo />
       <Botao />
       <Footer />
    </div>
  );
}

export default App;
