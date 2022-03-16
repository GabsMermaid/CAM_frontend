import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import ButtonGroup from '../components/elements/ButtonGroup.jsx';
import Button from '../components/elements/Button';
import "./../assets/images/La-Central-008.png";
import "./Dashboard.css";
//import classNames from 'classnames';

export default function Dashboard() {
  const [value, setValue] = React.useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <>
    <div className="Header">Account Dashboard</div>

    <div className="Container">
      {/* <img src="" alt="selected" className="selected" /> */}
      <div className="imgContainer">
        <img src="./images/La-Central-008.png" alt="post" />
      </div>

    </div>
    
    <Box
      className="Dashboard"
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div className='Text'>
      <div>
        <TextField
          id="outlined-multiline-flexible"
          label="Account Name"
          color="secondary"
          value={value}
          onChange={handleChange}
          variant="filled"
        />
        <TextField
          id="outlined-multiline-flexible"
          label="Account type"
          color="secondary"
          value={value}
          onChange={handleChange}
          variant="filled"
        />
      </div>
      <br />
      <div>
        <TextField
          id="outlined-multiline-static"
          label="Account POC"
          color="secondary"
          multiline
          value={value}
          onChange={handleChange}
          variant="filled"
        />
        <TextField
          id="outlined-multiline-static"
          label="Email"
          color="secondary"
          multiline
          value={value}
          onChange={handleChange}
          variant="filled"
        />
      </div>
      <br />
      <div>
        <TextField
          id="outlined-multiline-static"
          label="Account Notes"
          color="secondary"
          multiline
          rows={4}
          variant='filled'
          
        />
        <TextField
          id="outlined-multiline-static"
          label="Deck Notes"
          color="secondary"
          multiline
          rows={4}
          variant='filled'
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
