import React,{useState} from 'react';
 import {  useLocation,} from 'react-router-dom';
 
function Payment() {

  const location = useLocation();
  const { state } = location;

  const formData = state?.formData;

  const email = formData?.email;
  const mobileno = formData?.mobileno;

  const name = state?.userDetails?.fullname;
  const address = state?.userDetails?.houseno;
  
  const premium =location.state?.premiumAmount;

  

  const [disabled, setDisabled] = useState(true);
 
  const [data,setData]=useState({

    payment:''

  });

  
  

  const handleChange = (e) => {

    const { name, value } = e.target;
   
    setData({ ...data, [name]: value });

    setDisabled(e.target.value === "razorpay" ? false : true);

  };


  const handleClick=()=>{
  const options = {
    key: 'rzp_test_Su4WV4zdBIGTmZ', 
    amount: premium, // Amount in paise (e.g., 1000 paise = â‚¹10)
    name: 'Ramana Soft Insurance Company',
    description: 'IS A INSURANCE COMPANY',
   
    handler: function (response) {
      alert(response.razorpay_payment_id);
    },
    
    prefill: {
      name: name,
      email: email,
      contact: mobileno,
    },
    notes: {
      address: address,
    },
    theme: {
      color: '#F37254',
    },
    
  }

  var pay = new window.Razorpay(options);
  pay.open();

}



  return (
    <div>
      <div>
        <h1 className='text-center'style={{backgroundColor:'red',color:'blue'}}> Welcome To The Payment Page :</h1>
      </div>
      {premium}
      <div>
        <label className='mt-5 ms-5'>Choose Payment option :</label>
        <input type="radio" name='payment' value='razorpay' required className='mx-3' onChange={handleChange}/>razorpay
        <input type="radio" name='payment' value='' required className='mx-3' onChange={handleChange}/>UPI
        <input type="radio" name='payment' value='' required className='mx-3' onChange={handleChange}/>Other Option
      </div>
     <div>

     <div className='text-center mt-3'>
                   <button className='btn btn-primary text-center' disabled={disabled} onClick={handleClick} > Pay </button>
                   </div>
     </div>  
   
    </div>
  )
}

export default Payment;