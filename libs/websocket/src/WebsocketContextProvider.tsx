import React, { useEffect, useMemo } from 'react';
import { WebSocketClient } from './Websocket.client';
import { WebsocketContextProviderProps } from './WebsocketContext.types';
import { websocketContext } from './WebsocketContext';
import { WEBSOCKET_HOST } from '@imagine-cms/web';

export function WebsocketContextProvider({ children, ssoTicket }: WebsocketContextProviderProps) {
  const client = useMemo(() => new WebSocketClient(WEBSOCKET_HOST), [WEBSOCKET_HOST]);

  async function onWebsocketConnected() {
    await client.connect();
    client.startPingInterval();
    if (!ssoTicket) {
      return;
    }
    await client.sendTextEvent('sup', ssoTicket);
  }

  useEffect(() => {
    onWebsocketConnected();
  }, [client]);

  return (
    <websocketContext.Provider value={{ client }}>
      {children}
    </websocketContext.Provider>
  );
}
