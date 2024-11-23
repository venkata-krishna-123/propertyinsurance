import React from 'react';
import logo from './Images/Ramanasoftlogo.jpg'; 

function Header() {
  return (
    <>
   <nav className='navbar navbar-dark navbar-expand-lg bg-dark'>
        <div className='navbar-brand d-inline-block'>
        <h3 className='ms-5'><img src={logo} alt="Logo of the company" className='size'/>

            {'  '}{' '}RS Insurance Company</h3>
        </div>
        <div className='ms-auto'> 
            <button className='btn btn-primary me-4 ' >Admin</button>
        </div>

   </nav>
      
    </>
  );
}

export default Header;
