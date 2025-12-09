import { PlatformRaw, ServiceRaw, NetworkId } from "../types";
export const platform: PlatformRaw = {
  id: "mintech",
  name: "Mintech",
  description:
    "Mintech is a Telegram trading bot for Solana offering automated token sniping and trading features.",
  links: {
    website: "https://www.mintechbots.com/",
    discord: "https://discord.gg/mintech",
    twitter: "https://x.com/mintechbots",
    documentation:
      "https://mintechbots.gitbook.io/mintech-guide/getting-started/welcome",
  },
  tags: ["tool"],
};

const contract = {
  name: "Router",
  address: "minTcHYRLVPubRK8nt6sqe2ZpWrGDLQoNLipDJCGocY",
  networkId: NetworkId.solana,
};

export const service: ServiceRaw = {
  id: `${platform.id}-bot`,
  name: "Bot",
  platformId: platform.id,
  contractsRaw: [contract],
};

export const services: ServiceRaw[] = [service];
