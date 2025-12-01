import { PlatformRaw, ServiceRaw } from "../types";
import { NetworkId } from '@sonarwatch/portfolio-core';
import { ServiceDefinition } from '../ServiceDefinition';

export const platform: PlatformRaw = {
  id: "spice",
  name: "Spice",
  description:
    "Token for Governance & Currency in the Lowlife Forms Gameverse.",
  links: {
    website: "https://staking.spicecoin.com/",
    twitter: "https://x.com/spiceonsol",
  },
  tags: ["dapp"],
};

const stakingContract = {
  name: 'Staking',
  address: 'DQtwoVmEgaGe3hCuefpnBR1rjtLJLJ7sKjVZbUEsSseC',
  platformId: 'spice',
};

const stakingService: ServiceDefinition = {
  id: 'spice-staking',
  name: 'Spice',
  platformId: 'spice',
  networkId: NetworkId.solana,
  contracts: [stakingContract],
};

export const services: ServiceDefinition[] = [stakingService];
export default services;
