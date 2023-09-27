import React from 'react'
import Retangulo from './img/Rectangle 21.png'
import Linha from './img/linha3.png'
import Linha4 from './img/linha4.png'
const Footer = () => {
  return (
    <div>
      <img className='retangulo' src={Retangulo}/>
      <div className='divlinha3'>
      <img className='linha3' src={Linha}/>
      </div>
      <div className='descricao'>
        <h1>encomendar online ou venha visitar-nos hoje</h1>
      </div>
      <div>
      <button className='botao'>comprar agora</button>
      </div>
      <div className='divlinha4'>
      <img className='linha4' src={Linha4}/>
      </div>
      <div className='divfooter'>
        <h1 className='burgerfooter'>Burger heaven</h1>
        <div className='divmais'>
        <a className='mais'>Mais</a>
        </div>
        <a className='footer'>Sobre</a>
        <a className='footer2'>Menu</a>
        <a className='footer3'>Localizações</a>
        <a className='footer4'>Privacidade</a>
        <a className='envie'>Envie sua opinião:</a>
        <input className='inputfooter'/>
        <a className='enviar'>Enviar</a>
        <div className='divprivacy'>
        <a className='privacy'>Privacy Policy</a>
        </div>
      </div>
      
    </div>
  )
}

export default Footer
