import React from 'react';
import Link from 'next/link';
import { HOTEL_NAME } from '@imagine-cms/web';

export function SiteFooter() {
  return (
    <div className="footer-basic">
      <footer>
        <ul className="list-inline">
          <li className="list-inline-item">
            <Link href="/about">Archangel 2</Link>
          </li>
        </ul>
        <p className="copyright">&copy; {HOTEL_NAME}</p>
      </footer>
    </div>
  );
}
