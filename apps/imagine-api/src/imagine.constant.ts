export function getEnvOrFail(key: string): string {
  const value = process.env[key];

  if (!value) {
    throw new Error(`Missing environment token ${key}`);
  }

  return value;
}

export const IMAGINE_DATABASE_HOST = process.env.DATABASE_HOST;
export const IMAGINE_DATABASE_NAME = process.env.DATABASE_NAME;
export const IMAGINE_DATABASE_PASS = process.env.DATABASE_PASS;
export const IMAGINE_DATABASE_USER = process.env.DATABASE_USER;

export const IMAGINE_GRAPHQL_PLAYGROUND =
  process.env.GRAPHQL_PLAYGROUND === 'true';

export const IMAGINE_JWT_SECRET: string = getEnvOrFail('JWT_SECRET');
export const IMAGINE_JWT_EXPIRATION_IN_MS = Number(
  getEnvOrFail('JWT_EXPIRATION_IN_MS')
);

export const IMAGINE_DEFAULT_CREDITS = Number(getEnvOrFail('DEFAULT_CREDITS'));
export const IMAGINE_DEFAULT_VIP_POINTS = Number(
  getEnvOrFail('DEFAULT_VIP_POINTS')
);
export const IMAGINE_DEFAULT_ACTIVITY_POINTS = Number(
  getEnvOrFail('DEFAULT_ACTIVITY_POINTS')
);
export const IMAGINE_DEFAULT_MOTTO: string = getEnvOrFail('DEFAULT_MOTTO');
export const IMAGINE_DEFAULT_LOOK: string = getEnvOrFail('DEFAULT_LOOK');
export const IMAGINE_DEFAULT_HOME_ROOM = Number(
  getEnvOrFail('DEFAULT_HOME_ROOM')
);
export const IMAGINE_DEFAULT_RANK = Number(getEnvOrFail('DEFAULT_RANK'));

export const SITE_WEB_URL = getEnvOrFail('SITE_WEB_URL');

export const FORGOT_PASSWORD_EXPIRATION_LENGTH_HOURS = Number(
  getEnvOrFail('FORGOT_PASSWORD_EXPIRATION_LENGTH_HOURS')
);

export const GLOBAL_MAX_RESOURCE_LIMIT = 100;

export const EMAILS_INTERNAL_EMAIL_ADDRESS = getEnvOrFail(
  'EMAILS_INTERNAL_EMAIL_ADDRESS'
);
