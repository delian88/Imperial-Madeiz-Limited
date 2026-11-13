/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "www.graphic.com.gh" },
      { protocol: "https", hostname: "www.adomonline.com" },
      { protocol: "https", hostname: "blogger.googleusercontent.com" },
      { protocol: "https", hostname: "i.ytimg.com" },
      { protocol: "https", hostname: "sabcltd.com" },
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
  turbopack: {},
};

export default nextConfig;
