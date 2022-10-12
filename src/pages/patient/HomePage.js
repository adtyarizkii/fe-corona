import React from "react";
import Jumbotron from "../../components/jumbotron/Jumbotron";
import Article from "../../components/article/Article";

function HomePage() {
  const title = "Home";
  document.title = "Halo Corona | " + title;
  return (
    <div>
      <Jumbotron />
      <Article />
    </div>
  );
}

export default HomePage;
