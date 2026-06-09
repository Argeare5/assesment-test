'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { WagmiProvider } from 'wagmi';

import { wagmiConfig } from '../appConfig';
import { SatelliteConnectProviders } from './SatelliteConnectProviders.jsx';

const queryClient = new QueryClient();

export function Providers({ children }) {
  return (
    <WagmiProvider config={wagmiConfig}>
      <QueryClientProvider client={queryClient}>
        <SatelliteConnectProviders>
          {children}
        </SatelliteConnectProviders>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
