import React from "react";
import Trust from "../components/Landing/Trust";
import Event from "../components/Landing/Event";
import CreateEvent from "../components/Landing/CreateEvent";
import Device from "../components/Landing/Device";
import Layout from "../layout/Layout";
import HeroMain from "../components/Landing/HeroMain";
import Footer from "../components/Footer";

const Landing = () => {
  return (
    <Layout>
      <HeroMain />
      <Trust />
      <Event />
      <CreateEvent />
      <Device />
      <Footer />
    </Layout>
  );
};

export default Landing;
