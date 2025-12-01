import { PlatformRaw, ServiceRaw } from "../types";
import { NetworkId } from '@sonarwatch/portfolio-core';
import { ServiceDefinition } from '../ServiceDefinition';

export const platform: PlatformRaw = {
  id: "zeus",
  name: "Zeus",
  links: {
    website: "https://app.zeusguardian.io/",
    twitter: "https://x.com/ZeusNetworkHQ",
    documentation: "https://docs.zeusnetwork.xyz/",
    github: "https://github.com/ZeusNetworkHQ",
    discord: "https://discord.com/invite/zeusnetwork",
    medium: "https://medium.com/@zeus-network",
  },
  tokens: ["ZEUS1aR7aX8DFFJf5QjWj2ftDDdNTroMNGo8YoQm3Gq"],
  description: "First Multichain Layer on Solana.",
  tags: ["dapp"],
};

const bootstrapperContract = {
  name: 'Bootstrapper',
  address: 'ZPLsAzVmV6gRipY8dzoWcGWJ81tkPUN9M7YfxJPru9w',
  platformId: platform.id,
};

const bitcoinSPVContract = {
  name: 'BitcoinSPV',
  address: 'ZPLowzr41tCGkoRXuzEx4Ts98Jjrbfe9rtv7gqdgGkH',
  platformId: platform.id,
};
const layerCAContract = {
  name: 'LayerCA',
  address: 'ZPLtKX3gHTa4djEdmkZXkXiJdTUEeD5ZjZD4jAnxrSP',
  platformId: platform.id,
};
const delegatorContract = {
  name: 'Delegator',
  address: 'ZPLt7XEyRvRxEZcGFGnRKGLBymFjQbwmgTZhMAMfGAU',
  platformId: platform.id,
};
const liquidityManagementContract = {
  name: 'LiquidityManagement',
  address: 'ZPLuj6HoZ2z6y6WfJuHz3Gg48QeMZ6kGbsa74oPxACY',
  platformId: platform.id,
};
const twoWayPegContract = {
  name: 'TwoWayPeg',
  address: 'ZPLzxjNk1zUAgJmm3Jkmrhvb4UaLwzvY2MotpfovF5K',
  platformId: platform.id,
};

const bootstrapperService: ServiceDefinition = {
  id: `${platform.id}-bootstrapper`,
  name: 'Bootstrapper',
  platformId: platform.id,
  networkId: NetworkId.solana,
  contracts: [bootstrapperContract],
};
const bitcoinSPVService: ServiceDefinition = {
  id: `${platform.id}-bitcoin-spv`,
  name: 'BitcoinSPV',
  platformId: platform.id,
  networkId: NetworkId.solana,
  contracts: [bitcoinSPVContract],
};
const layerCAService: ServiceDefinition = {
  id: `${platform.id}-layer-ca`,
  name: 'LayerCA',
  platformId: platform.id,
  networkId: NetworkId.solana,
  contracts: [layerCAContract],
};
const stakingService: ServiceDefinition = {
  id: `${platform.id}-staking`,
  name: 'Staking',
  platformId: platform.id,
  networkId: NetworkId.solana,
  contracts: [delegatorContract],
};
const liquidityManagementService: ServiceDefinition = {
  id: `${platform.id}-liquidity-management`,
  name: 'LiquidityManagement',
  platformId: platform.id,
  networkId: NetworkId.solana,
  contracts: [liquidityManagementContract],
};
const twoWayPegService: ServiceDefinition = {
  id: `${platform.id}-two-way-peg`,
  name: 'TwoWayPeg',
  platformId: platform.id,
  networkId: NetworkId.solana,
  contracts: [twoWayPegContract],
};

export const services: ServiceDefinition[] = [bootstrapperService, bitcoinSPVService, layerCAService, stakingService, liquidityManagementService, twoWayPegService];
export default services;
