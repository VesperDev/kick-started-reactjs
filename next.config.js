module.exports = {
  swcMinify: true,
  reactStrictMode: false,
  async redirects () {
    return [
      {
        source: '/',
        destination: '/login',
        permanent: true
      }
    ]
  }
}
