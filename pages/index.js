import React from "react";
import Layout from "../components/Layout/Layout";
import Link from "next/link";
import fetch from "isomorphic-unfetch";

const Index = ({ shows }) => {
  return (
    <Layout>
      <h1>Index page!</h1>
      <ul>
        {shows.map(({ id, name }) => (
          <li key={id}>
            <Link href="/post/[id]" as={`/post/${id}`}>
              <a>{name}</a>
            </Link>
          </li>
        ))}
      </ul>
      <style jsx>{`
        a {
          font-size: 24px;
        }
      `}</style>
    </Layout>
  );
};

Index.getInitialProps = async () => {
  const res = await fetch("https://api.tvmaze.com/search/shows?q=batman");
  const data = await res.json();

  return {
    shows: data.map(entry => entry.show)
  };
};

export default Index;
