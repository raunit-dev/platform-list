import { PlatformRaw, ServiceRaw } from "../types";
import { NetworkId } from '@sonarwatch/portfolio-core';
import { ServiceDefinition } from '../ServiceDefinition';

export const platform: PlatformRaw = {
  id: "accessprotocol",
  name: "Access Protocol",
  description:
    "Access is a content and service monetization protocol offering incentivized subscriptions by staking the native ACS token.",
  defiLlamaId: "access-protocol",
  tags: ["dapp"],
  links: {
    website: "https://hub.accessprotocol.co",
    discord: "https://discord.com/invite/access-protocol-1001837380044587118",
    twitter: "https://twitter.com/AccessProtocol",
    github: "https://github.com/Access-Labs-Inc",
    documentation: "https://docs.accessprotocol.co/guide",
  },
  tokens: ["5MAYDfq5yxtudAhtfyuMBuHZjgAbaS9tbEyEQYAhDS5y"],
};

const contract = {
  name: 'Staking',
  address: '6HW8dXjtiTGkD4jzXs7igdFmZExPpmwUrRN5195xGup',
  platformId: platform.id,
};

const service: ServiceDefinition = {
  id: `${platform.id}-staking`,
  name: 'Staking',
  platformId: platform.id,
  networkId: NetworkId.solana,
  contracts: [contract],
};

export const services: ServiceDefinition[] = [service];
export default services;

