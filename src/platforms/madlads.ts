import { PlatformRaw, ServiceRaw, NetworkId } from "../types";
export const platform: PlatformRaw = {
  id: "madlads",
  name: "MadLads",
  description:
    "Mad Lads is a 10,000-piece NFT collection created by Backpack featuring executable NFTs (xNFTs) with soul-bound inventories, pioneering NFT innovation.",
  links: {
    website: "https://www.madlads.com/",
    twitter: "https://x.com/MadLads",
    discord: "https://discord.gg/madlads",
  },
  tags: ["nft-collection"],
};

const solboundContract = {
  name: "SolBound",
  address: "7DkjPwuKxvz6Viiawtbmb4CqnMKP6eGb1WqYas1airUS",
  networkId: NetworkId.solana,
};

export const wClaimService: ServiceRaw = {
  id: `${platform.id}-launch`,
  name: "W Claim",
  platformId: platform.id,
  contractsRaw: [solboundContract],
};

export const services: ServiceRaw[] = [wClaimService];
