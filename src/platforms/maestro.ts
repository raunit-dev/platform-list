import { PlatformRaw, ServiceRaw } from "../types";
import { NetworkId } from '@sonarwatch/portfolio-core';
import { ServiceDefinition } from '../ServiceDefinition';

export const platform: PlatformRaw = {
  id: "maestro",
  name: "Maestro",
  links: {
    website: "https://maestrobots.com/",
    twitter: "https://x.com/MaestroBots",
    documentation: "https://docs.maestrobots.com/",
  },
  tags: ["tool"],
};

const contract = {
  name: 'Router',
  address: 'MaestroAAe9ge5HTc64VbBQZ6fP77pwvrhM8i1XWSAx',
  platformId: platform.id,
};

const service: ServiceDefinition = {
  id: `${platform.id}-bot`,
  name: 'Bot',
  platformId: platform.id,
  networkId: NetworkId.solana,
  contracts: [contract],
};

export const services: ServiceDefinition[] = [service];
export default services;
