import React from 'react';
import {HOTEL_NAME} from '@imagine-cms/web';
import Link from 'next/link';

export function SiteLogo() {
  return (
    <Link href="/me">
      <h1>{HOTEL_NAME}</h1>
    </Link>
  );
}
