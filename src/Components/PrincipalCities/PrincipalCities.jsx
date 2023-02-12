import { Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import cities from "./PrincipalCities.png";

export const PrincipalCities = () => {
  return (
    <div>
        <h1>Ciudades principales</h1>
        <img src={cities} alt='ciudadesdeespaña' useMap='#cities' width="500" height={"500"} />
        <map name="cities">
            <area shape="circle" coords="1080,361,44" href="https://www.w3schools.com" alt='img'/>
        </map>

        <Link to="/barcelona">
          <Button variant='outlined' color='secondary' size='large'>
            Detalle ciudad
          </Button>
        </Link>
    </div>
  )
}
