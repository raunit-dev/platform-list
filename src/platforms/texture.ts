import { PlatformRaw, ServiceRaw, NetworkId } from "../types";
export const platform: PlatformRaw = {
  id: "texture",
  name: "Texture",
  description:
    "Texture is a peer-to-peer token lending protocol that enables users to borrow and lend tokens directly without intermediaries or liquidation risk.",
  links: {
    website: "https://texture.finance/",
    twitter: "https://x.com/texture_fi",
    discord: "https://discord.gg/6YvjpXzsqp",
    github: "https://github.com/texture-finance",
    documentation: "https://texture.gitbook.io/texture",
  },
  tags: ["dapp", "lending", "defi", "nft"],
  isDeprecated: true,
};

const lendingContractV1 = {
  name: "Lending",
  address: "MLENdNkmK61mGd4Go8BJX9PhYPN3azrAKRQsAC7u55v",
  networkId: NetworkId.solana,
};

const lendingContractV2 = {
  name: "Lending",
  address: "sUperbZBsdZa4s7pWPKQaQ2fRTesjKxupxagZ8FSgVi",
  networkId: NetworkId.solana,
};

const priceContract = {
  name: "Price",
  address: "priceEvKXX3KERsitDpmvujXfPFYesmEspw4kiC3ryF",
  networkId: NetworkId.solana,
};

export const lendingService: ServiceRaw = {
  id: `${platform.id}-lending`,
  name: "Lending",
  platformId: platform.id,
  contractsRaw: [lendingContractV1, lendingContractV2, priceContract],
};

export const services: ServiceRaw[] = [lendingService];
