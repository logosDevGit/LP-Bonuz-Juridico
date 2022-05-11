import 'bootstrap/dist/css/bootstrap.min.css';
import "react-multi-carousel/lib/styles.css";
import NavBar from './components/NavBar';
import "./assets/styles/global.css"
import Footer from './components/Footer';
import Welcome from './components/views/Welcome';
import Contact from './components/views/Contact';
import Differential from './components/views/Differential';
import Services from './components/views/Services';
import Question from './components/views/Question';

const App = () => {
  return (
    <>
      <NavBar/>
      <Welcome/>
      <Contact/>
      <Differential/>
      <Services/>
      <Question/>
      <Footer/>
    </>
  );
}

export default App;
