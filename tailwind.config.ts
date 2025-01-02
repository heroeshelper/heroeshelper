import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

const config: Config = {
    content: [
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
        "./index.html",
        "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    ],
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
    plugins: [
        nextui({
            themes: {
                light: {
                    colors: {
                        primary: {
                            DEFAULT: "#0000ab",
                            foreground: "#ffffff",
                        },
                    },
                },
            },
        }),
    ],
};
export default config;
