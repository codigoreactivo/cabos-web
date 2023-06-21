/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  images: {
    domains: ['images.pexels.com'],
  },
  exportPathMap: function () {
    return {
      '/': { page: '/' },
      '/menu': { page: '/menu' },
      '/cantina': { page: '/cantina' },
      '/togo': { page: '/togo' },
      '/gallery': { page: '/gallery' },
      // Agrega aquí otras rutas que desees configurar
    };
  },
};
