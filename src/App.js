import React from 'react';
import './App.css';
//----------------------------------------------------//
//----- import react router components to use it -----//
//----------------------------------------------------//
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

//--------------------------------------------//
//----- import Pages for the react-router-----//
//--------------------------------------------//
import Home from './pages/Home';
import Cart from './pages/Cart';
import Products from './pages/Product';

//--------------------------------------------//
//----- Create Ouer Main App Function --------//
//--------------------------------------------//
function App() {
  return (
    //-------------------------------------------------------------------------//
    //----- put all the content of the page inside a router Component ---------//
    //-------------------------------------------------------------------------//
    <Router>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">
            Cats Store
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/">
                  Home <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/products">
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/cart">
                  Cart
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        {/* define the navegation routes and give each one its linke */}
        <Route path="/" component={Home} exact></Route>
        <Route path="/cart" component={Cart}></Route>
        <Route path="/products" component={Products}></Route>
      </div>
    </Router>
  );
}
//-------------------------------------------------------------------------//
//----- export oure component to used it somewhere in this web site--------//
//-------------------------------------------------------------------------//
export default App;
