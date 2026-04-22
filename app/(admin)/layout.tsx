import "../globals.css";

export const metadata = {
  title: 'Phytely CMS',
  description: 'Internal content management system for Phytely',
  robots: 'noindex, nofollow',
};

export default function AdminRootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-background">
        {children}
      </body>
    </html>
  );
}