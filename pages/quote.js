import React from "react";
import Layout from "../components/Layout/Layout";
import fetch from "isomorphic-unfetch";
import useSWR from "swr";

const fetcher = url => fetch(url).then(r => r.json());

const Quote = () => {
  const { data, error } = useSWR("/api/randomQuote", fetcher);

  const author = data?.author;
  let quote = data?.quote;

  if (!data) quote = "Loading...";
  if (error) quote = "Failed to fetch the quote.";

  return (
    <Layout>
      <div>
        <div>{quote}</div>
        {author && <span>{author}</span>}
      </div>
    </Layout>
  );
};

export default Quote;
