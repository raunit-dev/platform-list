import { PlatformRaw, ServiceRaw } from "../types";
import { NetworkId } from '@sonarwatch/portfolio-core';
import { ServiceDefinition } from '../ServiceDefinition';

export const platform: PlatformRaw = {
  id: "atrix",
  name: "Atrix",
  defiLlamaId: "atrix",
  tags: ["dapp"],
  links: {
    website: "https://app.atrix.finance/liquidity",
    discord: "https://discord.com/invite/nfyqSEzUsp",
    twitter: "https://x.com/atrixprotocol",
  },
  description:
    "A Serum-based AMM on Solana allowing for permissionless liquidity and farming.",
  isDeprecated: true,
};

const farmContract = {
  name: 'Staking',
  address: 'BLDDrex4ZSWBgPYaaH6CQCzkJXWfzCiiur9cSFJT8t3x',
  platformId: platform.id,
};

const poolContract = {
  name: 'Staking',
  address: 'HvwYjjzPbXWpykgVZhqvvfeeaSraQVnTiQibofaFw9M7',
  platformId: platform.id,
};

const farmService: ServiceDefinition = {
  id: `${platform.id}-farm`,
  name: 'Farms',
  platformId: platform.id,
  networkId: NetworkId.solana,
  contracts: [farmContract],
};

const poolService: ServiceDefinition = {
  id: `${platform.id}-pool`,
  name: 'Pools',
  platformId: platform.id,
  networkId: NetworkId.solana,
  contracts: [poolContract],
};

export const services: ServiceDefinition[] = [poolService, farmService];
export default services;
