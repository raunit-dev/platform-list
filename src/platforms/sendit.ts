import { PlatformRaw, ServiceRaw } from "../types";
import { NetworkId } from '@sonarwatch/portfolio-core';
import { ServiceDefinition } from '../ServiceDefinition';

export const platform: PlatformRaw = {
  id: "sendit",
  name: "Sendit",
  description: "Permissionless Meme Market",
  links: {
    website: "https://sendit.fun/",
    twitter: "https://x.com/senditfun",
    discord: "https://discord.com/invite/senditfun",
    documentation: "https://docs.sendit.fun/",
  },
  tags: ["dapp"],
  isDeprecated: true,
};

const earnContract = {
  name: 'SOL Earn',
  address: 'SenditVXUyY6zjSPYucQTff9rfUkAWnxoijY87FJwGV',
  platformId: platform.id,
};

const tradeContract = {
  name: 'Trade',
  address: 'SenditXmUCHPeV6iyFoMY8dRNB4PofGKTfp52hEWpJx',
  platformId: platform.id,
};

const lendContract = {
  name: 'Memecoin Yielding',
  address: 'Senditho8dTeu9BpXBFfN3b479NyXEbJ26ynw9pPJNY',
  platformId: platform.id,
};

const earnService: ServiceDefinition = {
  id: `${platform.id}-sol-earn`,
  name: 'Sol Earn',
  platformId: platform.id,
  networkId: NetworkId.solana,
  contracts: [earnContract],
};

const tradeService: ServiceDefinition = {
  id: `${platform.id}-trade`,
  name: 'Trade',
  platformId: platform.id,
  networkId: NetworkId.solana,
  contracts: [tradeContract],
};

const lendService: ServiceDefinition = {
  id: `${platform.id}-lend`,
  name: 'Memecoin Yielding',
  platformId: platform.id,
  networkId: NetworkId.solana,
  contracts: [lendContract],
};

export const services: ServiceDefinition[] = [
  earnService,
  tradeService,
  lendService,
];
export default services;
