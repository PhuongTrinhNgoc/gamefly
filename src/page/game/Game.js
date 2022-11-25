import { Box, Link, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ItemsFilter, MainGame, MainListItem } from "../../css/cssGame";
import { getFectProdustGame } from "../../redux/slice/producSlice";
import GameGenres from "./component/GameGenres";
import GameList from "./component/GameList";

const Game = () => {
  const [valueInput, setValueInput] = useState("");
  const { products } = useSelector((state) => state.products);

  // const { productsGame } = useSelector((state) => state.products);

  if (products === 0) return <h1>loading...</h1>;

  const dataFilter =
    products.items && products.items.filter((a) => a.name.includes(valueInput));

  const handleOnchange = (e) => {
    setValueInput(e.target.value);
  };

  return (
    <div style={{ paddingTop: "100px", background: "black" }}>
      <div className="container">
        {/* <GameGenres /> */}
        <MainGame>
          <GameGenres />

          <div className="row">
            <div className="col-9">
              <div className="row">
                <GameList />
              </div>
            </div>
            <div className="col-3">
              <MainListItem>
                <div className="filter">
                  <h6>Filter</h6>

                  <Box
                    sx={{
                      width: 500,
                      maxWidth: "100%",
                      position: "relative",
                    }}
                  >
                    <TextField
                      onChange={handleOnchange}
                      value={valueInput}
                      fullWidth
                      label="search"
                      id="fullWidth"
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
          </div>
        </MainGame>
      </div>
    </div>
  );
};

export default Game;
