import React from 'react';
import './NavBar.css';

function NavBar(props) {
    return (
        <div>
            <h1 className='navBar-logo'>GamerStore</h1>
            <ul className='nav'>
                <li><a href="#productos" className='item'>Productos</a></li>
                <li><a href="#categorias" className='item'>Categorias</a></li>
                <li><a href="#contactanos" className='item'>Contactanos</a></li>
            </ul>
        </div>
    );
}

export default NavBar;