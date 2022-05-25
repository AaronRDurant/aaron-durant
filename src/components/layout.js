import * as React from "react";
import Navigation from "../components/navigation";

const Layout = ({ children }) => {
  return (
    <div className="global-wrapper">
      <Navigation />
      <main>{children}</main>
      <footer className="footer-text">Made by Aaron Durant</footer>
    </div>
  );
};

export default Layout;
