import React, { useEffect, useState } from "react";
import { Container } from "@material-ui/core";
import { BrowserRouter, Switch, Route, Redirect, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";
import PostDetails from "./components/PostDetails/PostDetails";
import AdminDashboard from "./components/Admin/Admin";
import "./App.css";
import { ToastContainer } from "react-toastify";

const App = () => {
  const user = JSON.parse(localStorage.getItem("profile"));
  const isAdmin = user && user.result.role === "admin";
  const [shouldRefresh, setShouldRefresh] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      setShouldRefresh(true);
    }
  }, [location]);

  useEffect(() => {
    if (shouldRefresh) {
      setShouldRefresh(false);
      window.location.reload();
    }
  }, [shouldRefresh]);

  return (
    <Container maxWidth="l">
      <ToastContainer/>
      <Navbar />
      <Switch>
        <Route path="/" exact>
          {isAdmin ? <Redirect to="/admin/dashboard" /> : <Redirect to="/posts" />}
        </Route>
        <Route path="/posts" exact component={Home} />
        <Route path="/posts/search" exact component={Home} />
        <Route path="/posts/:id" component={PostDetails} />
        <Route path="/auth" exact>
          {user ? <Redirect to="/posts" /> : <Auth />}
        </Route>
        {isAdmin && <Route path="/admin/dashboard" component={AdminDashboard} />}
        <Redirect to="/" />
      </Switch>
    </Container>
  );
};

const Root = () => {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
};

export default Root;
