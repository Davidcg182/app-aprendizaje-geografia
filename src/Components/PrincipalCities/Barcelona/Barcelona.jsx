import React from 'react';
import barcelona from "./barcelona.png";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import "./barcelona.css";
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

const Barcelona = () => {
    return (
        <div className='barcelonaAling'>
            <div>
                <img src={barcelona} alt="Catedral de barcelona" />
            </div>
            <div>
                <h1 style={{fontSize:50}}>Barcelona</h1>
                <p style={{width:600}}>Barcelona, la capital de Cataluña, situada al noroeste en la costa mediterránea, es sin duda la      ciudad más cosmopolita y económicamente más activa de España.
                    Barcelona ha sido un importantísimo centro del modernismo, distinguiéndose especialmente por los trabajos de Antoni Gaudí, quien, junto con grandes artistas contemporáneos, ha dado a la ciudad un aspecto nuevo y excitante que la han situado en la cúspide del modernismo.
                </p>
                <div className='barcelonaAling'>
                    <Accordion sx={{ width: 300, height: 100 }}>
                        <AccordionSummary
                            expandIcon={<AddIcon />}
                        >
                            <Typography variant="h5">Población</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                1.636.732
                            </Typography>
                        </AccordionDetails>
                    </Accordion>

                    <Link to="/barcelona/datos" className='barcelonaLink'>
                        <Button sx={{ borderRadius: 10, height: 55 }} variant='contained' >
                            Datos curiosos
                        </Button>
                    </Link>
                </div>
                <h1>Sitios turisticos</h1>
                <Link className='barcelonaLink'>Barrio Gótico {">"}</Link>
                <br/>
                <Link className='barcelonaLink'>La Rambla {">"}</Link>
                <br/>
                <Link className='barcelonaLink'>La Sagrada Familia {">"}</Link>
                <br/>
                <Link className='barcelonaLink'>El Park Güell {">"}</Link>
                <br/>
                <Link className='barcelonaLink'>Casa Batllo {">"}</Link>
            </div>
        </div>
    )
}

export default Barcelona