/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    domains: ['placekitten.com'],
    formats: ['image/avif', 'image/webp'],
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/dashboard',
        permanent: false,
      },
    ]
  },
}
