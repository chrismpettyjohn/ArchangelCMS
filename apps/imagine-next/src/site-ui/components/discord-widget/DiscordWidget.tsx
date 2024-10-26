import { DISCORD_WIDGET } from '@imagine-cms/web';
import React from 'react';

export function DiscordWidget() {
  return (
    <>
      {
        DISCORD_WIDGET && (
          <div dangerouslySetInnerHTML={{ __html: DISCORD_WIDGET }} />
        )
      }</>
  )
}