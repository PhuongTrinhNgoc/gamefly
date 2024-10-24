import { Button, Rating, TextField } from "@mui/material";
import React, { useState } from "react";
import { CommentInfoGame } from "../../../css/cssHome";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { useSelector } from "react-redux";
import Switch from "@mui/material/Switch";
import { Alarm } from "@mui/icons-material";
const RatingCpn = () => {
  const storageArr = JSON.parse(localStorage.getItem("prinValue"));
  const [value, setValue] = useState("");
  const [value2, setValue2] = useState();
  const [prinValue, setPrinValue] = useState(storageArr ?? []);
  const { current } = useSelector((state) => state.products);
  console.log(current.name);
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const handleClick = () => {
    {
      current.name != undefined && value.length != "" ? (
        setPrinValue((prev) => {
          const newValue = [...prev, value];
          const jsonValue = JSON.stringify(newValue);
          localStorage.setItem("prinValue", jsonValue);
          return newValue;
        })
      ) : value.length != "" ? (
        alert("login to comment")
      ) : (
        <></>
      );
    }

    setValue("");
    value.length > 0
      ? setValue2()
      : setValue2(<div className="input-warring">* cannot be left blank</div>);
  };

  const [checked, setChecked] = React.useState(true);

  const handleChangeComent = (event) => {
    setChecked(event.target.checked);
  };

  var today = new Date();
  var time = today.getHours() + "h";
  var date =
    today.getDate() + "-" + (today.getMonth() + 1) + "-" + today.getFullYear();
  return (
    <CommentInfoGame>
      <div className="container">
        <div>
          <h5>Epic Player Ratings</h5>
          <p>Captured from players in the Epic Games ecosystem.</p>
        </div>
        <div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <h1>
              4.5
              <Rating
                name="half-rating-read"
                defaultValue={4.5}
                precision={0.5}
                readOnly
              />
            </h1>
            <span style={{ color: "#fff" }}>({prinValue?.length + 2})</span>
          </div>
          <div>
            <span>
              Show comment (
              {checked === true ? <span>on</span> : <span>off</span>})
            </span>
            <Switch
              checked={checked}
              onChange={handleChangeComent}
              inputProps={{ "aria-label": "controlled" }}
            />
          </div>
          {checked === !false ? (
            <div className="body-comment">
              <div>
                <div className="main-comment">
                  <div className="up-title">
                    <div className="title-comment">
                      <Avatar
                        style={{ marginRight: "10px" }}
                        alt="Remy Sharp"
                        src="/static/images/avatar/1.jpg"
                      />{" "}
                      <div className="time-comment">
                        <h6>Huan Hoa Hong</h6>

                        {/* {time} */}
                        {date}
                      </div>
                    </div>
                    <Rating
                      name="size-small"
                      defaultValue={4.5}
                      readOnly
                      size="small"
                    />
                  </div>

                  <div className="body-comment">
                    {" "}
                    <h5>game hay day</h5>
                  </div>
                  <div className="d-flex reply justify-content-between align-items-center">
                    <p className="small mb-0" style={{ color: "#aaa" }}>
                      <div href="" className="link-grey">
                        Xoá
                      </div>{" "}
                      <div href="" className="link-grey">
                        Trả Lời
                      </div>{" "}
                      <div href="" className="link-grey">
                        Dịch
                      </div>
                    </p>

                    <div className="d-flex flex-row align-items-center">
                      <i
                        style={{ fontSize: "12px", marginRight: "5px" }}
                        className="fa-regular fa-thumbs-up"
                      ></i>
                      <p className="small text-muted mb-0">114</p>
                    </div>
                  </div>
                </div>
                <div className="main-comment">
                  <div className="up-title">
                    <div className="title-comment">
                      <Avatar
                        style={{ marginRight: "10px" }}
                        alt="Remy Sharp"
                        src="/static/images/avatar/1.jpg"
                      />{" "}
                      <div className="time-comment">
                        <h6>Tien Bip</h6>

                        {/* {time} */}
                        {date}
                      </div>
                    </div>
                    <Rating
                      name="size-small"
                      defaultValue={4.5}
                      readOnly
                      size="small"
                    />
                  </div>

                  <div className="body-comment">
                    {" "}
                    <h5>kinh day , khet day</h5>
                  </div>
                  <div className="d-flex reply justify-content-between align-items-center">
                    <p className="small mb-0" style={{ color: "#aaa" }}>
                      <div href="" className="link-grey">
                        Xoá
                      </div>{" "}
                      <div href="" className="link-grey">
                        Trả Lời
                      </div>{" "}
                      <div href="" className="link-grey">
                        Dịch
                      </div>
                    </p>

                    <div className="d-flex flex-row align-items-center">
                      <i
                        style={{ fontSize: "12px", marginRight: "5px" }}
                        className="fa-regular fa-thumbs-up"
                      ></i>
                      <p className="small text-muted mb-0">1534</p>
                    </div>
                  </div>
                </div>
                {prinValue.map((a, b) => {
                  return (
                    <div id={b} key={b}>
                      <div className="main-comment">
                        <div className="up-title">
                          <div className="title-comment">
                            <Avatar
                              style={{ marginRight: "10px" }}
                              alt="Remy Sharp"
                              src={current.photoUrl}
                            />{" "}
                            <div className="time-comment">
                              <h6>{current.name}</h6>
                              <div>{time}</div>
                              {date}
                            </div>
                          </div>
                          <Rating
                            name="size-small"
                            defaultValue={2}
                            readOnly
                            size="small"
                          />
                        </div>

                        <div className="body-comment">
                          {" "}
                          <h5>{a}</h5>
                        </div>
                        <div className="d-flex reply justify-content-between align-items-center">
                          <p className="small mb-0" style={{ color: "#aaa" }}>
                            <div
                              onClick={() => {
                                setValue([...prinValue, { id: b }]);
                              }}
                              href=""
                              className="link-grey"
                            >
                              Xoá
                            </div>{" "}
                            <div href="" className="link-grey">
                              Trả Lời
                            </div>{" "}
                            <div href="" className="link-grey">
                              Dịch
                            </div>
                          </p>

                          <div className="d-flex flex-row align-items-center">
                            <i
                              style={{ fontSize: "12px", marginRight: "5px" }}
                              className="fa-regular fa-thumbs-up"
                            ></i>
                            <p className="small text-muted mb-0">0</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="input-info">
                {" "}
                <TextField
                  value={value}
                  onChange={handleChange}
                  fullWidth
                  label="coment"
                  id="fullWidth"
                />
                <Button
                  className="btn-sumitComment"
                  onClick={handleClick}
                  variant="contained"
                >
                  comment
                </Button>
              </div>
              <div>{value.length > 0 ? "" : value2}</div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </CommentInfoGame>
  );
};

export default RatingCpn;
