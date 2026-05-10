import { Text, ActionIcon } from "@mantine/core";
import { IconBrandLinkedin, IconBrandGithub, IconMail, IconPhone } from "@tabler/icons-react";
import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolio";
import { SectionHeading } from "./SectionHeading";
import classes from "./ContactSection.module.css";

export function ContactSection() {
  const { personal } = portfolioData;

  return (
    <section className={classes.section} id="contact">
      <div className={classes.inner}>
        <SectionHeading index="05" title="Contact" />

        <motion.div
          className={classes.card}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className={classes.headline}>
            <Text className={classes.headlineText}>
              Let's build something together.
            </Text>
            <Text className={classes.headlineSub}>
              Open to senior frontend, visualization, or full-stack engineering opportunities globally.
            </Text>
          </div>

          <div className={classes.links}>
            <a href={`mailto:${personal.email}`} className={classes.link}>
              <IconMail size={16} stroke={1.5} className={classes.linkIcon} />
              <span>{personal.email}</span>
            </a>
            <a href={`tel:${personal.phone}`} className={classes.link}>
              <IconPhone size={16} stroke={1.5} className={classes.linkIcon} />
              <span>{personal.phone}</span>
            </a>
          </div>

          <div className={classes.social}>
            <ActionIcon
              component="a"
              href={personal.linkedin}
              target="_blank"
              rel="noreferrer"
              variant="outline"
              size="lg"
              aria-label="LinkedIn"
              className={classes.socialBtn}
            >
              <IconBrandLinkedin size={18} stroke={1.5} />
            </ActionIcon>
            <ActionIcon
              component="a"
              href={personal.github}
              target="_blank"
              rel="noreferrer"
              variant="outline"
              size="lg"
              aria-label="GitHub"
              className={classes.socialBtn}
            >
              <IconBrandGithub size={18} stroke={1.5} />
            </ActionIcon>
          </div>
        </motion.div>

        <Text className={classes.footer}>
          © {new Date().getFullYear()} Mayur Patil 
        </Text>
      </div>
    </section>
  );
}
