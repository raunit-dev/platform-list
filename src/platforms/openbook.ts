import { PlatformRaw, ServiceRaw } from "../types";
import { NetworkId } from '@sonarwatch/portfolio-core';
import { ServiceDefinition } from '../ServiceDefinition';
import { matchAnyInstructionWithPrograms } from '../utils/parseTransaction/matchAnyInstructionWithPrograms';

export const platform: PlatformRaw = {
  id: "openbook",
  name: "OpenBook",
  defiLlamaId: "openbook",
  links: {
    website: "https://www.openbook.ag/",
  },
  tags: ["dapp"],
};

const contract = {
  name: 'V1',
  address: 'srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX',
  platformId: platform.id,
};

const contract2 = {
  name: 'V2',
  address: 'opnbkNkqux64GppQhwbyEVc3axhssFhVYuwar8rDHCu',
  platformId: platform.id,
};

const contractV2 = {
  name: 'V2',
  address: 'opnb2LAfJYbRMAHHvqjCwQxanZn7ReEHp1k81EohpZb',
  platformId: platform.id,
};

const service: ServiceDefinition = {
  id: `${platform.id}-v1`,
  name: 'V1',
  platformId: platform.id,
  networkId: NetworkId.solana,
  contracts: [contract],
};

const service2: ServiceDefinition = {
  id: `${platform.id}-v2`,
  name: 'V2',
  platformId: platform.id,
  networkId: NetworkId.solana,
  matchTransaction: (tx) =>
    matchAnyInstructionWithPrograms(tx, [
      contract2.address,
      contractV2.address,
    ]),
};

export const services: ServiceDefinition[] = [service, service2];
export default services;
