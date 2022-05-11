import './styles.css';
import BgQuestion from '../../../assets/images/bgQuestion.svg'

const Question = () => {
    return(
        <div className="question py-5">
            <img className='bg' src={BgQuestion} alt="background"/>
            <div className='wd-cont'>
                <div className='info'>
                    <h2 className='pb-4'>Tire todas as suas dúvidas jurídicas!</h2>
                    <p className='pb-4'>Solicite agora um call de 30 min com um especialista e tire suas dúvidas relacionadas</p>
                    <strong className='pb-1'>Cliente Hubs obtem 20% de desconto no call com um Advogado!</strong>
                    <small className='py-4'>*R$ 80,00 call com um advogado.</small>
                    <button className='btn-red'>Saiba mais</button>
                </div>
            </div>
        </div>
    )
}

export default Question;