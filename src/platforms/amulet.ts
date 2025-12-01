import { PlatformRaw, ServiceRaw } from "../types";
import { NetworkId } from '@sonarwatch/portfolio-core';
import { ServiceDefinition } from '../ServiceDefinition';

export const platform: PlatformRaw = {
  id: "amulet",
  name: "Amulet",
  links: {
    website: "https://amulet.org/",
    twitter: "https://x.com/AmuletProtocol",
  },
  tags: ["tool"],
  isDeprecated: true,
};

const contract = {
  name: 'Core',
  address: 'AFX6h67CCoqcJcoFbq12dabMLDruQ38U2nogpeU7ECLa',
  platformId: platform.id,
};

const service: ServiceDefinition = {
  id: `${platform.id}-core`,
  name: 'Core',
  platformId: platform.id,
  networkId: NetworkId.solana,
  contracts: [contract],
};

export const services: ServiceDefinition[] = [service];
export default services;
