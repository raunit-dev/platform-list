import { PlatformRaw, ServiceRaw, NetworkId } from "../types";
export const platform: PlatformRaw = {
  id: "piggybank",
  name: "Piggybank",
  description:
    "Piggybank is a DeFi platform offering vaults for xStocks and yield optimization strategies.",
  tags: ["dapp", "vault", "defi"],
  links: {
    website: "https://www.piggybank.fi/",
    discord: "https://discord.gg/WNutXfvTgw",
    twitter: "https://x.com/piggybank_fi",
  },
  tokens: [
    "F35yYmTR6PqkbTx449P1eGhB57mRhWAdYs93eCo2dMZR",
    "E65CoK961Rs5LzKhGZxbKsB7xpFhYhXogH8nhr8zamTK",
  ],
  addedAt: 1761652800000,
};

const legacyContract = {
  name: "Vault",
  address: "Pig1CsXnfDwN1NuoeNRBojohbjc14dogmJCXeb2vL3Y",
  networkId: NetworkId.solana,
};

const token2022Contract = {
  name: "Vault",
  address: "Pig2ienhM3ukiTec3x8aCdnLASpU4z8yRPLgH9QxDvm",
  networkId: NetworkId.solana,
};

export const vaultService: ServiceRaw = {
  id: `${platform.id}-vault`,
  name: "Vault",
  platformId: platform.id,
  contractsRaw: [legacyContract, token2022Contract],
};

export const services: ServiceRaw[] = [vaultService];
