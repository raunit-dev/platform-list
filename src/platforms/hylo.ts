import { PlatformRaw, ServiceRaw } from "../types";
import { NetworkId } from '@sonarwatch/portfolio-core';
import { ServiceDefinition } from '../ServiceDefinition';

export const platform: PlatformRaw = {
  id: "hylo",
  name: "Hylo",
  description: "Stablecoin backed by SOL and leveraged SOL",
  links: {
    website: "https://hylo.so/",
    twitter: "https://x.com/hylo_so",
    telegram: "https://t.me/hylo_announcements",
    github: "https://github.com/hylo-so",
  },
  tags: ["dapp"],
  tokens: [
    "HnnGv3HrSqjRpgdFmx7vQGjntNEoex1SU4e9Lxcxuihz",
    "5YMkXAYccHSGnHn9nob9xEvv6Pvka9DZWH7nTbotTu9E",
    "4sWNB8zGWHkh6UnmwiEtzNxL4XrN7uK9tosbESbJFfVs",
  ],
};

const exchangeContract = {
  name: 'Exchange',
  address: 'HYEXCHtHkBagdStcJCp3xbbb9B7sdMdWXFNj6mdsG4hn',
  platformId: platform.id,
};

const stabilityPoolContract = {
  name: 'Stability Pool',
  address: 'HysTabVUfmQBFcmzu1ctRd1Y1fxd66RBpboy1bmtDSQQ',
  platformId: platform.id,
};

const exchangeService: ServiceDefinition = {
  id: `${platform.id}-exchange`,
  name: 'Exchange',
  platformId: platform.id,
  networkId: NetworkId.solana,
  contracts: [exchangeContract],
};

const stabilityPoolService: ServiceDefinition = {
  id: `${platform.id}-stability-pool`,
  name: 'Stability Pool',
  platformId: platform.id,
  networkId: NetworkId.solana,
  contracts: [stabilityPoolContract],
};

export const services: ServiceDefinition[] = [
  exchangeService,
  stabilityPoolService,
];
export default services;
