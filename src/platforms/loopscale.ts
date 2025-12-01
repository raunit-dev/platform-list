import { PlatformRaw, ServiceRaw } from "../types";
import { NetworkId } from '@sonarwatch/portfolio-core';
import { ServiceDefinition } from '../ServiceDefinition';

export const platform: PlatformRaw = {
  id: "loopscale",
  name: "Loopscale",
  description:
    "Loopscale is a new way to lend and borrow onchain with the best rates, any asset, and less risk.",
  links: {
    website: "https://app.loopscale.com/",
    discord: "https://discord.gg/loopscale",
    twitter: "https://x.com/LoopscaleLabs",
    github: "https://github.com/bridgesplit",
    documentation: "https://docs.loopscale.com/",
  },
  tags: ["dapp"],
};

const contract = {
  name: 'Loopscale',
  address: '1oopBoJG58DgkUVKkEzKgyG9dvRmpgeEm1AVjoHkF78',
  platformId: 'loopscale',
};

const creditBookContract = {
  name: 'CreditBook',
  address: 'abfcSQac2vK2Pa6UAJb37DzarVxF15bDTdphJzAqYYp',
  platformId: 'loopscale',
};

const service: ServiceDefinition = {
  id: 'loopscale',
  name: 'Loopscale',
  platformId: 'loopscale',
  networkId: NetworkId.solana,
  contracts: [contract],
};

const creditBookService: ServiceDefinition = {
  id: 'loopscale-creditbook',
  name: 'CreditBook',
  platformId: 'loopscale',
  networkId: NetworkId.solana,
  contracts: [creditBookContract],
};

export const services: ServiceDefinition[] = [service, creditBookService];
export default services;
