import React, { useState } from 'react';

function LoginForm() {

    const [credentials, setCredentials]=useState(
        {
            username:'',
            password:''
        }
    )

    const onchangeHadler=(e)=>
    {
        const val=e.target.value
        const name=e.target.name
        setCredentials({...credentials,[name]:val})


    }
   return (
    <>
    <div className='text-center border border-light bb rounded border-4 p-3 mb-5 bg-success'>

    
      <h3 className='text-center '>Login</h3>
      <form className='text-center'>
        
            <input type='text' name="username" value={credentials.username} placeholder='Username.....' autoComplete='off' onChange={onchangeHadler} className='m-3 p-2 rounded' required/> <br/>
            <input type='password' name='password' value={credentials.password} placeholder='Password.....' autoComplete='off' onChange={onchangeHadler} className='mt-3 me-3 ms-3 p-2 rounded' required/> <br/>
            <input type='checkbox' className='mt-2'/>< h6 className='d-inline-block me-5 mt-2'>Remember Me</h6><br/>
            <button className='btn btn-info px-4 rounded m-2'>Login</button>

        
      </form>
      </div>
    </>
  );
}

export default LoginForm;
