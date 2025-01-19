import nextra from "nextra";
import { setupDevPlatform } from "@cloudflare/next-on-pages/next-dev";

const withNextra = nextra({
  latex: true,
  search: {
    codeblocks: false,
  },
  defaultShowCopyCode: true,
  contentDirBasePath: "/",
});

if (process.env.NODE_ENV === "development") {
  await setupDevPlatform();
}

export default withNextra({
  reactStrictMode: true,
  // experimental: {
  //   optimizePackageImports: ["@components/icons", "framer-motion"],
  // },
});
