import { PlatformRaw, ServiceRaw } from "../types";
import { Contract, NetworkId } from '@sonarwatch/portfolio-core';
import { ServiceDefinition } from '../ServiceDefinition';

export const platform: PlatformRaw = {
  id: "oro",
  name: "Oro",
  links: {
    website: "https://app.oro.finance/",
    twitter: "https://x.com/orogoldapp",
  },
  tags: ["dapp"],
};

const stakingContract: Contract = {
  name: `Staking`,
  address: 'stakeZZUzk2LgiiLqufNNyDQuUsn8UTzvCWBkWdYaRH',
  platformId: platform.id,
};

const coreContract: Contract = {
  name: `Core`,
  address: 'iNtiXEFgDNrc6FUt4cFALDe3D8RF3sVnNuKSHwxZRop',
  platformId: platform.id,
};

export const services: ServiceDefinition[] = [
  {
    id: `${platform.id}-staking`,
    name: 'Staking',
    platformId: platform.id,
    networkId: NetworkId.solana,
    contracts: [stakingContract],
  },
  {
    id: `${platform.id}-core`,
    name: 'Core',
    platformId: platform.id,
    networkId: NetworkId.solana,
    contracts: [coreContract],
  },
];
export default services;
