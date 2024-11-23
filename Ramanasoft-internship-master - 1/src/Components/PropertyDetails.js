import React, { useEffect, useState, useRef} from 'react';
import {useNavigate} from 'react-router-dom';
import {pincode_validation, property_value } from './Regex';


function PropertyDetails() 
{
  const valueofpropertyRef = useRef(null);

  let navigate = useNavigate();

  const [selectedOption, setSelectedOption] = useState('');

  const [propertyDetails, setPropertyDetails]=useState(
    {
      valueofproperty:"",
      carpetarea:"",
      pincode:"",
      ageofthebuilding: "",
      disaster:"",
      securitycheck: "",
      salaryStatus: ""
    });

    const[validationError, setValidationError]=useState(
      {
          valueofproperty:"",
          carpetarea:"",
          pincode:"",
          ageofthebuilding: "",
          disaster:"",
          securitycheck: "",
          salaryStatus: ""
      });

    const onChangeHandler=(e)=>
    {
      const name=e.target.name;
      const val=e.target.value;
      setPropertyDetails({...propertyDetails,[name]:val})

      if(name==='valueofproperty')
      {
          if(!property_value.test(val) )
            setValidationError({...validationError,[name]:"Property value should be in Numbers"})
          else
            setValidationError({...validationError,[name]:""})
      }

      else if(name==='carpetarea')
      {
          if(!property_value.test(val) )
            setValidationError({...validationError,[name]:"Carpetarea should be in Numbers"})
          
          else{
            setValidationError({...validationError,[name]:""})
          }
      }
      else if(name==='pincode')
      {
          if(!pincode_validation.test(val))
            setValidationError({...validationError,[name]:"Invalid Pincode"})
          else
            setValidationError({...validationError,[name]:""})
      }
       
     else if(name==='disaster' || name ==='salaryStatus')
      {
         if(val==='Effected' || val==='notSalaried')
         {
            setSelectedOption(true);
            setPropertyDetails({...propertyDetails, val:""})
         }
      }  
     }

    const selectHandler=()=>
    {
      setSelectedOption(false);
    }

    const SubmitHandler=(e)=>
    {
      e.preventDefault();

      if(property_value.test(propertyDetails.valueofproperty) && property_value.test(propertyDetails.carpetarea) && pincode_validation.test(propertyDetails.pincode) && propertyDetails.valueofproperty>100000)
        navigate("/quotepage",{state:{propertyDetails:propertyDetails}});
      else if(propertyDetails.valueofproperty<=100000)
      {
        alert("Property Should be Greater than the Rs.100000")
        valueofpropertyRef.current && valueofpropertyRef.current.focus();
        e.preventDefault()
      }
      else
        alert("Please check the fileds");  
  }

  useEffect(() => {
    console.log(propertyDetails); // Check updated propertyDetails here
  }, [propertyDetails]);


  

  return (
    <>
      <div className='bg-2 '>
            <h4 className='p-2 text-center fw-bold'>Property Details</h4>
      </div>

      {/* <form className='ms-5'>
          <div className='bg-warning container rounded'>
              <h4 className='px-3 py-1 fw-bold '>Structure Details</h4>
          </div>
        <div className='container' >
          <div className='row'>

              <div className='col ms-5'>
                  <label htmlFor='valueofproperty' className='m-3 fw-bold'>Current Market Value of Property:</label><br/>
                  <label htmlFor='carpetarea' className='m-3 fw-bold'>Carpet area (sqft):</label><br/>
                  <label htmlFor='pincode' className='m-3 mt-5 fw-bold'> Enter Pincode:</label><br/><br/>
                  <label htmlFor='ageofthebuilding' className='m-3 fw-bold'>Age of the Building:</label><br/>
                  <label htmlFor='disaster' className='m-3 fw-bold mt-4'>Has Your Property effected with floods/Earthquake in past 5years:</label>
              </div>

              <div className='col'>
                    <input type='text' name="valueofproperty" value={propertyDetails.valueofproperty} onChange={onChangeHandler} autoComplete='off' className='m-3 p-1 px-2 rounded fw-bold' /><br/>
                    { propertyValue && <p className='text-danger'>propertyvalue should be numbers only</p>}
                    <input type='text' name="carpetarea"  value={propertyDetails.carpetarea} autoComplete='off' className='m-3 p-1 px-2 rounded fw-bold' /><br/>
                    { area && <p className='text-danger'>carpetarea should be numbers only</p>}<br/>
                    <input type='text' name="pincode"  value={propertyDetails.pincode} autoCapitalize='off ' className='m-3 p-1 px-2 rounded fw-bold' maxLength={6}/><br/>
                    {pinCode && <p className='text-danger'>pincode should be numbers only</p>}<br/>

                    <select name='ageofthebuilding' value={propertyDetails.ageofthebuilding} className='m-3 mt-4  p-1 p-2  rounded' style={{width:225}}>
                      <option value="">select</option>
                      <option value="5">0-5 Years</option>
                      <option value="10">5-10 Years</option>
                      <option value="15">10-15 Years</option>
                      <option value="20">15-20 Years</option>
                    </select><br/>

                    <select name='disaster ' value={propertyDetails.disaster} className='m-3 p-1 mt-4 p-2 rounded' style={{width:225}} >
                      <option value="">select</option>
                      <option value="yes">Yes</option>
                      <option value="No">No</option>
                    </select>
              </div>
          </div>
              <div className='bg-info rounded container'> 
                  <h4 className='px-3 py-1 fw-bold'>Security Measures</h4>
              </div>
          <div className='row '>
              <div className='col ms-5'>
                <label htmlFor='secuitytiming' className='m-3 fw-bold'>24*7 Security: </label> <br/>
                <label htmlFor='salaryStatus' className='m-3 fw-bold'>Are you salried individual?</label>
              </div>
              <div className='col'>

                <select name='securitycheck' value={propertyDetails.securitycheck} className='m-3 p-2 rounded' style={{width:225}} >
                    <option value="">select</option>
                    <option value="yes">Yes</option>
                    <option value="No">No</option>
                </select> <br/>
           
                 <select name='salaryStatus' value={propertyDetails.salaryStatus} className='m-3 p-2 rounded ' style={{width:225}}>
                    <option value="">select</option>
                    <option value="yes">Yes</option>
                    <option value="No">No</option>
                 </select>
              </div>
           </div>
              <div className='center-wrapper'><button  className='btn btn-success px-5' onClick={SubmitHandler}>Procced</button></div>
        </div >
      </form> */}

    <form className='container' onSubmit={SubmitHandler}>
        <header className='bg-warning container rounded'>
          <h4 className='px-3 py-1 fw-bold '>Structure Details</h4>
        </header>
    <div className='ms-5'>
      
      <table>
        <tbody>

          <tr>
           <td> <label htmlFor='valueofproperty' className='m-3 fw-bold'>Current Market Value of Property:<span className='text-danger'>*</span></label></td>
           <td><input  ref={valueofpropertyRef} type='text' id="valueofproperty" name='valueofproperty' value={propertyDetails.valueofproperty} onChange={onChangeHandler} autoComplete='off'  className=' p-1 rounded fw-bold' placeholder= 'Min Rs.100000' required /><br/>
          {validationError.valueofproperty && <span className='text-danger'>{validationError.valueofproperty}</span>}
           </td> 
          </tr>

          <tr>
            <td><label htmlFor='carpetarea' className='m-3 fw-bold'>Carpet area (sqft):<span className='text-danger'>*</span></label></td>
            <td><input type='text' id="carpetarea" name='carpetarea'  value={propertyDetails.carpetarea} onChange={onChangeHandler} autoComplete='off' className='p-1 rounded fw-bold' required /><br/>
            {validationError.carpetarea && <span className='text-danger'>{validationError.carpetarea}</span>}

          </td>
          </tr>

          <tr>
            <td><label htmlFor='pincode' className='m-3 fw-bold'> Enter Pincode:<span className='text-danger'>*</span></label></td> 
            <td><input type='text' id="pincode" name='pincode'  value={propertyDetails.pincode} onChange={onChangeHandler} autoComplete='off' className='p-1 rounded fw-bold' maxLength={6} required/><br/>
            {validationError.pincode && <span className='text-danger'>{validationError.pincode}</span>}</td>
          </tr>
  
        <tr>
        <td><label htmlFor='ageofthebuilding' className='m-3 fw-bold'>Age of the Building:<span className='text-danger'>*</span></label></td>
        <td> <select id='ageofthebuilding' name='ageofthebuilding' value={propertyDetails.ageofthebuilding} onChange={onChangeHandler} className=' p-1 rounded' style={{width:225}} required >
                      <option value="">select</option>
                      <option value="5">0-5 Years</option>
                      <option value="10">5-10 Years</option>
                      <option value="15">10-15 Years</option>
                      <option value="20">15-20 Years</option>
                    </select>
                    </td> 
        </tr>

        <tr>
        <td><label htmlFor='disaster' className='m-3 fw-bold'>Has Your Property effected with floods/Earthquake in past 5years:<span className='text-danger'>*</span></label></td>
        <td> <select id='disaster' name='disaster' value={propertyDetails.disaster} onChange={onChangeHandler} className='p-1 rounded' style={{width:225}} required >
                      <option value="">select</option>
                      <option value="Effected">Yes</option>
                      <option value="notEffected">No</option>
                    </select>
          {selectedOption && (
        <div className="popup bg-light border border-2  border-danger rounded "   >
          <div className="popup-inner p-3 text-center " >
            <p>Your Application was rejected <br/>as per terms & conditions</p>
            <button className='btn btn-danger px-2' onClick={selectHandler}>OK</button>
          </div>
        </div>
      )}</td>
        </tr>

        </tbody>
      </table>
      </div>
   
        <header className='bg-info rounded '> 
                  <h4 className='px-3 py-1 fw-bold'>Security Measures</h4>
        </header>


        <div className='ms-5'>
        <table>
          <tbody>
          <tr>
      <td> <label htmlFor='securitycheck' className='m-3 fw-bold'>24*7 Security:<span className='text-danger'>*</span> </label></td>
     
       <td><select id='securitycheck' name='securitycheck' value={propertyDetails.securitycheck} onChange={onChangeHandler} className='p-1 rounded securitylen' style={{width:225}} required>
                    <option value="">select</option>
                    <option value="secured">Yes</option>
                    <option value="notSecured">No</option>
                </select> </td>
                </tr>

    <tr>
     <td><label htmlFor='salaryStatus'  className='m-3 fw-bold'>Are you salried individual?<span className='text-danger'>*</span></label></td>
     
    <td> <select id='salaryStatus' name='salaryStatus' value={propertyDetails.salaryStatus} onChange={onChangeHandler}  className='p-1 rounded securitylen' style={{width:225}} required>
                    <option value="">select</option>
                    <option value="salaried">Yes</option>
                    <option value="notSalaried">No</option>
                 </select><br/></td>
                 </tr>
        </tbody>
      </table>
    </div>

      <div className='center-wrapper'><button className='btn btn-primary px-3 '>Procced</button></div>
      
    </form>
    
  </>
    );
}

export default PropertyDetails;
