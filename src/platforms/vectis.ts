import { ContractRaw, NetworkId, PlatformRaw, ServiceRaw } from "../types";
export const platform: PlatformRaw = {
  id: "vectis",
  name: "Vectis",
  description:
    "Vectis is a platform for high-yield, low-risk opportunities, designed for both seasoned DeFi enthusiasts and newcomers.",
  defiLlamaId: "vectis-finance",
  links: {
    website: "https://app.vectis.finance/",
    telegram: "https://t.me/vectisfi",
    twitter: "https://x.com/vectis_finance",
    medium: "https://medium.com/@vectisfinance",
    documentation: "https://docs.vectis.finance/",
  },
  tags: ["dapp", "vault", "defi"],
};

const vectisVaultsContract: ContractRaw = {
  name: "Vectis Vaults",
  address: "EDnxACbdY1GeXnadh5gRuCJnivP7oQSAHGGAHCma4VzG",
  networkId: NetworkId.solana,
};

export const vaultsService: ServiceRaw = {
  id: `${platform.id}-vaults`,
  name: "Vaults",
  platformId: platform.id,
  contractsRaw: [vectisVaultsContract],
};

export const services: ServiceRaw[] = [vaultsService];
