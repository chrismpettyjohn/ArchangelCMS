'use client';
import React from 'react';
import { Global, css, useTheme } from '@emotion/react'

export function SiteBody() {
  const theme = useTheme();
  return (
    <Global
      styles={css`
        body {
          background-color: #134a71;
        }
      `}
    />
  )
}