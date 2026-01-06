import { PlatformRaw, ServiceRaw, NetworkId } from "../types";
export const platform: PlatformRaw = {
  id: "mayan",
  name: "Mayan",
  description:
    "Composable, auction-driven transfers that optimize speed and cost for a seamless multichain experience.",
  links: {
    website: "https://mayan.finance/",
    twitter: "https://x.com/mayanfinance",
    discord: "https://discord.gg/mayanfinance",
    documentation: "https://docs.mayan.finance/",
  },
  tags: ["bridge", "tool", "dapp"],
};

export const swiftContract = {
  name: "Swift",
  address: "BLZRi6frs4X4DNLw56V4EXai1b6QVESN1BhHBTYM9VcY",
  networkId: NetworkId.solana,
};

export const claimService: ServiceRaw = {
  id: `${platform.id}-claim`,
  name: "Claim",
  platformId: platform.id,
  contractsRaw: [swiftContract],
  description:
    "Redemption service for claiming bridged tokens after cross-chain transfer completion.",
};

export const bridgeService: ServiceRaw = {
  id: `${platform.id}-bridge`,
  name: "Bridge",
  platformId: platform.id,
  contractsRaw: [],
  description:
    "Cross-chain token bridge using auction-driven transfers for optimal speed and cost across multiple networks.",
};

export const services: ServiceRaw[] = [claimService, bridgeService];
