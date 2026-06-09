'use client';

import { NovaConnectProvider } from '@tuwaio/nova-connect';
import { EVMConnectorsWatcher } from '@tuwaio/nova-connect/evm';
import { SatelliteConnectProvider } from '@tuwaio/nova-connect/satellite';
import { satelliteEVMAdapter } from '@tuwaio/satellite-evm';

import { appEVMChains, wagmiConfig } from '../appConfig';
import { usePulsarStore } from '../hooks/pulsarStoreHook';
import { NovaTransactionsProvider } from './NovaTransactionsProvider.jsx';

export function SatelliteConnectProviders({ children }) {
  const transactionPool = usePulsarStore((state) => state.transactionsPool);
  const getAdapter = usePulsarStore((state) => state.getAdapter);

  return (
    <SatelliteConnectProvider
      adapter={[satelliteEVMAdapter(wagmiConfig, appEVMChains)]}
      autoConnect={true}
    >
      <EVMConnectorsWatcher wagmiConfig={wagmiConfig} />
      <NovaTransactionsProvider />
      <NovaConnectProvider
        appChains={appEVMChains}
        transactionPool={transactionPool}
        pulsarAdapter={getAdapter()}
        withImpersonated
        legal={{
          termsUrl: 'https://www.google.com/', // TODO: just for test
          privacyUrl: 'https://www.google.com/', // TODO: just for test
        }}
      >
        {children}
      </NovaConnectProvider>
    </SatelliteConnectProvider>
  );
}
