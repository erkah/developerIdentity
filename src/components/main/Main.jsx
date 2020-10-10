import React from 'react'
import './main.scss';

import ReactRotatingText from 'react-rotating-text';
import  { ReactComponent as SV } from './mb.svg';


const Main = () => {
    return (
      
        <div className='main' id='main' >
       
         <SV className='sv' />
          
          <div className='writ' >
          <span style={{color:'white'  }} className='hy' > Hey, </span> 
         <span style={{color:'#E6E7E8'  }} className='hy' >I'm Erka Hysi</span>  <br/> 
         <br/>
         <span style={{ color: ' #DCE5E7'}} className='senior' >Software Developer </span>
         <br/>
         <br/>
         <span style={{ color: ' #DCE5E7'}} className='senior' >Scrum Master</span>
         <br/>
        
          <ReactRotatingText  
          className='blink'
       
          items={['I love to create.',]}
                              color={'grey'}
                              typingInterval ={20   }
                              pause ={2000}
          />
          
         </div>

        </div>
        
    )
}

export default Main;
