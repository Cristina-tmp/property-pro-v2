/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "i.redd.it",
      "links.papareact.com",
      "jsonkeeper.com",
      "rare-gallery.com",
    ],
  },
};

module.exports = nextConfig;
