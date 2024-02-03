import "./App.css";
import { Route, Routes } from "react-router-dom";
import About from "./components/guest/header/about.component";
import Home from "./components/guest/header/home.component";
import { Navbar } from "./components/navigation.components/navbar/Navbar";
import PageNotFound from "./components/shared/error/pageNotFound";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
