export default function RootLayout({children}) {
    return (
        <html lang="cs" translate="no" suppressHydrationWarning={true}>
        <body>{children}</body>
        </html>
    );
}