import { Button } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "../../../../node_modules/slick-carousel/slick/slick.css";
import { DivNone, ImgHoverItem, ItemsPadding } from "../../../css/cssHome";

import { useSnackbar } from "notistack";
import { addToCart } from "../../../redux/slice/cartSlice";
import { buyItem } from "../../../redux/slice/buySlice";

const ListItemsChild = (props) => {
  //   const [bank, setBank] = React.useState("");

  const [addedCart, setaddedCart] = useState(false);
  const { items, setOpen } = props;
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useDispatch();
  const theme = createTheme({
    palette: {
      white: {
        main: "#fff",
        contrastText: "#000c",
      },
    },
  });

  const handleClickVariant = (variant, items) => () => {
    dispatch(addToCart(items));
    setaddedCart(true);
    // console.log(addedCart);
    enqueueSnackbar(`Added "${items.name}" to the cart!`, { variant });
  };
  return (
    <>
      <Link to={`infoGame/${items.id}`}>
        <ItemsPadding>
          <ImgHoverItem src={items.imgItem} />

          <p>{items.name}</p>
        </ItemsPadding>
      </Link>
      <DivNone className="main-btn">
        <ThemeProvider theme={theme}>
          <Button
            color="white"
            style={{ marginRight: "2px" }}
            variant="contained"
            size="small"
            onClick={() => {
              setOpen(true);
              console.log("dsa");
              dispatch(buyItem(items));
            }}
          >
            buy
          </Button>
        </ThemeProvider>
        <ThemeProvider theme={theme}>
          <Button
            className="btn-addCart-main"
            onClick={handleClickVariant("success", items, setaddedCart)}
            color="white"
            style={{ marginLeft: "2px" }}
            size="small"
            variant="contained"
          >
            {addedCart ? (
              <Link className="a-addcart-main" to="cart">
                view cart
              </Link>
            ) : (
              "add to cart"
            )}
          </Button>
        </ThemeProvider>
      </DivNone>
    </>
  );
};

export default ListItemsChild;
