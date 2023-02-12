import React from 'react';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import oceanicImg from "./Oceanic.png";
import CancelIcon from '@mui/icons-material/Cancel';
import "./oceanic.css"

export const OceanicWeather = ({ open, onClose }) => {
    return (
        <Modal open={open} onClose={onClose}>

            <div className='onceanicDiv'>
                <div >
                    <img src={oceanicImg} alt='oceanicimg' />
                </div>
                <div>
                    <br/>
                    <br/>
                    <Typography >
                        Clima oceánico: Se encuentra en la costa Cantábrica y la parte más oeste de los Pirineos. En ciudades como Santander, Bilbao u Oviedo presentan este clima. Su temperatura media anual oscila entre 11ºC y 16ºC reconocido por ser un clima fresco.
                    </Typography>
                </div>
                <div className='oceanBtn'>
                    <Button onClick={onClose}>
                        <CancelIcon sx={{ width: 35, height: 35, color: "rgb(54, 54, 54)" }} />
                    </Button>
                </div>
            </div>
        </Modal>
    )
}
