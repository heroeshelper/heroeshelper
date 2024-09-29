import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hero line-up | Heroesplanner",
  description: "Try out your next hero layout!",
};

export default function HeroesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
