import React, { useState } from "react";
import video from "./BannerFinish.mp4";
import NavPar from "../NavPar";
import "./Header.css";
import { Paper, styled, TextField } from "@mui/material";
import { MuiTelInput } from "mui-tel-input";

export default function Header() {
  const DemoPaper = styled(Paper)(({ theme }) => ({
    width: '100%',
    maxWidth: 420,
    padding: theme.spacing(2),
    ...theme.typography.body2,
    textAlign: "center",
    borderRadius: "20px",
    background: "rgba(240, 248, 255, 0.5)",
  }));

  const [value, setValue] = useState(`+971`);
  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <div className="header-container">
      <video className="video-background" autoPlay loop muted>
        <source src={video} type="video/mp4" />
      </video>
      <NavPar />
      <div className="form-container">
        <DemoPaper>
          <TextField
            sx={{
              width: "100%",
              maxWidth: "350px",
              mt: "20px",
              backgroundColor: "white",
              borderRadius: "21px",
              border: "none",
              outline: "none",
              boxShadow: "none",
            }}
            id="name-field"
            placeholder="Name"
            variant="outlined"
          />
          <MuiTelInput
            sx={{
              width: "100%",
              maxWidth: "350px",
              mt: "10px",
              backgroundColor: "white",
              borderRadius: "21px",
              border: "none",
              outline: "none",
            }}
            value={value}
            onChange={handleChange}
          />
          <button className="btn-register">Register your interest</button>
          <div className="contact-icons">
            <img src="./uploads/1/header/mobile.png" alt="mobile" />
            <img src="./uploads/1/header/whatsapp.png" alt="whatsapp" />
          </div>
        </DemoPaper>
      </div>
    </div>
  );
}
