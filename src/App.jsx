import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import DemoNavBar from "./Components/NavBar";

function App() {
  return (
    <Router>
      <div className="container">
        {/* <header className="bg-dark text-white text-center py-3">
          <h1>Innovation Excellence Portal</h1>
        </header> */}

        <DemoNavBar />

        {/* <footer className="bg-dark text-white text-center py-3 mt-4">
          <p>&copy; 2024 Innovation Excellence Portal. All rights reserved.</p>
        </footer> */}
      </div>
    </Router>
  );
}

export default App;
