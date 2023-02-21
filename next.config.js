/** @type {import('next').NextConfig} */
const withTM = require('next-transpile-modules')(['react-syntax-highlighter']);

const nextConfig = {
    reactStrictMode: true,
    images: {
      domains: ['images.unsplash.com', 'hydeparkwinterwonderland.com', 'wembleypark.com']
    }
  }
  
module.exports = withTM({...nextConfig})
  