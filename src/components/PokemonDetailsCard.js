import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useState } from 'react'
import BasicTabs from './TabMenu';
import axios from 'axios';
import { useEffect } from 'react';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '40vw',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  
  display: 'flex',
  textAlign: 'center',
  borderRadius: 8,
  '@media (max-width: 600px)': {
    width: '90vw',
  },
};



export default function BasicModal({PokemonObject}) {
  
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
 

  return (
    <div>
      <Button onClick={handleOpen}>{PokemonObject}</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        BackdropProps={{
    style: {
      backdropFilter: 'blur(8px)',
    },
  }}
      >      
        <Box sx={style} className="PokemonModal">
          <Typography id="modal-modal-title" component="h2" >
          {<img className='PokemonPicture' src={PokemonObject.props.pokemon.sprite} alt="logo" style={{maxWidth: '65%', height: 'auto'}} />}
         <h3>{PokemonObject.props.pokemon.name.charAt(0).toUpperCase() + PokemonObject.props.pokemon.name.slice(1)}</h3> 
          </Typography>
          <Typography id="modal-modal-title" variant="h6" component="h2" >
          <BasicTabs pokemonDetailsTab={PokemonObject}></BasicTabs>
          </Typography>
          <Typography id="modal-modal-description" sx={{    }}>
          
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
