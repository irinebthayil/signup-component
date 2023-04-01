import './App.css';
import React from 'react';
import { Button, TextField, ThemeProvider, createTheme } from '@mui/material';

const Form = () => {

  const textFieldsStyle = {
    input: {
      color: 'hsl(249, 10%, 26%)',
      fontWeight: '500',
      fontFamily: `"Poppins", sans-serif`
    }
  }

  return (
    <div className='form-parent-div'>
      <form className='form'>
        <TextField className='text-fields' sx={textFieldsStyle} fullWidth margin='dense' placeholder='First Name' variant="outlined" />
        <TextField className='text-fields' sx={textFieldsStyle} fullWidth margin='dense' placeholder='Last Name' variant="outlined" />
        <TextField className='text-fields' sx={textFieldsStyle} fullWidth margin='dense' placeholder='Email Name' variant="outlined" />
        <TextField className='text-fields' sx={textFieldsStyle} fullWidth margin='dense' placeholder='Password' variant="outlined" />
        <Button sx={{ fontFamily: `"Poppins", sans-serif` }} id="formButton" variant="contained">CLAIM YOUR FREE TRIAL</Button>
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
