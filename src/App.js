import React from "react";
import TopBar from "./components/TopBar";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Activities from "./components/Activities";
import Book from "./components/Book";
import Gallery from "./components/Gallery";
import ContactForm from "./components/ContactForm";

function App() {
  return (
    <div>
      <TopBar />
      <Navbar />
      <Hero />
      <Activities />
      <Book />
      <Gallery />
      <ContactForm />
    </div>
  );
}

export default App;
