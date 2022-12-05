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
import { Link } from "react-router-dom";
const CheckOut = ({ open, cart, setOpen, sumSalePrice }) => {
  const [valueInputCode, setValueInputCode] = useState("");

  const SALECODE = "gamefly";
  const [expanded, setExpanded] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState("");
  //   const [bank, setBank] = React.useState("");
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const handleChangeCheck = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div className="">
      {" "}
      {open === true ? (
        <div className="main-checkout">
          <div className="body-checkout">
            <div className="container">
              <div className="row">
                <div className="col-8">
                  <div className="title-checkout">
                    <h5>CHECKOUT</h5>
                    <div>avatar- name</div>
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
                              style={{ marginRight: "10px", fontSize: "26px" }}
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
                                  By choosing to save your payment information,
                                  this payment method will be selected as the
                                  default for all purchases made using Epic
                                  Games payment, including purchases in
                                  Fortnite, Rocket League, Fall Guys and the
                                  Epic Games Store. You can delete your saved
                                  payment information anytime on this payment
                                  screen or by logging in to your Epic Games
                                  account, and selecting payment management in
                                  your account settings.
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
                              style={{ marginRight: "10px", fontSize: "26px" }}
                            >
                              <i className="fa-brands fa-paypal"></i>
                            </div>
                            <div> Paypal</div>
                          </div>
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography>
                          <div className="save">
                            <div>
                              <p className="p-credit">
                                By choosing to save your payment information,
                                this payment method will be selected as the
                                default for all purchases made using Epic Games
                                payment, including purchases in Fortnite, Rocket
                                League, Fall Guys and the Epic Games Store. You
                                can delete your saved payment information
                                anytime on this payment screen or by logging in
                                to your Epic Games account, and selecting
                                payment management in your account settings.
                                <Link> Learn more.</Link>
                              </p>
                            </div>
                          </div>
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
                      {cart.length > 0
                        ? cart.map((item, index) => {
                            return (
                              <div key={index} className="list-cart">
                                <div className="img-titleItem">
                                  <img
                                    className="img-checkout"
                                    src={item.imgItem}
                                  />
                                  <div className="name-price">
                                    <h6>{item.name}</h6>
                                    <h6 className="h6-price">{item.price} $</h6>
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
                              {sumSalePrice}
                              <span style={{ marginLeft: "10px" }}>$</span>
                            </div>
                          </div>
                          <div className="d-flex">
                            <div>Sale Discount</div>
                            {/*  */}
                            <div>
                              {valueInputCode === SALECODE ? "- 20 $" : 0}
                            </div>
                          </div>
                          <div className="main-total">
                            <div className="input-sale">
                              <div className="submmit-total">submmit</div>
                              <input
                                value={valueInputCode}
                                onChange={(e) => {
                                  setValueInputCode(e.target.value);
                                }}
                                placeholder="Enter a creator tag"
                              />
                            </div>
                            {valueInputCode.length === 0 ? (
                              <div style={{ fontSize: "12px" }}>
                                enter discount code (if any)
                              </div>
                            ) : (
                              <div>
                                {valueInputCode === SALECODE ? (
                                  <div
                                    style={{ color: "green", fontSize: "12px" }}
                                  >
                                    * apply discount code
                                  </div>
                                ) : (
                                  <div
                                    style={{ color: "red", fontSize: "12px" }}
                                  >
                                    * discount code is not correct
                                  </div>
                                )}
                              </div>
                            )}
                          </div>
                        </div>

                        <div className="total-checkout d-flex">
                          <h6>Total</h6>
                          <h5>
                            {sumSalePrice === NaN ? (
                              ""
                            ) : (
                              <div>
                                {valueInputCode === SALECODE
                                  ? (
                                      sumSalePrice +
                                      (sumSalePrice * 4) / 100 -
                                      20
                                    ).toFixed(2)
                                  : (
                                      sumSalePrice +
                                      (sumSalePrice * 4) / 100
                                    ).toFixed(2)}{" "}
                                $
                              </div>
                            )}
                          </h5>
                        </div>
                      </div>

                      <div className="payment">
                        <div>Payment Details:</div>
                        <div className="payment-bank">
                          <div>{selectedValue}</div>
                          <div>
                            {" "}
                            {sumSalePrice === NaN ? (
                              ""
                            ) : (
                              <div>
                                {sumSalePrice === NaN ? (
                                  ""
                                ) : (
                                  <div>
                                    {valueInputCode === SALECODE
                                      ? (
                                          sumSalePrice +
                                          (sumSalePrice * 4) / 100 -
                                          20
                                        ).toFixed(2)
                                      : (
                                          sumSalePrice +
                                          (sumSalePrice * 4) / 100
                                        ).toFixed(2)}
                                    $
                                  </div>
                                )}
                              </div>
                            )}{" "}
                          </div>
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
    </div>
  );
};
export default CheckOut;
