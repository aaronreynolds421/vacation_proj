import React from "react";
import TopBar from "./components/TopBar";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Activities from "./components/Activities";
import Book from "./components/Book";

function App() {
  return (
    <div>
      <TopBar />
      <Navbar />
      <Hero />
      <Activities />
      <Book />
    </div>
  );
}

export default App;
