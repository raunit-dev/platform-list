import { PlatformRaw, ServiceRaw } from "../types";
import { NetworkId } from '@sonarwatch/portfolio-core';
import { ServiceDefinition } from '../ServiceDefinition';

export const platform: PlatformRaw = {
  id: "lince",
  name: "Lince",
  description:
    "Earn with an investment strategy tailored to your risk profile.",
  links: {
    website: "https://lince.finance/",
    twitter: "https://x.com/LinceFinance",
    discord: "https://discord.gg/lincefinance",
    telegram: "https://t.me/LinceFinance",
  },
  tags: ["dapp"],
};

const contract = {
  name: 'Lince',
  address: 'LnceiBjUxxjGbhFpKz3SoGo9ntPYwm1DC3wkEQhav9j',
  platformId: platform.id,
};

export const services: ServiceDefinition[] = [
  {
    id: 'lince',
    name: 'Lending',
    platformId: platform.id,
    networkId: NetworkId.solana,
    contracts: [contract],
  },
];
export default services;
