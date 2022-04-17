import React from 'react';
import './NavBar.css';

function NavBar(props) {
    return (
        <div className='nav'>
            <h1 className='navBar-logo'>GamerStore</h1>
            <ul>
                <li a href="#">Productos</li>
                <li a href="#">Categorias</li>
                <li a href="#">Contactanos</li>
            </ul>
        </div>
    );
}

export default NavBar;