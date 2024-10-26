import { Redirect } from 'wouter'
import React, { useContext } from 'react';
import { BetaCodeGuardProps } from './BetaCodeGuard.types';
import { sessionContext } from '../../context';
import { BETA_ENABLED } from '../../const';

export function BetaCodeGuard({ children, redirect = true }: BetaCodeGuardProps) {
  const { session } = useContext(sessionContext);

  if (!BETA_ENABLED) {
    return <>{children}</>
  }

  if (!session?.hasBetaCode) {
    return <>{children}</>
  }

  if (redirect) {
    return <Redirect to="/beta-mode-enabled" />
  }

  return null;
}