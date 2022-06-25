import React from "react";
import Header from "./Header";
import Stores from "./Stores";
import Footer from "./Footer";
import branches from "../branches";




function App() {
  return (<div>
    <Header />
    {branches.map((store => { return <Stores city={store.city} branch={store.branch} img={store.img} /> }))}

    <Footer />
  </div>
  );
}

export default App;
