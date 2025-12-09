import { PlatformRaw, ServiceRaw, ContractRaw, NetworkId } from "../types";
export const platform: PlatformRaw = {
  id: "okx",
  name: "OKX",
  description:
    "OKX DEX is a multi-chain aggregator finding optimal trading routes across 400+ DEXs and 30+ networks including Solana.",
  links: {
    website: "https://web3.okx.com/dex-swap/bridge",
  },
  tags: ["bridge", "dapp"],
};
const aggregator: ContractRaw = {
  name: `Aggregator`,
  address: "6m2CDdhRgxpH4WjvdzxAYbGxwdGUz5MziiL5jek2kBma",
  networkId: NetworkId.solana,
};
const aggregatorV6: ContractRaw = {
  name: `Aggregator V6`,
  address: "proVF4pMXVaYqmy4NjniPh4pqKNfMmsihgd4wdkCX3u",
  networkId: NetworkId.solana,
};

export const aggregatorService: ServiceRaw = {
  id: `${platform.id}-aggregator`,
  name: "Aggregator",
  platformId: platform.id,
  contractsRaw: [aggregator],
};

export const aggregatorV6Service: ServiceRaw = {
  id: `${platform.id}-aggregator-v6`,
  name: "Aggregator V6",
  platformId: platform.id,
  contractsRaw: [aggregatorV6],
};

export const services: ServiceRaw[] = [aggregatorService, aggregatorV6Service];
