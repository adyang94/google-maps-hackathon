import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react'
import Map from "./components/pages/Map";
import Homepage from './components/pages/Homepage';
import Instructions from './components/pages/Instruction';
import Login from './components/pages/Login';
import Signup from './components/pages/Signup';
import SubmitEvent from './components/pages/SubmitEvent';

function App() {
  return (
    <div className="App">
      <ChakraProvider>
        <BrowserRouter>

          <Routes>
            <Route exact path="/" element={<Homepage />} />
            <Route exact path="/instructions" element={<Instructions />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signup" element={<Signup />} />
            <Route exact path="/submitevent" element={<SubmitEvent />} />
            <Route exact path="/map" element={<Map />} />
          </Routes>

        </BrowserRouter>
      </ChakraProvider>
      <form></form>

    </div>
  );
}

export default App;
