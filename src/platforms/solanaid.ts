import { PlatformRaw, ServiceRaw } from "../types";
import { NetworkId } from '@sonarwatch/portfolio-core';
import { ServiceDefinition } from '../ServiceDefinition';

export const platform: PlatformRaw = {
  id: "solanaid",
  name: "Solana ID",
  links: {
    website: "https://app.solana.id/",
    twitter: "https://x.com/solanaidentity",
    discord: "https://discord.com/invite/solanaid",
    telegram: "https://t.me/+NKjmb1u7LZw5YTU6",
  },
  tags: ["dapp"],
};

const contract = {
  name: 'Staking',
  address: 'gp8fqiE5cwX3JRT8unpKeFutNdMihyisAe3nx6L3S1p',
  platformId: 'solanaid',
};

const service: ServiceDefinition = {
  id: 'solanaid',
  name: 'Staking',
  platformId: 'solanaid',
  networkId: NetworkId.solana,
  contracts: [contract],
};

export const services: ServiceDefinition[] = [service];
export default services;
