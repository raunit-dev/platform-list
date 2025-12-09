import { PlatformRaw, ServiceRaw, NetworkId } from "../types";
export const platform: PlatformRaw = {
  id: "pluto",
  name: "Pluto",
  description:
    "Pluto is a leveraged yield protocol enabling users to multiply their yield exposure through automated strategies.",
  defiLlamaId: "pluto",
  tags: ["dapp"],
  links: {
    website: "https://pluto.so/",
    discord: "https://discord.com/invite/plutoleverage",
    telegram: "https://t.me/PlutoLeverage",
    twitter: "https://x.com/plutoleverage",
    github: "https://github.com/plutoleverage/",
    documentation: "https://docs.pluto.so/",
  },
};

const contract = {
  name: "Leverage Machine",
  address: "5UFYdXHgXLMsDzHyv6pQW9zv3fNkRSNqHwhR7UPnkhzy",
  networkId: NetworkId.solana,
};

const contractV2 = {
  name: "Leverage Machine V2",
  address: "PLUtoojGogHkKWXH4ZY3SiNYhsiE5CEoMJLPargRoQ9",
  networkId: NetworkId.solana,
};

export const withJupiterSwapService: ServiceRaw = {
  id: `${platform.id}-leverage-with-jupiter-swap`,
  name: "Leverage",
  platformId: platform.id,
  contractsRaw: [contract],
};

export const v2WithJupiterSwapService: ServiceRaw = {
  id: `${platform.id}-leverage-v2-with-jupiter-swap`,
  name: "Leverage",
  platformId: platform.id,
  contractsRaw: [contractV2],
};

export const leverageService: ServiceRaw = {
  id: `${platform.id}-leverage`,
  name: "Leverage",
  platformId: platform.id,
  contractsRaw: [],
};

export const services: ServiceRaw[] = [
  withJupiterSwapService,
  v2WithJupiterSwapService,
  leverageService,
];
