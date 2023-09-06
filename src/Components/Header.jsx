import React from "react";
import "./Style.css";
import { Hidden } from "@mui/material";

const Header = () => {
  return (
    <>
      <div className="header">
        <h1 className="h1" style={{ color: "blue" }}>
          Go<span className="span">highr</span>
        </h1>
        <div className="spacer"></div>
      </div>

      {/* Hide the spacer on small screens */}
      <Hidden smDown>
        <div className="spacer"></div>
      </Hidden>
    </>
  );
};

export default Header;
