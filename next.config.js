/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: 'akamai',
    path: '',
    experimental: {
      outputStandalone: true,
    },
    domains: [
      "links.papareact.com",
      "platform-lookaside.fbsbx.com",
      "firebasestorage.googleapis.com",
    ]
  }
}

module.exports = nextConfig
