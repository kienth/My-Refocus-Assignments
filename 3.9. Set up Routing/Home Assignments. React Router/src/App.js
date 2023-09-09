import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import Navbar from "./components/Navbar";
import Projects from "./pages/Projects";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Townhouse from "./pages/Townhouse";
import Condominium from "./pages/Condominium";
import CardView from "./pages/CardView";

function App() {
    return (
        <div className="App" style={{ padding: 5 }}>
            <Router>
                <Navbar />
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/project" element={<Projects />}>
                        <Route
                            path="/project/townhouse"
                            element={<Townhouse />}
                        />
                        <Route
                            path="/project/condominium"
                            element={<Condominium />}
                        />
                        <Route
                            path="/project/card-view"
                            element={<CardView />}
                        />
                    </Route>
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
