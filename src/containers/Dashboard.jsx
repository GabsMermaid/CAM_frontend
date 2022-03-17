import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import ButtonGroup from '../components/elements/ButtonGroup.jsx';
import Button from '../components/elements/Button';
import "./Dashboard.css";
//import classNames from 'classnames';

export default function Dashboard() {
  // const [value, setValue] = React.useState('');

  // const handleChange = (event) => {
  //   setValue(event.target.value);
  // };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      account_name: data.get('account_name'),
      account_type: data.get('account_type'),
      account_poc: data.get('account_poc'),
      email: data.get('email'),
      account_notes: data.get('account_notes'),
      deck_notes: data.get('deck_notes'),
    });
  };

  return (
    <>
    <div className="Header">Account Dashboard</div>

    {/* <div className="Container">
      <img src="" alt="selected" className="selected" />
      <div className="imgContainer">
        <img src="./images/La-Central-008.png" alt="post" />
      </div>

    </div> */}
    
    <Box
      className="Dashboard"
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
      >
      <div className='Text'>
      <div>
        <TextField
          id="outlined-multiline-flexible"
          name='account_name'
          label="Account Name"
          color="secondary"
          // value={value}
          // onChange={handleChange}
          variant="filled"
          sx={{backgroundColor:"gray", color:"white"}}
          InputLabelProps={{style:{color:'white'}}}
          InputProps={{style: {color:"white"}}}
        />
        <TextField
          id="outlined-multiline-flexible"
          name='account_type'
          label="Account type"
          color="secondary"
          // value={value}
          // onChange={handleChange}
          variant="filled"
          sx={{backgroundColor:"gray", color:"white"}}
          InputLabelProps={{style:{color:'white'}}}
          InputProps={{style: {color:"white"}}}
        />
      </div>
      <br />
      <div>
        <TextField
          id="outlined-multiline-static"
          name='account_poc'
          label="Account POC"
          color="secondary"
          multiline
          // value={value}
          // onChange={handleChange}
          variant="filled"
          sx={{backgroundColor:"gray", color:"white"}}
          InputLabelProps={{style:{color:'white'}}}
          InputProps={{style: {color:"white"}}}
        />
        <TextField
          id="outlined-multiline-static"
          name='email'
          label="Email"
          color="secondary"
          multiline
          // value={value}
          // onChange={handleChange}
          variant="filled"
          sx={{backgroundColor:"gray", color:"white"}}
          InputLabelProps={{style:{color:'white'}}}
          InputProps={{style: {color:"white"}}}
        />
      </div>
      <br />
      <div>
        <TextField
          id="outlined-multiline-static"
          name='account_notes'
          label="Account Notes"
          color="secondary"
          multiline
          rows={4}
          variant='filled'
          sx={{backgroundColor:"gray", color:"white"}}
          InputLabelProps={{style:{color:'white'}}}
          InputProps={{style: {color:"white"}}}
          
        />
        <TextField
          id="outlined-multiline-static"
          name='deck_notes'
          label="Deck Notes"
          color="secondary"
          multiline
          rows={4}
          variant='filled'
          sx={{backgroundColor:"gray", color:"white"}}
          InputLabelProps={{style:{color:'white'}}}
          InputProps={{style: {color:"white"}}}
        />
      </div>
      </div>
    </Box>

    <br />

    <ButtonGroup className="Button">

      <Button tag="a" color="primary" wideMobile onChange={() => window.open("")}>
          Upload
      </Button>

      <Button tag="a" color="primary" wideMobile onClick={() => window.open("")}>
          Save
      </Button>

      <Button tag="a" color="primary" wideMobile onClick={() => window.open("./Send")}>
          Send
      </Button>

    </ButtonGroup>

  </>
  );
}
