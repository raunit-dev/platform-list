import { PlatformRaw, ServiceRaw } from "../types";
import { NetworkId } from '@sonarwatch/portfolio-core';
import { ServiceDefinition } from '../ServiceDefinition';
import { matchAnyInstructionWithPrograms } from '../utils/parseTransaction/matchAnyInstructionWithPrograms';

export const platform: PlatformRaw = {
  id: "1inch",
  name: "1inch",
  tags: ["bridge"],
  links: {
    website: "https://1inch.com/",
    discord: "https://discord.com/invite/1inch",
    twitter: "https://x.com/1inch",
    github: "https://github.com/1inch",
  },
};

const sourceContract = {
  name: 'Cross-Chain Escrow Source',
  address: '4yBT18tBcWqCDK8p3RMXdmZMjHr3wJM7jM6HVYemEqGh',
  platformId: platform.id,
};

const destinationContract = {
  name: 'Cross-Chain Escrow Destination',
  address: 'AMEAktCrii7mVFQKCM9i5hKES4YrV3zFagrawr8BY8pb',
  platformId: platform.id,
};

const whitelistContract = {
  name: 'Whitelist Validator',
  address: '5XYZ3LMWECpC6u7BWLskMMNx4xWbXF44dpDxvkVqkHtA',
  platformId: platform.id,
};

const crossChainService: ServiceDefinition = {
  id: `${platform.id}-escrow`,
  name: 'Cross-Chain Escrow',
  platformId: platform.id,
  networkId: NetworkId.solana,
  matchTransaction: (tx) =>
    matchAnyInstructionWithPrograms(tx, [
      sourceContract.address,
      destinationContract.address,
    ]),
};

const whitelistService: ServiceDefinition = {
  id: `${platform.id}-whitelist`,
  name: 'Whitelist Service',
  platformId: platform.id,
  networkId: NetworkId.solana,
  contracts: [whitelistContract],
};

export const services: ServiceDefinition[] = [
  crossChainService,
  whitelistService,
];
export default services;
