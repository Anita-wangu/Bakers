import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./login/Login";
import AdminNavbar from "./components/AdminNavbar";
import AdminHome from "./admin/AdminHome";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SingleProduct from "./pages/singleProduct";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component>
            <Navbar />
            <Home />
          </Route>
          <Route path="/menu" exact component={Menu} />
          <Route path="/about" exact component={About} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/Login" exact component={Login} />
          <Route path="/product/:name" exact component={SingleProduct} />
        </Switch>
        <Footer />
      </Router>
      {/* <Router>
        <AdminNavbar />
        <Switch>
          <Route path="/" exact component={AdminHome} />
        </Switch>
        <Footer />
      </Router> */}
    </div>
  );
}

export default App;
