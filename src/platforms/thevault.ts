import { PlatformRaw, ServiceRaw } from "../types";
import { NetworkId } from '@sonarwatch/portfolio-core';
import { ServiceDefinition } from '../ServiceDefinition';

export const platform: PlatformRaw = {
  id: "thevault",
  name: "The Vault",
  defiLlamaId: "the-vault",
  links: {
    website: "https://thevault.finance/",
    discord: "https://discord.gg/aQC53CGgQY",
    twitter: "https://twitter.com/thevaultfinance",
    github: "https://github.com/SolanaVault",
    documentation: "https://docs.thevault.finance/",
  },
  tokens: ["vSoLxydx6akxyMD9XEcPvGYNGq6Nn66oqVb3UkGkei7"],
  tags: ["dapp"],
};

const unstakePoolContract = {
  name: 'Unstake Pool',
  address: '2rU1oCHtQ7WJUvy15tKtFvxdYNNSc3id7AzUcjeFSddo',
  platformId: platform.id,
};

export const services: ServiceDefinition[] = [
  {
    id: `${platform.id}-unstake-pool`,
    name: 'Unstake Pool',
    platformId: platform.id,
    networkId: NetworkId.solana,
    contracts: [unstakePoolContract],
  },
];
export default services;
