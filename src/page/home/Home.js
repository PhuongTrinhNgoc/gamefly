import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { DflexAll } from "../../css/cssComponent";
import {
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
const Home = () => {
  const { products } = useSelector((state) => state.products);

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
          <ItemMain products={products} />
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
      <img src="https://dsm01pap009files.storage.live.com/y4mS8YRN94HRdd7totRolLzG9D9iZfdzsO6KcqrDEh962wX8J35GBCmMdE1ZxqtLj_V6tVhXzrYMa_-D0-UCsB7B67gJ75GhtnXr2ZxM1LxwyBMOI_7QXRGCM8wUxPJamNCzsYTUN7IPqs4wZpl6B3jlaeIzRAplDUtfNkEif7B3hmCsGh0ZkAi0Ctiby4FHwhno7PR91DWnLXPiuE9c9lDMtP0zP1PoqeLpZA9mPeCYDc?encodeFailures=1&width=1209&height=512" />
    </div>
  );
};
export default Home;
