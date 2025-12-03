import { PlatformRaw, ServiceRaw, ContractRaw, NetworkId } from "../types";
export const platform: PlatformRaw = {
  id: "okx",
  name: "OKX",
  description:
    "Freely choose trading routes from all major DEX aggregators, while X Routing continues to find the best quotes across 400+ DEXs and 30+ networks",
  links: {
    website: "https://web3.okx.com/dex-swap/bridge",
  },
  tags: ["bridge", "dapp"],
};
const aggregator: ContractRaw = {
  name: `Aggregator`,
  address: '6m2CDdhRgxpH4WjvdzxAYbGxwdGUz5MziiL5jek2kBma',
  networkId: NetworkId.solana,
}
const aggregatorV6: ContractRaw = {
  name: `Aggregator V6`,
  address: 'proVF4pMXVaYqmy4NjniPh4pqKNfMmsihgd4wdkCX3u',
  networkId: NetworkId.solana,
}

export const services: ServiceRaw[] = [
  {
    id: `${platform.id}-aggregator`,
    name: 'Aggregator',
    platformId: platform.id,
    contractsRaw: [aggregator],
  },
  {
    id: `${platform.id}-aggregator-v6`,
    name: 'Aggregator V6',
    platformId: platform.id,
    contractsRaw: [aggregatorV6],
  },
];
