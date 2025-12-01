import { PlatformRaw, ServiceRaw } from "../types";
import { NetworkId } from '@sonarwatch/portfolio-core';
import { ServiceDefinition } from '../ServiceDefinition';
import { solanaStakePoolContract } from './solana/contracts';

export const platform: PlatformRaw = {
  id: "solayer",
  name: "Solayer",
  description:
    "Solayer is the restaking protocol on Solana, securing both endogenous AVS (dApps) through stake-weighted quality of service and exogenous AVS via Solana-based POS primitives",
  defiLlamaId: "parent#solayer",
  tags: ["dapp", "lst"],
  links: {
    website: "https://solayer.org/",
    discord: "https://discord.com/invite/solayerlabs",
    telegram: "https://t.me/solayer_discussion",
    twitter: "https://x.com/solayer_labs",
    github: "https://github.com/solayer-labs",
    documentation:
      "https://docs.solayer.org/documentation/get-started/introduction",
  },
  tokens: [
    "LAYER4xPpTCb3QL8S9u41EAhAX7mhBn8Q6xMTwY2Yzc",
    "sSo1wxKKr6zW2hqf5hZrp2CawLibcwi1pMBqk5bg2G4",
    "sSo14endRuUbvQaJS3dq36Q829a3A6BEfoeeRGJywEh",
    "susdabGDNbhrnCa6ncrYo81u4s9GM8ecK2UwMyZiq4X",
  ],
};

const solayerContract = {
  name: 'Solayer',
  address: 'sSo1iU21jBrU9VaJ8PJib1MtorefUV4fzC9GURa2KNn',
  platformId: platform.id,
};

const airdropContract = {
  name: 'Airdrop',
  address: 'ARDPkhymCbfdan375FCgPnBJQvUfHeb7nHVdBfwWSxrp',
  platformId: platform.id,
};

const sUDCContract = {
  name: 'sUDC',
  address: 's1aysqpEyZyijPybUV89oBGeooXrR22wMNLjnG2SWJA',
  platformId: platform.id,
};

const endoAvsContract = {
  name: 'Endo Avs',
  address: 'endoLNCKTqDn8gSVnN2hDdpgACUPWHZTwoYnnMybpAT',
  platformId: platform.id,
};

const solayerService: ServiceDefinition = {
  id: `${platform.id}`,
  name: 'Staking',
  platformId: platform.id,
  networkId: NetworkId.solana,
  contracts: [solayerContract],
};

const restakingService: ServiceDefinition = {
  id: `${platform.id}-restaking`,
  name: 'Restaking',
  platformId: platform.id,
  networkId: NetworkId.solana,
  contracts: [solayerContract, solanaStakePoolContract],
};

const airdropService: ServiceDefinition = {
  id: `${platform.id}-airdrop`,
  name: 'Airdrop',
  platformId: platform.id,
  networkId: NetworkId.solana,
  contracts: [airdropContract],
};

const sUSDService: ServiceDefinition = {
  id: `${platform.id}-susd`,
  name: 'sUSD',
  platformId: platform.id,
  networkId: NetworkId.solana,
  contracts: [sUDCContract],
};

const delegateService: ServiceDefinition = {
  id: `${platform.id}-delegate`,
  name: 'Delegate',
  platformId: platform.id,
  networkId: NetworkId.solana,
  contracts: [endoAvsContract, solayerContract, solanaStakePoolContract],
};

export const services: ServiceDefinition[] = [
  solayerService,
  airdropService,
  sUSDService,
  restakingService,
  delegateService,
];
export default services;
