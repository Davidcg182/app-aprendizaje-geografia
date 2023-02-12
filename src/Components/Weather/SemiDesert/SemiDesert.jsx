import React from 'react';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import semiDesSup from "./semiDesSup.png";
import semiDesInf from "./semiDesInf.png";
import CancelIcon from '@mui/icons-material/Cancel';
import "./semiDesert.css"

export const SemiDesert = ({open, onClose}) => {
    return (
        <Modal open={open} onClose={onClose}>

            <div className='semiDesDiv'>
                <div className='semiDesImgSup'>
                    <img src={semiDesSup} alt='semiDesSup' />
                </div>
                <div>
                    <Typography >
                        Clima semidesértico: Se caracteriza por tener temperaturas muy altas y las precipitaciones muy escasas. Este clima se presenta en las zonas de Murcia, Alicante y Almería.
                    </Typography>
                </div>
                <div className='semiDesBtn'>
                    <Button onClick={onClose}>
                        <CancelIcon sx={{ width: 35, height: 35, color: "rgb(54, 54, 54)" }} />
                    </Button>
                </div>
                <div className='semiDesImgInf'>
                    <img src={semiDesInf} alt='semiDesInf' height={90}/>
                </div>

            </div>
        </Modal>
    )
}
