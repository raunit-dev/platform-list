import { PlatformRaw, ServiceRaw } from "../types";
import { NetworkId } from '@sonarwatch/portfolio-core';
import { vestingContract } from './streamflow';
import { ServiceDefinition } from '../ServiceDefinition';

export const platform: PlatformRaw = {
  id: "madlads",
  name: "MadLads",
  links: {
    website: "https://www.madlads.com/",
    twitter: "https://x.com/MadLads",
    discord: "https://discord.gg/madlads",
  },
  tags: ["nft-collection"],
};

const solboundContract = {
  name: 'SolBound',
  address: '7DkjPwuKxvz6Viiawtbmb4CqnMKP6eGb1WqYas1airUS',
  platformId: platform.id,
};

const service: ServiceDefinition = {
  id: `${platform.id}-launch`,
  name: 'W Claim',
  platformId: platform.id,
  networkId: NetworkId.solana,
  contracts: [solboundContract, vestingContract],
};

export const services: ServiceDefinition[] = [service];
export default services;
