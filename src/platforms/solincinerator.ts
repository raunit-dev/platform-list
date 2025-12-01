import { PlatformRaw, ServiceRaw } from "../types";
import { NetworkId } from '@sonarwatch/portfolio-core';
import { ServiceDefinition } from '../ServiceDefinition';
import { matchAnyInstructionWithPrograms } from '../utils/parseTransaction/matchAnyInstructionWithPrograms';

export const platform: PlatformRaw = {
  id: "solincinerator",
  name: "Sol Incinerator",
  description: "Burn any unwanted NFTs or tokens and reclaim the rent",
  links: {
    website: "https://sol-incinerator.com/",
    twitter: "https://x.com/solincinerator",
    discord: "https://discord.gg/solslugs",
  },
  tags: ["tool", "dapp"],
};

const contract = {
  name: 'Incinerator',
  address: 'F6fmDVCQfvnEq2KR8hhfZSEczfM9JK9fWbCsYJNbTGn7',
  platformId: platform.id,
};

const service: ServiceDefinition = {
  id: `${platform.id}-cleanup`,
  name: 'Cleanup',
  platformId: platform.id,
  networkId: NetworkId.solana,
  matchTransaction: (tx) =>
    matchAnyInstructionWithPrograms(tx, [contract.address]),
};

export const services: ServiceDefinition[] = [service];
export default services;
