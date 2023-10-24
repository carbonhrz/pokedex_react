import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useState } from 'react';
import axios from 'axios';
import { Grid, Card, CardActionArea, CardMedia, CardContent } from '@mui/material';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}


export default function BasicTabs({pokemonDetailsTab}) {
  const [value, setValue] = React.useState(0);
  const [description, setDescription] = React.useState("");
  const [evolutionChain, setEvolutionChain] = useState([]);


  const labels = ['HP', 'Attack', 'Defense', 'Special Attack', 'Special Defense', 'Speed'];
  const options = {
    indexAxis: 'x',
    responsive: true,
   
  }
    
  const data = {
    labels,
    datasets: [
      {
        label: 'Base Stats',
        axis: 'y',
        data: pokemonDetailsTab.props.pokemon.details.stats.map(stat => stat.base_stat),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };
  

  const handleChange = (event, newValue) => {
    if(newValue === 1){
      axios.get(`https://pokeapi.co/api/v2/pokemon-species/${pokemonDetailsTab.props.pokemon.id}`)
        .then(res => {
          const speciesData = res.data;
          const description = speciesData.flavor_text_entries.find(entry => entry.language.name === 'de').flavor_text;
          const formattedDescription = description.replace(/[\n\f]/g, " ");
          setValue(newValue);
          setDescription(formattedDescription);
        })
        .catch(error => {
          console.error(error);
        });
    } else if (newValue === 2) {
      axios.get(`https://pokeapi.co/api/v2/pokemon-species/${pokemonDetailsTab.props.pokemon.id}`)
        .then(res => {
          const speciesData = res.data;
          const evolutionChainURL = speciesData.evolution_chain.url;
          axios.get(evolutionChainURL)
            .then(res => {
              const evolutionChainData = res.data;
              const chain = evolutionChainData.chain;
              const evolutionArray = [];
  
              const parseEvolutionChain = (chain) => {
                const speciesName = chain.species.name;
                const speciesURL = chain.species.url;
                const speciesId = parseInt(speciesURL.split('/')[6]);
                const evolvesTo = chain.evolves_to;
                const level = chain.evolution_details[0]?.min_level || null;
                const evolutionObject = { name: speciesName, id: speciesId, level };
                evolutionArray.push(evolutionObject);
  
                if(evolvesTo.length > 0){
                  for(let i=0; i<evolvesTo.length; i++){
                    parseEvolutionChain(evolvesTo[i]);
                  }
                }
              }
              parseEvolutionChain(chain);
              setEvolutionChain(evolutionArray);
              setValue(newValue);
            })
            .catch(error => {
              console.error(error);
            });
        })
        .catch(error => {
          console.error(error);
        });
    } else {
      setValue(newValue);
    }
  }
  

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Base-Stats" {...a11yProps(0)} />
          <Tab label="Details" {...a11yProps(1)} />
          <Tab label="Entwicklungen" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
      <p>Größe: {pokemonDetailsTab.props.pokemon.details.height/10 + ' m'}</p>
        <p>Gewicht: {pokemonDetailsTab.props.pokemon.details.weight/10 + ' kg'}</p>
        <Bar options={options} data={data} type='horizontalBar' />
      </TabPanel>
      <TabPanel value={value} index={1}>
      <p>{description}</p>
      </TabPanel>
      <TabPanel value={value} index={2}>
       <Grid container spacing={3}>
        {evolutionChain.map((evolution, index) => (
          <Grid item xs={4} key={index}>
            <Card>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="120"
                  image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${evolution.id}.png`}
                  style={{objectFit: 'scale-down'}}
                  alt={evolution.name}
                />
               <CardContent>
                <Typography variant="h7">
                <p>{evolution.name.charAt(0).toUpperCase() + evolution.name.slice(1)}</p>
                {evolution.level && <p>Level {evolution.level}</p>}
                </Typography>
              </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
      </TabPanel>
    </Box>
  );
}

