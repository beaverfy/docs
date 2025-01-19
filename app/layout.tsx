import { Footer, Layout, Navbar } from "nextra-theme-docs";
import { Head } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import "@/global.scss";
import "material-symbols";
import "nextra-theme-docs/style.css";
import { ReactNode } from "react";

export const metadata = {
  // Define your metadata here
  // For more information on metadata API, see: https://nextjs.org/docs/app/building-your-application/optimizing/metadata
};

// const banner = <Banner storageKey="some-key">Nextra 4.0 is released 🎉</Banner>;
const navbar = (
  <Navbar
    chatLink="https://discord.gg/3u2bWnzg3x"
    chatIcon={
      <svg width="24" height="24" viewBox="0 0 127.14 96.36">
        <path
          fill="currentColor"
          d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z"
        />
      </svg>
    }
    logo={
      <>
        <img
          src="/icon_rounded.png"
          width="20"
          alt="Beaverfy Icon (a beaver on a gradient background)"
          style={{ marginRight: "10px" }}
        />
        <span>Beaverfy</span>
        <div
          style={{
            gap: "8px",
            display: "flex",
            flexDirection: "row",
            paddingLeft: 15,
          }}
        >
          <div
            style={{
              backgroundColor: "#102a4c",
              borderRadius: 4,
            }}
          >
            <div style={{ padding: 5 }}>
              <svg
                style={{ width: "1rem", height: "1rem" }}
                viewBox="0 0 16 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.477 12.0001H7.17725V2.91919H14.477C14.8606 2.91919 15.1716 3.23015 15.1716 3.61374V11.3055C15.1716 11.6891 14.8606 12.0001 14.477 12.0001Z"
                  fill="hsl(211, 100%, 43.2%)"
                ></path>
                <path
                  d="M1.1432 12.0001H7.60645V2.91919H1.1432C0.759611 2.91919 0.448652 3.23015 0.448652 3.61374V11.3055C0.448652 11.6891 0.759611 12.0001 1.1432 12.0001Z"
                  fill="hsl(211, 100%, 43.2%)"
                ></path>
                <path
                  d="M7.44238 2.75447V11.2081C6.25791 10.0362 1.9577 10.2382 1.9577 10.2382V0.893055C1.9577 0.893055 5.71355 0.264309 7.44238 2.75447Z"
                  fill="hsl(208, 77.5%, 76.9%)"
                ></path>
                <path
                  d="M8.19653 2.75447V11.2081C9.38101 10.0362 13.6812 10.2382 13.6812 10.2382V0.893055C13.6812 0.893055 9.92537 0.264309 8.19653 2.75447Z"
                  fill="hsl(208, 77.5%, 76.9%)"
                ></path>
              </svg>
            </div>
          </div>
          <span>Docs</span>
        </div>
      </>
    }
    // ... Your additional navbar options
  />
);
const footer = <Footer>by beaverfy 🦫</Footer>;

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html
      // Not required, but good for SEO
      lang="en"
      // Required to be set
      dir="ltr"
      // Suggested by `next-themes` package https://github.com/pacocoursey/next-themes#with-app
      suppressHydrationWarning
    >
      <Head
      // ... Your additional head options
      >
        {/* Your additional tags should be passed as `children` of `<Head>` element */}
      </Head>
      <body>
        <Layout
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/beaverfy/docs/tree/main"
          footer={footer}
          // ... Your additional layout options
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}
