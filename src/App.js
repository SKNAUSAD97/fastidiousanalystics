import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import { BrowserRouter , Route, Switch } from "react-router-dom";
import About from './Pages/About';
import Services from './Pages/Services';
import Contact from './Pages/Contact';

function App() {
  return (
    <>
    <BrowserRouter> 
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route path="/about" component={ About } />
        <Route path="/services" component={ Services } />
        <Route path="/contact" component={ Contact } />
      </Switch>
    </BrowserRouter>  
    </>
  );
}

export default App;
