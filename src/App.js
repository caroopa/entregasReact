import "./App.css";
import NavBar from "./components/navbar/NavBar";
import { Route, Routes } from "react-router-dom";
import PokeAPI from "./pages/PokeAPI";
import ToDoList from "./pages/ToDoList";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/PokeAPI" element={<PokeAPI />} />
        <Route path="/ToDoList" element={<ToDoList />} />
      </Routes>
    </>
  );
}

export default App;
