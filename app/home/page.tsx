"use client";

import { useTheme } from "next-themes";

export default function Home() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <main className="flex flex-col h-screen bg-zinc-500 dark:bg-zinc-900">
      <button onClick={toggleTheme}>Light theme</button>
      <button onClick={toggleTheme}>Dark theme</button>
    </main>
  );
}
