import { Container } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomeScreen from "./screens/HomeScreen";
import GameScreen from "./screens/GameScreen";
import LoginScreen from "./screens/LoginScreen";

function App() {
  return (
    <>
      <NavBar/>
      <main>
        <Container>
        <Routes>
          <Route path="/challenge" element={<GameScreen />} />
          <Route path="/login" element={<LoginScreen/>}/>
          <Route index element={<HomeScreen />} />
        </Routes>
        
        </Container>
        
      </main>
      
    </>
  );
}

export default App;
