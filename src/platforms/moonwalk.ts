import { PlatformRaw, ServiceRaw } from "../types";
import { Contract, NetworkId } from '@sonarwatch/portfolio-core';
import { ServiceDefinition } from '../ServiceDefinition';

export const platform: PlatformRaw = {
  id: "moonwalk",
  name: "Moonwalk",
  description: "Gamify your Fitness Journey",
  links: {
    website: "https://app.moonwalk.fit/",
    discord: "https://discord.com/invite/jBhgHWUJ9U",
    telegram: "https://t.me/+x0hEQqQP1GpjZGZh",
    twitter: "https://twitter.com/moonwalkfitness",
    documentation: "https://moonwalk.fit/faq",
  },
  tags: ["fitness", "dapp"],
};

const mainContract: Contract = {
  name: `Game`,
  address: 'FitAFk15vtx2PBjfr7QTnefaHRx6HwajRiZMt1DdSSKU',
  platformId: platform.id,
};

const airdropContract: Contract = {
  name: 'Airdrop',
  address: 'FitAFk15vtx2PBjfr7QTnefaHRx6HwajRiZMt1DdSSKU',
  platformId: platform.id,
};

export const services: ServiceDefinition[] = [
  {
    id: `${platform.id}-game`,
    name: 'Game',
    platformId: platform.id,
    networkId: NetworkId.solana,
    contracts: [mainContract],
  },
  {
    id: `${platform.id}-airdrop`,
    name: 'Airdrop',
    platformId: platform.id,
    networkId: NetworkId.solana,
    contracts: [airdropContract],
  },
];

export default services;
