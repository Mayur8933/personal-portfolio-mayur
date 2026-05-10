import "@mantine/core/styles.css";
import "@fontsource/dm-sans/400.css";
import "@fontsource/playfair-display/400.css";
import "@fontsource/playfair-display/400-italic.css";

import { MantineProvider } from "@mantine/core";
import { NavBar } from "./components/NavBar";
import { HeroSection } from "./components/HeroSection";
import { ExperienceSection } from "./components/ExperienceSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { SkillsSection } from "./components/SkillsSection";
import { AISummarySection } from "./components/AISummarySection";
import { AwardsSection } from "./components/AwardsSection";
import { ContactSection } from "./components/ContactSection";
import { theme } from "./theme";

export default function App() {
  return (
    <MantineProvider theme={theme} defaultColorScheme="dark">
      <NavBar />
      <main>
        <HeroSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <AISummarySection />
        <AwardsSection />
        <ContactSection />
      </main>
    </MantineProvider>
  );
}
