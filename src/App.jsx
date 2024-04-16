import { Brands, Cta, Navbar } from "./components";
import {
  Blog,
  Features,
  Footer,
  Header,
  Possibility,
  WhatGPT3,
} from "./containers";
import "./sass/app.scss";

const App = () => {
  return (
    <main className="app">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>

      <Brands />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />
    </main>
  );
};

export default App;
