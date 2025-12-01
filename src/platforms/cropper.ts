import { PlatformRaw, ServiceRaw } from "../types";
import { NetworkId } from '@sonarwatch/portfolio-core';
import { ServiceDefinition } from '../ServiceDefinition';

export const platform: PlatformRaw = {
  id: "cropper",
  name: "Cropper",
  defiLlamaId: "cropper-clmm",
  links: {
    website: "https://cropper.finance/",
    twitter: "https://twitter.com/CropperFinance",
    telegram: "https://t.me/CropperFinance",
    github: "https://github.com/CropperFinance",
    medium: "https://cropperfinance.medium.com/",
    documentation: "https://docs.cropper.finance/cropperfinance",
  },
  tokens: ["DubwWZNWiNGMMeeQHPnMATNj77YZPZSAz2WVR5WjLJqz"],
  description:
    "Cropper is an decentralized exchange built on the Solana blockchain.",
  tags: ["dapp"],
  isDeprecated: true,
};

const stakingContract = {
  name: 'Staking',
  address: 'HYzrD877vEcBgd6ySKPpa3pcMbqYEmwEF1GFQmvuswcC',
  platformId: platform.id,
};

const clmmContract = {
  name: 'CLMM',
  address: 'H8W3ctz92svYg6mkn1UtGfu2aQr2fnUFHM1RhScEtQDt',
  platformId: platform.id,
};

const stakingService: ServiceDefinition = {
  id: `${platform.id}-staking`,
  name: 'Staking',
  platformId: platform.id,
  networkId: NetworkId.solana,
  contracts: [stakingContract],
};

const clmmService: ServiceDefinition = {
  id: `${platform.id}-liquidity`,
  name: 'Liquidity',
  platformId: platform.id,
  networkId: NetworkId.solana,
  contracts: [clmmContract],
};

export const services: ServiceDefinition[] = [stakingService, clmmService];
export default services;
