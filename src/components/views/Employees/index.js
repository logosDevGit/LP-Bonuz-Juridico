import Carousel from "react-multi-carousel";

const Employees = () => {

    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 0 },
          items: 3
        }
    };

    return ( 
        <div className="employees wd-cont">
            <Carousel responsive={responsive}>
                <div>Teste</div>
                <div>Teste</div>
                <div>Teste</div>
                <div>Teste</div>
            </Carousel>
        </div>
    );
}
 
export default Employees;