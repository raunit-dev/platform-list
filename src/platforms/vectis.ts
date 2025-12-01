import { Contract, NetworkId } from "@sonarwatch/portfolio-core";
import { PlatformRaw, ServiceRaw } from "../types";
import { ServiceDefinition } from "../ServiceDefinition";
export const platform: PlatformRaw = {
  id: "vectis",
  name: "Vectis",
  description:
    "Vectis is the premier platform for high-yield, low-risk opportunities on Solana, designed for both seasoned DeFi enthusiasts and newcomers.",
  defiLlamaId: "vectis-finance",
  links: {
    website: "https://app.vectis.finance/",
    telegram: "https://t.me/vectisfi",
    twitter: "https://x.com/vectis_finance",
    medium: "https://medium.com/@vectisfinance",
    documentation: "https://docs.vectis.finance/",
  },
  tags: ["dapp"],
};

const vectisVaultsContract: Contract = {
  name: "Vaults",
  address: "EDnxACbdY1GeXnadh5gRuCJnivP7oQSAHGGAHCma4VzG",
  platformId: platform.id,
};

export const services: ServiceDefinition[] = [
  {
    id: `vectis-vaults`,
    name: "Vaults",
    platformId: platform.id,
    networkId: NetworkId.solana,
    contracts: [vectisVaultsContract],
  },
];
export default services;
