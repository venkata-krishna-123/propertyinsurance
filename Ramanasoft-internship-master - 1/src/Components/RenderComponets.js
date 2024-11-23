import React from 'react';
import Header from './Header';
import SideNav from './SideNav';
import LoginForm from './LoginForm';
import Explanation from './Explanation';

function RenderComponets() {
  return (
    <>
    <div className='image-container'>
      <Header/>
     <div className='container mt-5  '>
     
        <div className='row'>
          
          <div className='col-9  border border-dark rounded border-3 mb-5 '>
              <SideNav/>
          </div> 
          <div className='col-3  '>
              <LoginForm/>
          </div>

        </div>
    </div>
    </div>

    <div className='container py-4 '>
        <div className='row'>
            <div className='col-8 '>
            <Explanation/>
            </div>
            <div className='col-4 container bottom-img mbs-2 '>
        
            </div>
        </div>
    </div>
 
    </>
  );
}

export default RenderComponets;
