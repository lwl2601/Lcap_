/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "images.unsplash.com",
      "unsplash.com",
      "static.wixstatic.com",
      "localhost", // Adicione esse domínio para permitir imagens locais
    ],
  },
};

export default nextConfig;
