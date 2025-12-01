import { PlatformRaw, ServiceRaw } from "../types";
import { NetworkId } from '@sonarwatch/portfolio-core';
import { ServiceDefinition } from '../ServiceDefinition';
import { jupiterV6Contract } from './jupiter';

export const platform: PlatformRaw = {
  id: "relay",
  name: "Relay",
  links: {
    website: "https://relay.link/bridge",
    twitter: "https://x.com/relayprotocol",
    documentation: "https://docs.relay.link/what-is-relay",
  },
  tags: ["dapp", "bridge"],
};

const contract = {
  name: 'WSOL Unwrapper',
  address: 'DzACDmwdqc5ADPJKnZEcQAgpsPdvYzvYBMihPNN48pFE',
  platformId: platform.id,
};

const service: ServiceDefinition = {
  id: `${platform.id}-bridge`,
  name: 'Bridge',
  platformId: platform.id,
  networkId: NetworkId.solana,
  contracts: [contract, jupiterV6Contract],
};

export const services: ServiceDefinition[] = [service];
export default services;
