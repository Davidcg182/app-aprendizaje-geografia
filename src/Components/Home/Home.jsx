import React, { useState } from 'react';
import './home.css';
import Button from "@mui/material/Button";
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import InfoIcon from '@mui/icons-material/Info';
import EmojiFlagsIcon from '@mui/icons-material/EmojiFlags';
import HomeIcon from '@mui/icons-material/Home';
import CloudIcon from '@mui/icons-material/Cloud';
import { GeneralInfo } from '../GeneralInfo/GeneralInfo';
import { Insignia } from '../Insignia/Insignia';


export const Home = () => {

    const [openInfo, setOpenInfo] = useState(false);
    const [openInsig, setOpenInsig] = useState(false);

    return (
        <div className='homeImage'>
            <div className='homeDiv'>

                <div className='homeAling'>
                   
                    <Button onClick={() => setOpenInfo(true)} >
                        <div className='homeCard'>
                            <br />
                            <br />
                            <InfoIcon sx={{ width: 50, height: 50, color: "rgb(71, 71, 71)" }} />
                            <Typography variant="h5" sx={{ color: "rgb(71, 71, 71)" }}>
                                Informacion General
                            </Typography>
                        </div>
                    </Button>

                    <Button onClick={() => setOpenInsig(true)} >
                        <div className='homeCard'>
                            <br />
                            <br />
                            <EmojiFlagsIcon sx={{ width: 50, height: 50, color: "rgb(71, 71, 71)" }} />
                            <Typography variant="h5" sx={{ color: "rgb(71, 71, 71)" }}>
                                Insignias nacionales
                            </Typography>
                        </div>
                    </Button>

                </div>

                <div className='homeAling'>
                    <Link className='link' to="/principal-cities">
                        <div className='homeCard'>
                            <br />
                            <br />
                            <Button>
                            <div >
                                <HomeIcon sx={{ width: 50, height: 50, color: "rgb(71, 71, 71)" }} />
                                <Typography variant="h5" sx={{ color: "rgb(71, 71, 71)"}}>
                                    Ciudades principales
                                </Typography>
                            </div>
                            </Button>
                        </div>
                    </Link>

                    <Link className='link' to="/weather">
                        <div className='homeCardWeather'>
                            <br />
                            <br />
                            <div className='homeIconWeather'>
                                <CloudIcon sx={{ width: 50, height: 50, color: "white" }} />
                                <Typography variant="h5" sx={{ color: "white" }}>
                                    Clima
                                </Typography>
                            </div>
                        </div>
                    </Link>

                </div>
                <GeneralInfo
                    open={openInfo}
                    onClose={() => setOpenInfo(false)}
                />
                <Insignia
                    open={openInsig}
                    onClose={() => setOpenInsig(false)}
                />
            </div>
        </div>
    )
}
