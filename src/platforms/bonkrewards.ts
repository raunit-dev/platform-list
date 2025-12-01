import { PlatformRaw, ServiceRaw } from "../types";
import { NetworkId } from '@sonarwatch/portfolio-core';
import { ServiceDefinition } from '../ServiceDefinition';

export const platform: PlatformRaw = {
  id: "bonkrewards",
  name: "Bonk Rewards",
  description: "Social layer and community meme coin of Solana.",
  defiLlamaId: "bonkswap",
  tags: ["memecoin", "dapp"],
  links: {
    website: "https://bonkrewards.com/",
    discord: "https://discord.com/invite/qaQa6M6mN2",
    telegram: "https://t.me/Official_Bonk_Inu",
    twitter: "https://twitter.com/bonk_inu",
    medium: "https://medium.com/@bonk_inu",
  },
  tokens: ["DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263"],
};

const contract = {
  name: 'Staking',
  address: 'STAKEkKzbdeKkqzKpLkNQD3SUuLgshDKCD7U8duxAbB',
  platformId: platform.id,
};

const fireContract = {
  name: 'Fire',
  address: 'FiRESpaNzgYUiba5vkb44CZJLZjrux1AUECdfwPRsNkg',
  platformId: platform.id,
};

const swapContract = {
  name: 'Swap',
  address: 'BSwp6bEBihVLdqJRKGgzjcGLHkcTuzmSo1TQkHepzH8p',
  platformId: platform.id,
};

const bonkMasContract = {
  name: 'BonkMas',
  address: 'BMas2pUrC5GR1ZJFbJLy2UmBcEgCfdxB5QLSBrLRnvK4',
  platformId: platform.id,
};

const daoContract = {
  name: 'DAO',
  address: 'HA99cuBQCCzZu1zuHN2qBxo2FBo1cxNLwKkdt6Prhy8v',
  platformId: platform.id,
};

const stakingService: ServiceDefinition = {
  id: `${platform.id}-staking`,
  name: 'Staking',
  platformId: platform.id,
  networkId: NetworkId.solana,
  contracts: [contract],
};

const fireService: ServiceDefinition = {
  id: `${platform.id}-fire`,
  name: 'Fire',
  platformId: platform.id,
  networkId: NetworkId.solana,
  contracts: [fireContract],
};

const swapService: ServiceDefinition = {
  id: `${platform.id}-swap`,
  name: 'Swap',
  platformId: platform.id,
  networkId: NetworkId.solana,
  contracts: [swapContract],
};

const bonkMasService: ServiceDefinition = {
  id: `${platform.id}-bonkmas`,
  name: 'BONKmas',
  platformId: platform.id,
  networkId: NetworkId.solana,
  contracts: [bonkMasContract],
};

const daoService: ServiceDefinition = {
  id: `${platform.id}-dao`,
  name: 'DAO',
  platformId: platform.id,
  networkId: NetworkId.solana,
  contracts: [daoContract],
};

export const services: ServiceDefinition[] = [
  stakingService,
  fireService,
  swapService,
  bonkMasService,
  daoService,
];
export default services;
