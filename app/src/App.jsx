import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Content from "./components/Content";
import Content2 from "./components/Content2";
import Reservation from "./components/Reservation";
import Articles from "./components/Articles";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Content />
      <Content2 />
      <Reservation />
      <Articles />
      <Footer />
    </div>
  );
};

export default App;
