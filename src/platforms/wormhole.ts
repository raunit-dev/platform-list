import { PlatformRaw, ServiceRaw } from "../types";
import { NetworkId } from '@sonarwatch/portfolio-core';
import { ServiceDefinition, ServicePriority } from '../ServiceDefinition';
import { matchAnyInstructionWithPrograms } from '../utils/parseTransaction/matchAnyInstructionWithPrograms';

export const platform: PlatformRaw = {
  id: "wormhole",
  name: "Wormhole",
  description:
    "Future-proof, permissionless tooling to empower multichain builders",
  links: {
    website: "https://w.wormhole.com/",
    discord: "https://discord.com/invite/wormholecrypto",
    telegram: "https://t.me/wormholecrypto",
    twitter: "https://twitter.com/wormhole",
    github: "https://github.com/wormhole-foundation",
    documentation: "https://wormhole.com/docs/",
  },
  tokens: ["85VBFQZC9TZkfaptBWjvUw7YbZjy52A6mjtPGjstQAmQ"],
  tags: ["tool", "bridge", "dapp"],
};

const mainContract = {
  name: 'Main',
  address: 'HDwcJBJXjL9FpJ7UBsYBtaDjsBUhuLCUYoz3zr8SWWaQ',
  platformId: platform.id,
};

const coreContract = {
  name: 'Core',
  address: 'worm2ZoG2kUd4vFXhvjh93UUH596ayRfgQ2MgjNMTth',
  platformId: platform.id,
};

const legacyStakingContract = {
  name: 'Legacy Staking',
  address: 'sspu65omPW2zJGWDxmx8btqxudHezoQHSGZmnW8jbVz',
  platformId: platform.id,
};

const stakingContract = {
  name: 'Staking',
  address: 'MGoV9M6YUsdhJzjzH9JMCW2tRe1LLxF1CjwqKC7DR1B',
  platformId: platform.id,
};

const tokenBridgeContract = {
  name: 'Token Bridge',
  address: 'wormDTUJ6AWPNvk59vGQbDvGJmqbDTdgWgAqcLBCgUb',
  platformId: platform.id,
};

const tokenBridgeRelayerContract = {
  name: 'Token Bridge Relayer',
  address: '3vxKRPwUTiEkeUVyoZ9MXFe1V71sRLbLqu1gRYaWmehQ',
  platformId: platform.id,
};

const tbtcBridgeContract = {
  name: 'tBTC Bridge',
  address: '87MEvHZCXE3ML5rrmh5uX1FbShHmRXXS32xJDGbQ7h5t',
  platformId: platform.id,
};

const legacyStakingService: ServiceDefinition = {
  id: `${platform.id}-legacy-staking`,
  name: 'Legacy Staking',
  platformId: platform.id,
  networkId: NetworkId.solana,
  contracts: [legacyStakingContract],
  priority: ServicePriority.low,
};

const stakingService: ServiceDefinition = {
  id: `${platform.id}-staking`,
  name: 'Staking',
  platformId: platform.id,
  networkId: NetworkId.solana,
  contracts: [stakingContract],
};

const wormholeService: ServiceDefinition = {
  id: `${platform.id}-main`,
  name: 'Core',
  platformId: platform.id,
  networkId: NetworkId.solana,
  matchTransaction: (tx) =>
    matchAnyInstructionWithPrograms(tx, [
      mainContract.address,
      coreContract.address,
    ]),
};

const tokenBridgeService: ServiceDefinition = {
  id: `${platform.id}-token-bridge`,
  name: 'Token Bridge',
  platformId: platform.id,
  networkId: NetworkId.solana,
  matchTransaction: (tx) =>
    matchAnyInstructionWithPrograms(tx, [
      tokenBridgeContract.address,
      tokenBridgeRelayerContract.address,
    ]),
};

const tbtcBridgeService: ServiceDefinition = {
  id: `${platform.id}-tbtc-bridge`,
  name: 'tBTC Bridge',
  platformId: platform.id,
  networkId: NetworkId.solana,
  contracts: [tbtcBridgeContract],
};

export const services: ServiceDefinition[] = [
  wormholeService,
  legacyStakingService,
  stakingService,
  tokenBridgeService,
  tbtcBridgeService,
];
export default services;
