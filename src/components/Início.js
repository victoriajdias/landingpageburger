import React from 'react';
import Title from './img/title.png'
import Linha from './img/linha.png';
import Linha2 from './img/linha2.png';
import Burger from './img/imageburger.png';
import Burger2 from './img/imageburger.png';
import Burger3 from './img/imageburger.png';

const Início = () => {
  return (
    <div>
      <img className="title"src={Title}/> 
      <div className='tudo'>
      <div className='divlinha'>
      <img className='linha' src={Linha}/>
      <img className='linha2' src={Linha2}/>
      </div>
      <div className='divburger'>
      <img className='burger' src={Burger}/>
      <img className='burger3' src={Burger3}/>
      <img className='burger2' src={Burger2}/>
      </div>
      </div>
    </div>
  )
}

export default Início

