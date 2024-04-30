import { ColorSchemeScript, Divider, MantineProvider, Stack } from '@mantine/core';
import font from './fonts';
import theme from './theme';
import Header from './ui/header';
import Footer from './ui/footer';
import './globals.css';
import '@mantine/core/styles.layer.css';

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
        <MantineProvider defaultColorScheme="dark" theme={theme}>
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
