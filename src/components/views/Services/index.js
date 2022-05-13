import './styles.css';
import { services } from '../../../helpers/services.js';

const Services = () => {


    const flipCard = (id) => {
        const card = document.getElementById('service_'+id);

        console.log(card)
    }

    return(
        <div className="services py-5">
            <div className='wd-cont'>
                <h2>Serviços</h2>
                <div className='cards'>
                    {services.map(({title, description, icon}, count = 1) => (
                        <div key={title} id={'service_'+count} onClick={() => flipCard(count)}>
                            <div className="card front">
                                <div className='icon'>
                                    <img src={icon} alt={description}/>
                                </div>
                                <h6>{title}</h6>
                                <span>Ver mais</span>
                            </div>
                            <div className="card back">
                                <div className='icon'>
                                    <img src={icon} alt={description}/>
                                </div>
                                <p className='my-auto px-1' style={{fontSize: "14px"}}>{description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Services;