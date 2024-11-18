/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["gsap"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "github.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "avatar.vercel.sh",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
