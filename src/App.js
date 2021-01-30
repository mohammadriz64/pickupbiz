import logo from './logo.svg';
import './App.css';
import {Navigation} from "./Components/HeaderNav/Navigation";
import {Body} from "./Components/BodySection/Body";
import {Footer} from "./Components/Footer/Footer";
import Form from "./Components/Form/Form";
import BootForm from "./Components/FormBoot/BootForm";
function App() {
  return (
    <div className="App">

    <Navigation/>
    <Form />
    <BootForm/>
    <Body/>
    <Footer/>
    
    </div>
  );
}

export default App;