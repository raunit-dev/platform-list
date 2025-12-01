import { PlatformRaw, ServiceRaw } from "../types";
import { Contract, NetworkId } from '@sonarwatch/portfolio-core';
import { ServiceDefinition } from '../ServiceDefinition';
import { matchAnyInstructionWithPrograms } from '../utils/parseTransaction/matchAnyInstructionWithPrograms';

export const platform: PlatformRaw = {
  id: "orderly",
  name: "Orderly",
  description:
    "Orderly is an omnichain CLOB infrastructure.It’s the ultimate trading lego for seamless integration by any builder on any blockchain. Give your app the transparency and composability of DEXs, with the speed and performance of CEXs.",
  defiLlamaId: "parent#orderly",
  links: {
    website: "https://orderly.network/",
    discord: "https://discord.com/invite/orderlynetwork",
    twitter: "https://twitter.com/OrderlyNetwork",
    telegram: "https://t.me/OrderlyNetworkDiscussions",
    github: "https://github.com/OrderlyNetwork",
    documentation:
      "https://orderly.network/docs/introduction/getting-started/what-is-orderly",
    medium: "https://medium.com/@orderlynetwork",
  },
  tokens: ["ABt79MkRXUsoHuV2CVQT32YMXQhTparKFjmidQxgiQ6E"],
  tags: ["bridge", "dapp"],
};

const contract: Contract = {
  name: `Orderly`,
  address: 'ErBmAD61mGFKvrFNaTJuxoPwqrS8GgtwtqJTJVjFWx9Q',
  platformId: platform.id,
};

const stakingContract: Contract = {
  name: `Staking`,
  address: '7X5WKxXLPy9TbJDFejq288HezLmWayZWudKMmUC2d9rB',
  platformId: platform.id,
};

const stakingContract2: Contract = {
  name: `Staking V2`,
  address: 'GZGX6QfUo62VbPyYqPZS6t27Uke1dJmoAP6V3rw6ntTH',
  platformId: platform.id,
};

export const services: ServiceDefinition[] = [
  {
    id: `${platform.id}`,
    name: 'Orderly',
    platformId: platform.id,
    networkId: NetworkId.solana,
    contracts: [contract],
  },
  {
    id: `${platform.id}-staking`,
    name: 'Staking',
    platformId: platform.id,
    networkId: NetworkId.solana,
    matchTransaction: (tx) =>
      matchAnyInstructionWithPrograms(tx, [
        stakingContract.address,
        stakingContract2.address,
      ]),
  },
];
export default services;
