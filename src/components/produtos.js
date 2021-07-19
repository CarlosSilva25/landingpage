import '../App.css';
import notebook from '../images/notebook.jpg';
import hd from '../images/hd.jpg';
import ram from '../images/ram.jpg';
import casehd from '../images/casehd.jpg';
import fonte from '../images/fonte.jpg';
import teclado from '../images/teclado.jpg';

function Produtos() {
  return (
    <div className="Container">
        <h1>Imperdível, até <span>50% </span> de desconto!!</h1>
    <div className="ContainerProdutos">
    <section className="Produtos">
      <div className="Card">
        <img src={notebook} />
        <p>Notebook CCE de R$ 3.000,00
        <span>por R$ 2.500,00</span></p>
      </div>

      <div className="Card">
        <img src={hd} />
        <p>HD SSD Sandisk 240GB de
        <span>R$ 300,00 por R$ 250,00</span></p>
      </div>

      <div className="Card">
        <img src={ram} />
        <p> Memória RAM HyperX 8GB de R$ 400,00
        <span>por  R$ 350,00</span></p>
      </div>

      <div className="Card">
        <img src={casehd} />
        <p>Case Externo USB 3.0 Fast 5GbpsR$ de 70,00 por <span>R$ 50,00</span></p>
      </div>

      <div className="Card">
        <img src={fonte} />
        <p>Fonte Satellite 500w de R$ 300,00 por <span>R$ 250,00</span></p>
      </div>

      <div className="Card">
        <img src={teclado} />
        <p> Teclado Gamer Rgb K-mex de R$ 85,00 por <span>R$ 65,00</span></p>
      </div>
    </section>
    </div>
    </div>
  );
}

export default Produtos;
