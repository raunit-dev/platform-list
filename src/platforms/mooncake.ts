import { PlatformRaw, ServiceRaw } from "../types";
import { NetworkId } from '@sonarwatch/portfolio-core';
import { ServiceDefinition } from '../ServiceDefinition';

export const platform: PlatformRaw = {
  id: "mooncake",
  name: "Mooncake",
  description: "Permissionless Tokenized Perp Market",
  links: {
    website: "https://app.mooncake.fi/",
    documentation: "https://docs.mooncake.fi/",
  },
  tags: ["dapp"],
};

const contract = {
  name: 'Mooncake',
  address: 'mnCk3moW6q9UszVev3C9JjtE4YoviXgLwiLCnUy3c4D',
  platformId: platform.id,
};

export const services: ServiceDefinition[] = [
  {
    id: 'mooncake',
    name: 'Leveraged Tokens',
    platformId: platform.id,
    networkId: NetworkId.solana,
    contracts: [contract],
  },
];
export default services;
