import React from 'react';


import '../logo/logo.css';
import img from '../img/vizpert.png';


function Logo () {
    return(
        <>
        <div className="circulo">
            <h1 className='tech'>TECH</h1>
                <h1 className="library">LIBRARY</h1>
                <img src={img} alt="" ></img>
        </div>
        </>
    );
}
export default Logo;