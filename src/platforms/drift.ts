import { PlatformRaw, ServiceRaw } from "../types";
import { Contract, NetworkId } from "@sonarwatch/portfolio-core";
import { ServiceDefinition } from "../ServiceDefinition";

export const platform: PlatformRaw = {
  id: "drift",
  name: "Drift",
  description:
    "Drift brings on-chain, cross-margined perpetual futures to Solana. Making futures DEXs the best way to trade.",
  defiLlamaId: "parent#drift",
  tags: ["dapp"],
  links: {
    website: "https://www.drift.trade/",
    discord: "https://discord.com/invite/fMcZBH8ErM",
    twitter: "https://twitter.com/DriftProtocol",
    github: "https://github.com/drift-labs",
    documentation: "https://docs.drift.trade/",
  },
  tokens: ["DriFtupJYLTosbwoN8koMbEYSx54aFAVLddWsbksjwg7"],
};

const contract = {
  name: "Drift",
  address: "dRiftyHA39MWEi3m9aunc5MzRF1JYuBsbn6VPcn33UH",
  platformId: platform.id,
};

const proxyContract = {
  name: "Jit Proxy",
  address: "J1TnP8zvVxbtF5KFp5xRmWuvG9McnhzmBd9XGfCyuxFP",
  platformId: platform.id,
};

const airdropContract = {
  name: "Airdrop",
  address: "E7HtfkEMhmn9uwL7EFNydcXBWy5WCYN1vFmKKjipEH1x",
  platformId: platform.id,
};

const driftVaultsContract: Contract = {
  name: "Vaults",
  address: "vAuLTsyrvSfZRuRB3XgvkPwNGgYSs9YRYymVebLKoxR",
  platformId: platform.id,
};

const perpsService: ServiceDefinition = {
  id: `${platform.id}-main`,
  name: "Main",
  platformId: platform.id,
  networkId: NetworkId.solana,
  contracts: [contract],
};

const marketMakerService: ServiceDefinition = {
  id: `${platform.id}-market-maker`,
  name: "Market Maker",
  platformId: platform.id,
  networkId: NetworkId.solana,
  contracts: [proxyContract],
};

const airdropService: ServiceDefinition = {
  id: `${platform.id}-airdrop`,
  name: "Airdrop",
  platformId: platform.id,
  networkId: NetworkId.solana,
  contracts: [airdropContract],
};

const vaultsService: ServiceDefinition = {
  id: `${platform.id}-vaults`,
  name: "Vaults",
  platformId: platform.id,
  networkId: NetworkId.solana,
  contracts: [driftVaultsContract],
};

export const services: ServiceDefinition[] = [
  perpsService,
  marketMakerService,
  airdropService,
  vaultsService,
];
export default services;
