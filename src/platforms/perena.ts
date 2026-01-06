import { PlatformRaw, ServiceRaw, NetworkId } from "../types";
export const platform: PlatformRaw = {
  id: "perena",
  name: "Perena",
  description:
    "Perena is a stablecoin infrastructure protocol featuring Numéraire, an AMM designed for efficient stablecoin swaps with minimal slippage.",
  defiLlamaId: "perena",
  links: {
    website: "https://perena.org/",
    discord: "https://discord.com/invite/vaNnNBqXMt",
    telegram: "https://t.me/perena_community",
    twitter: "https://x.com/perena",
    documentation:
      "https://perena.notion.site/Product-Documentation-15fa37a29ca48060afd9cabb21b44d5c",
  },
  tags: ["dapp", "stablecoin"],
};

const contract = {
  name: "Perena",
  address: "NUMERUNsFCP3kuNmWZuXtm1AaQCPj9uw6Guv2Ekoi5P",
  networkId: NetworkId.solana,
};

export const service: ServiceRaw = {
  id: "perena-numeraire",
  name: "Numéraire",
  platformId: platform.id,
  contractsRaw: [contract],
};

export const services: ServiceRaw[] = [service];
