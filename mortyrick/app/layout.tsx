import type { Metadata } from "next";
import { ColorSchemeScript, MantineProvider, Stack } from "@mantine/core";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import font from "./fonts";
import "@mantine/core/styles.layer.css";
import "./global.css";

export const metadata: Metadata = {
  title: "Morty & Rick API",
  description: "api from https://rickandmortyapi.com/",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript defaultColorScheme="dark" />
      </head>
      <body className={font.className}>
        <MantineProvider defaultColorScheme="dark">
          <Stack mih="100vh">
            <Header />
            <main>{children}</main>
            <Footer />
          </Stack>
        </MantineProvider>
      </body>
    </html>
  );
}
