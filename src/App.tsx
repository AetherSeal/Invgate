import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";
import Window from "./components/window/window";

function App() {
  return (
    <>
      <Header></Header>
      <Window></Window>
      <Footer></Footer>
    </>
  );
}

export default App;
