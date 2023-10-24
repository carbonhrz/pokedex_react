import React from 'react'
import Typography from '@mui/material/Typography';
import { CardActionArea, Divider } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';

const PokemonCard = ({pokemon}) => {

  const cardStyle = {
      maxWidth: 200,
      border: 3,
      borderColor: 'rgb(204, 202, 196)',
      borderRadius: 9,
      textAlign: 'center',
      background: (pokemon.type === 'fire') ? 'linear-gradient(to top, rgb(190, 182, 182), rgb(211, 58, 31))' :
      (pokemon.type === 'water') ? 'linear-gradient(to top, rgb(190, 182, 182), rgb(69, 117, 206))' :
      (pokemon.type === 'bug') ? 'linear-gradient(to top, rgb(190, 182, 182), rgb(31, 97, 11, 0.658))' :
      (pokemon.type === 'normal') ? 'linear-gradient(to top, rgb(190, 182, 182), rgb(255, 255, 255))' :
      (pokemon.type === 'electric') ? 'linear-gradient(to top, rgb(190, 182, 182), rgb(253, 253, 72))' :
      (pokemon.type === 'poison') ? 'linear-gradient(to top, rgb(190, 182, 182), rgb(177, 38, 84))' :
      (pokemon.type === 'ground') ? 'linear-gradient(to top, rgb(190, 182, 182), rgb(143, 107, 7))' :
      (pokemon.type === 'fighting') ? 'linear-gradient(to top, rgb(190, 182, 182), rgb(199, 103, 39))' :
      (pokemon.type === 'psychic') ? 'linear-gradient(to top, rgb(190, 182, 182), rgb(218, 63, 122))' :
      (pokemon.type === 'rock') ? 'linear-gradient(to top, rgb(190, 182, 182), rgb(150, 111, 29))' :
      (pokemon.type === 'ghost') ? 'linear-gradient(to top, rgb(190, 182, 182), rgb(113, 17, 202))' :
      (pokemon.type === 'fairy') ? 'linear-gradient(to top, rgb(190, 182, 182), rgb(199, 103, 39))' :
      (pokemon.type === 'ice') ? 'linear-gradient(to top, rgb(190, 182, 182), #90d3f1)' :
      (pokemon.type === 'dragon') ? 'linear-gradient(to top, rgb(190, 182, 182), rgb(199, 103, 39))' :
      (pokemon.type === 'ice') ? 'linear-gradient(to top, rgb(190, 182, 182), #90d3f1)' :
      (pokemon.type === 'grass') ? 'linear-gradient(to top, rgb(190, 182, 182), rgb(8, 182, 8))' :
      '#fff',
      
     
  };

  const type = {
    width: 'auto',
    textAlign: 'center',
    justifyContent: 'center',
    borderRadius: 17,
    background: (pokemon.type === 'fire') ? 'red' :
      (pokemon.type === 'water') ? 'blue' :
      (pokemon.type === 'bug') ? '#203513' : 
      (pokemon.type === 'normal') ? 'grey' :
      (pokemon.type === 'electric') ? '#F1d305' :
      (pokemon.type === 'poison') ? '#A44BA8' :
      (pokemon.type === 'ground') ? '#79540A' :
      (pokemon.type === 'fighting') ? '#C54B13' :
      (pokemon.type === 'psychic') ? '#C026C3' :
      (pokemon.type === 'rock') ? '#A88C5B' :
      (pokemon.type === 'ghost') ? 'purple' :
      (pokemon.type === 'fairy') ? 'linear-gradient(to top, rgb(190, 182, 182), rgb(199, 103, 39))' :
      (pokemon.type === 'ice') ? '#5BA7A8' :
      (pokemon.type === 'dragon') ? '#E68E39' :
      (pokemon.type === 'ice') ? 'linear-gradient(to top, rgb(190, 182, 182), #90d3f1)' :
      (pokemon.type === 'grass') ? 'green' :
      '#fff',
  };

  return (
    <Card variant="outlined" style={cardStyle} className="Card">
     <CardActionArea>
       <CardMedia className="Bild"
         component="img"
         height=""
         image={pokemon.sprite}
         alt={pokemon.name}
       />
        <Divider variant="middle" />
       <CardContent sx ={{
         textTransform: 'capitalize',
         display: 'flex',
         alignItems: 'center',
         justifyContent: 'center',
         flexDirection: 'column',
       }}>
        <Typography gutterBottom className="Number" component="div">  
        #{pokemon.id} 
         </Typography>
         <Typography gutterBottom className="PokemonName" variant="h6" component="div">
           {pokemon.name} 
         </Typography>
        
         <Typography gutterBottom className="PokemonType" variant="h7" component="div" style={type}>
          {pokemon.type}  
         </Typography>
       </CardContent>
     </CardActionArea>
   </Card>
 );
 } 

export default PokemonCard;


/*<Card variant="outlined" sx={{ 
  maxWidth: 150,
  background: 'linear-gradient(to top, rgb(190, 182, 182), rgb(199, 103, 39))',
  border: 3,
  borderColor: 'rgb(204, 202, 196)',
  borderRadius: 4,
  
  
 }}>
 <CardActionArea>
   <CardMedia className="Bild"
     component="img"
     height=""
     image={pokemon.sprite}
     alt="green iguana"
   />
    <Divider variant="middle" />
   <CardContent sx ={{
     textTransform: 'capitalize',
  
     
   }}>
     <Typography gutterBottom className="PokemonName" variant="h6" component="div">
       {pokemon.name} 
     </Typography>
     <Typography gutterBottom className="Number" component="div">  
       {pokemon.id} 
     </Typography>
     <Typography gutterBottom className="PokemonType" variant="h7" component="div">
       {pokemon.type} 
     </Typography>
   </CardContent>
 </CardActionArea>
</Card>
);
} 

*/