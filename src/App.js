import Header from "./Header";
import Crew from "./crew/Crew";
import Destination from "./destination/Destination";
import Home from "./home/Home";
import "./styles.css";
import {Route,Routes} from "react-router-dom"
import Technology from "./technology/Technology";
function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/destination" element={<Destination/>}/>
        <Route path="/crew" element={<Crew/>}/>
        <Route path="/technology" element={<Technology/>}/>
      </Routes>
    </>
  );
}

export default App;
