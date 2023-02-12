import React from 'react';
import logo from "./regiones-españa.png"
import './landing.css'
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

export const LandingPage = () => {
    return (
        <div>
            <img src={logo}
                alt="img mapamundi españa"
                className='LandingImg'
            />
            <div className='landingAling'>
                <h1 className='landingTitle'>
                    <span className='g'>G</span>
                    <span className='e'>e</span>
                    <span className='o'>o</span>
                    <span className='g2'>g</span>
                    <span className='r'>r</span>
                    <span className='a'>a</span>
                    <span className='f'>f</span>
                    <span className='i'>í</span>
                    <span className='a2'>a</span>
                </h1>
            </div>
            <div className='landingAling'>
                <h3 className='landingSubtitle'>Aprende más de España</h3>
            </div>
            <div className='paragraphDiv'>
                <p className='paragraph' align="center">
                    La mayor parte del territorio de España está integrada, junto con Portugal y Andorra, en la unidad geográfica de la península Ibérica, situada en el extremo suroccidental de Europa. Comprende, además, un conjunto de terrenos insulares como los archipiélagos de Canarias y Baleares.
                </p>
            </div>
            <div className='landingButton'>
                <Link to={"/home"} className='landingLink'>
                    <Button variant='outlined' color='secondary' size='large'> Comenzar </Button>
                </Link>
            </div>
        </div>
    )
}
