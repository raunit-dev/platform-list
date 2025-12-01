import { PlatformRaw, ServiceRaw } from "../types";
import { NetworkId } from '@sonarwatch/portfolio-core';
import { ParsedTransactionWithMeta } from '@solana/web3.js';
import { ServiceDefinition } from '../ServiceDefinition';
import { jupiterV6Contract } from './jupiter';

export const platform: PlatformRaw = {
  id: "pluto",
  name: "Pluto",
  description: "Leveraged Yield Machine on Solana",
  defiLlamaId: "pluto",
  tags: ["dapp"],
  links: {
    website: "https://pluto.so/",
    discord: "https://discord.com/invite/plutoleverage",
    telegram: "https://t.me/PlutoLeverage",
    twitter: "https://x.com/plutoleverage",
    github: "https://github.com/plutoleverage/",
    documentation: "https://docs.pluto.so/",
  },
};

const contract = {
  name: 'Leverage Machine',
  address: '5UFYdXHgXLMsDzHyv6pQW9zv3fNkRSNqHwhR7UPnkhzy',
  platformId: platform.id,
};

const contractV2 = {
  name: 'Leverage Machine V2',
  address: 'PLUtoojGogHkKWXH4ZY3SiNYhsiE5CEoMJLPargRoQ9',
  platformId: platform.id,
};

const service: ServiceDefinition = {
  id: `${platform.id}-leverage`,
  name: 'Leverage',
  platformId: platform.id,
  networkId: NetworkId.solana,
  matchTransaction: (txn: ParsedTransactionWithMeta, contracts: string[]) =>
    contracts.some((c) => [contract.address, contractV2.address].includes(c)),
};

const withJupiterSwapService: ServiceDefinition = {
  id: `${platform.id}-leverage-with-jupiter-swap`,
  name: 'Leverage',
  platformId: platform.id,
  networkId: NetworkId.solana,
  contracts: [contract, jupiterV6Contract],
};
const v2WithJupiterSwapService: ServiceDefinition = {
  id: `${platform.id}-leverage-v2-with-jupiter-swap`,
  name: 'Leverage',
  platformId: platform.id,
  networkId: NetworkId.solana,
  contracts: [contractV2, jupiterV6Contract],
};

export const services: ServiceDefinition[] = [
  service,
  withJupiterSwapService,
  v2WithJupiterSwapService,
];
export default services;
