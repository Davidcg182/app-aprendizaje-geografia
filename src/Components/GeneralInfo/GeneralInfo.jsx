import React from 'react';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import AddIcon from '@mui/icons-material/Add';
import "./generalinfo.css"


export const GeneralInfo = ({ open, onClose }) => {
    return (
        <Modal open={open} onClose={onClose} >
            <div className='generalInfoDiv'>
                <div className='modelTitle'>
                    <Typography variant='h3'>Información general</Typography>
                </div>

                <div >
                    <div className='modelcard'>
                        <Accordion sx={{ width: 300, height: 100 }}>
                            <AccordionSummary
                                expandIcon={<AddIcon />}
                            >
                                <Typography variant="h5">Área</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography >
                                    504.750 Km2
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </div>

                    <div className='modelcard'>
                        <Accordion sx={{ width: 300, height: 100 }}>
                            <AccordionSummary
                                expandIcon={<AddIcon />}
                            >
                                <Typography variant="h5">Población</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    46.157.822
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </div>

                    <div className='modelcard'>
                        <Accordion sx={{ width: 300, height: 100 }}>
                            <AccordionSummary
                                expandIcon={<AddIcon />}
                            >
                                <Typography variant="h5">Religión</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    99% Católica
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </div>
                </div>

                <div className='modelcard'>
                    <Accordion sx={{ width: 300, height: 310 }}>
                        <AccordionSummary
                            expandIcon={<AddIcon />}
                        >
                            <Typography variant="h5">Lenguas</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography variant="h6">Lengua oficial</Typography>
                            <Typography >
                                Español (también denominado Castellano), Catalán, Gallego, Valenciano y Vasco (son también lenguas oficiales de las comunidades autónomas de Cataluña, Galicia, Valencia y País Vasco, respectivamente)
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </div>
                <div >
                    <div className='modelcard'>
                        <Accordion sx={{ width: 300, height: 150 }}>
                            <AccordionSummary
                                expandIcon={<AddIcon />}
                            >
                                <Typography variant="h5">Capital</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Madrid
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </div>

                    <div className='modelcard'>
                        <Accordion sx={{ width: 300, height: 150 }}>
                            <AccordionSummary
                                expandIcon={<AddIcon />}
                            >
                                <Typography variant="h5">Forma de gobierno</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Monarquía Constitucional
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </div>
                </div>
                <div >
                    <div className='modelcard'>
                        <Accordion sx={{ width: 300, height: 150 }}>
                            <AccordionSummary
                                expandIcon={<AddIcon />}
                            >
                                <Typography variant="h5">Jefe de estado</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Rey Felipe VI
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </div>
                    <div className='modelcard'>
                        <Accordion sx={{ width: 300, height: 150 }}>
                            <AccordionSummary
                                expandIcon={<AddIcon />}
                            >
                                <Typography variant="h5">Jefe de gobierno</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Pedro Sánchez
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </div>
                </div>
                <div className='modelButton'>
                    <Button onClick={onClose} sx={{ color: 'black', backgroundColor: "gray" }} variant="contained">Regresar</Button>
                </div>
            </div>
        </Modal>

    )
}
