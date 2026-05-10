import { Badge, Text } from "@mantine/core";
import { IconSparkles } from "@tabler/icons-react";
import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolio";
import { SectionHeading } from "./SectionHeading";
import classes from "./ProjectsSection.module.css";

export function ProjectsSection() {
  const { projects } = portfolioData;

  return (
    <section className={classes.section} id="projects">
      <div className={classes.inner}>
        <SectionHeading index="02" title="Projects" />

        <div className={classes.grid}>
          {projects.map((project, i) => (
            <motion.div
              key={i}
              className={`${classes.card} ${project.highlight ? classes.cardHighlight : ""}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.09, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
            >
              {project.highlight && (
                <div className={classes.highlightBadge}>
                  <IconSparkles size={11} stroke={1.5} />
                  <span>Featured</span>
                </div>
              )}
              <Text className={classes.projectTitle}>{project.title}</Text>
              <Text className={classes.projectDesc}>{project.description}</Text>
              <div className={classes.tags}>
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="outline" size="xs" className={classes.tag}>
                    {tag}
                  </Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
