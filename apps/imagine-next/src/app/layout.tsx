import 'dotenv/config';
import '../../public/css/bootstrap.min.css';
import '../../public/css/styles.min.css';
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
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Ubuntu" />
        </head>
        <body>
          <ThemeProvider>
            <ImagineContextProviders loadingScreen={<LoadingScreen />}>
              <GameClient />
              {children}
            </ImagineContextProviders>
          </ThemeProvider>
          <script src="/js/jquery.min.js"></script>
          <script src="js/bootstrap.bundle.min.js"></script>
          <script src="/js/script.min.js"></script>
        </body>
      </html>
    </>
  );
}
