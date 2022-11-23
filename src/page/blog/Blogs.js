import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { MainBlog } from "../../css/cssBlog";
import { H5blog, ImgBlog, Pblog } from "../../css/cssHome";

const Blogs = () => {
  const { products } = useSelector((state) => state.products);

  return (
    <MainBlog>
      <div className="container">
        <div className="row">
          {products &&
            products.blogs.map((item, key) => {
              return (
                <div className="col-3">
                  <Link
                    to={`blogs/${item.id}`}
                    key={key}
                    className="blog-items"
                  >
                    <ImgBlog src={item.img} />
                    <H5blog>{item.title}</H5blog>
                    <Pblog>{item.text}</Pblog>
                  </Link>
                </div>
              );
            })}
        </div>
      </div>
    </MainBlog>
  );
};
export default Blogs;
