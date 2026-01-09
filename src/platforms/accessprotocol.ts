import { PlatformRaw, ServiceRaw, NetworkId } from "../types";
export const platform: PlatformRaw = {
  id: "accessprotocol",
  name: "Access Protocol",
  description:
    "Access is a content and service monetization protocol offering incentivized subscriptions by staking the native ACS token.",
  defiLlamaId: "access-protocol",
  tags: ["dapp"],
  links: {
    website: "https://hub.accessprotocol.co",
    discord: "https://discord.com/invite/access-protocol-1001837380044587118",
    twitter: "https://x.com/AccessProtocol",
    github: "https://github.com/Access-Labs-Inc",
    documentation: "https://docs.accessprotocol.co/guide",
  },
  tokens: ["5MAYDfq5yxtudAhtfyuMBuHZjgAbaS9tbEyEQYAhDS5y"],
};

const contract = {
  name: "Staking",
  address: "6HW8dXjtiTGkD4jzXs7igdFmZExPpmwUrRN5195xGup",
  networkId: NetworkId.solana,
};

export const service: ServiceRaw = {
  id: `${platform.id}-staking`,
  name: "Staking",
  platformId: platform.id,
  contractsRaw: [contract],
  link: "https://hub.accessprotocol.co/",
  description:
    "Stake-for-access mechanism allowing users to stake ACS tokens to unlock premium content and services from creators and publishers.",
};

export const services: ServiceRaw[] = [service];
