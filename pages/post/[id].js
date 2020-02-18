import React from "react";
import Layout from "../../components/Layout/Layout";
import fetch from "isomorphic-unfetch";

const Post = ({ show: { name, summary, image } }) => {
  return (
    <Layout>
      <h1>{name}</h1>
      <p>{summary.replace(/<[/]?[pb]>/g, "")}</p>
      {image ? <img src={image.medium} /> : null}
    </Layout>
  );
};

Post.getInitialProps = async context => {
  const { id } = context.query;

  const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
  const show = await res.json();

  return {
    show
  };
};

export default Post;
