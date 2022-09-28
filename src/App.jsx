import { HashRouter, Route, Routes } from "react-router-dom";
import Pokemon from "../components/Pokemon";
import PokemonDetail from "../components/PokemonDetail";
import ProtectedRoutes from "../components/ProtectedRoutes";
import UserInput from "../components/UserInput";
import "./styles.css";

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<UserInput />} />

          <Route element={<ProtectedRoutes/>}>
            <Route path="/pokedex" element={<Pokemon />} />
            <Route path="/pokedex/:Pname" element={<PokemonDetail />} />
          </Route>
          
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
