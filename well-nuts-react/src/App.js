import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import Welcome from "./components/Welcome";
import AdminPage from "./Pages/AdminPage";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <>
      <Nav className="h-24" />
      <Router>
        <Fragment>
          <Routes>
            <Route path="/products/:Productname" element={<Welcome />} />
            <Route path="/products/adminpage" element={<AdminPage />} />
          </Routes>
        </Fragment>
      </Router>
    </>
  );
}

export default App;
