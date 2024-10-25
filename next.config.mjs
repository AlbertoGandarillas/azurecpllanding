/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "localhost", // Allow images from localhost
      "hwsrv-1132312.hostwindsdns.com", // Example external domain
      // Add any other domains you need here
    ],
  },
  env: {
    DATABASE_URL: process.env.DATABASE_URL,
  },
};
export default nextConfig;
