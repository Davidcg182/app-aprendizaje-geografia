import React from 'react';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import continentalImg from "./continental.png";
import CancelIcon from '@mui/icons-material/Cancel';
import "./continental.css"

const Continental = ({ open, onClose }) => {
    return (
        <Modal open={open} onClose={onClose}>
            <div className='contDiv'>
                <div className='contImg' >
                    <img src={continentalImg} alt='continentalimg' height={250}/>
                </div>
                <div>
                    <br />
                    <br />
                    <br />
                    <br />
                    <Typography >
                        Clima continental: Se ubica en el centro de la península Ibérica, sus temperaturas tienden a ser extremas, con inviernos largos y frios y veranos frescos en el norte y cálidos en el sur.
                    </Typography>
                </div>
                <div className='contBtn'>
                    <Button onClick={onClose}>
                        <CancelIcon sx={{ width: 35, height: 35, color: "rgb(54, 54, 54)" }} />
                    </Button>
                </div>
            </div>
        </Modal>
    )
}

export default Continental
