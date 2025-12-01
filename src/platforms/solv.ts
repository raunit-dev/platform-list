import { PlatformRaw, ServiceRaw } from "../types";
import { NetworkId } from '@sonarwatch/portfolio-core';
import { ServiceDefinition } from '../ServiceDefinition';

export const platform: PlatformRaw = {
  id: "solv",
  name: "Solv",
  tags: ["dapp"],
  links: {
    website: "https://solv.finance/",
    twitter: "https://x.com/SolvProtocol",
    documentation: "https://docs.solv.finance/",
    github: "https://github.com/solv-finance",
  },
  tokens: [
    "soLvpPEDkN8D1Wgjezrb1oj4WjGtj17vynGm6t3jah6",
    "SoLvHDFVstC74Jr9eNLTDoG4goSUsn1RENmjNtFKZvW",
  ],
};

export const contract = {
  name: 'Main',
  address: 'soLv1S6GsAEVEnXmVY3oz6GtrNJteQ28iTyRQrHXvkz',
  platformId: platform.id,
};

export const mainService: ServiceDefinition = {
  id: `${platform.id}-btc`,
  name: 'Main',
  platformId: platform.id,
  networkId: NetworkId.solana,
  contracts: [contract],
};

export const services: ServiceDefinition[] = [mainService];
export default services;
