import React from "react";
import Header from "../layouts/header";
import { Outlet } from "react-router-dom";
import Footer from "../layouts/footer";

const Root = () => {
  return (
    <>
      <div>
        <Header />
      </div>
      <main className="main-conatiner container">
        <Outlet />
      </main>
      {/* <Footer /> */}
    </>
  );
};

export default Root;
