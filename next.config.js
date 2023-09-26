/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    domains: ["localhost"],
    // Optional: Specify additional image formats
  },
  async headers() {
    return [
      {
        source: "/favicon.ico",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=604800, immutable",
          },
        ],
      },
    ];
  },
};
