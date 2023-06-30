import "./App.css";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage.jsx";
import Home from "./components/Home/Home";
import DogsDetail from "./components/DogDetails/DogDetails";
import CreateDogs from "./components/CreateDogs/CreateDogs";
import axios from "axios";
axios.defaults.baseURL = "http://localhost:3001/";

function App() {
  return (
      <div className="App">
        <Routes>
          <Route exact path="/" element={<LandingPage/>} />
          <Route exact path="/home" element={<Home/>} />
          <Route path="/detail/:id" element={<DogsDetail/>} />
          <Route path="/createdogs" element={<CreateDogs/>} />
        </Routes>
      </div>
  );
}

export default App;
