import React from "react";
import logo from "../assets/images/pfizer_logo.png";
import "./Header.css";

function Header() {
  //   const navigate = useNavigate();
  return (
    <div>
      <img
        src={logo}
        className="pfizer-logo"
        // onClick={() => navigate("/template")}
        href="/home"
      />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Chat{" "}
    </div>
  );
}

export default Header;
