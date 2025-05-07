import React, { useContext, useState } from 'react';
import './Navbar.css';
import logo from '../Assests/Frontend_Assets/logo.png';
import cart_icon from '../Assests/Frontend_Assets/cart_icon.png'
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';
// import shirt_logo from '../Assests/Frontend_Assets/clothingecommerce.png'
// import iconShop from '../Assests/Frontend_Assets/iconecon.jpeg'

export const Navbar = () => {
    const [menu, setMenu] = useState('shop');
    const {getTotalCartItems} = useContext(ShopContext)
    const handleCLick = (e) =>{
        const targetLi = e.target.closest('li');
        if (targetLi && targetLi.id) {
            setMenu(targetLi.id);
        }
    }
  return (
    <div className = 'navbar'>
         <div className='nav-logo'>
            <img src = {logo} alt = "site logo"></img>
            <p>WEARWELL</p>
         </div>
         <ul className='nav-menu' onClick={(e) =>{handleCLick(e)} }>
            <li id = 'shop'> <Link style = {{textDecoration:'none'}} to= '/'>Shop</Link>{(menu === 'shop') && <hr/>}</li>
            <li id = "mens"> <Link style = {{textDecoration:'none'}} to= '/mens'> Men</Link> {(menu === 'mens') && <hr/>}</li>
            <li id = "womens"><Link style = {{textDecoration:'none'}} to= '/womens'>Women</Link> {(menu === 'womens') && <hr/>}</li>
            <li id = "kids"> <Link style = {{textDecoration:'none'}} to= '/kids'>Kids</Link> {(menu === 'kids') && <hr/>}</li>
         </ul>
            
        <div className='nav-login-cart'>
           <Link to = '/login'><button>Login</button></Link>
            <Link to ="/cart"><img src = {cart_icon} alt = ""></img></Link>
            <div className="nav-cart-count">{getTotalCartItems()}</div>

        </div>
    </div>
  )
}
