/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "localhost", // Allow images from localhost
      "hwsrv-1132312.hostwindsdns.com", // Example external domain
      // Add any other domains you need here
    ],
  },
};
export default nextConfig;
