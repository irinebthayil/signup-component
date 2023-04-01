import './App.css';
import React, { useState } from 'react';
import { Button, FormControl, FormHelperText, InputAdornment, SvgIcon, TextField } from '@mui/material';
import { ReactComponent as errorIcon } from "./assets/icon-error.svg";

const Form = () => {

  const textFieldsStyle = {
    input: {
      color: 'hsl(249, 10%, 26%)',
      fontWeight: '500',
      fontFamily: `"Poppins", sans-serif`
    }
  }

  const helperTextStyle = {
    color: 'hsl(0, 100%, 74%)',
    textAlign: 'end',
    fontStyle: 'italic',
    fontFamily: `"Poppins", sans-serif`
  }

  const [display1, setDisplay1] = useState({ display: 'none' });
  const [display2, setDisplay2] = useState({ display: 'none' })
  const [display3, setDisplay3] = useState({ display: 'none' })
  const [display4, setDisplay4] = useState({ display: 'none' })

  const [userDetails, setUserDetails] = useState({ firstName: '', lastName: '', email: '', password: '' })

  function onInputChanged(e) {
    var details = userDetails;
    details[e.target.id] = e.target.value;
    setUserDetails(details);
    switch (e.target.id) {
      case 'firstName':
        document.getElementById('firstNameHelperText').style.display = "none";
        setDisplay1({ display: 'none' });
        break;
      case 'lastName':
        setDisplay2({ display: 'none' });
        document.getElementById('lastNameHelperText').style.display = "none";
        break;
      case 'email':
        setDisplay3({ display: 'none' })
        document.getElementById('emailHelperText').style.display = "none"
        break;
      case 'password':
        setDisplay4({ display: 'none' })
        document.getElementById('passwordHelperText').style.display = "none"
        break;
    }
  }

  function onSubmitButtonClicked() {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (userDetails.firstName.trim() == "") {
      document.getElementById('firstNameHelperText').style.display = "block";
      setDisplay1({ display: '' })
    }
    else {
      document.getElementById('firstNameHelperText').style.display = "none";
      setDisplay1({ display: 'none' })
    }

    if (userDetails.lastName.trim() == "") {
      document.getElementById('lastNameHelperText').style.display = "block"
      setDisplay2({ display: '' });
    }
    else {
      setDisplay2({ display: 'none' })
      document.getElementById('lastNameHelperText').style.display = "none"
    }

    if (userDetails.email.trim() == "" || !userDetails.email.match(mailformat)) {
      document.getElementById('emailHelperText').style.display = "block"
      setDisplay3({ display: '' });
    }
    else {
      setDisplay3({ display: 'none' })
      document.getElementById('emailHelperText').style.display = "none"
    }

    if (userDetails.password.trim() == "") {
      document.getElementById('passwordHelperText').style.display = "block"
      setDisplay4({ display: '' });
    }
    else {
      setDisplay4({ display: 'none' })
      document.getElementById('passwordHelperText').style.display = "none"
    }

  }

  return (
    <div className='form-parent-div'>
      <form className='form'>
        <FormControl fullWidth margin='normal'>
          <TextField id='firstName' className='text-fields' sx={textFieldsStyle} placeholder='First Name' variant="outlined" InputProps={{ endAdornment: <InputAdornment id="inpa_fn" position='end' sx={display1}><SvgIcon component={errorIcon}></SvgIcon></InputAdornment> }} onChange={onInputChanged} />
          <FormHelperText id="firstNameHelperText" className='formHelperText' sx={helperTextStyle}>First Name cannot be empty</FormHelperText>
        </FormControl>

        <FormControl fullWidth margin='normal'>
          <TextField id='lastName' className='text-fields' sx={textFieldsStyle} fullWidth placeholder='Last Name' variant="outlined" InputProps={{ endAdornment: <InputAdornment position='end' sx={display2}><SvgIcon component={errorIcon}></SvgIcon></InputAdornment> }} onChange={onInputChanged} />
          <FormHelperText id="lastNameHelperText" className='formHelperText' sx={helperTextStyle}>Last Name cannot be empty</FormHelperText>
        </FormControl>

        <FormControl fullWidth margin='normal'>
          <TextField id='email' className='text-fields' sx={textFieldsStyle} fullWidth placeholder='Email Address' variant="outlined" InputProps={{ endAdornment: <InputAdornment position='end' sx={display3}><SvgIcon component={errorIcon}></SvgIcon></InputAdornment> }} onChange={onInputChanged} />
          <FormHelperText id="emailHelperText" className='formHelperText' sx={helperTextStyle}>Looks like this is not an email</FormHelperText>
        </FormControl>

        <FormControl fullWidth margin='normal'>
          <TextField id='password' className='text-fields' sx={textFieldsStyle} fullWidth placeholder='Password' variant="outlined" InputProps={{ endAdornment: <InputAdornment position='end' sx={display4}><SvgIcon component={errorIcon}></SvgIcon></InputAdornment> }} onChange={onInputChanged} />
          <FormHelperText id="passwordHelperText" className='formHelperText' sx={helperTextStyle}>Password cannot be empty</FormHelperText>
        </FormControl>

        <Button sx={{ fontFamily: `"Poppins", sans-serif` }} id="formButton" variant="contained" onClick={onSubmitButtonClicked}>CLAIM YOUR FREE TRIAL</Button>
        <p style={{ color: 'hsl(246, 25%, 77%)', fontSize: '11px', marginTop: '16px', textAlign: 'center' }}>By clicking the button, you are agreeing to our <span style={{ color: 'hsl(0, 100%, 74%)', cursor: 'pointer', fontSize: '11px' }}>Terms and Services</span></p>
      </form>
    </div>
  )
}


function App() {
  return (
    <div className="parent-div">
      <div className='main-div'>
        <div className='child-div'>
          <div>
            <h2 className='header'>Learn to code by watching others</h2>
            <p className='header-desc'>See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable.</p>
          </div>
          <div>
            <button id='tryButton'><b>Try it free 7 days</b> then $20/mo. thereafter</button>
            <Form></Form>
          </div>
        </div>


      </div>
    </div>
  );
}

export default App;
