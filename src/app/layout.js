// app/layout.js

import 'bootstrap/dist/css/bootstrap.min.css';

export const metadata = {
  title: "Vincent's Portfolio",
  description: "A professional portfolio built with Next.js and Bootstrap",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}



