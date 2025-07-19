import react from "react";
import Navbar from "../components/Navbar";
import Hero from "../sections/HomePage/Hero";
import Countdown from "../components/Countdown";
import FounderNote from "../sections/HomePage/FoundersNote";
import Categories from "../sections/HomePage/Categories";
import EditorsPicks from "../sections/HomePage/EditorsPicks";

function Home() {
  return (
    <div>
      <Hero />
      <Countdown />
      <Categories />
      <EditorsPicks />
      <FounderNote />
    </div>
  );
}

export default Home;
