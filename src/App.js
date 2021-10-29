import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Contact from "./pages/Contact";
// import Login from "./login/Login";
import AdminNavbar from "./components/AdminNavbar";
import AdminHome from "./admin/AdminHome";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SingleProduct from "./pages/singleProduct";
import LoginForm from "./login/LoginForm";
import Admin from "./pages/admin";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <ToastContainer />
        <Switch>
          {/* <Route path="/" exact component>
            <Navbar />
            <Home />
          </Route> */}
          <Route path="/admin" exact component={Admin} />

          <Route path="/" exact component={Home} />

          <Route path="/menu" exact component={Menu} />
          <Route path="/about" exact component={About} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/LoginForm" exact component={LoginForm} />
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
