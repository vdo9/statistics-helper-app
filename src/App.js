import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import Intro from './pages/Intro';
import Tips from './pages/Tips';
import Sample1 from './pages/Sample1';

function App() {
  return (
  //in order to use routes, the router tag must wrap around routes with the individual route
  <Router>
    <div className="container">
      <Routes>
        <Route exact path='/' element={
        <Intro /> 
        }>
        </Route>
        <Route path='/Tips' element={<Tips />}>
        </Route>
        <Route path='/Sample1' element={<Sample1 />}></Route>
      </Routes>
    </div>
  </Router>
  );
}

export default App;
