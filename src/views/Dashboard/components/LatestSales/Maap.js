import React, {useState } from 'react';
import { GoogleMap, withScriptjs,
  withGoogleMap, Marker, InfoWindow } from 'react-google-maps';
import * as parksData from '../../../../data/skateboard-parks.json';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import {Title} from './styles';

function Map() {
  //toda vez que cria uma variável que vai precisar variar dentro da classe!!!
  const [selectedPark, setselectedPark] = useState(null);
  const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    small: {
      width: theme.spacing(3),
      height: theme.spacing(3),
    },
    large: {
      width: theme.spacing(10),
      height: theme.spacing(10),
    },
  }));

  const classes = useStyles();

  return (
    // Important! Always set the container height explicitly
    <GoogleMap
      defaultCenter={{lat: -3.907756, lng: -38.256283}}
      defaultZoom={10}
    >
      {parksData.features.map((park) => (
        <Marker
          icon = {{
            url: '/hidrante.png',
            scaledSize: new window.google.maps.Size(20,20)
          }} 
          key= {park.properties.id}
          onClick = {() => {
            setselectedPark(park)
          }}
          position = {{ lat: park.properties.longitude,
            lng: park.properties.latitude}}
        />
      ))}
      
      { selectedPark && (
        <InfoWindow
          onCloseClick={()=>{
            setselectedPark(null);
          }}
          position={{
            lat: selectedPark.properties.longitude,
            lng: selectedPark.properties.latitude
          }}
        >
          <div>
            <Avatar
              alt="Remy Sharp"
              className={classes.large}
              src={selectedPark.imagem.url}
            />
            <Title cor = {selectedPark.properties.cor} >Número de série: {selectedPark.properties.numero}</Title>
            <p>Pressão: {selectedPark.vistorias.pressao}</p>
            <p>Vazao: {selectedPark.vistorias.vazao}</p>
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  );
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

export default function Maap() {
  return (
    <div style= {{width: '100vw', height: '100vh'}}>
      <WrappedMap
        containerElement= {<div style={{ height: '100%' }} />}
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&
    libraries=geometry,drawing,places&key= AIzaSyDragFl8lssbgGchWJfn8FrAgkDlWoh_TM`}
        loadingElement={<div style={{ height: '100%' }} />}
        mapElement= {<div style={{ height: '100%' }} />}
      />
    </div>
  );
}
