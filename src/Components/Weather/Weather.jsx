import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import watherimg from "./principalWeather.png";
import PlaceIcon from '@mui/icons-material/Place';
import "./weather.css";
import { OceanicWeather } from './OceanicWeather/OceanicWeather.jsx';
import Mediterranean from './Mediterranean/Mediterranean.jsx';
import SubTropical from './SubTropical/SubTropical.jsx';
import { SemiDesert } from './SemiDesert/SemiDesert.jsx';
import Continental from './Continental/Continental';
import Mountain from './Mountain/Mountain.jsx';

export const Weather = () => {

    const [openOcean, setOpenOcean] = useState(false);
    const [openMedit, setOpenMedit] = useState(false);
    const [openSubTrop, setOpenSubTrop] = useState(false);
    const [openSemiDes, setOpenSemiDes] = useState(false);
    const [openCont, setOpenCont] = useState(false);
    const [openMount, setOpenMount] = useState(false);

    return (
        <div >
            <div className='weathDiv'>
                <div className='weathTitle'>
                    <h1>Clima</h1>
                </div>

                <div className='weathImg'>
                    <img src={watherimg} alt="imagen clima" width='400' height='400' />
                </div>

                <div className='weathCards'>

                    <div >
                        <Button onClick={() => setOpenOcean(true)} >
                            <div className='oceaniCard'>
                                <br />
                                <PlaceIcon sx={{ width: 25, height: 25, color: "rgb(71, 71, 71)" }} />
                                <Typography sx={{ color: "rgb(71, 71, 71)" }}>
                                    Oceánico
                                </Typography>
                            </div>
                        </Button>

                        <Button onClick={() => setOpenMedit(true)} >
                            <div className='meditCard'>
                                <br />
                                <PlaceIcon sx={{ width: 25, height: 25, color: "rgb(71, 71, 71)" }} />
                                <Typography sx={{ color: "rgb(71, 71, 71)" }}>
                                    Mediterráneo
                                </Typography>
                            </div>
                        </Button>
                    </div>

                    <div>
                        <Button onClick={() => setOpenSubTrop(true)} >
                            <div className='subtropCard'>
                                <br />
                                <PlaceIcon sx={{ width: 25, height: 25, color: "rgb(71, 71, 71)" }} />
                                <Typography sx={{ color: "rgb(71, 71, 71)" }}>
                                    Sub-tropical
                                </Typography>
                            </div>
                        </Button>

                        <Button onClick={() => setOpenSemiDes(true)}>
                            <div className='semidesCard'>
                                <br />
                                <PlaceIcon sx={{ width: 25, height: 25, color: "rgb(71, 71, 71)" }} />
                                <Typography sx={{ color: "rgb(71, 71, 71)" }}>
                                    Semi-desértico
                                </Typography>
                            </div>
                        </Button>
                    </div>

                    <div >
                        <Button onClick={() => setOpenMount(true)} >
                            <div className='montainCard'>
                                <br />
                                <PlaceIcon sx={{ width: 25, height: 25, color: "rgb(71, 71, 71)" }} />
                                <Typography sx={{ color: "rgb(71, 71, 71)" }}>
                                    Montañoso
                                </Typography>
                            </div>
                        </Button>

                        <Button onClick={() => setOpenCont(true)} >
                            <div className='continCard'>
                                <br />
                                <PlaceIcon sx={{ width: 25, height: 25, color: "rgb(71, 71, 71)" }} />
                                <Typography sx={{ color: "rgb(71, 71, 71)" }}>
                                    Continental
                                </Typography>
                            </div>
                        </Button>
                    </div>
                    <OceanicWeather
                        open={openOcean}
                        onClose={() => setOpenOcean(false)}
                    />

                    <Mediterranean
                        open={openMedit}
                        onClose={() => setOpenMedit(false)}
                    />

                    <SubTropical
                        open={openSubTrop}
                        onClose={() => setOpenSubTrop(false)}
                    />

                    <SemiDesert
                        open={openSemiDes}
                        onClose={() => setOpenSemiDes(false)}
                    />

                    <Continental
                        open={openCont}
                        onClose={() => setOpenCont(false)}
                    />

                    <Mountain
                        open={openMount}
                        onClose={() => setOpenMount(false)}
                    />
                </div>
            </div>
        </div>
    )
}
