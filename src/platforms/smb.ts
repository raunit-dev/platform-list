import { PlatformRaw, ServiceRaw, NetworkId } from "../types";
export const platform: PlatformRaw = {
  id: "smb",
  name: "Solana Monkey Business",
  description: "Solana Monkey Business NFT collection and marketplace",
  links: {
    twitter: "https://x.com/MonkeDAO",
    website: "https://monkedao.io/",
    discord: "https://discord.gg/monkedao",
  },
  tags: ["nft-collection"],
};

const marketplaceContract = {
  name: "Marketplace",
  address: "J7RagMKwSD5zJSbRQZU56ypHUtux8LRDkUpAPSKH4WPp",
  networkId: NetworkId.solana,
};

export const service: ServiceRaw = {
  id: `${platform.id}-marketplace`,
  name: "Marketplace",
  platformId: platform.id,
  contractsRaw: [marketplaceContract],
};

export const services: ServiceRaw[] = [service];
