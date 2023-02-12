import React from 'react';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import AddIcon from '@mui/icons-material/Add';
import banderaEspaña from "./BanderaEspaña.gif"
import marchaReal from "./HimnoEspaña.mp3";
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import "./insignia.css"


export const Insignia = ({ open, onClose }) => {

    return (

        <Modal open={open} onClose={onClose} >
            <div className='insigDiv'>
                <div className='insigTitle'>
                    <Typography variant='h3'>Insignias nacionales</Typography>
                    <Button id='boton' onClick={() => document.getElementById('r').play()} sx={{ color: "rgb(85, 150, 235)", marginLeft: 100 }}>
                        <PlayCircleIcon sx={{ width: 40, height: 40 }} />
                        <audio id="r" controls='' src={marchaReal}></audio>
                    </Button>

                </div>
                <div className='insigCard'>
                    <Accordion sx={{ width: 600, height: 310 }}>
                        <AccordionSummary
                            expandIcon={<AddIcon />}
                        >
                            <Typography variant="h5">La bandera de españa</Typography>
                            <img src={banderaEspaña} alt='Bandera española' width={50} />
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography >
                                Conocida como la rojigualda, fue adoptada como pabellón nacional de España en 1785 y ha sido la bandera nacional desde entonces.
                                Su actual diseño de bandera nacional surgio con el Real Decreto de 28 de mayo de 1785, por el que Carlos III resuelve la realización de un concurso convocado para adoptar un nuevo pabellón de la Marina, eligiendo dos diseños: uno para los buques de guerra y otro para los mercantes.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </div>

                <div className='insigCard'>
                    <Accordion sx={{ width: 600, height: 310 }}>
                        <AccordionSummary
                            expandIcon={<AddIcon />}
                        >
                            <Typography variant="h5">La marcha real</Typography>

                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Es uno de los himnos nacionales más antiguos de Europa: su primera mención aparece en 1761 en el Libro de la Ordenanza de los Toques de Pífanos y Tambores que se tocan nuevamente en la infantería, compuestos por Don Manuel de Espinosa. 1761 de Manuel de Espinosa de los Monteros.
                            </Typography>
                        </AccordionDetails>

                    </Accordion>

                </div>
                <div className='insigButton'>
                    <Button onClick={onClose} sx={{ color: 'black', backgroundColor: "gray" }} variant="contained">Regresar</Button>
                </div>
            </div>
        </Modal>
    )
}
