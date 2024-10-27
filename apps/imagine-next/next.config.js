/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  env: {
    WEBSOCKET_HOST: process.env.WEBSOCKET_HOST,
    SITE_NAME: process.env.SITE_NAME,
    NITRO_URL: process.env.NITRO_URL,
    FIGURE_URL: process.env.FIGURE_URL,
    BADGE_URL: process.env.BADGE_URL,
    BADGE_EXT: process.env.BADGE_EXT,
    BETA_ENABLED: process.env.BETA_ENABLED,
    DATE_FORMAT: process.env.DATE_FORMAT,
    DISCORD_WIDGET: process.env.DISCORD_WIDGET,
  }
};

module.exports = nextConfig;
