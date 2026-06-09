'use client';

import { createBoundedUseStore, createPulsarStore } from '@tuwaio/pulsar-core';
import { pulsarEvmAdapter } from '@tuwaio/pulsar-evm';

import { appEVMChains, wagmiConfig } from '../appConfig';

const storageName = 'transactions-tracking-storage-test';

export const usePulsarStore = createBoundedUseStore(
  createPulsarStore({
    name: storageName,
    adapter: [
      pulsarEvmAdapter(wagmiConfig, appEVMChains),
    ],
  }),
);
