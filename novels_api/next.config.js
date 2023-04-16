/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env:{
    DATABASE_URL:`postgres://dreamtwister61814:rbnJqy9fciR4@ep-fancy-credit-369457.us-east-2.aws.neon.tech/neondb`,
  }
}

module.exports = nextConfig
