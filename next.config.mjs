/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    removeConsole: true,
    styledComponents: {
      minify: true,
    },
  },
};
export default nextConfig;
