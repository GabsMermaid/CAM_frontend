import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import ButtonGroup from '../components/elements/ButtonGroup.jsx';
import Button from '../components/elements/Button';
import "./Dashboard.css"
//import classNames from 'classnames';

export default function MultilineTextFields() {
  const [value, setValue] = React.useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <>
    <div className="Header">Account Dashboard</div>
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
          value={value}
          onChange={handleChange}
          variant="filled"
        />
        <TextField
          id="outlined-multiline-flexible"
          label="Account type"
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
          multiline
          value={value}
          onChange={handleChange}
          variant="filled"
        />
        <TextField
          id="outlined-multiline-static"
          label="Email"
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
          label=""
          multiline
          rows={2}
          defaultValue="Account Notes"
          
        />
      </div>
      <br />
      <div>
        <TextField
          id="outlined-multiline-static"
          label=""
          multiline
          rows={2}
          defaultValue="Deck Notes"
        />
      </div>
      </div>
    </Box>

    <br />

    <ButtonGroup className="Button">

      <Button tag="a" color="primary" wideMobile onClick={() => window.open("")}>
          Upload
      </Button>

      <Button tag="a" color="primary" wideMobile onClick={() => window.open("")}>
          Save
      </Button>

      <Button tag="a" color="primary" wideMobile onClick={() => window.open("")}>
          Send
      </Button>

    </ButtonGroup>

  </>
  );
}
