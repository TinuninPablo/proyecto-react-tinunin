import React, {useState} from 'react';
import { Link, NavLink } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import{ Dropdown, DropdownItem, DropdownMenu,DropdownToggle} from 'reactstrap'

function NavBar(props) {
  const [dropdown,setDropdown]=useState(false);
  const interaccionDropdown =()=>{
    setDropdown(!dropdown)
  }
    return (
      <div className='nav-container'>
        <Link to='/'>
           <img
              src='https://www.xtrafondos.com/descargar.php?id=5092&resolucion=3840x2160'
              alt="OMG Comics"
           />
        </Link>
          <ul className='nav'>
            <li><NavLink to='/' id='nav-margin' className={nav => nav.isActive ? 'nav-active' : ''}>Productos</NavLink></li>
            <li><NavLink to='/' id='nav-margin' className={nav => nav.isActive ? 'nav-active' : ''}> Contacto</NavLink></li>
            <li>
                  <Dropdown isOpen={dropdown} toggle={interaccionDropdown} >
                    <DropdownToggle >
                     Categorias  
                    </DropdownToggle>
                     
                     <DropdownMenu>
                       <DropdownItem><NavLink to='/category/Auriculares' className={nav => nav.isActive ? 'nav-active' : ''}>Auriculares</NavLink></DropdownItem>
                       <DropdownItem><NavLink to='/category/Camaras' className={nav => nav.isActive ? 'nav-active' : ''}>Camaras</NavLink></DropdownItem>
                       <DropdownItem><NavLink to='/category/Microfonos' className={nav => nav.isActive ? 'nav-active' : ''}>Microfonos</NavLink></DropdownItem>
                       <DropdownItem><NavLink to='/category/Monitores' className={nav => nav.isActive ? 'nav-active' : ''}>Monitores</NavLink></DropdownItem>
                       <DropdownItem><NavLink to='/category/MousePad' className={nav => nav.isActive ? 'nav-active' : ''}>Mousepad</NavLink></DropdownItem>
                       <DropdownItem><NavLink to='/category/Parlantes' className={nav => nav.isActive ? 'nav-active' : ''}>Parlantes</NavLink></DropdownItem>
                       <DropdownItem><NavLink to='/category/Ratones' className={nav => nav.isActive ? 'nav-active' : ''}>Ratones</NavLink></DropdownItem>
                       <DropdownItem><NavLink to='/category/Teclado' className={nav => nav.isActive ? 'nav-active' : ''}>Teclados</NavLink></DropdownItem>
                     </DropdownMenu>
                  </Dropdown> 
            </li>       
          </ul>
              <CartWidget/>
      </div>
    );
}

export default NavBar;