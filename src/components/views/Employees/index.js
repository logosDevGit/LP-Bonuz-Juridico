import Carousel from "react-multi-carousel";
import { employees } from "../../../helpers/employees";
import EmployeesCard from "../../EmployeesCard";
import './styles.css'
import QuotationMarks from "../../../assets/images/quotationMarks.svg"

const Employees = () => {

    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 0 },
          items: 3
        }
    };

    return ( 
        <div className="employees wd-cont">
            <Carousel 
                responsive={responsive}
                arrows={false}
                showDots={true}
                autoPlay={false}
            >
                {employees.map(employees => (
                    <EmployeesCard employees={employees}/>
                ))}
            </Carousel>
            <div className="marks"><img src={QuotationMarks} alt="Quotation Marks"/></div>
        </div>
    );
}
 
export default Employees;