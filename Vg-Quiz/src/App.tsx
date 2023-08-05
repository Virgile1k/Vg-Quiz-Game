import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import AppRoutes from "./routes/index";

function App() {
  return (
    <Router>
      <AppRoutes/>
    </Router>
  );
}

export default App;
