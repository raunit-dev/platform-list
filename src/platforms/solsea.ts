import { PlatformRaw, ServiceRaw } from "../types";
import { NetworkId } from '@sonarwatch/portfolio-core';
import { metaplexContract } from './metaplex';
import { ServiceDefinition } from '../ServiceDefinition';

export const platform: PlatformRaw = {
  id: "solsea",
  name: "Solsea",
  isDeprecated: true,
  links: {
    website: "https://solsea.io/",
    twitter: "https://twitter.com/SolSeaNFT",
  },
  tags: ["nft-marketplace"],
};

export const contract = {
  name: 'Marketplace',
  address: '617jbWo616ggkDxvW1Le8pV38XLbVSyWY8ae6QUmGBAU',
  platformId: platform.id,
};

export const solanaStakingService: ServiceDefinition = {
  id: `${platform.id}-marketplace`,
  name: 'Marketplace',
  platformId: platform.id,
  networkId: NetworkId.solana,
  contracts: [contract, metaplexContract],
};

export const services: ServiceDefinition[] = [solanaStakingService];
export default services;
