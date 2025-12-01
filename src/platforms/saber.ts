import { PlatformRaw, ServiceRaw } from "../types";
import { NetworkId } from '@sonarwatch/portfolio-core';
import { ServiceDefinition } from '../ServiceDefinition';
import { matchAnyInstructionWithPrograms } from '../utils/parseTransaction/matchAnyInstructionWithPrograms';

export const platform: PlatformRaw = {
  id: "saber",
  name: "Saber",
  defiLlamaId: "saber",
  isDeprecated: true,
  tags: ["dapp"],
  links: {
    website: "https://saberdao.io/",
  },
};

const stableswapContract = {
  name: 'Stable Swap',
  address: 'SSwpkEEcbUqx4vtoEByFjSkhKdCT862DNVb52nZg1UZ',
  platformId: platform.id,
};

const swapContract = {
  name: 'Swap',
  address: 'YAkoNb6HKmSxQN9L8hiBE5tPJRsniSSMzND1boHmZxe',
  platformId: platform.id,
};

const service: ServiceDefinition = {
  id: `${platform.id}-swap`,
  name: 'Swap',
  platformId: platform.id,
  networkId: NetworkId.solana,
  matchTransaction: (tx) =>
    matchAnyInstructionWithPrograms(tx, [
      stableswapContract.address,
      swapContract.address,
    ]),
};

export const services: ServiceDefinition[] = [service];
export default services;
