import React from 'react'
import Rectangle from './img/Rectangle 17.png'
import Rectangle02 from './img/Rectangle 16.png'
const Menu = () => {
  return (
    <div className='divinput'>
      <input className='input'/>
      <h1 className='h1'>o hambúrguer </h1>
      <h1 className='H2'>acima de</h1>
      <h1 className='h3'>todos os</h1>
      <h1 className='h4'>hamburgers</h1>
      <h5 className='h5'>Começamos com carne 100% Angus, selecionada a dedo para garantir a suculência e o sabor incomparáveis. Cada pedaço é grelhado na perfeição, com um toque especial que o torna irresistível.</h5>
     <button className='buttonsobre'>Sobre isso</button>
     <div className='divrectangle'>
      <img className='rectangle' src={Rectangle}/>
      <img className="rectangle02"src={Rectangle02}/>
    <div>
      <input  className='quadgrey01'/>
      <div className='divh2'>
      <h2 className='h2'>sal & Vinagre batatas fritas</h2>
      <h3 className='onlineh3'>comprar onLINE</h3>
      </div>
      <div>
      <h2 className='H02'>sanduíche de frango crocante</h2>
      </div>
      <h3 className='onlineh03'>comprar online</h3>
     <div className='quadgrey'></div>
     <div className='divinfo'>
      <h1 className='info'>“ the best burger i`ve ever had “</h1>
      </div>
    </div>
    </div>
    </div>
  )
}

export default Menu
