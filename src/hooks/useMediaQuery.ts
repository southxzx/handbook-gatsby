import { useState, useEffect } from "react";

export default function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);

    const handleChange = (event: any) => {
      setMatches(event.matches);
    };

    handleChange(mediaQuery); // Initial check

    mediaQuery.addListener(handleChange); // Listen for changes

    return () => {
      mediaQuery.removeListener(handleChange); // Clean up listener
    };
  }, [query]);

  return matches;
}
