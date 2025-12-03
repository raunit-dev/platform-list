import { PlatformRaw, ServiceRaw, ContractRaw, NetworkId } from "../types";
export const platform: PlatformRaw = {
  id: "lince",
  name: "Lince",
  description:
    "Earn with an investment strategy tailored to your risk profile.",
  links: {
    website: "https://lince.finance/",
    twitter: "https://x.com/LinceFinance",
    discord: "https://discord.gg/lincefinance",
    telegram: "https://t.me/LinceFinance",
  },
  tags: ["dapp"],
};

const contract: ContractRaw = {
  name: 'Lince',
  address: 'LnceiBjUxxjGbhFpKz3SoGo9ntPYwm1DC3wkEQhav9j',
  networkId: NetworkId.solana,
}

export const services: ServiceRaw[] = [
  {
    id: 'lince',
    name: 'Lending',
    platformId: platform.id,
    contractsRaw: [contract],
  },
];
