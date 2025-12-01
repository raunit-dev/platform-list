import { PlatformRaw, ServiceRaw } from "../types";
import { NetworkId } from '@sonarwatch/portfolio-core';
import { ServiceDefinition } from '../ServiceDefinition';

export const platform: PlatformRaw = {
  id: "candle",
  name: "Candle",
  links: {
    website: "https://candle.tv",
    twitter: "https://x.com/candledottv",
  },
  tokens: ["A8bcY1eSenMiMy75vgSnp6ShMfWHRHjeM6JxfM1CNDL"],
  tags: ["memecoin", "dapp"],
};

const stakingContract = {
  name: 'Staking',
  address: 'CNDL7Y1SYqvSF34aXayqHjm2JZrHB7BfhhVi3TUan3fe',
  platformId: platform.id,
};

const minterService: ServiceDefinition = {
  id: `${platform.id}-staking`,
  name: 'Staking',
  platformId: platform.id,
  networkId: NetworkId.solana,
  contracts: [stakingContract],
};

export const services: ServiceDefinition[] = [minterService];
export default services;
