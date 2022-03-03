import { Header } from "../Header";
import { FC } from "react";
import Home from "../../Pages/Home";
import Results from "../../Pages/Results";
import { Routes, Route, BrowserRouter } from "react-router-dom";

export interface AppProps {}

const App: FC<AppProps> = (props) => {
  return (
    <BrowserRouter>
      <div>
        <Header />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/results" element={<Results />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
