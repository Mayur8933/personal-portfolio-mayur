import { ActionIcon, Group, Text, useMantineColorScheme } from "@mantine/core";
import { IconSun, IconMoon, IconCode } from "@tabler/icons-react";
import { useScrollSpy } from "../hooks/useScrollSpy";
import classes from "./NavBar.module.css";

const NAV_ITEMS = [
  { label: "Experience", href: "experience" },
  { label: "Projects", href: "projects" },
  { label: "Skills", href: "skills" },
  { label: "AI Summary", href: "ai-summary" },
  { label: "Contact", href: "contact" },
];

export function NavBar() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const activeId = useScrollSpy(["about", ...NAV_ITEMS.map((n) => n.href)]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className={classes.nav}>
      <Group gap={6} className={classes.brand} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
        <IconCode size={18} stroke={1.5} />
        <Text fw={500} size="sm" className={classes.brandText}>
          mayur.dev
        </Text>
      </Group>

      <Group gap={4} className={classes.links}>
        {NAV_ITEMS.map((item) => (
          <button
            key={item.href}
            className={`${classes.link} ${activeId === item.href ? classes.active : ""}`}
            onClick={() => scrollTo(item.href)}
          >
            {item.label}
          </button>
        ))}
      </Group>

      <ActionIcon
        variant="subtle"
        size="md"
        onClick={() => toggleColorScheme()}
        aria-label="Toggle theme"
        className={classes.themeToggle}
      >
        {colorScheme === "dark" ? <IconSun size={16} stroke={1.5} /> : <IconMoon size={16} stroke={1.5} />}
      </ActionIcon>
    </nav>
  );
}
