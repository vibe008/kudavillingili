module.exports = {
async rewrites() {
        return [
          {
            source: '/mediakit',
            destination: '/mediakit/index.html'
          },
          {
            source: '/360',
            destination: '/360/index.html'
          },
          {
            source: '/mediakit/map',
            destination: '/mediakit/map/index.html'
          },
        ]
  },

  reactStrictMode: false,
  images: {
    domains: ['kudavillingili.sgp1.cdn.digitaloceanspaces.com', 'kudavillingili-maldives.ams3.digitaloceanspaces.com'],
  }
}
