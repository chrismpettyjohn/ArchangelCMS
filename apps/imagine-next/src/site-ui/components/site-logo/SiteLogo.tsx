import React from 'react';
import {SITE_NAME} from '@imagine-cms/web';
import Link from 'next/link';

export function SiteLogo() {
  return (
    <Link href="/me">
      <h1>{SITE_NAME}</h1>
    </Link>
  );
}
