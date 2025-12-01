import { PlatformRaw, ServiceRaw } from "../types";
import { NetworkId } from '@sonarwatch/portfolio-core';
import { ServiceDefinition } from '../ServiceDefinition';

export const platform: PlatformRaw = {
  id: "hawkfi",
  name: "HawkFi",
  tags: ["dapp"],
  links: {
    website: "https://www.hawksight.co/",
  },
};

const mainContract = {
  name: 'Main',
  address: 'FqGg2Y1FNxMiGd51Q6UETixQWkF5fB92MysbYogRJb3P',
  platformId: platform.id,
};

const mainService: ServiceDefinition = {
  id: `${platform.id}-core`,
  name: 'Core',
  platformId: platform.id,
  networkId: NetworkId.solana,
  contracts: [mainContract],
};

export const services: ServiceDefinition[] = [mainService];
export default services;
