import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { MainBlog, H5blog, ImgBlog, Pblog } from "../../css/cssBlog";

const Blogs = () => {
  const { products } = useSelector((state) => state.products);
  if (products === 0) return <h1>loadinng</h1>;
  const contenBlog = products?.blogs[0];
  return (
    <MainBlog>
      <div className="container">
        <div className="row">
          <div className="title-blog">
            <div className="col-9">
              {" "}
              <img style={{ width: "100%" }} src={contenBlog?.img} />
            </div>

            <Link to={`${contenBlog?.id}`} className="title-text-blog">
              <h5>{contenBlog?.title}</h5>
              <h6>{contenBlog?.text}</h6>
            </Link>
          </div>
          <div className="container body-mid">
            <div className="row">
              <div className="col-9">
                <div className="row">
                  {products &&
                    products.blogs.map((item, key) => {
                      return (
                        <div key={key} className="col-3 item-blog">
                          <Link to={`${item.id}`} className="blog-items">
                            <ImgBlog src={item.img} />
                            <div>
                              {" "}
                              <h5 className="title-child-imgText">
                                {item.title}
                              </h5>
                              <p className="title-child-imgText">{item.text}</p>
                            </div>
                          </Link>
                        </div>
                      );
                    })}
                </div>
              </div>
              <div className="col-3 col3-right">
                <div className="row">
                  <ul>
                    {products &&
                      products.blogs.map((item, key) => {
                        return (
                          <li>
                            <Link
                              key={key}
                              to={`${item.id}`}
                              className="blog-items"
                            >
                              <img className="child-img" src={item.img} />
                              <div className="title-child-imgText title-child-imgText2">
                                {" "}
                                <h5>{item.title}</h5>
                                <p>{item.text}</p>
                              </div>
                            </Link>
                          </li>
                        );
                      })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainBlog>
  );
};
export default Blogs;
