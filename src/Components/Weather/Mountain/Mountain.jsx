import React from 'react';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import mountainImg from "./mountain.png";
import CancelIcon from '@mui/icons-material/Cancel';
import "./mountain.css"

const Mountain = ({ open, onClose }) => {
    return (
        <Modal open={open} onClose={onClose}>
            <div className='mountDiv'>
                <div className='mountImg' >
                    <img src={mountainImg} alt='mountainImg' height={300} width={295}/>
                </div>
                <div className='moubtText'>
                    <Typography >
                        Clima montañoso: Se encuentra en las cotas más altas del país, generalmente en las zonas por encima de los  1.000 o 1.200 msnm, como los Picos de Europa, Sierra Nevada o en los Pirineos. Las temperaturas de este clima son frias o muy frias durante el invierno y más suaves durante el verano.
                    </Typography>
                </div>
                <div className='mountBtn'>
                    <Button onClick={onClose}>
                        <CancelIcon sx={{ width: 35, height: 35, color: "rgb(54, 54, 54)" }} />
                    </Button>
                </div>
            </div>
        </Modal>
    )
}

export default Mountain