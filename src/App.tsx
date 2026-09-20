import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CountryDetail from "./pages/CountryDetail";
import Navbar from "./components/NavBar";
import ThemeProvider from "./context/ThemeProvider";

function App() {
  return (
    <ThemeProvider>
    
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/country/:countryCode" element={<CountryDetail />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
