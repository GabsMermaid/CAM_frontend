import React, { useRef, useEffect } from "react";
import { useLocation, Switch } from "react-router-dom";
import AppRoute from "./utils/AppRoute";
import ScrollReveal from "./utils/ScrollReveal";
import ReactGA from "react-ga";

// Layouts
import LayoutDefault from "./layouts/LayoutDefault";

// Views
import Home from "./containers/Home";
import Login from "./containers/Login";
import Signup from "./containers/Signup";
import Dashboard from "./containers/Dashboard";
import Send from "./containers/Send";
import ApprovalDashboard from "./components/ApprovalDashboard"

// Initialize Google Analytics
ReactGA.initialize(process.env.REACT_APP_GA_CODE);

const trackPage = (page) => {
  ReactGA.set({ page });
  ReactGA.pageview(page);
};

const App = () => {
  const childRef = useRef();
  let location = useLocation();

  useEffect(() => {
    const page = location.pathname;
    document.body.classList.add("is-loaded");
    childRef.current.init();
    trackPage(page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <ScrollReveal
      ref={childRef}
      children={() => (
        <Switch>
          <AppRoute exact path="/" component={Home} layout={LayoutDefault} />{" "}
          <AppRoute
            exact
            path="/Login"
            component={Login}
            layout={LayoutDefault}
          />{" "}
          <AppRoute
            exact
            path="/Signup"
            component={Signup}
            layout={LayoutDefault}
          />{" "}
          <AppRoute
            exact
            path="/Dashboard"
            component={Dashboard}
            layout={LayoutDefault}
          />{" "}
          <AppRoute
            exact
            path="/Send"
            component={Send}
            layout={LayoutDefault}
          />{" "}
          <AppRoute
            exact
            path="/ApprovalDashboard"
            component={ApprovalDashboard}
            layout={LayoutDefault}
          />{" "}
        </Switch>
      )}
    />
  );
};

export default App;
