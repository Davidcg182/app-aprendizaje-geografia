import React from 'react';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import mediterraneanImg from "./mediterranean.png";
import CancelIcon from '@mui/icons-material/Cancel';
import "./mediterranean.css"

const Mediterranean = ({ open, onClose }) => {
    return (
        <Modal open={open} onClose={onClose}>

            <div className='meditDiv'>
                <div className='meditBtn'>
                    <Button onClick={onClose}>
                        <CancelIcon sx={{ width: 35, height: 35, color: "rgb(54, 54, 54)" }} />
                    </Button>
                </div>
                <div>
                    <Typography >
                        Clima mediterráneo: Es el clima más común de España ocupando aproximadamente el 42% del territorio, se caracteriza por tener un verano seco y cálido.
                    </Typography>
                </div>
                <div >
                    <img src={mediterraneanImg} alt='mediterraneanimg' />
                </div>

            </div>
        </Modal>
    )
}

export default Mediterranean