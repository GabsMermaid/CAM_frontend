import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { positions } from '@mui/material/node_modules/@mui/system';
import TextField from '@mui/material/TextField';
import * as React from 'react';
import Button from '../components/elements/Button';
import ButtonGroup from '../components/elements/ButtonGroup.jsx';
import "./Dashboard.css";

export default function Dashboard() {
  //const [value, setValue] = React.useState('');

  // const handleChange = (event) => {
  //   setValue(event.target.value);
  // };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      approval_notes: data.get('approval_notes'),
      deck_notes: data.get('deck_notes'),
    });
  };

  const postData = [
    {
      img: "https://i.imgur.com/7HfmgPK.jpg",
      title: "Posted",
    },
    {
      img: "https://i.imgur.com/KleMh2k.jpg",
      title: "Posted",
    },
    {
      img: "https://i.imgur.com/YMxK0bm.jpg",
      title: "Posted",
    },
    {
      img: "https://i.imgur.com/3x2LjF1.jpg",
      title: "Posted",
    },
    {
      img: "https://i.imgur.com/pxQU67d.jpg",
      title: "Posted",
    },
    {
      img: "https://i.imgur.com/0E9YbS5.jpg",
      title: "Posted",
    },
    {
      img: "https://i.imgur.com/q7gsJtk.jpg",
      title: "Posted",
    },
    {
      img: "https://i.imgur.com/Z9YUNPb.jpg",
      title: "Posted",
    },
    {
      img: "https://i.imgur.com/yGXDyZ0.jpg",
      title: "Posted",
    }, 
    
  ]

  return (
    <>
    <div className="Header"> Approval Dashboard</div>

    <div className='Grid'>
    <ImageList sx={{ width: 600, height: 550 }} variant="quilted" cols={3} rowHeight={164}>
      {postData.map((post) => (
        <ImageListItem key={post.img}>
          <img
            src={`${post.img}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${post.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={positions.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList> 
    </div>

    <br />
    
    <Box
      className="Dashboard"
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '30ch' },
      }}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
      >
      <div className='Text'>
      <div>
        <TextField
          id="outlined-multiline-static"
          name='approval_notes'
          label="Approval Notes"
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
          Return
      </Button>

      <Button tag="a" color="primary" wideMobile onClick={() => window.open("")}>
          Approve
      </Button>

      <Button tag="a" color="primary" wideMobile onClick={() => window.open("./Send")}>
          Send
      </Button>

    </ButtonGroup>

  </>
  );
}
