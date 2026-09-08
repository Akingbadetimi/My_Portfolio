import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Oluwatimilehin Akingbade | Android Developer",
  description:
    "Android Developer specializing in Kotlin, Jetpack Compose, Android SDK and REST API integration.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
