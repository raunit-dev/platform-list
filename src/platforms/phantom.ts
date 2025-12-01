import { PlatformRaw, ServiceRaw } from "../types";
import { NetworkId } from '@sonarwatch/portfolio-core';
import { ServiceDefinition } from '../ServiceDefinition';
import { solanaAssociatedTokenContract } from './solana/contracts';

export const platform: PlatformRaw = {
  id: "phantom",
  name: "Phantom",
  description:
    "Phantom is a non-custodial wallet that allows users to store, send, and receive cryptocurrencies on multiple blockchains, including Solana, Ethereum, and Polygon. It also provides a built-in decentralized exchange (DEX) for trading assets directly from the wallet interface.",
  links: {
    website: "https://phantom.com/",
    twitter: "https://x.com/phantom",
    documentation: "https://phantom.com/learn/guides",
  },
  tags: ["wallet"],
};

const contract = {
  name: 'Assert Owner',
  address: 'DeJBGdMFa1uynnnKiwrVioatTuHmNLpyFKnmB5kaFdzQ',
  platformId: platform.id,
};

export const services: ServiceDefinition[] = [
  {
    id: `${platform.id}-send`,
    name: 'Send',
    platformId: platform.id,
    networkId: NetworkId.solana,
    contracts: [contract, solanaAssociatedTokenContract],
  },
];
export default services;
