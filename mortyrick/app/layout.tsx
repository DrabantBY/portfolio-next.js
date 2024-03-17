import { ColorSchemeScript, MantineProvider, Stack } from "@mantine/core";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

import font from "./fonts";

import "./global.css";

import "@mantine/core/styles.layer.css";

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
