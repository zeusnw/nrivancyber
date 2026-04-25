import './globals.css';

export const metadata = {
  title: 'Nirvan Cyber Security Solutions',
  description: 'Security architecture, cloud security and cyber resilience consultancy.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
