import React, {  useRef, useState } from 'react'
import './Navbar.css'
import logo from '../Assests/logo.png'
import cart_icon from '../Assests/cart_icon.png'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
// import { ShopContext } from '../../Context/ShopContext'
// import nav_dropdown from '../Assests/dropdown_icon.png'

import { FaHamburger } from "react-icons/fa";
import { getTotalCartItems } from '../../redux/selectors/cartSelector';




const Navbar = ({getTotalCartItems}) => {

    const [menu,setMenu]= useState("shop");
    // const {getTotalCartItems}=useContext(ShopContext);
    const menuRef=useRef();

    const dropdown_toggle = (e) => {
        menuRef.current.classList.toggle('nav-menu-visible');
        e.target.classList.toggle('open');
    }


    



  return (
    <div className='navbar'>
        <div className="nav-logo">
            <img src={logo} alt=''/>
            <p>SHOPPER</p>
        </div>
        <FaHamburger className='nav-dropdown' onClick={dropdown_toggle} />

        
        {/* <img className='nav-dropdown'  onClick={dropdown_toggle}   src={nav_dropdown} alt=''/> */}
        
        <ul ref={menuRef}  className="nav-menu">
            <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration: 'none'}}  to='/'>Shop</Link> {menu==="shop"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("mens")}}><Link style={{textDecoration: 'none'}}  to='/mens'>Men</Link> {menu==="mens"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("womens")}}><Link style={{textDecoration: 'none'}}  to='/womens'>Women</Link> {menu==="womens"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("kids")}}><Link style={{textDecoration: 'none'}}  to='/kids'>Kids</Link> {menu==="kids"?<hr/>:<></>}</li>
        </ul>
        
        <div className="nav-login-cart">
            <Link to='/login'><button>Login</button></Link>
            <Link to='/cart'><img src={cart_icon} alt=''/></Link>
            <div className="nav-cart-count">
                {getTotalCartItems}
            </div>

        </div>


    </div>
  )
}

const mapStateToProps = (state) => ({
    totalCartItems: getTotalCartItems(state), // Get total cart items using selector
});

export default connect(mapStateToProps)(Navbar);

// export default Navbar

//import usecontext above