import { PlatformRaw, ServiceRaw, NetworkId } from "../types";
export const platform: PlatformRaw = {
  id: "degencoinflip",
  name: "Degen Coin Flip",
  description:
    "Degen Coin Flip is a provably fair gambling game where users can bet SOL on coin flip outcomes.",
  links: {
    website: "https://degencoinflip.com/",
    twitter: "https://x.com/degencoinflip",
    discord: "https://discord.gg/degencoinflip",
  },
  tags: ["gaming", "dapp"],
};

const contract = {
  name: "Coinflip",
  address: "BmjJ85zsP2xHPesBKpmHYKt136gzeTtNbeVDcdfybHHT",
  networkId: NetworkId.solana,
};

export const service: ServiceRaw = {
  id: `${platform.id}-coinflip`,
  name: "Coinflip",
  platformId: platform.id,
  contractsRaw: [contract],
};

export const services: ServiceRaw[] = [service];
