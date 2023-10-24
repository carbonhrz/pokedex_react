import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import logo from './logo.png';
import TemporaryDrawer from './Drawer';
import { InputLabel, FormControl } from '@material-ui/core';
import { Slider } from '@material-ui/core';
import { useState } from 'react';
import BasicModal from './Settings';


const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '15ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));

 
  
  const SearchAppBar = ({filter, pokemon_number, setPokemonNumber}) => {
   const [pokemonAmount, setPokemonAmount] = useState(pokemon_number);
    return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed" sx={{ bgcolor: "black"}}>
          <Toolbar sx={{color: "white"}}>
          <TemporaryDrawer />
        
            <Typography 
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            >
              
              <img src={logo} alt="logo" width="150" height="auto"  />
            
            </Typography>
          
            <BasicModal pokemon_number={pokemonAmount} setPokemonNumber={setPokemonNumber}/>
            {console.log("hierNeu" + pokemonAmount)}
            
            <Search>
            
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                onChange={(e) => filter(e.target.value)}
                id = 'searchbox' 
                placeholder="Suche Pokémon..."
                inputProps={{'aria-label': 'search'}}
              />
            </Search>
          </Toolbar>
        </AppBar>
      </Box>
      
    
      
    );
  }


export default SearchAppBar;
