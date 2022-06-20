import React from 'react';
import Logo from './../../img/conntec.png';
import {Link} from 'react-router-dom';

import Menu from '../../img/menu.png'

import './header.css';

//Criando o Header do site
export default function header(){
    return(
    <>
        <header>
            <div className="hdbox">
                <div className='logo-site'>
                    <a href="/">
                         <img width={170}  src={Logo}></img>
                     </a>
                </div>
                
                <a href="siteTCC.html" className="logo"></a> 
                <nav className="nav-main"> 
                    <ul className="nav-links">
                        <li className="nav-item"><a href="/">HOME</a></li>
                        <li className="nav-item"><a href="/documento">DOCUMENTAÇÃO</a></li>
                        <li className="nav-item"><a href="/sobrenos">SOBRE NÓS</a></li>
                        <li className="nav-item"><a href="https://etects.com.br/">ETEC TABOÃO</a></li>
                        <li className="nav-item"><a href="https://www.cps.sp.gov.br/">CENTRO PAULA SOUZA</a></li>
                    </ul>
                </nav> 
                
            </div>
            <div id="btn-hamburguer"><img width={28} src={Menu}/></div>
        
        </header>
        
    </>
    )
}