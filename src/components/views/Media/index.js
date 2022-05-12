import './styles.css'
import Bush from "../../../assets/images/bush.svg"
import Triangles from "../../../assets/images/triangles.svg"
import Dots from "../../../assets/images/dots.svg"

const Media = () => {
    return (
        <div className="media wd-cont">
            <div className="video">
                <iframe src="https://www.youtube.com/embed/cWDJoK8zw58"></iframe>
            </div>
            <div className='icon dots-1'><img src={Dots} alt="pontinhos"/></div>
            <div className='icon dots-2'><img src={Dots} alt="pontinhos"/></div>
            <div className='icon triangles'><img src={Triangles} alt="Triangulos"/></div>
            <div className='icon bush'><img src={Bush} alt="Arbusto"/></div>
        </div>
    );
}
 
export default Media;