// import { Inter } from 'next/font/google';
import { Metadata } from 'next';
import localFont from 'next/font/local';
import Head from 'next/head';
import Script from 'next/script';
import { Footer } from '../../library/components/Footer';
import { Navbar } from '../../library/components/Navbar';
import { menu } from '../data/menu';
import './globals.css';

// const inter = Inter({ subsets: ['latin'] });

// TODO check that Inter is loaded on browser that doesn't support variable fonts
const interVariable = localFont({
    display: 'swap',
    src: [
        {
            path: '../fonts/InterVariable-Italic.woff2',
            style: 'italic',
        },
        {
            path: '../fonts/InterVariable.woff2',
            style: 'normal',
        },
    ],
});

export const metadata: Metadata = {
    metadataBase: new URL('https://capybarun.skovel.com'),
    title: 'CapybaRun 2024',
    applicationName: 'CapybaRun',
    description: '200Km de trail sans assistance au cœur des Vosges',
    generator: 'Skovel.com',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="fr"
            className={`${interVariable.className} antialiased`}
            // className={`${inter.className} ${interVariable.className} antialiased`}
        >
            <Head>
                <title>CapybaRun 2024</title>
                <meta
                    name="description"
                    content="Découvrez la CapybaRun 2024, un trail de 200Km sans assistance au cœur des Vosges. Départ le 24 août 2024."
                    key="desc"
                />
                <link
                    rel="icon"
                    href="/favicon.ico"
                    sizes="any"
                />
                <link
                    rel="icon"
                    href="/icon?<generated>"
                    type="image/<generated>"
                    sizes="<generated>"
                />
                <meta
                    property="og:image"
                    content="<generated>"
                />
                <meta
                    property="og:image:type"
                    content="<generated>"
                />
                <meta
                    property="og:image:width"
                    content="<generated>"
                />
                <meta
                    property="og:image:height"
                    content="<generated>"
                />
                <meta
                    name="twitter:image"
                    content="<generated>"
                />
                <meta
                    name="twitter:image:type"
                    content="<generated>"
                />
                <meta
                    name="twitter:image:width"
                    content="<generated>"
                />
                <meta
                    name="twitter:image:height"
                    content="<generated>"
                />
            </Head>
            <body>
                <div className="background-color-mask">
                    <Navbar menuItems={menu} />
                    {children}
                    <Footer />
                    <Script
                        src="vanilla-tilt.js"
                        strategy="lazyOnload"
                    />
                </div>
            </body>
        </html>
    );
}
