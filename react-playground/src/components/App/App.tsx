import { Header } from "../Header";
import { FC } from "react";
import Home from "../../Pages/Home";
import Results from "../../Pages/Results";
import { Routes, Route, BrowserRouter } from "react-router-dom";

const App: FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/results" element={<Results />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
