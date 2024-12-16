import About from "@/components/about-page-components/about";
import Companies from "@/components/about-page-components/companies";
import OurTeam from "@/components/about-page-components/meetTeam";
import Problem from "@/components/about-page-components/problem";
import Work from "@/components/about-page-components/work";
import Footer from "@/components/shop-page-component/footer";
import Header from "@/components/shop-page-component/header";
import React from "react";

const AboutPage = () => {
  return (
    <div>
      <Header />
      <About />
      <Problem />
      <OurTeam />
      <Companies />
      <Work />
      <Footer />
    </div>
  );
};

export default AboutPage;