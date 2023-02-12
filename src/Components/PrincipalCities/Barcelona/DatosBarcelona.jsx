import React from 'react';
import patrimonioshun from "./prtimonioshum.gif";
import campnou from "./campnou.gif";
import parks from "./parks.gif";
import idiomas from "./idiomas.png";
import "./datos.css";


const DatosBarcelona = () => {
    return (
        <div>
            <h1 className='title'>¡Si tu destino es Barcelona, debes saber los siguientes datos curiosos!</h1>
            <div className='cardsmargin'>
                <div>
                    <div className='cardsAling'>
                        <img src={patrimonioshun} alt="patrimoniosespaña" className='datosImg' />
                        <div className='datosText'>
                            <h3>Barcelona tiene 9 sitios declarados Patrimonio de la Humanidad por la UNESCO</h3>
                            <p>la Sagrada Familia, el Palau de la Música Catalana, el Park Güell, la Casa Batlló, el Hospital de Sant Pau, La Pedrera, el Palau Güell, la Cripta de la Colonia Güell y la Casa Vicens. ¡Todos y cada uno de estos lugares de interés merecen una visita cuando vengas a Barcelona! </p>
                        </div>
                    </div>
                    <div className='cardsAling'>
                        <img src={campnou} alt="campnou" className='datosImg' />
                        <div className='datosText'>
                            <h3>El estadio del Fútbol Club Barcelona,</h3>
                            <p>el Camp Nou, es el estadio más grande de toda Europa. El Barça es uno de los clubes de fútbol más famosos del mundo, con seguidores de todas partes. Tiene una capacidad de casi 100.000 personas.</p>
                        </div>
                    </div>
                </div>

                <div>
                    <div className='cardsAling'>
                        <img src={parks} alt="parquesespaña" className='datosImg' />
                        <div className='datosText'>
                            <h3>La ciudad tiene 68 parques</h3>
                            <p>Más del 11% de Barcelona está formada por parques y jardines, lo que significa que siempre hay un lugar cercano para escapar a la naturaleza.</p>
                        </div>
                    </div>
                    <div className='cardsAling'>
                        <img src={idiomas} alt="idiomasespaña" className='datosImg' />
                        <div className='datosText'>
                            <h3>Barcelona tiene dos idiomas oficiales</h3>
                            <p>Aunque Barcelona es parte de España, también es la capital de Cataluña. El catalán es un idioma que se habla en toda Cataluña y otras partes de España, como Valencia y las Islas Baleares.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DatosBarcelona