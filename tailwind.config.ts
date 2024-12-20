import type { Config } from "tailwindcss";

const config: Config = {
    content: ["./src/**/*.{js,ts,jsx,tsx,mdx}", "./index.html"],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
            },
            listStyleType: {
                disclosureClosed: "disclosure-closed",
            },
        },
    },
    safelist: [{ pattern: /^cursor-/ }],
    plugins: [],
};
export default config;
