import React, {useState} from 'react';
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";
import Login from '../Logint/Login';
import Nodal from '../Logint/Nodal';
import Reg from '../Logint/Reg';





 const Navbar = ({}) => {
  const[hamopen, setHamopen] = useState(true);
  const toggleham = () => setHamopen(!hamopen);

  

     


     const[isopen, setIsopen] = useState(false)
     const[regopen, setRegopen] = useState(false)
  

     const state = useSelector((state)=> state.handleCart)
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-white py-3 shadow-sm fixed-top ">
  <div className="container">
    <NavLink className="navbar-brand fw-bold fs-4" to="/">SHOPLEFT</NavLink>
    <button className="navbar-toggler" type="button" onClick={toggleham}
    data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" >
      <i className={ `${hamopen ? "navbar-toggler-icon" : 'btn-close'}`}></i>
    </button>
    <div className={ ` ${hamopen ? "collapse" : ''} navbar-collapse`} id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0 ">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/products">Products</NavLink>
        </li>
        {/*<li className="nav-item">
          <a className="nav-link" href="#Foot">Contact</a>
    </li> */}
      </ul>
      <div className="buttons d-flex">
          <div>
              <button onClick = {()=> setIsopen(true)} className="btn  btn-outline-dark">
                 <i className="fa fa-sign-in me-1"></i> Login</button >
                <Nodal open = {isopen} onClose={()=> setIsopen(false)}>
                  
                  <Login  toreg = {()=> {setIsopen(false); setRegopen(true)}}  />
                 </Nodal>
                 </div>
                 <div>
              <button onClick = {()=> setRegopen(true)} className="btn  btn-outline-dark ms-2">
                 <i className="fa fa-user-plus me-1"></i> Register</button >
                <Nodal open = {regopen} onClose={()=> setRegopen(false)}>
                   <Reg  tolog = {()=> {setIsopen(true); setRegopen(false)}} />
                 </Nodal>
                 </div>
          
                 <NavLink to="/cart" className="btn  btn-outline-dark ms-2">
                 <i className="fa fa-shopping-cart me-1"></i> cart ({state.length})</NavLink>
          
      </div>
    </div>
  </div>
</nav>

        </div>


    )
}
export default Navbar;