import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./header/header";
import Main from "./main/main";
import Footer from "./footer/footer";
import NavBar from "./navbar/navbar";

function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
