import { PlatformRaw, ServiceRaw } from "../types";
import { NetworkId } from '@sonarwatch/portfolio-core';
import { bubblegumContract } from './metaplex';
import { ServiceDefinition } from '../ServiceDefinition';

export const platform: PlatformRaw = {
  id: "underdog",
  name: "Underdog",
  links: {
    website: "https://mint.underdogprotocol.com/",
    twitter: "https://x.com/BackAnUnderdog",
  },
  tags: ["tool", "dapp"],
};

const mainContract = {
  name: 'Core',
  address: 'updg8JyjrmFE2h3d71p71zRXDR8q4C6Up8dDoeq3LTM',
  platformId: platform.id,
};

const service: ServiceDefinition = {
  id: `${platform.id}-core`,
  name: 'Core',
  platformId: platform.id,
  networkId: NetworkId.solana,
  contracts: [mainContract],
};

const metadataService: ServiceDefinition = {
  id: `${platform.id}-metadata`,
  name: 'Metadata',
  platformId: platform.id,
  networkId: NetworkId.solana,
  contracts: [bubblegumContract, mainContract],
};
export const services: ServiceDefinition[] = [service, metadataService];
export default services;
