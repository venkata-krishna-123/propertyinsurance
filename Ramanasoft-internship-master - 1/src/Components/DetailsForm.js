import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import PropertyDetails from './PropertyDetails';

function DetailsForm(props) {
  
  const location = useLocation();
  const { state } = useLocation();
  const value = state?.formData;

  const Name = location.state?.fullName;
  const Email = location.state?.email;
  const Number=location.state?.phoneNumber;
  const Premium=location.state?.premium;
  const PropertyValue=location.state?.Krishna;
 const [amount,setAmount]=useState();


  
  // State variables for form fields
  const [panCardTitle, setPanCardTitle] = useState('');
  const [fullName, setFullName] = useState('');
  const [panCardNO, setPanCardNO] = useState('');
  const [dob, setDob] = useState('');
  const [pincode, setPincode] = useState('');
  const [flatNo, setFlatNo] = useState('');
  const [area, setArea] = useState('');
  const [isCurrentAddress, setIsCurrentAddress] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');

  // Extracting propertyValue and premiumValue from props
  const propertyValue = (props.location && props.location.state && props.location.state.propertyValue) || '';
  const premiumValue = (props.location && props.location.state && props.location.state.premiumValue) || '';

  // Use the useNavigate hook to get the navigate function
  const navigate = useNavigate();

  // Function to handle the "Proceed" button click
  const handleProceed = () => {
    // Logic to handle the proceed action
    console.log("Proceed button clicked.");
    // Print the form values to console
    console.log("Pan Card Title:", panCardTitle);
    console.log("Full Name:", fullName);
    console.log("PAN Card NO:", panCardNO);
    console.log("Date of Birth:", dob);
    console.log("Email:", email);
    console.log("Mobile:", mobile);
    console.log("Pincode:", pincode);
    console.log("Flat No/House No:", flatNo);
    console.log("Area/Street:", area);
    console.log("Is Current Address:", isCurrentAddress);
    setAmount(Premium);
    // Navigate to the payment page
    setAmount(Premium);
    navigate('/payment', { state: { premiumAmount: Premium } });
  };

  // Function to handle changes in the email field
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  // Function to handle changes in the mobile field
  const handleMobileChange = (e) => {
    // Filter out non-numeric characters from input
    setMobile(e.target.value.replace(/\D/g, ''));
  };
  // const name = props.location.state.fullName;
  // console.log(name);

  return (
    <div className="container">
      <div className="details-container">
        {/* User Details */}
        <div className="user-details" style={{ float: 'left', marginRight: '20px' }}>
          <h2>User Details</h2>
          <div>
            <p><strong>Full Name:{Name}</strong> {fullName}</p>
            <p><strong>Phone Number:{Number}</strong> {mobile}</p>
            <p><strong>Email:{Email}</strong> {email}</p>
            <p><strong>Premium Value:{Premium}</strong> {premiumValue}</p>
            <p><strong>Property Value:{value. valueofproperty}</strong> {propertyValue}</p>
            <p><strong>Carpet Area:{value.carpetarea}</strong></p>
          </div>
        </div>
        {/* Form for personal details */}
        <div className="personal-details" style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '5px', float: 'right', width: '45%' }}>
          <h2 style={{ color: 'blue' }}>Fill the Details</h2>
          {/* PAN Card details */}
          <div className="pan-card-details" style={{ marginBottom: '20px', backgroundColor: '#f0f0f0', width: '70%' }}>
            <h3 style={{ color: 'green' }}>PAN Card Details</h3>
            <div className="form-field">
              <label>Title:</label>
              <select value={panCardTitle} onChange={(e) => setPanCardTitle(e.target.value)}>
                <option value="Mr">Mr</option>
                <option value="Mrs">Mrs</option>
                <option value="Ms">Ms</option>
              </select>
            </div>
            <div className="form-field">
              <label>Full Name:</label>
              <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} />
            </div>
            <div className="form-field">
              <label>PAN Card NO:</label>
              <input type="text" value={panCardNO} onChange={(e) => setPanCardNO(e.target.value)} />
            </div>
            <div className="form-field">
              <label>Date of Birth:</label>
              <input type="text" placeholder="dd/mm/yyyy" value={dob} onChange={(e) => setDob(e.target.value)} />
            </div>
          </div>
          {/* Form for contact details */}
          <div className="contact-details">
            <h3 style={{ color: 'green' }}>Contact Details</h3>
            <div className="form-field">
              <label>Email:</label>
              <input type="text" value={email} onChange={handleEmailChange} />
            </div>
            <div className="form-field">
              <label>Mobile:</label>
              <input type="text" value={mobile} onChange={handleMobileChange} />
            </div>
          </div>
          {/* Form for property details */}
          <div className="property-details">
            <h3 style={{ color: 'green' }}>Property Details</h3>
            <div className="form-field">
              <label>Pincode:</label>
              <input type="text" value={pincode} onChange={(e) => setPincode(e.target.value)} />
            </div>
            <div className="form-field">
              <label>Flat No/House No:</label>
              <input type="text" value={flatNo} onChange={(e) => setFlatNo(e.target.value)} />
            </div>
            <div className="form-field">
              <label>Area/Street:</label>
              <input type="text" value={area} onChange={(e) => setArea(e.target.value)} />
            </div>
            <div className="form-field">
              <label>Is the address mentioned above your current address:</label>
              <select value={isCurrentAddress} onChange={(e) => setIsCurrentAddress(e.target.value)}>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
            {/* Additional fields for current address if needed */}
            {isCurrentAddress === 'no' && (
              <div>
                <div className="form-field">
                  <label>Pincode:</label>
                  <input type="text" value={pincode} onChange={(e) => setPincode(e.target.value)} />
                </div>
                <div className="form-field">
                  <label>Flat No/House No:</label>
                  <input type="text" value={flatNo} onChange={(e) => setFlatNo(e.target.value)} />
                </div>
                <div className="form-field">
                  <label>Area/Street:</label>
                  <input type="text" value={area} onChange={(e) => setArea(e.target.value)} />
                </div>
              </div>
            )}
          </div>
          {/* Render "Proceed" button */}
          <div style={{ clear: 'both' }}>
            <button style={{ backgroundColor: 'blue', color: 'white', padding: '10px', borderRadius: '5px', cursor: 'pointer', float: 'right' }} onClick={handleProceed}>Proceed</button>
          </div>
        </div>
      </div>
  
    </div>
  );
}

export default DetailsForm;
