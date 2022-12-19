import { Box, TextField } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { ItemsFilter, MainGame, MainListItem } from "../../css/cssGame";
import GameGenres from "./component/GameGenres";
import GameList from "./component/GameList";

const Game = () => {
  const [valueInput, setValueInput] = useState("");
  const [reload, setReload] = useState("");
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
                <GameList setReload={setReload} />
              </div>
            </div>
            <div className="col-3">
              <MainListItem>
                <div className="filter">
                  <h6>Filter</h6>

                  <div
                    style={{
                      width: "100%",
                      maxWidth: "100%",
                      position: "relative",
                    }}
                  >
                    <input
                      onChange={handleOnchange}
                      value={valueInput}
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
                  </div>
                </div>
                {valueInput.length > 0 ? (
                  <ItemsFilter>
                    <div className="box-filter">
                      <ul>
                        {dataFilter.map((item, index) => {
                          console.log(item);
                          return (
                            <Link key={index} to={`infoGame/${item._id}`}>
                              <li>
                                {" "}
                                <img
                                  className="img-filter"
                                  src={item.imgItem}
                                />
                                {item.name}
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
