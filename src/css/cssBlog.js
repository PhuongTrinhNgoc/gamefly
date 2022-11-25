import styled, { keyframes } from "styled-components";

export const MainBlog = styled.div`
  .title-text-blog {
    margin-left: 10px;
  }
  .title-blog {
    display: flex;
    justify-content: center;
  }
  .child-img {
    width: 100%;
    border-radius: 10px;
  }
  li {
    list-style: none;
  }
  .item-blog {
    margin-bottom: 20px;
  }
  .body-mid {
    margin-top: 50px;
  }
  .col-9 {
    padding-right: 0;
  }
  .col3-right {
    padding: 0 40px;
  }
  ul {
    object-fit: cover;
    overflow: hidden;
    overflow-y: scroll;
    height: 700px;
    li {
      margin-bottom: 40px;
    }
  }
  .title-child-imgText {
    text-decoration: none;
    margin: 10px 0;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  .title-child-imgText2 {
  }
  .blog-items {
  }
  padding: 70px 0;
`;
export const H5blog = styled.h5``;

export const ImgBlog = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  overflow: hidden;
  border-radius: 10px;
`;
