import { Text } from "@mantine/core";
import { motion } from "framer-motion";
import classes from "./SectionHeading.module.css";

interface SectionHeadingProps {
  index: string;
  title: string;
}

export function SectionHeading({ index, title }: SectionHeadingProps) {
  return (
    <motion.div
      className={classes.heading}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <Text className={classes.index}>{index}</Text>
      <Text className={classes.title}>{title}</Text>
      <div className={classes.rule} />
    </motion.div>
  );
}
