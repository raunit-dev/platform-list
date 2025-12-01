import { PlatformRaw, ServiceRaw } from "../types";
import { NetworkId } from '@sonarwatch/portfolio-core';
import { ServiceDefinition } from '../ServiceDefinition';
import { jupiterV6Contract } from './jupiter';
import { saveContract } from './save';

export const platform: PlatformRaw = {
  id: "dumpy",
  name: "Dumpy",
  links: {
    website: "https://dumpy.fun/",
  },
  tags: ["dapp", "memecoin"],
};

const lendingContract = {
  name: 'Short Lending',
  address: '3JmCcXAjmBpFzHHuUpgJFfTQEQnAR7K1erNLtWV1g7d9',
  platformId: platform.id,
};

const lendingService: ServiceDefinition = {
  id: `${platform.id}-short-lending`,
  name: 'Short Lending',
  platformId: platform.id,
  networkId: NetworkId.solana,
  contracts: [lendingContract, jupiterV6Contract, saveContract],
};

export const services: ServiceDefinition[] = [lendingService];
export default services;
