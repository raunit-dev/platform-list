import { PlatformRaw, ServiceRaw } from "../types";
import { NetworkId } from '@sonarwatch/portfolio-core';
import { ServiceDefinition } from '../ServiceDefinition';

export const platform: PlatformRaw = {
  id: "nodepay",
  name: "Nodepay",
  tags: ["tool"],
  links: {
    website: "https://nodepay.ai/",
    discord: "https://discord.com/invite/nodepay",
    twitter: "https://x.com/nodepay_ai",
    telegram: "https://t.me/nodepaycommunitychat",
  },
};

const stakingContract = {
  name: 'Staking',
  address: 'stakevLBn36MxF5qcjXFxChfFDhL9LrLqj4WC3HPpGT',
  platformId: platform.id,
};

const service: ServiceDefinition = {
  id: `${platform.id}-staking`,
  name: 'Staking',
  platformId: platform.id,
  networkId: NetworkId.solana,
  contracts: [stakingContract],
};

export const services: ServiceDefinition[] = [service];
export default services;
