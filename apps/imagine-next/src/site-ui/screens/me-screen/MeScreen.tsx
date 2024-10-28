'use client';
import React, { useContext } from 'react';
import { sessionContext, SITE_NAME } from '@imagine-cms/web';
import {
  ButtonDanger,
  ButtonSuccess,
} from '../../components/button/Button.remix';
import Link from 'next/link';

export function MeScreen() {
  const { session } = useContext(sessionContext);

  return (
    <>
      welcome back
    </>
  )
}
