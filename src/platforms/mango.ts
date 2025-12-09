import { PlatformRaw, ServiceRaw, NetworkId } from "../types";
export const platform: PlatformRaw = {
  id: "mango",
  name: "Mango",
  description:
    "Mango Markets is a decentralized trading platform that offered perpetuals, spot trading, and lending with cross-collateralization.",
  defiLlamaId: "parent#mango-markets",
  isDeprecated: true,
  links: {
    website: "https://mango.markets/",
    discord: "https://discord.com/invite/pcSkP3yJMU",
    twitter: "https://twitter.com/mangomarkets",
    github: "https://github.com/blockworks-foundation",
  },
  tokens: ["MangoCzJ36AjZyKwVj3VnYU4GTonjfVEnJmvvWaxLac"],
  tags: ["dapp"],
};

const marketsContract = {
  name: "Markets",
  address: "4MangoMjqJ2firMokCjjGgoK8d4MXcrgL7XJaL3w6fVg",
  networkId: NetworkId.solana,
};

const redeemContract = {
  name: "Redeem",
  address: "mv3ekLzLbnVPNxjSKvqBpU3ZeZXPQdEC3bp5MDEBG68",
  networkId: NetworkId.solana,
};

const boostContract = {
  name: "Boost",
  address: "zF2vSz6V9g1YHGmfrzsY497NJzbRr84QUrPry4bLQ25",
  networkId: NetworkId.solana,
};

export const airdropService: ServiceRaw = {
  id: `${platform.id}-markets`,
  name: "Markets V4",
  platformId: platform.id,
  contractsRaw: [marketsContract],
};

export const redeemService: ServiceRaw = {
  id: `${platform.id}-redeem`,
  name: "Markets & Redeem V3",
  platformId: platform.id,
  contractsRaw: [redeemContract],
};

export const boostService: ServiceRaw = {
  id: `${platform.id}-boost`,
  name: "Boost",
  platformId: platform.id,
  contractsRaw: [boostContract],
};

export const services: ServiceRaw[] = [
  airdropService,
  redeemService,
  boostService,
];
