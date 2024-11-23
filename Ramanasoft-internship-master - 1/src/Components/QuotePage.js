import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom'; // Import useNavigate hook
import PropertyDetails from './PropertyDetails';
// import { property_value } from './Regex';

function QuotePage() {
  const navigate = useNavigate(); // Initialize useNavigate hook
  const { state } = useLocation();
  const formData = state?.propertyDetails;
  const s = formData.valueofproperty;

  const security = formData.securitycheck === "notSecured" ? 0.002 : 0.001;

  const [year, setYear] = useState('1');
  const [premium, setPremium] = useState(Math.floor(s * security));
  

  const [showPopup, setShowPopup] = useState(false);
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [choosePassword, setChoosePassword] = useState('');
  const [retypePassword, setRetypePassword] = useState('');

  const [fullNameError, setFullNameError] = useState('');
  const [phoneNumberError, setPhoneNumberError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [choosePasswordError, setChoosePasswordError] = useState('');
  const [retypePasswordError, setRetypePasswordError] = useState('');

  const [showError, setShowError] = useState(false);
  const [validForm, setValidForm] = useState(false); // State to indicate if all validations are successful

  const openPopup = () => {
    setShowPopup(true);
    setShowError(false); // Reset error messages visibility when opening popup
  };

  const closePopup = () => {
    setShowPopup(false);
    clearErrors();
  };

  const clearErrors = () => {
    setFullNameError('');
    setPhoneNumberError('');
    setEmailError('');
    setChoosePasswordError('');
    setRetypePasswordError('');
  };

  const handleContinue = () => {
    clearErrors();

    if (!fullName.trim()) {
      setFullNameError('Please enter your full name.');
      setShowError(true);
      return;
    }

    if (!phoneNumber.trim()) {
      setPhoneNumberError('Please enter your phone number.');
      setShowError(true);
      return;
    } else if (!/^[6-9]\d{9}$/.test(phoneNumber.trim())) {
      setPhoneNumberError('Phone number must have 10 digits and start with 6, 7, 8, or 9.');
      setShowError(true);
      return;
    }

    if (!email.trim()) {
      setEmailError('Please enter your email.');
      setShowError(true);
      return;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/i.test(email.trim())) {
      setEmailError('Please enter a valid email address.');
      setShowError(true);
      return;
    }
    
    

    if (!choosePassword.trim()) {
      setChoosePasswordError('Please enter your password.');
      setShowError(true);
      return;
    } else if (choosePassword.trim().length < 6) {
      setChoosePasswordError('Password must be at least 6 characters long.');
      setShowError(true);
      return;
    }
    
    if (choosePassword.trim() !== retypePassword.trim()) {
      setRetypePasswordError('Passwords do not match.');
      setShowError(true);
      return;
    }

    // Set validForm to true if all validations pass
    setValidForm(true);
  };
 

  const calculatePremium = (rate) => {
    return Math.floor(s * rate);
  };

  const setPremiumByYear = (year, rate) => {
    setYear(year);
    setPremium(calculatePremium(rate));
  };

  const handlePhoneNumberChange = (e) => {
    let value = e.target.value;
    value = value.replace(/\D/g, '');
    value = value.slice(0, 10);
    setPhoneNumber(value);
  };

  const handleFullNameChange = (e) => {
    const value = e.target.value;
    if (/^[A-Za-z\s]+$/.test(value)) {
      setFullName(value);
      setFullNameError('');
    } else {
      setFullNameError('Full name can only contain letters and one space.');
    }
  };

  const handleFullNameKeyDown = (e) => {
    if (e.key === 'Backspace') {
      setFullName(fullName.slice(0, -1));
      setFullNameError('');
    }
  };

  

  return (
    <>
      <div className='container mt-3'>
        <div className='rounded text-light p-1 bg-success'>
          <h3 className='ms-3'>Premium Details</h3>
        </div>
        <div className='m-5'>
          <h5>Your property value: {s}</h5>
        </div>
        <div className='row mt-3 ms-5'>
          <div className='col'><button className='btn btn-primary px-3 fw-bold' onClick={() => setPremiumByYear(1, formData.securitycheck === "notSecured" ? 0.002 : 0.001)}>1 Year</button></div>
          <div className='col'><button className='btn btn-secondary px-3 fw-bold' onClick={() => setPremiumByYear(2, formData.securitycheck === "notSecured" ? 0.0038 : 0.0019)}>2 Years</button></div>
          <div className='col'><button className='btn btn-info px-3 fw-bold' onClick={() => setPremiumByYear(3, formData.securitycheck === "notSecured" ? 0.0035 : 0.0020)}>3 Years</button></div>
          <div className='col'><button className='btn btn-warning px-3 fw-bold' onClick={() => setPremiumByYear(4, formData.securitycheck === "notSecured" ? 0.0017 : 0.00085)}>4 Years</button></div>
          <div className='col'><button className='btn btn-success px-3 fw-bold' onClick={() => setPremiumByYear(5, formData.securitycheck === "notSecured" ? 0.0016 : 0.0008)}>5 Years</button></div>
        </div>
        <div className='text-center mt-5 rounded p-3 premium-bg w-50'>
          <h4 className='d-inline-block'>Premium for {year} year's: </h4>
          <div className='border border-dark border-2 ms-2 rounded premium-box d-inline-block'>
            <h3 className='text-center'>{premium}</h3>
          </div>
          <span className='ms-2 fw-bold'>per year</span>
        </div>
        <div className='mt-3 text-center'>
          <button className='btn btn-primary' onClick={openPopup}>Continue</button>
        </div>
      </div>

      {showPopup && (
        <div className="popup-container">
          <div className="popup">
            <h2>Enter Your Details</h2>
            Full Name: <input type="text" placeholder="Full Name" value={fullName} onChange={handleFullNameChange} onKeyDown={handleFullNameKeyDown} />
            {showError && <span className="error-message">{fullNameError}</span>}  <br/><br/>
            Phone Number: <input type="tel" placeholder="Phone Number" value={phoneNumber} onChange={handlePhoneNumberChange} />
            {showError && <span className="error-message">{phoneNumberError}</span>}<br/><br/>
            Email: <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            {showError && <span className="error-message">{emailError}</span>}<br/><br/>
            Choose Password: <input type="password" placeholder="Password" value={choosePassword} onChange={(e) => setChoosePassword(e.target.value)} />
            {showError && <span className="error-message">{choosePasswordError}</span>}<br/><br/>
            Retype Password: <input type="password" placeholder="Retype Password" value={retypePassword} onChange={(e) => setRetypePassword(e.target.value)} />
            {showError && <span className="error-message">{retypePasswordError}</span>}<br/><br/>
            <button className="btn btn-primary" onClick={handleContinue}>Continue</button> <br/><br/>
            <button className="btn btn-secondary" onClick={closePopup}>Cancel</button>
          </div>
        </div>
      )}

      {/* Render next page conditionally */}
      {validForm && navigate('/DetailsForm',{ state: { fullName: fullName , email:email,phoneNumber:phoneNumber,premium:premium,formData:formData} })} {/* Use navigate instead of history.push */}
    </>
  );
}

export default QuotePage;
