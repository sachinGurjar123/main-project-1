"use client";

import Content from "@/component/content";
import Footer from "@/component/footer";
import Topbar from "@/component/topbar";
import React from "react";

const page = () => {
  return (
    <>
      <Topbar />
      <Footer />
      <Content />
    </>
  );
};

export default page;
