import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import "animate.css/animate.min.css";
import { getAuth, signOut } from "firebase/auth";
import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ItemsFilter, MainListItem } from "../css/cssHeader";
import "../AppCss/App.css";
import {
  DflexAll,
  Img,
  ListMenu,
  Logo,
  RotateInDiv,
  RotateOutDiv,
} from "../css/cssComponent";
import { Box, TextField } from "@mui/material";
import { removeVietnameseTones } from "../removeTones/removeVietnameseTones";
const Header = () => {
  const [sticky, setSticky] = useState({ isSticky: false, offset: 0 });
  const [showInput, setShowInput] = useState(false);
  const [valueInput, setValueInput] = useState("");
  const [focus, setFocus] = useState(1);

  const { cart } = useSelector((state) => state.carts);
  const { current } = useSelector((state) => state.products);
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { products } = useSelector((state) => state.products);

  const listNavbar = [
    {
      linkTo: "/",
      name: "Home",
    },
    { linkTo: "game", name: "Game" },
    { linkTo: "blogs", name: "Blogs" },
    { linkTo: "aboutus", name: "About Us" },
    { linkTo: "fqa", name: "FQA" },
  ];

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleSearchHeader = () => {
    setShowInput(!showInput);
  };
  const handleOnchange = (e) => {
    setValueInput(e.target.value);
  };

  const handleClose = () => {
    const auth = getAuth();

    signOut(auth)
      .then(() => {
        console.log("logout");
      })
      .catch((error) => {
        // An error happened.
      });
    window.location.reload();
  };
  // handle scroll event
  const elemenScroll = useRef();
  var scrollableElement = document.body;
  useEffect(() => {
    scrollableElement.addEventListener("wheel", checkScrollDirection);

    function checkScrollDirection(event) {
      if (checkScrollDirectionIsUp(event)) {
        elemenScroll.current.style = "transition-delay:0s";

        elemenScroll.current.style.top = "0px";
      } else if (checkScrollDirectionIsUp == 0) {
        elemenScroll.current.style.top = "0px";
      } else {
        elemenScroll.current.style = "transition-delay:2.4s";

        elemenScroll.current.style.top = "-70px";
      }
    }
    function checkScrollDirectionIsUp(event) {
      if (event.wheelDelta) {
        return event.wheelDelta > 0;
      }
      return event.deltaY < 0;
    }
  });
  const src = "../images/avatar.png";
  const src2 = "../images/avatar2.png";
  if (products === 0) return <h1>loading...</h1>;

  const dataFilter =
    products.items &&
    products.items.filter((a) =>
      removeVietnameseTones(a.name.toLocaleLowerCase()).includes(
        valueInput.toLocaleLowerCase()
      )
    );
  const handleClose2 = () => {
    setAnchorEl(null);
  };
  return (
    <div className="main-body">
      <DflexAll
        ref={elemenScroll}
        id="sticky-header"
        className={`navbar${sticky.isSticky ? " sticky" : ""} nav`}
      >
        <Logo className="logo">
          <Link to="/">
            <RotateInDiv
              style={{
                width: "100%",
                position: "absolute",
                top: "4px",
                height: "94%",
              }}
            >
              {" "}
              <Img src={src2} />
            </RotateInDiv>
            <RotateOutDiv
              style={{
                width: "100%",
                position: "absolute",
                top: "4px",
                height: "94%",
              }}
            >
              {" "}
              <Img src={src} />
            </RotateOutDiv>
          </Link>
        </Logo>
        <ListMenu className="list-menu">
          {listNavbar.map((a, b) => {
            return (
              <Link
                key={b}
                onClick={() => {
                  console.log(b);
                  setFocus(b + 1);
                }}
                style={
                  focus === b + 1
                    ? { color: "#2871c6", borderBottom: "1px solid #2871c6" }
                    : { color: "black" }
                }
                className="items-menu"
                to={a.linkTo}
              >
                {a.name}
              </Link>
            );
          })}
        </ListMenu>

        <DflexAll className="user">
          {showInput === true ? (
            <div className="iput-header">
              <MainListItem>
                <div className="filter">
                  <Box
                    sx={{
                      maxWidth: "100%",
                      position: "relative",
                    }}
                  >
                    <input
                      onChange={handleOnchange}
                      value={valueInput}
                      fullWidth
                      label="search"
                      id="fullWidth"
                      placeholder="search"
                    />

                    {valueInput.length > 0 ? (
                      <button
                        onClick={() => {
                          setValueInput("");
                        }}
                        className="btn-clear"
                      >
                        <i className="fa-solid fa-xmark"></i>
                      </button>
                    ) : (
                      ""
                    )}
                  </Box>
                </div>
                {valueInput.length > 0 ? (
                  <ItemsFilter>
                    <div className="box-filter">
                      <ul>
                        {dataFilter.map((a, b) => {
                          return (
                            <Link to={`infoGame/${a._id}`}>
                              <li>
                                {" "}
                                <img className="img-filter" src={a.imgItem} />
                                {a.name}
                              </li>
                            </Link>
                          );
                        })}
                      </ul>
                    </div>
                  </ItemsFilter>
                ) : (
                  ""
                )}
              </MainListItem>
            </div>
          ) : (
            ""
          )}
          {current.name ? (
            <div className="user-gg">
              <div>
                {auth && (
                  <div>
                    <IconButton
                      style={{ backgroundColor: "transparent" }}
                      size="large"
                      aria-label="account of current user"
                      aria-controls="menu-appbar"
                      aria-haspopup="true"
                      onClick={handleMenu}
                      color="inherit"
                    >
                      <div>
                        <img src={current.photoUrl} />
                        <div className="name-user-gg">{current?.name}</div>
                      </div>
                    </IconButton>
                    <Menu
                      id="menu-appbar"
                      anchorEl={anchorEl}
                      anchorOrigin={{
                        vertical: "top",
                        horizontal: "right",
                      }}
                      keepMounted
                      transformOrigin={{
                        vertical: "top",
                        horizontal: "right",
                      }}
                      open={Boolean(anchorEl)}
                      onClose={handleClose2}
                    >
                      {/* <MenuItem onClick={handleClose}>Profile</MenuItem> */}
                      <MenuItem onClick={handleClose}>LogOut</MenuItem>
                    </Menu>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <Link to="login" className="login">
              <div>login</div>
            </Link>
          )}

          <div className="icon-search">
            {
              <SearchIcon
                onClick={handleSearchHeader}
                className="icon-search-child"
              />
            }
          </div>
          <Link className="icon-cart" to="cart">
            {<ShoppingCartIcon />}
            <div className={cart.length === 0 ? "" : "count"}>
              <span>{cart.length === 0 ? "" : cart.length} </span>
            </div>
          </Link>
        </DflexAll>
      </DflexAll>
    </div>
  );
};
export default Header;
