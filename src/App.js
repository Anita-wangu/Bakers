import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./login/Login";
// import Login from "./pages/login";
// import LoginForm from "./pages/LoginForm";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginForm from "./login/LoginForm";

function App() {
  return (
    <div className="App">
      {" "}
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/menu" exact component={Menu} />
          <Route path="/about" exact component={About} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/Login" exact component={Login} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
