import { Text } from "@mantine/core";
import { IconTrophy } from "@tabler/icons-react";
import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolio";
import classes from "./AwardsSection.module.css";

export function AwardsSection() {
  const { awards, education } = portfolioData;

  return (
    <section className={classes.section}>
      <div className={classes.inner}>
        <div className={classes.grid}>
          <div className={classes.awardsCol}>
            <Text className={classes.colLabel}>Recognition</Text>
            {awards.map((award, i) => (
              <motion.div
                key={i}
                className={classes.award}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <IconTrophy size={14} stroke={1.5} className={classes.trophy} />
                <div>
                  <Text className={classes.awardTitle}>{award.title}</Text>
                  <Text className={classes.awardDesc}>{award.description}</Text>
                </div>
              </motion.div>
            ))}
          </div>

          <div className={classes.divider} />

          <div className={classes.eduCol}>
            <Text className={classes.colLabel}>Education</Text>
            <motion.div
              initial={{ opacity: 0, x: 12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <Text className={classes.degree}>{education.degree}</Text>
              <Text className={classes.institution}>{education.institution}</Text>
              <Text className={classes.eduLocation}>{education.location}</Text>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
