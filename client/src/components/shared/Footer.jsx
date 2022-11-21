import React from "react";
import { useLoaderData } from "react-router-dom";
import { getPosts } from "../../api/getPost";

const Footer = () => {
  const posts = useLoaderData();
  console.log(posts);
  return (
    <div>
      <h1>footer</h1>
    </div>
  );
};

export default Footer;

export function loader() {
  getPosts();
}
