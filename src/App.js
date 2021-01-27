import logo from './logo.svg';
import './App.css';
import {Navigation} from "./Components/HeaderNav/Navigation";
import {Body} from "./Components/BodySection/Body";
import {Footer} from "./Components/Footer/Footer";
function App() {
  return (
    <div className="App">

    <Navigation/>
    <Body/>
    <Footer/>
    
    </div>
  );
}

export default App;