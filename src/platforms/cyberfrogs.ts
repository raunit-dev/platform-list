import { PlatformRaw, ServiceRaw, NetworkId } from "../types";
export const platform: PlatformRaw = {
  id: "cyberfrogs",
  name: "CyberFrogs",
  links: {
    website: "https://legacy.cyberfrogs.io/faction-contracts-v3",
    twitter: "https://twitter.com/CyberFrogsNFT",
    discord: "https://discord.com/invite/cyberfrogs",
  },
  description:
    "CyberFrogs is an NFT collection featuring staking, trading tools, and the AutoThor automated trading system.",
  tags: ["nft-collection"],
};

const autoThorContract = {
  name: "AutoThor",
  address: "8F2VM13kdMBaHtcXPHmArtLueg7rfsa3gnrgGjAy4oCu",
  networkId: NetworkId.solana,
};

export const autoThorService: ServiceRaw = {
  id: `${platform.id}-autothor`,
  name: "AutoThor",
  platformId: platform.id,
  contractsRaw: [autoThorContract],
};

export const services: ServiceRaw[] = [autoThorService];
