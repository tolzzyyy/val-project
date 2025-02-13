import { Route, Routes } from "react-router-dom";
import Tola from "./Tola";
import Home from "./Home";
import Firstpage from "./Firstpage";
import RomanticPlaylist from "./RomanticPlaylist";
import LoveLetter from "./LoveLetter";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/tola" element={<Tola />} />
        <Route path="/" element={<Home />} />
        <Route path="/page" element={<Firstpage />} />
        <Route path="/playlist" element={<RomanticPlaylist />} />
        <Route path="/letter" element={<LoveLetter />} />
      </Routes>
    </div>
  );
};

export default App;
