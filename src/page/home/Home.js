import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { DflexAll } from "../../css/cssComponent";
import {
  CheckOutHome,
  DisplayFlex,
  Extraordina,
  Img,
  MarginBT,
  Margincategory,
  Prv,
  TitleBanerDow,
} from "../../css/cssHome";
import BanerCarousel from "./component/BanerCarousel";
import BlogBody from "./component/BlogBody";
import ItemMain from "./component/ItemMain";
import TabPanel from "./component/TabPanel";

import "animate.css/animate.min.css";
import { SnackbarProvider } from "notistack";
import { AnimationOnScroll } from "react-animation-on-scroll";
import FreeGame from "./component/FreeGame";

import {
  Button,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
const Home = () => {
  const [open, setOpen] = useState(false);
  const [valueInput, setValueInput] = useState();

  const [expanded, setExpanded] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState("");
  const { current } = useSelector((state) => state.products);

  const { products } = useSelector((state) => state.products);
  const { buy } = useSelector((state) => state.buys);
  console.log(buy);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const handleChangeCheck = (event) => {
    setSelectedValue(event.target.value);
  };
  const SALECODE = "gamefly";

  const handleChaneCode = (e) => {
    setValueInput(e.target.value);
  };

  const tatalAll =
    buy.length > 0
      ? buy.reduce((a, b) => {
          return a + b.price;
        }, 0)
      : undefined;

  const sumSalePrice =
    buy.length > 0
      ? buy.reduce((a, b) => {
          return b.sale
            ? a + (b.price - (b.price * b.sale) / 100)
            : a + b.price;
        }, 0)
      : NaN;
  if (products === 0) return <h1>undefined</h1>;
  return (
    <div>
      <BanerCarousel products={products} />

      <MarginBT className="abc">
        <Prv>
          <Extraordina classname="Extraordinary">
            <AnimationOnScroll animateIn="animate__fadeIn">
              {" "}
              Extraordinary console exclusive games from
              <br /> PlayStation Studios{" "}
            </AnimationOnScroll>
          </Extraordina>

          <Img src={products?.hotgame.imgItem} />
          <AnimationOnScroll animateOnce={true} animateIn="animate__fadeIn">
            <Img className="img-childBaner" src="../images/childImgItem.png" />
          </AnimationOnScroll>
        </Prv>
        <DisplayFlex>
          <TitleBanerDow className="title-baner">
            <h4>{products?.hotgame.name}</h4>
            <h6>{products?.hotgame.title}</h6>
            <DflexAll className="user">
              <Link to={`infoGame/2`} className="login">
                <div>Find out more</div>
              </Link>
            </DflexAll>
          </TitleBanerDow>
        </DisplayFlex>
      </MarginBT>
      <div className="pa-items">
        <SnackbarProvider maxSnack={3}>
          <ItemMain setOpen={setOpen} products={products} />
        </SnackbarProvider>
      </div>
      <div className="container">
        <FreeGame />
      </div>

      <Margincategory className="container">
        <TabPanel />
        <div className="a-seeMore">
          <Link
            to="listItem"
            className="a-child-seeMore"
            style={{ marginBottom: "20px" }}
          >
            see more
          </Link>
        </div>
      </Margincategory>
      <div className="container">
        <BlogBody products={products} />
      </div>
      <CheckOutHome>
        {" "}
        {open === true ? (
          <div className="main-checkout">
            <div className="body-checkout">
              <div className="container">
                <div className="row">
                  <div className="col-8">
                    <div className="title-checkout">
                      <h5>CHECKOUT</h5>
                      {current.name ? (
                        <div className="user-info">
                          <img className="img-user-gg" src={current.photoUrl} />
                          <div className="name-user-gg">{current?.name}</div>
                        </div>
                      ) : (
                        <div>avatar- name</div>
                      )}
                    </div>
                    <div className="main-atm">
                      <Accordion
                        onClick={() => {
                          setSelectedValue("Credit Card");
                        }}
                        expanded={expanded === "panel1"}
                        onChange={handleChange("panel1")}
                        style={{ marginBottom: "20px" }}
                      >
                        <AccordionSummary
                          expandIcon={
                            <Radio
                              checked={selectedValue === "Credit Card"}
                              onChange={handleChangeCheck}
                              value="Credit Card"
                              name="radio-buttons"
                              inputProps={{ "aria-label": "A" }}
                            />
                          }
                          aria-controls="panel1bh-content"
                          id="panel1bh-header"
                        >
                          <Typography sx={{ width: "33%", flexShrink: 0 }}>
                            <div
                              style={{ display: "flex", alignItems: "center" }}
                            >
                              {" "}
                              <div
                                style={{
                                  marginRight: "10px",
                                  fontSize: "26px",
                                }}
                              >
                                <i className="fa-solid fa-credit-card"></i>
                              </div>
                              <div>Credit Card</div>
                            </div>
                          </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Typography>
                            <div>
                              <div className="d-flex">
                                <h6>CARD DETAILS</h6>
                                <div className="all-img-cartbank">
                                  <img
                                    className="img-cartbank"
                                    src="../../imgBank/img.png"
                                  />
                                  <img
                                    className="img-cartbank"
                                    src="../../imgBank/img1.png"
                                  />
                                  <img
                                    className="img-cartbank"
                                    src="../../imgBank/img2.png"
                                  />
                                  <img
                                    className="img-cartbank"
                                    src="../../imgBank/img3.png"
                                  />
                                  <img
                                    className="img-cartbank"
                                    src="../../imgBank/img4.png"
                                  />
                                  <img
                                    className="img-cartbank"
                                    src="../../imgBank/img5.png"
                                  />
                                </div>
                              </div>
                              <div className="info-credit">
                                <FloatingLabel
                                  controlId="floatingInput"
                                  className="mb-3"
                                  label="Card Number"
                                >
                                  <Form.Control
                                    type="email"
                                    placeholder="name@example.com"
                                  />
                                </FloatingLabel>
                                <div style={{ display: "flex", width: "100%" }}>
                                  <FloatingLabel
                                    controlId="floatingPassword"
                                    label="Expiration *"
                                    style={{ width: "50%" }}
                                  >
                                    <Form.Control
                                      type="password"
                                      placeholder="Password"
                                    />
                                  </FloatingLabel>
                                  <FloatingLabel
                                    style={{ width: "50%", marginLeft: "20px" }}
                                    controlId="floatingPassword2"
                                    label="CVV *"
                                  >
                                    <Form.Control
                                      type="password"
                                      placeholder="Password"
                                    />
                                  </FloatingLabel>
                                </div>
                              </div>
                              <div className="save">
                                <div>
                                  <FormControl>
                                    <div style={{ marginTop: "20px" }}>
                                      Required: Save this payment method for
                                      future purchases?
                                    </div>

                                    <RadioGroup
                                      row
                                      aria-labelledby="demo-row-radio-buttons-group-label"
                                      name="row-radio-buttons-group"
                                    >
                                      <FormControlLabel
                                        value="female"
                                        control={<Radio />}
                                        label="Yes"
                                      />
                                      <FormControlLabel
                                        value="male"
                                        control={<Radio />}
                                        label="No"
                                      />
                                    </RadioGroup>
                                  </FormControl>
                                  <p className="p-credit">
                                    By choosing to save your payment
                                    information, this payment method will be
                                    selected as the default for all purchases
                                    made using Epic Games payment, including
                                    purchases in Fortnite, Rocket League, Fall
                                    Guys and the Epic Games Store. You can
                                    delete your saved payment information
                                    anytime on this payment screen or by logging
                                    in to your Epic Games account, and selecting
                                    payment management in your account settings.
                                    <Link> Learn more.</Link>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </Typography>
                        </AccordionDetails>
                      </Accordion>
                      <Accordion
                        onClick={() => {
                          setSelectedValue("Paypal");
                        }}
                        expanded={expanded === "panel2"}
                        onChange={handleChange("panel2")}
                      >
                        <AccordionSummary
                          expandIcon={
                            <Radio
                              checked={selectedValue === "Paypal"}
                              onChange={handleChangeCheck}
                              value="Paypal"
                              name="radio-buttons"
                              inputProps={{ "aria-label": "B" }}
                            />
                          }
                          aria-controls="panel2bh-content"
                          id="panel2bh-header"
                        >
                          <Typography sx={{ width: "33%", flexShrink: 0 }}>
                            <div
                              style={{ display: "flex", alignItems: "center" }}
                            >
                              {" "}
                              <div
                                style={{
                                  marginRight: "10px",
                                  fontSize: "26px",
                                }}
                              >
                                <i className="fa-brands fa-paypal"></i>
                              </div>
                              <div> Paypal</div>
                            </div>
                          </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Typography>
                            Donec placerat, lectus sed mattis semper, neque
                            lectus feugiat lectus, varius pulvinar diam eros in
                            elit. Pellentesque convallis laoreet laoreet.
                          </Typography>
                        </AccordionDetails>
                      </Accordion>
                    </div>
                  </div>
                  <div className="col-4 col4-relative">
                    <div className="close-checkout">
                      <h6>ORDER SUMMARY</h6>
                      <button
                        onClick={() => {
                          setOpen(false);
                        }}
                      >
                        <i className="fa-solid fa-xmark"></i>
                      </button>
                    </div>
                    <div className="btn-checkout">
                      {selectedValue === "Paypal" ? (
                        <a href="https://www.paypal.com/cgi-bin/webscr?cmd=_express-checkout&useraction=commit&token=EC-24488709LC8639812">
                          {" "}
                          <Button variant="contained">CHECK OUT</Button>
                        </a>
                      ) : (
                        <Button variant="contained">CHECK OUT</Button>
                      )}
                    </div>

                    <div style={{ marginTop: "30px" }}>
                      <div className="item-scroll">
                        {buy.length > 0
                          ? buy.map((item, index) => {
                              return (
                                <div key={index} className="list-cart">
                                  <div className="img-titleItem">
                                    <img
                                      className="img-checkout"
                                      src={item.imgItem}
                                    />
                                    <div className="name-price">
                                      <h6>{item.name}</h6>
                                      <h6 className="h6-price">
                                        {item.price} $
                                      </h6>

                                      <span style={{ color: "red" }}>
                                        - {item.sale} %
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              );
                            })
                          : ""}
                        <div className="main-total">
                          <div className="price-checkout">
                            <div className="d-flex price-cart ">
                              <div> price</div>
                              <div>
                                {buy.length > 0
                                  ? buy
                                      .reduce((a, b) => {
                                        return a + b.price;
                                      }, 0)
                                      .toFixed(0)
                                  : undefined}
                                <span style={{ marginLeft: "10px" }}>$</span>
                              </div>
                            </div>
                            <div className="d-flex">
                              <div>texa</div>
                              <div>4 %</div>
                            </div>
                            <div className="d-flex">
                              <div>Sale Discount</div>
                              <div>
                                {valueInput === SALECODE ? <p>-20</p> : <>0</>}
                              </div>
                            </div>
                          </div>

                          <div className="total-checkout d-flex">
                            <h6>Total</h6>
                            <h5>
                              {valueInput === SALECODE
                                ? sumSalePrice - 20
                                : sumSalePrice}

                              <span style={{ marginLeft: "10px" }}>$</span>
                            </h5>
                          </div>
                        </div>

                        <div className="payment">
                          <div>Payment Details:</div>
                          <div className="payment-bank">
                            <div>{selectedValue}</div>

                            <div>
                              ${" "}
                              {valueInput === SALECODE
                                ? sumSalePrice - 20
                                : sumSalePrice}
                            </div>
                          </div>
                        </div>

                        <div className="main-total">
                          <div className="input-sale">
                            <input
                              value={valueInput}
                              onChange={handleChaneCode}
                              placeholder="Enter a creator tag"
                            />
                            {valueInput == "" ? (
                              <p className="insert">
                                * Enter discount code (if any)
                              </p>
                            ) : valueInput === SALECODE ? (
                              <p className="codePass">* valid discount code</p>
                            ) : (
                              <p className="codeFail">
                                * Invalid discount code
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          false
        )}
      </CheckOutHome>
    </div>
  );
};
export default Home;
