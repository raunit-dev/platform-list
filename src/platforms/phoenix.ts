import { PlatformRaw, ServiceRaw } from "../types";
import { NetworkId } from '@sonarwatch/portfolio-core';
import { ServiceDefinition } from '../ServiceDefinition';

export const platform: PlatformRaw = {
  id: "phoenix",
  name: "Phoenix",
  description:
    "Phoenix is a decentralized limit order book on Solana, supporting markets for spot assets.",
  defiLlamaId: "phoenix",
  links: {
    website: "https://www.phoenix.trade/",
    discord: "https://discord.gg/ESaTYGzqpd",
    twitter: "https://twitter.com/PhoenixTrade",
    github: "https://github.com/Ellipsis-Labs",
    documentation:
      "https://ellipsis-labs.gitbook.io/phoenix-dex/tRIkEFlLUzWK9uKO3W2V",
  },
  tags: ["dapp"],
};

const contract = {
  name: 'Market',
  address: 'PhoeNiXZ8ByJGLkxNfZRnkUfjvmuYqLR89jjFHGqdXY',
  platformId: platform.id,
};

export const services: ServiceDefinition[] = [
  {
    id: 'phoenix-market',
    name: 'Market',
    platformId: platform.id,
    networkId: NetworkId.solana,
    contracts: [contract],
  },
];
export default services;
