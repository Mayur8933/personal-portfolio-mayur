import { useState, useCallback } from "react";
import { portfolioData } from "../data/portfolio";

interface UseAISummaryReturn {
  summary: string;
  loading: boolean;
  error: string | null;
  generate: () => Promise<void>;
  reset: () => void;
}

export function useAISummary(): UseAISummaryReturn {
  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const generate = useCallback(async () => {
    setLoading(true);
    setError(null);
    setSummary("");

    const { personal, skills, experience, awards } = portfolioData;

    const prompt = `You are writing a compelling, first-person professional portfolio summary for ${personal.name}, a ${personal.title} specializing in ${personal.subtitle}.

Here is their background:

EXPERIENCE:
${experience
  .map(
    (e) => `- ${e.title} at ${e.company} (${e.period})
  Key work: ${e.highlights.slice(0, 2).join("; ")}`
  )
  .join("\n")}

SKILLS:
- Languages: ${skills.languages.join(", ")}
- Frontend: ${skills.frontend.join(", ")}
- Visualization: ${skills.visualization.join(", ")}
- Practices: ${skills.practices.join(", ")}

AWARDS: ${awards.map((a) => a.title).join(", ")}

Write a 3-paragraph portfolio summary that:
1. Opens with a punchy, memorable sentence about who they are and what makes them distinctive
2. Highlights their most impressive technical achievements (360° diagnostic module, coordinate transformations, production debugging)
3. Closes with what they're looking for and what they bring to a team

Tone: Confident, specific, human — not generic. Avoid buzzwords. Write as if ${personal.name} is speaking.`;

    try {
      const response = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514",
          max_tokens: 1000,
          messages: [{ role: "user", content: prompt }],
        }),
      });

      if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
      }

      const data = await response.json();
      const text = data.content
        ?.filter((c: { type: string }) => c.type === "text")
        .map((c: { text: string }) => c.text)
        .join("");

      setSummary(text || "No summary generated.");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to generate summary.");
    } finally {
      setLoading(false);
    }
  }, []);

  const reset = useCallback(() => {
    setSummary("");
    setError(null);
  }, []);

  return { summary, loading, error, generate, reset };
}
