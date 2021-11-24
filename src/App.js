import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
// import Menu from "./pages/Menu";
import Searchbar from "./components/Searchbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Profile from "./pages/Profile";
import AdminNavbar from "./components/AdminNavbar";
import AdminHome from "./admin/AdminHome";
import AddPostForm from "./components/AddPostForm";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SingleProduct from "./pages/singleProduct";
import LoginForm from "./login/LoginForm";
import Admin from "./pages/admin";
import ShoppingCart from "./pages/ShoppingCart";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import React, { useState, useEffect } from "react";
import ClientNotification from "./pages/ClientNotification";
import ViewOrders from "./components/ViewOrders";
import EditProductsForm from "./components/EditProductsForm";
import EditForm from "./pages/EditForm";
import AllClients from "./pages/AllClients";

function App() {
  const [OrderList, setOrderList] = useState([]);
  const [MenuList, setMenuList] = useState("");
  const [items, setItems] = useState([]);
  const [user, setUser] = useState([]);

  const [products, setProduct] = useState([]);

  const addToCart = (item) => {
    if (items.find((i) => i.id == item.id)) {
      //items.find(i => i.id == item.id)
      return;
    }
    setItems([...items, item]);
    console.log("CONSOLE ITEMS");
    console.log(items);
  };
  useEffect(() => {
    axios
      .get("http://localhost:2000/api/product")
      .then((res) => setProduct(res.data))
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    axios
      .get("http://localhost:2000/api/order")
      .then((res) => setOrderList(res.data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:2000/api/product")
      .then((res) => setMenuList(res.data))
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    axios
      .get("http://localhost:2000/api/user")
      .then((res) => setUser(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      <Router>
        <Navbar MenuList={MenuList} addToCart={addToCart} items={items} />
        {/* <Searchbar /> */}
        <ToastContainer />
        <Switch>
          {/* <Route path="/" exact component>
            <Navbar />
            <Home />
          </Route> */}
          <Route path="/admin" exact component={Admin} />

          <Route path="/" exact component={Home} />
          {/* <Route path="/menu" exact component={Menu} /> */}

          <Route path="/menu" exact>
            <Searchbar
              MenuList={MenuList}
              items={items}
              addToCart={addToCart}
            />
          </Route>
          <Route path="/about" exact component={About} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/LoginForm" exact component={LoginForm} />
          <Route path="/product/:name" exact>
            <SingleProduct
              MenuList={MenuList}
              addToCart={addToCart}
              items={items}
            />
          </Route>
          <Route path="/ShoppingCart" exact>
            <ShoppingCart MenuList={MenuList} items={items} />
          </Route>
          <Route path="/Profile" exact>
            <Profile user={user} />
          </Route>
          <Route path="/admin" exact component={Admin} />
          <Route path="/AllClients" exact>
            <AllClients user={user} />
          </Route>
          <Route path="/ViewOrders" exact>
            <ViewOrders OrderList={OrderList} MenuList={MenuList} />
          </Route>
          <Route path="/AddPostForm" exact component={AddPostForm} />

          <Route path="/ClientNotification" exact>
            <ClientNotification MenuList={MenuList} items={items} />
          </Route>
          <Route path="/EditProductsForm" exact>
            <EditProductsForm items={items} MenuList={MenuList} />
          </Route>
          <Route path="/EditForm" exact component={EditForm} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
