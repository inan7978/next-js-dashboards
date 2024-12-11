import "@/app/ui/global.css";
import { inter } from "@/app/ui/fonts";

// the layout file is the best way to create a shared layout that all pages in your application can use.

export default function RootLayout({
  // this is just TS syntax for RootLayout({children}) in JS syntax, where children is passed as prop
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* { adding the inter to the body element will apply the font throughout the application} */}
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
