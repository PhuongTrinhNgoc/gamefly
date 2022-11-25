import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ItemsPagiGame } from "../../../css/cssGame";
import { getPaginationGame } from "../../../redux/slice/producSlice";

const GameList = () => {
  const [value, setValue] = useState("&startAt=0&endAt=17");
  const [focus, setFocus] = useState(1);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPaginationGame(value));
  }, [value]);
  const { itemsPagiGame } = useSelector((state) => state.products);
  const { products } = useSelector((state) => state.products);

  console.log(products.panigation2);
  const handleClickPaniGame = ({ item }) => {};
  return (
    <ItemsPagiGame>
      <div className="row">
        {itemsPagiGame &&
          itemsPagiGame.map((item, index) => {
            return (
              <div key={index} className="col-3 main-itemsPagiGame">
                <Link to={`infoGame/${item._id}`}>
                  <img src={item.imgItem} />
                  <div className="title-itemsPagiGame">
                    <div>{item.name}</div>

                    <div>$ {item.price}</div>
                  </div>
                </Link>
              </div>
            );
          })}
      </div>
      <div className="main-btn-itemsPagiGame">
        {products.panigation2 &&
          products.panigation2.map((item, index) => {
            return (
              <Button
                onClick={() => {
                  setValue(item);
                  setFocus(index + 1);
                }}
                key={index}
                sx={
                  focus === index + 1
                    ? {
                        color: "#fff",
                      }
                    : {
                        background: "#fff",
                        color: "black",
                      }
                }
                variant="contained"
              >
                {index + 1}
              </Button>
            );
          })}
      </div>
    </ItemsPagiGame>
  );
};

export default GameList;
