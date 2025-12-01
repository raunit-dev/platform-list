import { PlatformRaw, ServiceRaw } from "../types";
import { NetworkId } from '@sonarwatch/portfolio-core';
import { ServiceDefinition } from '../ServiceDefinition';

export const platform: PlatformRaw = {
  id: "rain",
  name: "Rain",
  description:
    "RainFi is a peer-to-peer (P2P) lending protocol built on the Solana blockchain, offering innovative ways for users to access and utilize financial resources.",
  defiLlamaId: "rain.fi",
  links: {
    website: "https://rain.fi/",
    discord: "https://discord.gg/rainfi",
    twitter: "https://twitter.com/RainFi_",
    github: "https://github.com/rain-foundation",
    medium: "https://medium.com/@rainfi_",
    documentation: "https://docs.rain.fi/",
  },
  tags: ["dapp"],
};

const contractNftLending = {
  name: 'NFT Lending',
  address: 'rNfTQD84kwMbcRpWpLR92BVmxbuwrZc3o5HTauAZiXs',
  platformId: platform.id,
};

const contractDefiLending = {
  name: 'Defi Lending',
  address: 'rDeFiHPjHZRLiz4iBzMw3zv6unZs4VwdU6qQcVd3NSK',
  platformId: platform.id,
};

const contractBank = {
  name: 'Vaults',
  address: 'rain2M5b9GeFCk792swkwUu51ZihHJb3SUQ8uHxSRJf',
  platformId: platform.id,
};

const liquidContract = {
  name: 'Liquid',
  address: 'wJUPXhGwC88LZeG1DXaYing3WB1Q4YvwJcK77bidNGv',
  platformId: platform.id,
};

const defiService: ServiceDefinition = {
  id: 'rain-defi-lending',
  name: 'Lending',
  platformId: platform.id,
  networkId: NetworkId.solana,
  contracts: [contractDefiLending],
};

const nftService: ServiceDefinition = {
  id: 'rain-nft-lending',
  name: 'NFT Lending',
  platformId: platform.id,
  networkId: NetworkId.solana,
  contracts: [contractNftLending],
};

const vaultsService: ServiceDefinition = {
  id: 'rain-vaults',
  name: 'Vaults',
  platformId: platform.id,
  networkId: NetworkId.solana,
  contracts: [contractBank],
};

const liquidService: ServiceDefinition = {
  id: 'rain-vaults',
  name: 'Liquid',
  platformId: platform.id,
  networkId: NetworkId.solana,
  contracts: [liquidContract],
};

export const services: ServiceDefinition[] = [
  defiService,
  nftService,
  vaultsService,
  liquidService,
];
export default services;
