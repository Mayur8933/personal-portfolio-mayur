import { useState, useCallback } from "react";
import { HARDCODED_SUMMARY } from "./constants";

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

    // Fake the AI "thinking" delay
    await new Promise((resolve) => setTimeout(resolve, 2200));

    setSummary(HARDCODED_SUMMARY);
    setLoading(false);
  }, []);

  const reset = useCallback(() => {
    setSummary("");
    setError(null);
  }, []);

  return { summary, loading, error, generate, reset };
}