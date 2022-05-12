import Carousel from "react-multi-carousel";
import { employees } from "../../../helpers/employees";
import EmployeesCard from "../../EmployeesCard";
import './styles.css'

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
                {employees.map(employees => (
                    <EmployeesCard employees={employees}/>
                ))}
            </Carousel>
        </div>
    );
}
 
export default Employees;