import App from '../App.css';
import React, {useState} from 'react';

function InputForm() {

    const [email, setEmail] = useState('');

    const enviarDados = (e) =>{
        let dados = [];
        e.preventDefault();
        if(localStorage.hasOwnProperty('dados')){
            dados = JSON.parse(localStorage.getItem('dados'));
    }
        dados.push(email);
        localStorage.setItem("dados", JSON.stringify(dados));
        setEmail('');
  
}
  return (
    <div className="Input">
    
        <section className="InputForm">
        <span> @Infoblack</span><br></br>
            <form>
            <input type="email"  placeholder="Entrar com email" className="email" value = {email} onChange={(e) => setEmail(e.target.value)}/> 
            <br></br>
            <input type="submit"  className="enviar" value="Cadastrar" onClick={enviarDados}/>
            <p><i>Receba nossas melhores ofertas</i></p>
            </form> 
        </section>
      
    </div>
  );
}

export default InputForm;
