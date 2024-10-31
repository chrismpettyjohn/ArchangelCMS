import assert from 'assert';

assert(process.env.WEBSOCKET_HOST, 'WEBSOCKET_HOST is required');
export const WEBSOCKET_HOST = process.env.WEBSOCKET_HOST;

assert(process.env.HOTEL_NAME, 'HOTEL_NAME is required');
assert(process.env.NITRO_URL, 'NITRO_URL is required');
assert(process.env.FIGURE_URL, 'FIGURE_URL is required');
assert(process.env.BADGE_URL, 'BADGE_URL is required');
assert(process.env.BADGE_EXT, 'BADGE_EXT is required');
export const HOTEL_NAME = process.env.HOTEL_NAME;
export const NITRO_URL = process.env.NITRO_URL;
export const FIGURE_URL = process.env.FIGURE_URL;
export const BADGE_URL = process.env.BADGE_URL;
export const BADGE_EXT = process.env.BADGE_EXT;

assert(process.env.BETA_ENABLED, 'BETA_ENABLED is required');
export const BETA_ENABLED = process.env.BETA_ENABLED === 'true';

assert(process.env.DATE_FORMAT, 'DATE_FORMAT is required');
export const DATE_FORMAT = process.env.DATE_FORMAT

export const DISCORD_WIDGET: string | undefined = process.env.DISCORD_WIDGET