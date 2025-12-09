import { PlatformRaw, ServiceRaw, ContractRaw, NetworkId } from "../types";
export const platform: PlatformRaw = {
  id: "lince",
  name: "Lince",
  description:
    "Lince is a DeFi platform offering investment strategies tailored to user risk profiles through lending vaults.",
  links: {
    website: "https://lince.finance/",
    twitter: "https://x.com/LinceFinance",
    discord: "https://discord.gg/lincefinance",
    telegram: "https://t.me/LinceFinance",
  },
  tags: ["dapp"],
};

const contract: ContractRaw = {
  name: "Lince",
  address: "LnceiBjUxxjGbhFpKz3SoGo9ntPYwm1DC3wkEQhav9j",
  networkId: NetworkId.solana,
};

export const lendingService: ServiceRaw = {
  id: "lince-lending",
  name: "Lending",
  platformId: platform.id,
  contractsRaw: [contract],
};

export const services: ServiceRaw[] = [lendingService];
