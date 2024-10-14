/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "github.com",
        pathname: "/**", // Allows all paths under the domain
      },
    ],
  },
};

export default nextConfig;
