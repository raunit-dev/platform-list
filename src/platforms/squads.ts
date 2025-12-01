import { PlatformRaw, ServiceRaw } from "../types";
import { NetworkId } from '@sonarwatch/portfolio-core';
import { ServiceDefinition } from '../ServiceDefinition';

export const platform: PlatformRaw = {
  id: "squads",
  name: "Squads",
  tags: ["tool", "dapp"],
  links: {
    website: "https://squads.so/",
    twitter: "https://x.com/SquadsProtocol",
    github: "https://github.com/Squads-Protocol",
    documentation: "https://docs.squads.so/main/basics/welcome-to-squads",
  },
};

const contract = {
  name: 'Multisig V4',
  address: 'SQDS4ep65T869zMMBKyuUq6aD6EgTu8psMjkvj52pCf',
  platformId: platform.id,
};

const service: ServiceDefinition = {
  id: `${platform.id}-multisig`,
  name: 'Multisig',
  platformId: platform.id,
  networkId: NetworkId.solana,
  contracts: [contract],
};

export const services: ServiceDefinition[] = [service];
export default services;
