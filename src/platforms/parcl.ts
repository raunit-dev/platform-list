import { PlatformRaw, ServiceRaw } from "../types";
import { NetworkId } from '@sonarwatch/portfolio-core';
import { ServiceDefinition } from '../ServiceDefinition';

export const platform: PlatformRaw = {
  id: "parcl",
  name: "Parcl",
  description: "Making investing in real estate faster, simpler, and smarter. ",
  defiLlamaId: "parent#parcl",
  links: {
    website: "https://app.parcl.co/",
    discord: "https://discord.gg/parcl",
    twitter: "https://twitter.com/Parcl",
    github: "https://github.com/ParclFinance",
    documentation: "https://docs.parcl.co/",
  },
  tokens: ["4LLbsb5ReP3yEtYzmXewyGjcir5uXtKFURtaEUVC2AHs"],
  tags: ["dapp"],
};

const mainContract = {
  name: 'Liquidity & Trading',
  address: '3parcLrT7WnXAcyPfkCz49oofuuf2guUKkjuFkAhZW8Y',
  platformId: platform.id,
};

const stakingContract = {
  name: 'Parcl Staking',
  address: '2gWf5xLAzZaKX9tQj9vuXsaxTWtzTZDFRn21J3zjNVgu',
  platformId: platform.id,
};
const airdropContract = {
  name: 'Airdrop',
  address: '5tu3xkmLfud5BAwSuQke4WSjoHcQ52SbrPwX9es8j6Ve',
  platformId: platform.id,
};

export const services: ServiceDefinition[] = [
  {
    id: `${platform.id}-main`,
    name: 'Liquidity & Trading',
    platformId: platform.id,
    networkId: NetworkId.solana,
    contracts: [mainContract],
  },
  {
    id: `${platform.id}-staking`,
    name: 'Staking',
    platformId: platform.id,
    networkId: NetworkId.solana,
    contracts: [stakingContract],
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
