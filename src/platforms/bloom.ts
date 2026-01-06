import { PlatformRaw, ServiceRaw, NetworkId } from "../types";
export const platform: PlatformRaw = {
  id: "bloom",
  name: "Bloom",
  description:
    "Bloom is a Telegram-based trading bot offering token swaps, limit orders, and copy trading features.",
  links: {
    website: "https://www.bloombot.app/",
    discord: "https://discord.gg/bloomtrading",
    twitter: "https://x.com/BloomTrading",
    documentation: "https://docs.bloombot.app/",
  },
  tags: ["tool"],
};

const contract = {
  name: "Router",
  address: "b1oomGGqPKGD6errbyfbVMBuzSC8WtAAYo8MwNafWW1",
  networkId: NetworkId.solana,
};

export const service: ServiceRaw = {
  id: `${platform.id}-bot`,
  name: "Bot",
  platformId: platform.id,
  contractsRaw: [contract],
};

export const services: ServiceRaw[] = [service];
