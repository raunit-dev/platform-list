import { PlatformRaw, ServiceRaw, NetworkId } from "../types";
export const platform: PlatformRaw = {
  id: "oreblue",
  name: "ORE Blue",
  description:
    "ORE Blue is a proof-of-work mining platform, a variant of the ORE mining ecosystem.",
  tags: ["tool"],
  links: {
    website: "https://ore.blue/",
    discord: "https://discord.com/invite/69uxav4fe4",
    twitter: "https://x.com/OREdotblue",
    documentation: "https://ore.blue/about",
  },
  tokens: ["orebyr4mDiPDVgnfqvF5xiu5gKnh94Szuz8dqgNqdJn"],
};

const v3Contract = {
  name: "V3",
  address: "boreXQWsKpsJz5RR9BMtN8Vk4ndAk23sutj8spWYhwk",
  networkId: NetworkId.solana,
};

export const v3Service: ServiceRaw = {
  id: `${platform.id}-v3`,
  name: "Mining",
  platformId: platform.id,
  contractsRaw: [v3Contract],
};

export const services: ServiceRaw[] = [v3Service];
