import { Box } from "@material-ui/core";
import React from "react";
import { NavigationBar } from "../../components/navigation";
import { Sections, SECTION_ORDER } from "../../components/section";
import { About } from "./about";
import { Contact } from "./contact";
import { Footer } from "./footer";
import { Hero } from "./hero";
import { Projects } from "./projects";

export const LandingPage = () => {
  return (
    <Box>
      <NavigationBar />

      <Hero />

      {SECTION_ORDER.map((section) => {
        switch (section) {
          case Sections.About:
            return <About />;
          case Sections.Contact:
            return <Contact />;
          case Sections.Projects:
            return <Projects />;
        }
      })}

      <Footer />
    </Box>
  );
};
