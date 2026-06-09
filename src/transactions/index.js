import { wagmiConfig } from '../appConfig';
import { increment } from './evm/increment';

export const txActions = {
  incrementEvm: () => increment({ wagmiConfig }),
};
