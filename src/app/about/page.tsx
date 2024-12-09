import AboutUs from "@/components/about-page-components/aboutus";
import BigCompannies from "@/components/about-page-components/companies";
import MeetTeam from "@/components/about-page-components/meetTeam";
import Problem from "@/components/about-page-components/problem";
import Work from "@/components/about-page-components/work";
import Footer from "@/components/shop-page-component/footer";
import Header from "@/components/shop-page-component/header";
import React from "react";

const AboutPage = () => {
  return (
    <>
      <Header />
      <AboutUs />
      <Problem />
      <MeetTeam />
      <BigCompannies />
      <Work />
      <Footer />
    </>
  );
};

export default AboutPage;
