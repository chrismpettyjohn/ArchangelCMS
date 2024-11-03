import React from 'react';
import Link from 'next/link';
import { HOTEL_NAME } from '@imagine-cms/web';

export function SiteFooter() {
  return (
    <>
      <div style={{ height: 80, width: '100%' }} />
      <div
        style={{
          display: 'flex',
          width: '100%',
          position: 'absolute',
          bottom: 0,
          left: 0,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 8,
          backgroundColor: '#0d2444',
          padding: '10px 0'
        }}
      >
        <h4 style={{ margin: 0 }}>Archangel 2</h4>
      </div>

    </>
  );
}
