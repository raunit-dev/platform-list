import { PlatformRaw, ServiceRaw, NetworkId } from "../types";
export const platform: PlatformRaw = {
  id: "layer3",
  name: "Layer3",
  description:
    "Layer3 is a Web3 quest and rewards platform enabling projects to distribute tokens and engage users across multiple chains including Solana.",
  links: {
    website: "https://app.layer3.xyz/",
    discord: "https://discord.gg/layer3",
    twitter: "https://x.com/layer3",
    github: "https://github.com/layer3xyz",
    documentation: "https://docs.layer3.xyz/",
  },
  tokens: ["5k84VjAKoGPXa7ias1BNgKUrX7e61eMPWhZDqsiD4Bpe"],
  tags: ["tool", "dapp"],
};

const contract = {
  name: "Staking",
  address: "HE6bCtjsrra8DRbJnexKoVPSr5dYs57s3cuGHfotiQbq",
  networkId: NetworkId.solana,
};

export const stakingService: ServiceRaw = {
  id: `${platform.id}-staking`,
  name: "Staking",
  platformId: platform.id,
  contractsRaw: [contract],
};

export const services: ServiceRaw[] = [stakingService];
