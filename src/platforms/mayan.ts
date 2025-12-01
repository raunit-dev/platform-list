import { PlatformRaw, ServiceRaw } from "../types";
import { NetworkId } from '@sonarwatch/portfolio-core';
import { ServiceDefinition } from '../ServiceDefinition';
import { jupiterV6Contract } from './jupiter';

export const platform: PlatformRaw = {
  id: "mayan",
  name: "Mayan",
  description:
    "Composable, auction-driven transfers that optimize speed and cost for a seamless multichain experience.",
  links: {
    website: "https://mayan.finance/",
    twitter: "https://x.com/MayanFinance",
    discord: "https://discord.gg/mayanfinance",
    documentation: "https://docs.mayan.finance/",
  },
  tags: ["bridge", "tool", "dapp"],
};

const contract = {
  name: 'Swift',
  address: 'BLZRi6frs4X4DNLw56V4EXai1b6QVESN1BhHBTYM9VcY',
  platformId: platform.id,
};

const claimService: ServiceDefinition = {
  id: `${platform.id}-claim`,
  name: 'Claim',
  platformId: platform.id,
  networkId: NetworkId.solana,
  contracts: [contract],
};

const bridgeService: ServiceDefinition = {
  id: `${platform.id}-bridge`,
  name: 'Bridge',
  platformId: platform.id,
  networkId: NetworkId.solana,
  contracts: [contract, jupiterV6Contract],
};

export const services: ServiceDefinition[] = [claimService, bridgeService];
export default services;
