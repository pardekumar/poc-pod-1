import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import "./uploadComponent.css";
import Header from "../Header/Header";
import AddIcon from "@mui/icons-material/Add";
import InputIcon from "@mui/icons-material/Input";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import BoltIcon from "@mui/icons-material/Bolt";
import SendIcon from "@mui/icons-material/Send";
import TextField from "@mui/material/TextField";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

function uploadComponent() {
  return (
    <>
      <div
        style={{
          borderBottom: "1px solid blue",
          padding: "15px",
          textAlign: "center",
        }}
      >
        <Header />
      </div>

      <div style={{ overflow: "auto", margin: "0 20px" }}>
        <div className="menu">
          <div className="sidebar">
            <div className="upperSide">
              <div className="upperSideTop">
                <Button className="add-session" startIcon={<AddIcon />}>
                  New Chat
                </Button>
                &nbsp; <InputIcon className="icon" />
              </div>
              <button className="midBtn">
                <ChatBubbleOutlineIcon className="chat-icon" />
                Chat Bot Explanation
                <BorderColorIcon className="border-icon" />
                <DeleteOutlineIcon className="delete-icon" />
              </button>
              <div className="upperSideBottom"></div>
            </div>
            <div className="lowerSide"></div>
          </div>
        </div>

        <div className="main">
          <div className="upload">
            <div className="box">
              <div class="boxContent">
                <p className="f-10">
                  Browse and chose the files you want to upload from your
                  computer.
                </p>
                <FormControl>
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                  >
                    <Button component="label" variant="contained">
                      Choose File(s)
                      <VisuallyHiddenInput type="file" />
                    </Button>
                    <FormControlLabel
                      value="Group"
                      className="f-12"
                      control={<Radio size="small" />}
                      label="Group"
                    />
                    <FormControlLabel
                      value="Individual"
                      className="f-12"
                      control={<Radio size="small" />}
                      label="Individual"
                    />
                  </RadioGroup>
                </FormControl>

                <p className="f-10">Or</p>
                <p className="f-10 f-bold c-blue">Select from Existing Files</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default uploadComponent;
