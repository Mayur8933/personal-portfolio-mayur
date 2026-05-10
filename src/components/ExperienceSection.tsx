import { Badge, Text } from "@mantine/core";
import { IconMapPin } from "@tabler/icons-react";
import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolio";
import { SectionHeading } from "./SectionHeading";
import classes from "./ExperienceSection.module.css";

export function ExperienceSection() {
  const { experience } = portfolioData;

  return (
    <section className={classes.section} id="experience">
      <div className={classes.inner}>
        <SectionHeading index="01" title="Experience" />

        <div className={classes.timeline}>
          {experience.map((job, i) => (
            <motion.div
              key={i}
              className={classes.item}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className={classes.dot}>
                <div className={`${classes.dotInner} ${job.current ? classes.dotActive : ""}`} />
              </div>

              <div className={classes.content}>
                <div className={classes.header}>
                  <div>
                    <Text className={classes.jobTitle}>{job.title}</Text>
                    <Text className={classes.company}>{job.company}</Text>
                  </div>
                  <div className={classes.meta}>
                    <Text className={classes.period}>{job.period}</Text>
                    <div className={classes.location}>
                      <IconMapPin size={11} stroke={1.5} />
                      <Text size="xs" c="dimmed">{job.location}</Text>
                    </div>
                  </div>
                </div>

                {job.current && (
                  <Badge variant="dot" color="teal" size="xs" mb="sm">Current role</Badge>
                )}

                <ul className={classes.highlights}>
                  {job.highlights.map((h, j) => (
                    <li key={j} className={classes.highlight}>{h}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
