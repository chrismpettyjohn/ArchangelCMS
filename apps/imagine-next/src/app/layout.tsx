import 'dotenv/config';
import '../../public/css/styles.css';
import type { Metadata } from 'next';
import {
  ImagineContextProviders,
  LoadingScreen,
  ThemeProvider,
} from '@imagine-cms/web';
import { GameClient } from '../site-ui/components/game-client/GameClient';

export const metadata: Metadata = {
  title: 'Imagine',
  description: 'By LeChris',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <html lang="en">
        <head>
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap" rel="stylesheet" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
        </head>
        <body>
          <ThemeProvider>
            <ImagineContextProviders loadingScreen={<LoadingScreen />}>
              <GameClient />
              {children}
            </ImagineContextProviders>
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
