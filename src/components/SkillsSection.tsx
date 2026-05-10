import { Text } from "@mantine/core";
import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolio";
import { SectionHeading } from "./SectionHeading";
import classes from "./SkillsSection.module.css";

const skillGroups = [
  { label: "Languages", key: "languages" as const },
  { label: "Frontend", key: "frontend" as const },
  { label: "Visualization", key: "visualization" as const },
  { label: "Testing", key: "testing" as const },
  { label: "Backend & APIs", key: "backend" as const },
  { label: "Platforms", key: "platforms" as const },
  { label: "Practices", key: "practices" as const },
];

export function SkillsSection() {
  const { skills } = portfolioData;

  return (
    <section className={classes.section} id="skills">
      <div className={classes.inner}>
        <SectionHeading index="03" title="Skills" />

        <div className={classes.grid}>
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.key}
              className={classes.group}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
            >
              <Text className={classes.groupLabel}>{group.label}</Text>
              <div className={classes.chips}>
                {skills[group.key].map((skill) => (
                  <span key={skill} className={classes.chip}>{skill}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
