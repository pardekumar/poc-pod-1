import React, { useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { styled, alpha } from "@mui/material/styles";
import Button from "@mui/material/Button";
import "./UploadComponent.css";
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
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import ReplayIcon from "@mui/icons-material/Replay";
import { useEffect } from "react";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import Checkbox from "@mui/material/Checkbox";

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

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const label = { inputProps: { "aria-label": "Checkbox demo" } };

function UploadComponent() {
  const [open, setOpen] = useState(false);
  const [showSelectModal, setShowSelectModal] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleCloseSecondModal = () => setShowSelectModal(false);
  const [fileChange, setFileChange] = useState([]);

  const handleFileChange = (e) => {
    console.log("e", e.target.files);
    setFileChange([...Array.from(e.target.files)]);
    // if (e.target.files) {
    //   setOpen(true);
    // }
    e.target.value = "";
  };

  const nextButton = () => {
    setOpen(false);
    setShowSelectModal(true);
  };
  useEffect(() => {
    if (fileChange) {
      setOpen(true);
    }
  }, [fileChange]);

  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        width: "12ch",
        "&:focus": {
          width: "20ch",
        },
      },
    },
  }));

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
                    <Button
                      component="label"
                      variant="contained"
                      // onClick={handleOpen}
                    >
                      Choose File(s)
                      <VisuallyHiddenInput
                        type="file"
                        multiple
                        onChange={(e) => handleFileChange(e)}
                      />
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
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            className="upload-file"
          >
            Uploading Files
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {Object.keys(fileChange)?.map((file, index) => {
              return (
                <div key={index}>
                  <div className="attach-file">
                    <AttachFileIcon />
                    {fileChange[file].name}
                    <span className="attach-file-icon">
                      Uploaded <CheckCircleIcon />
                    </span>
                  </div>
                </div>
              );
            })}
          </Typography>
          <Button
            variant="contained"
            size="medium"
            className="next-button"
            onClick={nextButton}
          >
            Next
          </Button>
        </Box>
      </Modal>

      <Modal
        open={showSelectModal}
        onClose={handleCloseSecondModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            className="upload-file"
          >
            Select Files
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
          </Typography>

          <div className="modal-content">
            {Object.keys(fileChange)?.map((file, index) => {
              return (
                <>
                  <Checkbox {...label} />
                  <span key={index}>{fileChange[file].name}</span>
                </>
              );
            })}
          </div>

          <br />
          <br />

          <Button
            variant="contained"
            size="medium"
            className="next-button"
            onClick={handleCloseSecondModal}
          >
            Submit
          </Button>
        </Box>
      </Modal>
    </>
  );
}

export default UploadComponent;
