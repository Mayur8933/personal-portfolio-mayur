import { Text, Group, ActionIcon, Badge } from "@mantine/core";
import { IconBrandLinkedin, IconBrandGithub, IconMail, IconArrowDown } from "@tabler/icons-react";
import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolio";
import classes from "./HeroSection.module.css";

const ease = "easeOut" as const;

export function HeroSection() {
  const { personal } = portfolioData;

  return (
    <section className={classes.hero} id="about">
      <div className={classes.grid}>
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0, ease }}>
          <span className={classes.labelText}>Software Engineer · Frontend &amp; Visualization</span>
        </motion.div>

        <motion.h1 className={classes.name} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1, ease }}>
          {personal.name.split(" ").map((word, i) => (
            <span key={i} className={i === 1 ? classes.nameAccent : ""}>{word}{" "}</span>
          ))}
        </motion.h1>

        <motion.p className={classes.tagline} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2, ease }}>
          Building visualization systems &amp; platform engineering for
          <br className={classes.br} /> drone inspection at scale.
        </motion.p>

        <motion.div className={classes.badges} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.32, ease }}>
          <Badge variant="dot" color="teal" size="sm">Available for opportunities</Badge>
          <Badge variant="outline" size="sm" className={classes.badge}>4+ years exp</Badge>
          <Badge variant="outline" size="sm" className={classes.badge}>deck.gl · React · TypeScript</Badge>
        </motion.div>

        <motion.div className={classes.actions} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.42, ease }}>
          <Group gap={8}>
            <ActionIcon component="a" href={personal.linkedin} target="_blank" rel="noreferrer" variant="subtle" size="lg" aria-label="LinkedIn">
              <IconBrandLinkedin size={20} stroke={1.5} />
            </ActionIcon>
            <ActionIcon component="a" href={personal.github} target="_blank" rel="noreferrer" variant="subtle" size="lg" aria-label="GitHub">
              <IconBrandGithub size={20} stroke={1.5} />
            </ActionIcon>
            <ActionIcon component="a" href={`mailto:${personal.email}`} variant="subtle" size="lg" aria-label="Email">
              <IconMail size={20} stroke={1.5} />
            </ActionIcon>
          </Group>
          <button className={classes.scrollBtn} onClick={() => document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" })} aria-label="Scroll to experience">
            <Text size="xs" c="dimmed">See my work</Text>
            <IconArrowDown size={14} stroke={1.5} style={{ opacity: 0.5 }} />
          </button>
        </motion.div>
      </div>
      <div className={classes.noise} aria-hidden />
      <div className={classes.glow} aria-hidden />
    </section>
  );
}
