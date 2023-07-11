import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const name = "Abu Raihan";
  return (
    <footer className="footer">
      <p>
        &copy; {currentYear} {name}. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
