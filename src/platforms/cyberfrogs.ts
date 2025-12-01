import { PlatformRaw, ServiceRaw } from "../types";
import { NetworkId } from '@sonarwatch/portfolio-core';
import { ServiceDefinition } from '../ServiceDefinition';

export const platform: PlatformRaw = {
  id: "cyberfrogs",
  name: "CyberFrogs",
  links: {
    website: "https://legacy.cyberfrogs.io/faction-contracts-v3",
    twitter: "https://twitter.com/CyberFrogsNFT",
    discord: "https://discord.com/invite/cyberfrogs",
  },
  description: "Leading NFT Development, Innovation & Crypto Trading Tools",
  tags: ["nft-collection"],
};

const autoThorContract = {
  name: 'AutoThor',
  address: '8F2VM13kdMBaHtcXPHmArtLueg7rfsa3gnrgGjAy4oCu',
  platformId: platform.id,
};

const autoThorService: ServiceDefinition = {
  id: `${platform.id}-autothor`,
  name: 'AutoThor',
  platformId: platform.id,
  networkId: NetworkId.solana,
  contracts: [autoThorContract],
};

export const services: ServiceDefinition[] = [autoThorService];
export default services;

