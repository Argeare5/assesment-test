import { writeContract } from '@wagmi/core';
import { sepolia } from 'viem/chains';

import { CounterAbi } from '../../abis/CounterAbi.js';
import { COUNTER_ADDRESS } from '../../constants.js';

export async function increment({ wagmiConfig }) {
  if (wagmiConfig) {
    return writeContract(wagmiConfig, {
      abi: CounterAbi,
      address: COUNTER_ADDRESS,
      functionName: 'increment',
      args: [],
      chainId: sepolia.id,
    });
  }
  return undefined;
}
