import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import "./assets/styles/global.css"
import Footer from './components/Footer';
import Welcome from './components/views/Welcome';
import Contact from './components/views/Contact';

const App = () => {
  return (
    <>
      <NavBar/>
      <Welcome/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
