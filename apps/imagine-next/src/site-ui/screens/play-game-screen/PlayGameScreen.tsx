'use client';
import {useContext, useEffect} from 'react';
import {themeContext} from '@imagine-cms/web';
import {usePathname} from 'next/navigation';

export function PlayGameScreen() {
  const path = usePathname();
  const {setTheme, showClient} = useContext(themeContext);

  useEffect(() => {
    console.log({path});
    if (path === '/play' && !showClient) {
      setTheme({showClient: true});
    }

    if (path !== '/play' && showClient) {
      setTheme({showClient: false});
    }
  }, [path, showClient]);

  return null;
}
