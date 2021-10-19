import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import AuthProvider from "./context/AuthProvider";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Footer from "./pages/Footer/Footer";
import Home from "./pages/Home/Home";
import Menubar from "./pages/Menubar/Menubar";
import NotFoundError from "./pages/NotFoundError/NotFoundError";
import Pricing from "./pages/Pricing/Pricing";
import ServiceDetails from "./pages/ServiceDetails/ServiceDetails";
import Services from "./pages/Services/Services";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import Login from "./shared/Login/Login";
import Register from "./shared/Register/Register";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Menubar></Menubar>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/about">
              <About></About>
            </Route>
            <Route exact path="/services">
              <Services></Services>
            </Route>
            <Route exact path="/login">
              <Login></Login>
            </Route>
            <Route exact path="/register">
              <Register></Register>
            </Route>{" "}
            <PrivateRoute exact path="/contact">
              <Contact></Contact>
            </PrivateRoute>
            <Route exact path="/pricing">
              <Pricing></Pricing>
            </Route>
            <PrivateRoute exact path="/serviceDetails/:id">
              <ServiceDetails></ServiceDetails>
            </PrivateRoute>
            <Route path="*">
              <NotFoundError></NotFoundError>
            </Route>
          </Switch>
          <div id="home">
            <Footer></Footer>
          </div>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
