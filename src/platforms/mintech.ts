import { PlatformRaw, ServiceRaw } from "../types";
import { NetworkId } from '@sonarwatch/portfolio-core';
import { ServiceDefinition } from '../ServiceDefinition';

export const platform: PlatformRaw = {
  id: "mintech",
  name: "Mintech",
  links: {
    website: "https://www.mintechbots.com/",
    discord: "https://t.co/f9eKBmczlm",
    twitter: "https://x.com/mintechbots",
    documentation:
      "https://mintechbots.gitbook.io/mintech-guide/getting-started/welcome",
  },
  tags: ["tool"],
};

const contract = {
  name: 'Router',
  address: 'minTcHYRLVPubRK8nt6sqe2ZpWrGDLQoNLipDJCGocY',
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
