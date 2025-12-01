import { PlatformRaw, ServiceRaw } from "../types";
import { NetworkId } from '@sonarwatch/portfolio-core';
import { ServiceDefinition } from '../ServiceDefinition';

export const platform: PlatformRaw = {
  id: "magna",
  name: "Magna",
  description:
    "Manage your token cap table, automate on-or-off chain vesting, account for tax deductions, execute airdrops, distribute conditional grants, utilize dynamic custody solutions and onboard in under a day.",
  defiLlamaId: "adrastea",
  tags: ["tool", "dapp"],
  links: {
    website: "https://www.magna.so/",
    twitter: "https://x.com/magna_digital/photo",
  },
};

const airdropContract = {
  name: 'Vesting Airdrop',
  address: '3zK38YBP6u3BpLUpaa6QhRHh4VXdv3J8cmD24fFpuyqy',
  platformId: platform.id,
};

const airdropService: ServiceDefinition = {
  id: `${platform.id}-airdrop`,
  name: 'Vesting Airdrop',
  platformId: platform.id,
  networkId: NetworkId.solana,
  contracts: [airdropContract],
};

const maintContract = {
  name: 'Core',
  address: 'magnaSHyv8zzKJJmr8NSz5JXmtdGDTTFPEADmvNAwbj',
  platformId: platform.id,
};

const service: ServiceDefinition = {
  id: `${platform.id}-core`,
  name: 'Asset Management',
  platformId: platform.id,
  networkId: NetworkId.solana,
  contracts: [maintContract],
};

export const services: ServiceDefinition[] = [service, airdropService];
export default services;
