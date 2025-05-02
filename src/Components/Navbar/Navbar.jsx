import React, { useState } from 'react';
import './Navbar.css';
import logo from '../Assests/Frontend_Assets/logo.png';
import cart_icon from '../Assests/Frontend_Assets/cart_icon.png'
// import shirt_logo from '../Assests/Frontend_Assets/clothingecommerce.png'
// import iconShop from '../Assests/Frontend_Assets/iconecon.jpeg'

export const Navbar = () => {
    const [menu, setMenu] = useState('shop');
    console.log(menu)
  return (
    <div className = 'navbar'>
         <div className='nav-logo'>
            <img src = {logo} alt = "site logo"></img>
            <p>WEARWELL</p>
         </div>
         <ul className='nav-menu' onClick={(e) =>{setMenu(e.target.id)} }>
            <li id = 'shop'>Shop{(menu === 'shop') && <hr/>}</li>
            <li id = "mens">Men {(menu === 'mens') && <hr/>}</li>
            <li id = "womens">Women {(menu === 'womens') && <hr/>}</li>
            <li id = "kids">Kids {(menu === 'kids') && <hr/>}</li>
         </ul>
            
        <div className='nav-login-cart'>
            <button>Login</button>
            <img src = {cart_icon} alt = ""></img>
            <div className="nav-cart-count">0</div>

        </div>
    </div>
  )
}
