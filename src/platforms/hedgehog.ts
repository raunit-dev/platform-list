import { PlatformRaw, ServiceRaw, NetworkId } from "../types";
export const platform: PlatformRaw = {
  id: "hedgehog",
  name: "Hedgehog Markets",
  description:
    "Hedgehog Markets is a prediction markets platform for betting on real-world events and outcomes.",
  defiLlamaId: "hedgehog-markets",
  links: {
    website: "https://hedgehog.markets",
    discord: "http://discord.gg/2KusaG9wH7",
    twitter: "https://twitter.com/HedgehogMarket",
    github: "https://github.com/Hedgehog-Markets",
    medium: "https://hedgehogmarkets.substack.com/",
  },
  tags: ["dapp"],
};

const ammContract = {
  name: "AMM",
  address: "Hr4whNgXr3yZsJvx3TVSwfsFgXuSEPB1xKmvgrtLhsrM",
  networkId: NetworkId.solana,
};

const swapContract = {
  name: "Swap",
  address: "2ZznCMfx2XP43zaPw9R9wKnjXWiEeEexyhdBPv3UqDtD",
  networkId: NetworkId.solana,
};

const tokensContract = {
  name: "Tokens",
  address: "D8vMVKonxkbBtAXAxBwPPWyTfon8337ARJmHvwtsF98G",
  networkId: NetworkId.solana,
};

export const governanceV1Service: ServiceRaw = {
  id: `${platform.id}-markets`,
  name: "Markets",
  platformId: platform.id,
  contractsRaw: [ammContract, swapContract, tokensContract],
};

export const services: ServiceRaw[] = [governanceV1Service];
