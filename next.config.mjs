/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["portfolio-image-store.s3.ap-south-1.amazonaws.com"],
    loader: "default",
    dangerouslyAllowSVG: true,
  },
};

export default nextConfig;
