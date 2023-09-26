import React, { useState } from "react";
import logo from "../../assets/images/pfizer_logo.png";
import "./Header.css";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

function Header() {
  //   const navigate = useNavigate();
  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <>
      <div className="heading-text">
        <div>
          <img src={logo} alt="logo" className="pfizer-logo" href="/home" />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Chat&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Select
            value={age}
            onChange={handleChange}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </div>
        <div className="header-right">
          <div>FeedBack</div>
          <div className="faq">FAQ</div>
        </div>
      </div>
    </>
  );
}

export default Header;
