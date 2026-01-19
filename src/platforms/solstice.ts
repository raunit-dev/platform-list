import { PlatformRaw, ServiceRaw, NetworkId } from "../types";
export const platform: PlatformRaw = {
  id: "solstice",
  name: "Solstice",
  tags: ["dapp", "stablecoin", "institutional", "defi"],
  defiLlamaId: "solstice-usx",
  links: {
    website: "https://solstice.finance/",
    twitter: "https://x.com/solsticefi",
    documentation: "https://docs.solstice.finance/",
  },
  tokens: [
    "6FrrzDk5mQARGc1TDYoyVnSyRdds1t4PbtohCD6p3tgG",
    "3ThdFZQKM6kRyVGLG48kaPg5TRMhYMKY1iCRa9xop1WC",
  ],
};

export const contract = {
  name: "Yield Vault",
  address: "eUSXyKoZ6aGejYVbnp3wtWQ1E8zuokLAJPecPxxtgG3",
  networkId: NetworkId.solana,
};

export const usxJustEarnContract = {
  name: "USX Just Earn",
  address: "JECcmzAWytxXQtMN3taGmAYhTK4CDEfwEGrzfMvVeGXm",
  networkId: NetworkId.solana,
};

export const usxContract = {
  name: "USX",
  address: "USXyiSTsPEWz55pSK7sZoUL79ntoVGQbaTDT57tH6bx",
  networkId: NetworkId.solana,
};

export const yieldVaultService: ServiceRaw = {
  id: `${platform.id}-yield-vault`,
  name: "Yield Vault",
  platformId: platform.id,
  contractsRaw: [contract],
  link: "https://solstice.finance/yieldvault",
  description:
    "Institutional-grade delta-neutral trading strategy vault offering stable yields with zero negative months track record since inception.",
};

export const usxJustEarnService: ServiceRaw = {
  id: `${platform.id}-usx-just-earn`,
  name: "USX Just Earn",
  platformId: platform.id,
  contractsRaw: [usxJustEarnContract],
  description:
    "Passive yield program for USX holders providing eUSX receipt tokens representing shares in the YieldVault's underlying assets.",
};

export const usxService: ServiceRaw = {
  id: `${platform.id}-usx`,
  name: "USX",
  platformId: platform.id,
  contractsRaw: [usxContract],
  link: "https://solstice.finance/usx",
  description:
    "Fully collateralized synthetic stablecoin pegged to USD, backed 1:1 by USDC and USDT with real-time Chainlink Proof of Reserves.",
};

export const services: ServiceRaw[] = [
  yieldVaultService,
  usxJustEarnService,
  usxService,
];
