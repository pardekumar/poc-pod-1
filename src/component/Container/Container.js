import React, { useState } from "react";
import Header from "../Header/Header";
import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
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

function Container() {
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
          <div className="chatGPT">
            <div>
              <p className="chat">Chat GPT</p>
            </div>
            <div className="card">
              <span className="examples">
                <WbSunnyIcon />
                <br />
                Examples
                <br />
                <Card className="card-example">
                  <CardContent>Example 1</CardContent>
                </Card>
                <br />
                <Card>
                  <CardContent>Example 2</CardContent>
                </Card>
                <br />
                <Card>
                  <CardContent>Example 3</CardContent>
                </Card>
              </span>
              <br />

              <span className="capablities">
                <BoltIcon />
                <br />
                Capabilities
                <Card className="card-capability">
                  <CardContent>Capability 1</CardContent>
                </Card>
                <br />
                <Card>
                  <CardContent>Capability 2</CardContent>
                </Card>
                <br />
                <Card>
                  <CardContent>Capability 3</CardContent>
                </Card>
              </span>
            </div>
          </div>
        </div>
        <div className="chatFooter">
          <TextField
            id="outlined-multiline-flexible"
            multiline
            maxRows={4}
            className="text-field"
          />
          <SendIcon className="sendIcon" />
          <span onClick={() => document.querySelector(".input-field").click()}>
            <input
              type="file"
              hidden
              id="docpicker"
              className="input-field"
              accept=".doc,.docx,.xml,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
            />
            <CloudUploadIcon className="cloudIcon" />
          </span>
        </div>
        <p className="words">
          25000/ <strong>45000 words</strong>
        </p>
        <p className="footer">
          ChatGPT Jan 9 version Free Research Preview. Our goal is to make AI
          systems more natural and safe to interact with.Your feedback will help
          us improve.
        </p>
      </div>
    </>
  );
}
export default Container;
