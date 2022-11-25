import {
  fadeInUp,
  rotateInDownLeft,
  rotateInDownRight,
} from "react-animations";
import styled, { keyframes } from "styled-components";
export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  /* position: absolute; */
`;

const rotateInAnimation = keyframes`${rotateInDownLeft}`;
const rotateOutAnimation = keyframes`${rotateInDownRight}`;
const fadeInUpAnimation = keyframes`${fadeInUp}`;

export const RotateInDiv = styled.div`
  animation: 1.5s ${rotateInAnimation};
`;
export const RotateOutDiv = styled.div`
  animation: 1.5s ${rotateOutAnimation};
`;
export const FadeInUpDiv = styled.div`
  animation: 4s ${fadeInUpAnimation};
`;
export const FadeInUpDiv2 = styled.div`
  animation: 5s ${fadeInUpAnimation};
`;
export const Logo2 = styled.div`
  &.logo {
    width: 6%;
    height: 100%;
    position: relative;
  }
`;
export const RotateInDiv2 = styled.div`
  animation: 1.5s ${rotateInAnimation};
`;
export const RotateOutDiv2 = styled.div`
  animation: 1.5s ${rotateOutAnimation};
`;
export const LoginCpn = styled.div`
  padding-top: 140px;
  padding-bottom: 70px;
  display: flex;
  justify-content: center;
  a {
    text-decoration: none;
  }
  .loginSignUpSeparator {
    border-top: 1px solid #cbd2d6;
    position: relative;
    margin-top: 20px;
    margin-bottom: 20px;
    height: 15px;
    text-align: center;
    font-size: 83.34%;
    .textInSeparator {
      background-color: #fff;
      padding: 0 0.5em;
      position: relative;
      color: #6c7378;
      top: -0.8em;
    }
  }
  .btn-login {
    width: 100%;
    padding: 10px;
    margin: 20px 0;
    border-radius: 20px;
  }
  .btn-creat {
    width: 100%;
    padding: 10px;
    margin-bottom: 20px;
    border-radius: 20px;
  }
  .firebaseui-container {
    margin: 0;
    max-width: none;
    .firebaseui-card-content,
    .firebaseui-card-footer {
      padding: 0;
    }
  }
  .firebaseui-idp-list {
    display: flex;
    justify-content: space-between;
    margin: 20px 0;
  }
  .firebaseui-list-item {
    :first-child {
      margin-right: 20px;
    }
  }
  .main-login {
    border: 0.5px solid gray;
    border-radius: 15px;
    width: 500px;
    height: 720px;
    text-align: center;
    padding: 20px 40px;
    .css-14s5rfu-MuiFormLabel-root-MuiInputLabel-root {
      color: black !important;
      opacity: 50%;
    }
    .css-1d3z3hw-MuiOutlinedInput-notchedOutline {
      border-color: black !important;
    }
    .css-1sumxir-MuiFormLabel-root-MuiInputLabel-root.Mui-focused {
      color: #2871c6 !important;
    }
    .css-1d3z3hw-MuiOutlinedInput-notchedOutline {
      border-color: none !important;
      border-width: 1px;
    }
    .css-1u3bzj6-MuiFormControl-root-MuiTextField-root {
      width: 100%;
      margin: 20px 0;
    }
    .css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root.Mui-focused
      .MuiOutlinedInput-notchedOutline {
      border-color: #2871c6;
    }
    .css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root.Mui-focused
      .MuiOutlinedInput-notchedOutline {
      border-color: #2871c6 !important;
      border-width: 1px;
    }
  }
`;
export const Logo = styled.div`
  &.logo {
    display: flex;
    justify-content: center;
    position: relative;
    height: 20%;
  }
`;
