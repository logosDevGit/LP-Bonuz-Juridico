import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import "./assets/styles/global.css"
import Footer from './components/Footer';
import Welcome from './components/views/Welcome';
import Contact from './components/views/Contact';
import Differential from './components/views/Differential';

const App = () => {
  return (
    <>
      <NavBar/>
      <Welcome/>
      <Contact/>
      <Differential/>
      <Footer/>
    </>
  );
}

export default App;
