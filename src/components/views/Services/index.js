import './styles.css';
import { services } from './services';

const Services = () => {

    return(
        <div className="services py-5">
            <div className='wd-cont'>
                <h2>Serviços</h2>
                <div className='cards'>
                    {services.map(({title, description, icon}) => (
                        <div key={title} className="card">
                            <div className='icon'>
                                <img src={icon} alt={description}/>
                            </div>
                            <h6>{title}</h6>
                            <span>Ver mais</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Services;