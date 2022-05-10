import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import "./assets/styles/global.css"
import Footer from './components/Footer';
import Welcome from './components/views/Welcome';

const App = () => {
  return (
    <>
      <NavBar/>
      <Welcome/>
      <Footer/>
    </>
  );
}

export default App;
