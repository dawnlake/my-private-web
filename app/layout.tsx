import { ClerkProvider } from '@clerk/nextjs';
import Script from 'next/script';
import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <html lang="ko">
        <head>
          <Script
            src="https://cdn.onesignal.com/sdks/webSDK/v16/OneSignalSDK.page.js"
            defer
          />
          <Script id="onesignal-init">
            {`
              window.OneSignalDeferred = window.OneSignalDeferred || [];
              OneSignalDeferred.push(async function(OneSignal) {
                await OneSignal.init({
                  appId: "${process.env.NEXT_PUBLIC_ONESIGNAL_APP_ID}",
                });
              });
            `}
          </Script>
        </head>
        <body className="bg-gray-50 text-gray-900">{children}</body>
      </html>
    </ClerkProvider>
  );
}