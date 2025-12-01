import { PlatformRaw, ServiceRaw } from "../types";
import { NetworkId } from '@sonarwatch/portfolio-core';
import { ServiceDefinition } from '../ServiceDefinition';

export const platform: PlatformRaw = {
  id: "helio",
  name: "Helio",
  tags: ["dapp"],
  links: {
    website: "https://www.hel.io/",
  },
};

const contractV2 = {
  name: 'Payment',
  address: 'ENicYBBNZQ91toN7ggmTxnDGZW14uv9UkumN7XBGeYJ4',
  platformId: platform.id,
};

const contractV1 = {
  name: 'Payment V1',
  address: '3KPRuKWxV6PtneZXbokMBwdF4T9brCFx7FcmKJ2tPqqt',
  platformId: platform.id,
};

const paymentService: ServiceDefinition = {
  id: `${platform.id}-payment`,
  name: 'Payment',
  platformId: platform.id,
  networkId: NetworkId.solana,
  contracts: [contractV2],
};

const paymentV2Service: ServiceDefinition = {
  id: `${platform.id}-payment-v1`,
  name: 'Payment V1',
  platformId: platform.id,
  networkId: NetworkId.solana,
  contracts: [contractV1],
};

export const services: ServiceDefinition[] = [paymentService, paymentV2Service];
export default services;
