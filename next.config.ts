import path from "node:path";
import nextra from "nextra";

const withNextra = nextra({
  latex: true,
  search: {
    codeblocks: false,
  },
  defaultShowCopyCode: true,
  contentDirBasePath: "/",
});

export default withNextra({
  reactStrictMode: true,
  // experimental: {
  //   optimizePackageImports: ["@components/icons", "framer-motion"],
  // },
});
