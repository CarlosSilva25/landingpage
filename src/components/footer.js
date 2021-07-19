import {FaGithub} from 'react-icons/fa';
import '../App.css';


function Footer() {
  return (
    <div className="Footer">
      <footer>
          <div className="">
            <span> &copy;2021 @Infoblack Todos os direitos reservados.</span>
          </div>

          <div>
            <span>Desenvolvido durante o treinamento <a href="https://www.hiringcoders.com.br/" target="_blank">Hiring Coders</a></span><br></br>
            <p>Autor:<a href="https://github.com/CarlosSilva25"  target="_blank"> <FaGithub style={{color:"#ffffff"}}/></a></p>
          </div>

        
      </footer>
    </div>
  );
}

export default Footer;
