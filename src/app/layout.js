
import "./globals.css";

export const metadata = {
  title: '유준범 이력서',
  description: '',
};

export default function RootLayout({ children }) {
  return (
    <html >
       <head>
       <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Jua&display=swap" rel="stylesheet"/>
       </head>
      <body> {children}</body>
    </html>
  );
}
