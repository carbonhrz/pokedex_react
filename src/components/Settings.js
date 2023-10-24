import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { TextField } from '@mui/material';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({pokemon_number, setPokemonNumber}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [pokemonAmount, setPokemonAmount] = React.useState(setPokemonNumber);

  return (
    
    <div>
      <Button onClick={handleOpen}>Einstellungen</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
           Wie viele Pokémon sollen angezeigt werden?
           {console.log("Modal" + pokemon_number)}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          <TextField
              label="Anzahl der Pokémon"
              value={pokemonAmount}
              onChange={(event) => setPokemonAmount(event.target.value)}
              onBlur={() => setPokemonNumber(pokemonAmount)}
            />
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
