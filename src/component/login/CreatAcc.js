import React from "react";
import { Link } from "react-router-dom";

import firebase from "firebase/compat/app";
import "firebaseui/dist/firebaseui.css";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import {
  Img,
  LoginCpn,
  Logo,
  RotateInDiv,
  RotateInDiv2,
  RotateOutDiv,
} from "../../css/cssLogin";
import { Autocomplete, Button, ButtonBase, TextField } from "@mui/material";
import { Box, Stack } from "@mui/system";
const uiConfig = {
  signInFlow: "redirect",
  signInSuccessUrl: "/",
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID,
  ],
};

const CreatAcc = () => {
  const src = "../images/avatar.png";
  const src2 = "../images/avatar2.png";

  return (
    <LoginCpn className="loging">
      <div className="main-login">
        <Logo className="logo">
          <RotateInDiv2
            style={{
              width: "30%",
              position: "absolute",
              top: "4px",
              height: "100%",
            }}
          >
            {" "}
            <Img src={src2} />
          </RotateInDiv2>
          <RotateOutDiv
            style={{
              width: "30%",
              position: "absolute",
              top: "4px",
              height: "100%",
            }}
          >
            {" "}
            <Img src={src} />
          </RotateOutDiv>
        </Logo>
        <h4>Login GameFly</h4>
        <Box
          sx={{
            width: "100%",
          }}
        >
          <TextField id="demo-helper-text-misaligned" label="Name" />
          <TextField id="demo-helper-text-misaligned" label="Pass" />
          <TextField id="demo-helper-text-misaligned" label="RE-enter Pass" />

          <Button className="btn-creat" variant="outlined">
            creat account
          </Button>
          <div style={{ textAlign: "start" }}>
            {" "}
            <Link style={{ textDecoration: "none" }} to="/">
              <i className="fa-solid fa-arrow-left-long"></i>{" "}
              <span style={{ marginLeft: "10px" }}> Back Home</span>
            </Link>
          </div>
        </Box>
        <StyledFirebaseAuth
          uiConfig={uiConfig}
          firebaseAuth={firebase.auth()}
        />
      </div>
    </LoginCpn>
  );
};

export default CreatAcc;
