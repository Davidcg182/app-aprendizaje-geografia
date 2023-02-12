import React from 'react';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import subtropImg from "./subtrop.png";
import CancelIcon from '@mui/icons-material/Cancel';
import "./subtropical.css"

const SubTropical = ({open, onClose}) => {
    return (
        <Modal open={open} onClose={onClose}>

            <div className='subTropDiv'>
                <div className='subTropBtn'>
                    <Button onClick={onClose}>
                        <CancelIcon sx={{ width: 35, height: 35, color: "rgb(54, 54, 54)" }} />
                    </Button>
                </div>
                <div>
                    <Typography >
                        Clima subtropical: Este clima lo podemos encontrar en las islas Canarias y en zonas costeras del sur de la peninsula como Granada, Málaga o Almería. Sus temperaturas no bajan de los 15ºC y su temperatura media es por encima de los 25ºC.
                    </Typography>
                </div>
                <div className='subTropImg'>
                    <img src={subtropImg} alt='subtropimg' />
                </div>

            </div>
        </Modal>
    )
}

export default SubTropical