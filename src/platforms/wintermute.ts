import { PlatformRaw, ServiceRaw } from "../types";
import { NetworkId } from '@sonarwatch/portfolio-core';
import { ServiceDefinition } from '../ServiceDefinition';

export const platform: PlatformRaw = {
  id: "wintermute",
  name: "Wintermute",
  links: {
    website: "https://www.wintermute.com/",
    twitter: "https://x.com/wintermute_t",
  },
  tags: ["liquidity-provider"],
};

const contract = {
  name: 'Order Engine',
  address: '2En5Y11SEAGLNmEezTuRUCwTyzyNReHaMbSnS5gjGsL1',
  platformId: platform.id,
};

const tradeService: ServiceDefinition = {
  id: `${platform.id}-order-engine`,
  name: 'Order Engine',
  platformId: platform.id,
  networkId: NetworkId.solana,
  contracts: [contract],
};

export const services: ServiceDefinition[] = [tradeService];
export default services;
