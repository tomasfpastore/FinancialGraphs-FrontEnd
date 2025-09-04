import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Financial Graph",
  description: "Financial Graph",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/favicons/light.png",
        href: "/favicons/light.png",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/favicons/dark.png",
        href: "/favicons/dark.png",
      },
    ],
  },
};