import React, { useState, useEffect, useRef } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import CardContent from '@mui/material/CardContent';
import { Typography } from '@mui/material';

const MapContainer = ({ array, isAdding, getLocation, onStoreSelect }) => {

  const [ selected, setSelected ] = useState({});
  const [ currentPosition, setCurrentPosition ] = useState({});

  const locations = [
    {
      name: "Fresh Thyme",
      location: { 
        lat: 44.97135189667709,
        lng: -93.21410897664911 
      }
    }, {
        name: "Whole Foods",
        location: {
          lat: 44.983251294619876,
          lng: -93.26941187082825 
        }
    }];

  const markerRef = useRef(null);

  const defaultCenter = {
    lat: 44.971590952026915, lng: -93.22020848651255
  }

  const onSelect = item => {
    setSelected(item);
    onStoreSelect();
  }

  const success = (position) => {
    const latitude  = position.coords.latitude;
    const longitude = position.coords.longitude;
    const currentPosition = {
      lat: latitude,
      lng: longitude
    }
    setCurrentPosition(currentPosition);
  }

  const onMarkerDragEnd = (e) => {
    const lat = e.latLng.lat();
    const lng = e.latLng.lng();
    setCurrentPosition({ lat, lng})
  };

  const footer = (
    <div className="footer">
      <div className="inner-footer">
      <span className="location-text">Choose location and press</span>

      </div>
    </div>
  );
/*
  const mapStyles = () => {
    if (!isAdding) {
      return {
        marginTop: "-20px",
        height: "100vh",
        width: "100%"
      }
    } else {
      return {
        marginTop: "-20px",
        height: "80vh",
        width: "100%"
      }
    }
  }*/

    const mapStyles = {        
        height: "70vh",
        width: "70%"
    };

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(success);
    })

  

     return (
        <>

            <LoadScript
        id="script-loader"
        googleMapsApiKey=''
        >

        <GoogleMap
          id='example-map'
          mapContainerStyle={mapStyles}
          draggable={true}
          zoom={13}
          center={currentPosition.lat ? currentPosition : defaultCenter}
        >
            {
                locations.map(item => {
                    return (
                        <Marker key={item.name} 
                        position={item.location}
                        onClick={() => onSelect(item)}/>
                    )
                })
            }

          {
            array ?
            array.map(item => {
              return (
              <Marker 
              key={item.id}
              position={item.location}
              onClick={() => onSelect(item)}
              />
              )
            }) : null
          }
          {
            isAdding ? 
            <Marker
            position={currentPosition}
            ref={() => markerRef}
            onDragEnd={(e) => onMarkerDragEnd(e)}
            draggable={true} /> :
            null
          }
          {
            selected.location ?
            (
              <InfoWindow
              position={selected.location}
              onCloseClick={() => setSelected({})}
            >
              <div className="infowindow">
                <Typography variant="body2">{selected.name}</Typography>
              </div>
            </InfoWindow>
            ) : null
          }
        </GoogleMap>
      </LoadScript>
      {
        isAdding ?
        footer :
        null
      }
        </>
     )
  }

export default MapContainer;